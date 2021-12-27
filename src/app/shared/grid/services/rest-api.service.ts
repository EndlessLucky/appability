import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../core/models/api/response.class';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormStateService } from '../../../core/services/form-state.service';
import { NotificationService } from '../../../core/services/notification.service';
import { catchError, delay, finalize, map, tap } from 'rxjs/operators';
import { SortDirection } from '@angular/material/sort';
import { AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

/**
 * Delay to have ability to test progress spinner
 */
const DELAY = 0;

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  delay = DELAY;

  defaultOrderByField = 'id';
  defaultOrderByDirection: SortDirection = 'desc';
  defaultPageSize = 25;

  apiUrl = environment.apiUrl;

  lastRes: any;

  /**
   * @todo set api name in child classes - this is usually dashed
   */
  apiName = null;

  /**
   * @todo set model name in child classes - this is usually underscored, not dashed
   */
  modelName = null;

  /**
   * @todo set model in child classes - camel cased without quotes
   */
  model = null;

  /**
   * @author seagull
   * @summary check if error.intercept is called or not, true when.
   */
  isHttpErrorCalled = false;

  protected searchableFields = [];

  constructor(protected httpService: HttpClient,
              protected notificationService: NotificationService,
              protected formStateService: FormStateService) {
  }

  clearFormState() {
    this.formStateService.deleteValues('CreateComponent', '/data/create');
  }

  handleError = (error) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.notificationService.warn(errorMessage);
    return throwError(errorMessage);
  }

  isUnique(field, value) {
    return this.findDuplicates(field, value).pipe(
      map(val => val.total_items >= 1)
    );
  }

  checkExist(field): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.isUnique(field, control.value).pipe(
        map(res => {
          return res ? { isExist: true } : null;
        })
      );
    };
  }

  /**
   * To be used in validation filters
   */
  findDuplicates(field, value, pageSize = 1) {
    const pageNumber = 1;

    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('page_size', pageSize.toString())
    ;

    params = params
        .set('filter[0][field]', field)
        .set('filter[0][where]', 'and')
        .set('filter[0][type]', 'eq')
        .set('filter[0][value]', value);

    return this.httpService.get(this.apiUrl + this.apiName, {
      params
    }).pipe(
      delay(this.delay),
      map((res: Response) => res)
    );
  }

  /**
   * Query with params
   *
   * @todo trim?
   * @todo: Use config object instead of that many parameters
   *
   */
  find(
    filter = '',
    orderByDirection = this.defaultOrderByDirection,
    pageNumber = 0,
    pageSize = this.defaultPageSize,
    orderByField = this.defaultOrderByField,
    searchableFields = [],
    where: any
  ): Observable<Response> {

    pageNumber++; // apigitily starts from 1, mat-paginator from 0

    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('page_size', pageSize.toString())
      .set('order-by[0][type]', 'field')
      .set('order-by[0][field]', orderByField)
      .set('order-by[0][direction]', orderByDirection.toString())
    ;

    if (where) {
      params = params
        .set('filter[0][field]', where.field)
        .set('filter[0][where]', where.where)
        .set('filter[0][type]', where.type)
        .set('filter[0][value]', where.value);
    }

    // filter all the columns returned by the API
    if (filter) {
      filter = filter.toString();
      if (filter.length) {
        if (searchableFields && searchableFields.length) {
          let i = 1;
          searchableFields.forEach(field => {
            params = params
              .set('filter[' + i + '][field]', field)
              .set('filter[' + i + '][where]', 'or')
              .set('filter[' + i + '][type]', 'like')
              .set('filter[' + i + '][value]', '%' + filter + '%')
            ;
            i++;
          });
        }
      }
    }

    return this.httpService.get(this.apiUrl + this.apiName, {
      params
    }).pipe(
      delay(this.delay),
      map((res: Response) => res)
    );
  }

  /**
   * Query with params
   *
   * @todo trim?
   * @todo: Use config object instead of that many parameters
   *
   */
  findSerialized(
    filter = '',
    orderByDirection = this.defaultOrderByDirection,
    pageNumber = 0,
    pageSize = this.defaultPageSize,
    orderByField = this.defaultOrderByField,
    searchableFields = [],
    condition = null): Observable<any[]> {
    return this.find(filter, orderByDirection, pageNumber, pageSize, orderByField, searchableFields, condition).pipe(
      map((res: Response) => new Response().deserialize(res)),
      map((res: Response) => res.toCollection(this.getModelString(), this.model))
    );
  }

  /**
   * If the model has any objects, we're using just their IDs
   */
  flatten(model) {
    for (const key of Object.keys(model)) {
      if (typeof model[key] === 'object' && model[key] != undefined) {
        console.log('hello',model[key]);
        if (model[key].id) {
          model[key] = model[key].id;
        }
      }
      else if (model[key] == '' || model[key] == false) {
        model[key] = '0';
      }
      else if (model[key] == true) {
        model[key] = '1';
      }
    }

    return model;
  }

  /**
   *
   * @param model
   * @author seagull
   * @summary save model to DB using API
   */
  save(model) {
    model = this.preInsert(model);
    model = this.flatten(model);
    console.log('model',model);
    return this.httpService.post(this.apiUrl + this.apiName,
      model, {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json'
        })
      })
      .pipe(
        catchError(err => this.handleError(err)),
        finalize(() => {
            this.clearFormState(); // forget about any previously entered values
            // this.notificationService.success('Data added');
          }
        )
      );
  }

  /**
   *
   * @param model
   * @author seagull
   * @summary update model by id
   */
  update(model) {
    model = this.preUpdate(model);
    model = this.flatten(model);
    return this.httpService.put(this.apiUrl + this.apiName + '/' + model.id,
      model, {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError),
        tap((obj) => this.notificationService.success('Data updated'))
      );
  }

  /**
   * @todo Move to a separate service extending RestApiService
   *
   * @param model
   * @author seagull
   * @summary post bugs to the mail
   */
  // bugs(model) {
  //   model = this.preInsert(model);
  //   model = this.flatten(model);
  //   console.log('url', this.apiUrl + this.apiName);
  //   return this.httpService.post(this.apiUrl + this.apiName, model, {
  //     headers : new HttpHeaders({})
  //   })
  //     .pipe(
  //       catchError(err => this.handleError(err)),
  //       finalize(() => {
  //           this.clearFormState();
  //         }
  //       )
  //     );
  // }

  /**
   *
   * @param id
   * @author seagull
   * @summary delete model by id
   */
  delete(id: number) {
    id = this.preDelete(id);
    return this.httpService.delete(this.apiUrl + this.apiName + '/' + id.toString(), {}).pipe(
      // tap(response => console.log(response)),
      finalize(() => this.notificationService.info(`Data ${id} deleted.`)),
      catchError(this.handleError)
    );
  }

  /**
   * Check if (string) value is numeric
   *
   * @param string value
   */
  isNumeric(value: string) {
    return !isNaN(parseInt(value.toString(), 10));
  }

  preUpdate(model): any {
    return model;
  }

  preInsert(model): any {
    return model;
  }

  preDelete(id): number {
    return id;
  }

  /**
   *
   * @param id
   * @author seagull
   * @summary get one model by id
   */
  findOne(id) {
    return this.httpService.get(this.apiUrl + this.apiName + '/' + id).pipe(
      delay(this.delay)
      , map((res: Response) => {
        this.lastRes = res;
        // return res;
        return new this.model().deserialize(res);
      })
    );
  }

  getModelString() {
    return this.modelName?.replace(/-/g, '_');
  }

  sendPdf(id) {
    // return;
  }

  sendStatusReport(id) {
    // return;
  }

  setSigned(id) {
    // return;
  }

  upload(file, table): Observable<any> {
    return of();
  }

  notifySuccess(msg) {
    // return;
  }

  notifyError(msg) {
    // return;
  }
}
