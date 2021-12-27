import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { ClientModel } from '../models/client.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientService extends RestApiService {
    model = ClientModel;
    modelName = 'client';
    apiName = 'client';
    searchableFields = ['id', 'client', 'projectName'];

    sendPdf(clientId) {
        return this.httpService.get<any>(this.apiUrl + 'pdf/client?id=' + clientId).subscribe({
            next: data => this.notificationService.success(data.message),
            error: this.handleError
        });
    }

    sendStatusReport(clientId) {
        return this.httpService.get<any>(this.apiUrl + 'email/client-status-report?id=' + clientId).subscribe({
            next: data => this.notificationService.success(data.message),
            error: this.handleError
        });
    }

    setSigned(clientId) {
    // @todo
        this.notificationService.success('Set as signed and Saved.');
    }
}
