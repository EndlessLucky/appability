import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { CompetencyModel } from '../models/competency.model';

@Injectable({
  providedIn: 'root'
})
export class CompetencyService extends RestApiService {
    model = CompetencyModel;
    modelName = 'competency';
    apiName = 'competency';
}
