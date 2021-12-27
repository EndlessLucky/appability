import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { IncidentHazardDataSource } from '../../data-sources/incident-hazard.data-source';

@Component({
    selector: 'app-incident-hazard-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Incident Hazard list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'hazard',                // for column: "Hazard"
        'incident',                // for column: "Incident"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new IncidentHazardDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
