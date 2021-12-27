import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { CapabilityDataSource } from '../../data-sources/capability.data-source';

@Component({
    selector: 'app-capability-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Capability list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastModified',                // for column: "last_modified"
        'lastModifiedBy',                // for column: "last_modified_by"
        'capability',                // for column: "Capability"
        'competency',                // for column: "Competency"
        'active',                // for column: "Active"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new CapabilityDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
