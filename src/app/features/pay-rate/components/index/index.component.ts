import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { PayRateDataSource } from '../../data-sources/pay-rate.data-source';

@Component({
    selector: 'app-pay-rate-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Pay Rate list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'rateName',                // for column: "Rate Name"
        'projectRate',                // for column: "Project Rate"
        'clientRate0',                // for column: "Client Rate 0"
        'clientRate8',                // for column: "Client Rate 8"
        'clientRate16',                // for column: "Client Rate 16"
        'clientRate24',                // for column: "Client Rate 24"
        'helpLoading',                // for column: "Help loading"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new PayRateDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
