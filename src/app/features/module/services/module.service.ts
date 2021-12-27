import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ModuleModel } from '../models/module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends RestApiService {
    model = ModuleModel;
    modelName = 'module';
    apiName = 'module';
}
