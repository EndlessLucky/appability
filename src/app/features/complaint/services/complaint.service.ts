import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ComplaintModel } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService extends RestApiService {
    model = ComplaintModel;
    modelName = 'complaint';
    apiName = 'complaint';
}
