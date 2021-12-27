import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ModuleDataSource } from '../../data-sources/module.data-source';

@Component({
    selector: 'app-module-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Module list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'code',                // for column: "Code"
        'label',                // for column: "Label"
        'active',                // for column: "Active"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ModuleDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
