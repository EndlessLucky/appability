import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientStageModel } from '../models/client-stage.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientStageService extends RestApiService {
    model = ClientStageModel;
    modelName = 'client_stage';
    apiName = 'client-stage';
}
