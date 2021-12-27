import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { PersonStaffStatusDataSource } from '../../data-sources/person-staff-status.data-source';

@Component({
    selector: 'app-person-staff-status-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Person Staff Status list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'person',                // for column: "Person"
        'staffstatus',                // for column: "StaffStatus"
        'start',                // for column: "Start"
        'end',                // for column: "End"
        'notes',                // for column: "Notes"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new PersonStaffStatusDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
