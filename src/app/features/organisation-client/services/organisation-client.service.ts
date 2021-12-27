import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { OrganisationClientModel } from '../models/organisation-client.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisationClientService extends RestApiService {
    model = OrganisationClientModel;
    modelName = 'organisation_client';
    apiName = 'organisation-client';
}
