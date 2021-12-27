import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { SupportItemDataSource } from '../../data-sources/support-item.data-source';

@Component({
    selector: 'app-support-item-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Support Items';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'supportcategoryname',                // for column: "SupportCategoryName"
        'supportitemdescription',                // for column: "SupportItemDescription"
        'hourlyRate',                // for column: "Hourly Rate"
        'isclientbillable',                // for column: "IsClientBillable"
        'key',                // for column: "Key"
        'active',                // for column: "Active"
        'end',                // for column: "End"
        'registrationGroupName',                // for column: "Registration Group Name"
        'a2019HourlyRate',                // for column: "2019 Hourly Rate"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new SupportItemDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
