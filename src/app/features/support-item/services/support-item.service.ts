import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { SupportItemModel } from '../models/support-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupportItemService extends RestApiService {
    model = SupportItemModel;
    modelName = 'support_item';
    apiName = 'support-item';
}
