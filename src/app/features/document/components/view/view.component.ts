import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-document-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'document';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'name',                // for column: "Name"
        'dateOfNextReview',                // for column: "Date of Next Review"
        'type',                // for column: "Type"
        'linkedToAllRelatedQualityIndicators',                // for column: "Linked to all related Quality Indicators"
        'active',                // for column: "Active"
    ];
}

