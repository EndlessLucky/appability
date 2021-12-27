import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ActionDataSource } from '../../data-sources/action.data-source';

@Component({
    selector: 'app-action-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Action list';

    displayedColumns = [
        'select',

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


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ActionDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
