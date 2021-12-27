import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../core/models/api/response.class';
import { NotificationService } from '../../../core/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class ToolsTablesService {
    apiUrl = environment.apiUrl;

    apiName = 'tools/tables';

    /**
     * @todo set model in child classes - camel cased without quotes
     */
    model = null;

    protected searchableFields = [];

    constructor(protected httpService: HttpClient,
                protected notificationService: NotificationService) {
    }

    find() {
        return this.httpService.get(this.apiUrl + this.apiName).pipe(
            map((res: Response) => 
                // res['entities'];
                console.log(res['entities'])
            )
        );
    }

    findOne(api, id) {
        return this.httpService.get(this.apiUrl + api + '/' + id).pipe(
            map((res: Response) => 
                // res
                console.log(res)
            )
        );
    }
}
