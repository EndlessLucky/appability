import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientRelationshipModel } from '../models/client-relationship.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientRelationshipService extends RestApiService {
    model = ClientRelationshipModel;
    modelName = 'client_relationship';
    apiName = 'client-relationship';
}
