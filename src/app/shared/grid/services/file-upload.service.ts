import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../core/services/notification.service';
import { CSVModel } from '../../../features/csv/models/csv.model';
import { RestApiService } from './rest-api.service';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    constructor(protected httpService: HttpClient,
                protected notificationService: NotificationService) {
    }

    apiUrl = environment.apiUrl;
    apiName = 'csv/create';
    uploadEndpoint = environment.uploadEndpoint;

    handleError = (error) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.notificationService.warn(errorMessage);
        return throwError(errorMessage);
    }

    public upload(data) {
        const formData = new FormData();
        formData.append('file', data.data);
        const uploadURL = this.apiUrl + this.uploadEndpoint;
        return this.httpService.post<any>(uploadURL, formData, {
            reportProgress: true,
            observe: 'events',
            // 'Access-Control-Allow-Origin': '*'
        }).pipe(
            catchError(this.handleError),
            finalize(() => {
                // this.clearFormState(); // forget about any previously entered values
                // this.notificationService.success('File uploaded: ' + data.name);
            }
            )
        );
    }

    notifySuccess(msg) {
        this.notificationService.success(msg);
    }

    notifyError(msg) {
        this.notificationService.error(msg);
    }

    todo_save(model) {
    // console.log(model);
    // model = this.preInsert(model);
    // model = this.flatten(model);
        return this.httpService.post(this.apiUrl + this.apiName,
            model, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(
                catchError(this.handleError),
                finalize(() => {
                    // this.clearFormState(); // forget about any previously entered values
                    this.notificationService.success('Data added');
                }
                )
            );
    }

}
