import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientFaiModel } from '../models/client-fai.model';

@Injectable({
  providedIn: 'root'
})
export class ClientFaiService extends RestApiService {
    model = ClientFaiModel;
    modelName = 'client_fai';
    apiName = 'client-fai';
}
