import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ClientSrStageDataSource } from '../../data-sources/client-sr-stage.data-source';

@Component({
    selector: 'app-client-sr-stage-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Client SR Stage list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'stage',                // for column: "Stage"
        'client',                // for column: "Client"
        'start',                // for column: "Start"
        'reasonLost',                // for column: "Reason Lost"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ClientSrStageDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
