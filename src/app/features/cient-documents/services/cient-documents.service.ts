import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { CientDocumentsModel } from '../models/cient-documents.model';

@Injectable({
  providedIn: 'root'
})
export class CientDocumentsService extends RestApiService {
    model = CientDocumentsModel;
    modelName = 'cient_documents';
    apiName = 'cient-documents';
}
