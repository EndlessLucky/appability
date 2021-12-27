import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientSupervisionSessionModel } from '../models/client-supervision-session.model';

@Injectable({
  providedIn: 'root'
})
export class ClientSupervisionSessionService extends RestApiService {
    model = ClientSupervisionSessionModel;
    modelName = 'client_supervision_session';
    apiName = 'client-supervision-session';
}
