import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-capability-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'capability';

    displayedFields = [
        'id',                // for column: "id"
        'lastModified',                // for column: "last_modified"
        'lastModifiedBy',                // for column: "last_modified_by"
        'capability',                // for column: "Capability"
        'competency',                // for column: "Competency"
        'active',                // for column: "Active"

    ];
}

