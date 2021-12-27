import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { PaymentRequestModel } from '../models/payment-request.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentRequestService extends RestApiService {
    model = PaymentRequestModel;
    modelName = 'payment_request';
    apiName = 'payment-request';
}
