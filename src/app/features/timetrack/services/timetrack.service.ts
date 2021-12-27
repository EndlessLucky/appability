import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { TimetrackModel } from '../models/timetrack.model';

@Injectable({
  providedIn: 'root'
})
export class TimetrackService extends RestApiService {
    model = TimetrackModel;
    modelName = 'timetrack';
    apiName = 'timetrack';
}
