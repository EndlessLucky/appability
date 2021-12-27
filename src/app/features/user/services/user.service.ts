import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestApiService {
    modelName = 'user_info';
    apiName = 'user-info';
    model = UserModel;

    createUrl = 'user/create';

  /**
   *
   * @param model
   * @author seagull
   * @summary save model to DB using API
   */
  createUser(model) {
    return this.httpService.post(this.apiUrl + this.createUrl,
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
}
