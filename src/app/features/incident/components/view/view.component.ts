import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-incident-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'incident';

    displayedFields = [
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

    ];
}

