import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { AbilityCalendarDataSource } from '../../data-sources/ability-calendar.data-source';

@Component({
    selector: 'app-ability-calendar-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Ability Calendar list';

    displayedColumns = [
        'select',

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



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new AbilityCalendarDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
