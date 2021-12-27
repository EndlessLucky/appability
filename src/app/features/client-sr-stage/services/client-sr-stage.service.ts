import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientSrStageModel } from '../models/client-sr-stage.model';

@Injectable({
  providedIn: 'root'
})
export class ClientSrStageService extends RestApiService {
    model = ClientSrStageModel;
    modelName = 'client_sr_stage';
    apiName = 'client-sr-stage';
}
