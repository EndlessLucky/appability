import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-client-supervision-session-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'client-supervision-session';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'clientSr',                // for column: "Client SR"
        'supervisionSession',                // for column: "Supervision Session"
        'durationdiscussed',                // for column: "DurationDiscussed"
        'paymentRequest',                // for column: "Payment Request"
        'supervisorInvoice',                // for column: "Supervisor Invoice"

    ];
}

