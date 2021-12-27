import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { OrganisationModel } from '../models/organisation.model';

import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class OrganisationService extends RestApiService {
    model = OrganisationModel;
    modelName = 'organisation';
    apiName = 'organisation';
}
