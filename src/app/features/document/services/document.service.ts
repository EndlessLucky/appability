import { Injectable } from '@angular/core';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { DocumentModel } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends RestApiService {
    model = DocumentModel;
    modelName = 'document';
    apiName = 'document';
}
