import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { OrganisationClientDataSource } from '../../data-sources/organisation-client.data-source';

@Component({
    selector: 'app-organisation-client-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Organisation Client list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'modifiedby',                // for column: "ModifiedBy"
        'client',                // for column: "Client"
        'organisation',                // for column: "Organisation"
        'typeOfService',                // for column: "Type of Service"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new OrganisationClientDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
