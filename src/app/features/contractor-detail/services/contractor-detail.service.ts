import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ContractorDetailModel } from '../models/contractor-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ContractorDetailService extends RestApiService {
    model = ContractorDetailModel;
    modelName = 'contractor_detail';
    apiName = 'contractor-detail';
}
