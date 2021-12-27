import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ServiceBookingDetailsModel } from '../models/service-booking-details.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServiceBookingDetailsService extends RestApiService {
    model = ServiceBookingDetailsModel;
    modelName = 'service_booking_details';
    apiName = 'service-booking-details';
}
