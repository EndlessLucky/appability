import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ActionModel } from '../models/action.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService extends RestApiService {
    model = ActionModel;
    modelName = 'action';
    apiName = 'action';
}
