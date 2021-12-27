import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { FeatureRequestModel } from '../models/feature-request.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestService extends RestApiService {
    model = FeatureRequestModel;
    modelName = 'feature_request';
    apiName = 'tools/issue';
}
