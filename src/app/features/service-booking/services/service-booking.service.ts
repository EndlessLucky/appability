import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ServiceBookingModel } from '../models/service-booking.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServiceBookingService extends RestApiService {
    model = ServiceBookingModel;
    modelName = 'service_booking';
    apiName = 'service-booking';
}
