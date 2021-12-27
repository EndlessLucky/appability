import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { CapabilityModel } from '../models/capability.model';

@Injectable({
  providedIn: 'root'
})
export class CapabilityService extends RestApiService {
    model = CapabilityModel;
    modelName = 'capability';
    apiName = 'capability';
}
