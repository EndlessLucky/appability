import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ClientSupervisionSessionDataSource } from '../../data-sources/client-supervision-session.data-source';

@Component({
    selector: 'app-client-supervision-session-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Client Supervision Session list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'clientSr',                // for column: "Client SR"
        'supervisionSession',                // for column: "Supervision Session"
        'durationdiscussed',                // for column: "DurationDiscussed"
        'paymentRequest',                // for column: "Payment Request"
        'supervisorInvoice',                // for column: "Supervisor Invoice"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ClientSupervisionSessionDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
