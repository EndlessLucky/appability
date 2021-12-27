import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { IncidentModel } from '../models/incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService extends RestApiService {
    model = IncidentModel;
    modelName = 'incident';
    apiName = 'incident';
}
