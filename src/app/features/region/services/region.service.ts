import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { RegionModel } from '../models/region.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegionService extends RestApiService {
    model = RegionModel;
    modelName = 'region';
    apiName = 'region';
}
