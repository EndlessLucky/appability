import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ContractorDetailDataSource } from '../../data-sources/contractor-detail.data-source';

@Component({
    selector: 'app-contractor-detail-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Contractor Detail list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'businessName',                // for column: "Business Name"
        'abn',                // for column: "ABN"
        'accountName',                // for column: "Account Name"
        'bsb',                // for column: "BSB"
        'accountNumber',                // for column: "Account Number"
        'businessAddress',                // for column: "Business Address"
        'currentContractUrl',                // for column: "Current Contract URL"
        'superChoiceFormUrl',                // for column: "Super Choice Form URL"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ContractorDetailDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
