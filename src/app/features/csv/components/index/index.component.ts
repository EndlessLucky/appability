import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { CSVDataSource } from '../../data-sources/csv.data-source';

@Component({
    selector: 'app-csv-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'CSV list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'rank',                // for column: "Rank"
        'title',                // for column: "Title"
        'active',                // for column: "Active"
        'isprojectstage',                // for column: "IsProjectStage"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new CSVDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
