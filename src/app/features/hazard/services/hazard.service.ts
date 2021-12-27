import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { HazardModel } from '../models/hazard.model';

@Injectable({
  providedIn: 'root'
})
export class HazardService extends RestApiService {
    model = HazardModel;
    modelName = 'hazard';
    apiName = 'hazard';
}
