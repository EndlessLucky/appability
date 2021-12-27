import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { DocumentDataSource } from '../../data-sources/document.data-source';

@Component({
    selector: 'app-document-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Document list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'name',                // for column: "Name"
        'dateOfNextReview',                // for column: "Date of Next Review"
        'type',                // for column: "Type"
        'linkedToAllRelatedQualityIndicators',                // for column: "Linked to all related Quality Indicators"
        'active',                // for column: "Active"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new DocumentDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
