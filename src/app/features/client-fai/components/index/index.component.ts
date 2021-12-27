import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ClientFaiDataSource } from '../../data-sources/client-fai.data-source';

@Component({
    selector: 'app-client-fai-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Client FAI list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastmodifiedBY"
        'fai',                // for column: "FAI"
        'clientSr',                // for column: "Client SR"
        'current',                // for column: "Current"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ClientFaiDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
