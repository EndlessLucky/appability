import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientPersonModel } from '../models/client-person.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientPersonService extends RestApiService {
    model = ClientPersonModel;
    modelName = 'client_person';
    apiName = 'client-person';
}
