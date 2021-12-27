import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ClientPersonDataSource } from '../../data-sources/client-person.data-source';

@Component({
    selector: 'app-client-person-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Client Person list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'client',                // for column: "Client"
        'person',                // for column: "Person"
        'relationshipOfPersonToClient',                // for column: "Relationship of Person to Client"
        'active',                // for column: "Active"
        'feedback',                // for column: "Feedback"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ClientPersonDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }

    getFormatColumns() {
        return ['client','person'];
    }
}
