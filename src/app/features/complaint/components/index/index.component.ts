import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ComplaintDataSource } from '../../data-sources/complaint.data-source';

@Component({
    selector: 'app-complaint-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Complaint list';

    displayedColumns = [
        'select',

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



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ComplaintDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
