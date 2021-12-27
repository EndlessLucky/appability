import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-ability-calendar-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'ability-calendar';

    displayedFields = [
        'id',
        'rowId',                // for column: "Row ID"
        'title',                // for column: "Title"
        'start',                // for column: "Start"
        'end',                // for column: "End"
        'location',                // for column: "Location"
        'creator',                // for column: "Creator"
        'attendees',                // for column: "Attendees"
        'status',                // for column: "Status"
        'webLink',                // for column: "Web Link"
        'hangoutLink',                // for column: "Hangout Link"
        'description',                // for column: "Description"
    ];
}

