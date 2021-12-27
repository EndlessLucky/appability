import { Component, OnInit } from '@angular/core';
import { DataDataSource } from '../../data-sources/data.data-source';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';

@Component({
    selector: 'app-data-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    displayedColumns = [
        'select',
        'id',
        'name',
        'surname',
        'actions'
    ];

    ngOnInit() {
        this.dataSource = new DataDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
