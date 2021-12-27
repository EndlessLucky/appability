import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ServiceRequestTypeModel } from '../models/service-request-type.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServiceRequestTypeService extends RestApiService {
    model = ServiceRequestTypeModel;
    modelName = 'service_request_type';
    apiName = 'service-request-type';
}
