import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { IncidentHazardModel } from '../models/incident-hazard.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentHazardService extends RestApiService {
    model = IncidentHazardModel;
    modelName = 'incident_hazard';
    apiName = 'incident-hazard';
}
