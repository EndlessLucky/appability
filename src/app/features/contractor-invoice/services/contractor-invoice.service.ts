import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ContractorInvoiceModel } from '../models/contractor-invoice.model';

@Injectable({
  providedIn: 'root'
})
export class ContractorInvoiceService extends RestApiService {
    model = ContractorInvoiceModel;
    modelName = 'contractor_invoice';
    apiName = 'contractor-invoice';
}
