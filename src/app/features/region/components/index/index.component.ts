import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { RegionDataSource } from '../../data-sources/region.data-source';

@Component({
    selector: 'app-region-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Region list';

    wheres = [
        {
            index: 0,
            label: 'All'
        },
        {
            index: 1,
            label: 'Only mine',
            condition: {
                where: 'or',
                field: 'createdBy',
                type: 'eq',
                value: '5'
            }
        },
    ];

    activeWhereIndex = 0;


    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'name',                // for column: "name"
        'comments',                // for column: "comments"
        'created',                // for column: "created"
        'updated',                // for column: "updated"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new RegionDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
