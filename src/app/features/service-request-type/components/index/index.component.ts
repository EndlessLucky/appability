import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ServiceRequestTypeDataSource } from '../../data-sources/service-request-type.data-source';

@Component({
    selector: 'app-service-request-type-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Service Request Types';

    displayedColumns = [
        'select',
        'id',
        'label',
        'code',
        'description',
        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ServiceRequestTypeDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
