import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { DataModel } from '../models/data.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService extends RestApiService {
    model = DataModel;
    modelName = 'data';
    apiName = 'data';
}
