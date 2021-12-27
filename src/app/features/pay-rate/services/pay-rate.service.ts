import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { PayRateModel } from '../models/pay-rate.model';

@Injectable({
  providedIn: 'root'
})
export class PayRateService extends RestApiService {
    model = PayRateModel;
    modelName = 'pay_rate';
    apiName = 'pay-rate';
}
