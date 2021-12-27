import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-action-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'action';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'doToday',                // for column: "Do Today"
        'complete',                // for column: "Complete"
        'action',                // for column: "Action"
        'priority',                // for column: "Priority"
        'context',                // for column: "Context"
        'start',                // for column: "Start"
        'due',                // for column: "Due"
        'duration',                // for column: "Duration"
        'note',                // for column: "Note"
        'client',                // for column: "Client"
        'tag',                // for column: "Tag"
        'staff',                // for column: "Staff"
        'safehomechecklist',                // for column: "SafeHomeChecklist"
        'learninggoal',                // for column: "LearningGoal"
    ];
}

