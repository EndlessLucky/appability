import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { AdjectiveModel } from '../models/adjective.model';

@Injectable()
export class AdjectiveService extends RestApiService {
    model = AdjectiveModel;
    modelName = 'adjective';
    apiName = 'adjective';
}
