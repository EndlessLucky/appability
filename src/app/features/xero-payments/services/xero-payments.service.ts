import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { XeroPaymentsModel } from '../models/xero-payments.model';

@Injectable({
  providedIn: 'root'
})
export class XeroPaymentsService extends RestApiService {
    model = XeroPaymentsModel;
    modelName = 'xero_payments';
    apiName = 'xero-payments';
}
