import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { CientDocumentsDataSource } from '../../data-sources/cient-documents.data-source';

@Component({
    selector: 'app-cient-documents-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Cient Documents list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'fileUrl',                // for column: "File URL"
        'client',                // for column: "Client"
        'fileName',                // for column: "File Name"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new CientDocumentsDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
