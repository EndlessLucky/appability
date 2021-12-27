import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { DocumentStandardDataSource } from '../../data-sources/document-standard.data-source';

@Component({
    selector: 'app-document-standard-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Document Standard list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'documentid',                // for column: "DocumentID"
        'standardid',                // for column: "StandardID"
        'howDoTheyRelate',                // for column: "How do they Relate?"
        'defaultResponse',                // for column: "Default Response"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new DocumentStandardDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
