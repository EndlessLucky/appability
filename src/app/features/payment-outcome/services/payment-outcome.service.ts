import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { PaymentOutcomeModel } from '../models/payment-outcome.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentOutcomeService extends RestApiService {
    model = PaymentOutcomeModel;
    modelName = 'payment_outcome';
    apiName = 'payment-outcome';

  public upload(data, table) {
    const formData = new FormData();
    formData.append('file', data.data);
    formData.append('table', table);
    const uploadURL = this.apiUrl + 'payment-outcome/upload';
    return this.httpService.post<any>(uploadURL, formData, {
      reportProgress: true,
      observe: 'events',
      // 'Access-Control-Allow-Origin': '*'
    }).pipe(
      catchError(this.handleError),
      finalize(() => {
          this.clearFormState(); // forget about any previously entered values
          // this.notificationService.success('File uploaded: ' + data.name);
        }
      )
    );
  }

  notifySuccess(msg) {
    this.notificationService.success(msg);
  }

  notifyError(msg) {
    this.notificationService.error(msg);
  }

}
