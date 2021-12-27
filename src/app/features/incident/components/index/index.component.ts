import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { IncidentDataSource } from '../../data-sources/incident.data-source';

@Component({
    selector: 'app-incident-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Incident list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'personReporting',                // for column: "Person Reporting"
        'date',                // for column: "Date"
        'timeOfIncident',                // for column: "Time of incident"
        'incidentAddress',                // for column: "Incident Address"
        'whereExactly',                // for column: "Where exactly"
        'briefTitle',                // for column: "Brief Title"
        'detailedDescriptionOfWhatHappened',                // for column: "Detailed Description of what happened"
        'status',                // for column: "Status"
        'image',                // for column: "Image"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new IncidentDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
