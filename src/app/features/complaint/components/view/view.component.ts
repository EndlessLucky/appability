import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-complaint-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'complaint';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'personMakingComplaint',                // for column: "Person Making Complaint"
        'feedbackType',                // for column: "Feedback Type"
        'topic',                // for column: "Topic"
        'outcomeSought',                // for column: "Outcome Sought"
        'fromWhom',                // for column: "From Whom"
        'recieved',                // for column: "Recieved"
        'howRecieved',                // for column: "How recieved"
        'acknowledged',                // for column: "Acknowledged"
        'howAcknowledged',                // for column: "How acknowledged"
        'resolved',                // for column: "Resolved"
        'how',                // for column: "How"

    ];
}

