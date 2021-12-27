import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../core/models/api/response.class';
import { NotificationService } from '../../../core/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class ToolsCalculatedService {
    apiUrl = environment.apiUrl;

    apiName = 'tools/calculated';

    /**
     * @todo set model in child classes - camel cased without quotes
     */
    model = null;

    protected searchableFields = [];

    constructor(protected httpService: HttpClient,
                protected notificationService: NotificationService) {
    }

    save(values) {
        console.log(values);
        // model = this.preInsert(model);
        // model = this.flatten(model);
        return this.httpService.post(this.apiUrl + this.apiName,
            values, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(
                catchError(this.handleError),
                finalize(() => {
                    this.notificationService.success('Data added');
                }
                )
            );
    }

    handleError(error) {
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


}
