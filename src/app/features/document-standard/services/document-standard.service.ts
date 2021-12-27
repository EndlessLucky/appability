import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { DocumentStandardModel } from '../models/document-standard.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentStandardService extends RestApiService {
    model = DocumentStandardModel;
    modelName = 'document_standard';
    apiName = 'document-standard';
}
