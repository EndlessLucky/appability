import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { AbilityCalendarModel } from '../models/ability-calendar.model';

@Injectable({
  providedIn: 'root'
})
export class AbilityCalendarService extends RestApiService {
    model = AbilityCalendarModel;
    modelName = 'ability_calendar';
    apiName = 'ability-calendar';
}
