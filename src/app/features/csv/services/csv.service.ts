import { HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { CSVModel } from '../models/csv.model';

@Injectable({
  providedIn: 'root'
})
export class CSVService extends RestApiService {
    model = CSVModel;
    modelName = 'csv';
    apiName = 'csv/create';

    public upload(data, table) {
        const formData = new FormData();
        formData.append('file', data.data);
        formData.append('table', table);
        const uploadURL = this.apiUrl + 'file/upload';
        return this.httpService.post<any>(uploadURL, formData, {
            reportProgress: true,
            observe: 'events',
            // 'Access-Control-Allow-Origin': '*'
        }).pipe(
            catchError(this.handleError),
            finalize(() => {
                this.clearFormState(); // forget about any previously entered values
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

    save(model) {
        console.log(model);
        model = this.preInsert(model);
        model = this.flatten(model);
        return this.httpService.post(this.apiUrl + this.apiName,
            model, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .pipe(
                catchError(this.handleError),
                finalize(() => {
                    this.clearFormState(); // forget about any previously entered values
                    this.notificationService.success('Data added');
                }
                )
            );
    }
}
