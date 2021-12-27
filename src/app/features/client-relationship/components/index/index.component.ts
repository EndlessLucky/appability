import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ClientRelationshipDataSource } from '../../data-sources/client-relationship.data-source';

@Component({
    selector: 'app-client-relationship-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Client Relationship list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'relationship',                // for column: "Relationship"
        'active',                // for column: "ACtive"
        // 'lastmodified',                // for column: "LAstModified"
        // 'lastmodifiedby',                // for column: "LAstModifiedBy"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ClientRelationshipDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
