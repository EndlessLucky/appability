import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-service-booking-type-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'service-request-type';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'label',                // for column: "Label"
        'code',                // for column: "Code"
        'description',                // for column: "Description"
        'clientisorganisation',                // for column: "ClientIsOrganisation"
        'endedDate',                // for column: "ended_date"
    ];
}

