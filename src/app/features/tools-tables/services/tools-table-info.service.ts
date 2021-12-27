import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../core/models/api/response.class';
import { NotificationService } from '../../../core/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class ToolsTableInfoService {
    apiUrl = environment.apiUrl;

    apiName = 'tools/table-info';

    /**
     * @todo set model in child classes - camel cased without quotes
     */
    model = null;

    protected searchableFields = [];

    constructor(protected httpService: HttpClient,
                protected notificationService: NotificationService) {
    }

    findOne(name: string) {
        return this.httpService.get(this.apiUrl + this.apiName + '?table=' + name).pipe(
            map((res: Response) => 
                res
            )
        );
    }
}
