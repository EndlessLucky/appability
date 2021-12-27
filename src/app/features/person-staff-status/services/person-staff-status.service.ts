import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { PersonStaffStatusModel } from '../models/person-staff-status.model';

@Injectable({
  providedIn: 'root'
})
export class PersonStaffStatusService extends RestApiService {
    model = PersonStaffStatusModel;
    modelName = 'person_staff_status';
    apiName = 'person-staff-status';
}
