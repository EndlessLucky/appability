import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { OrganisationDataSource } from '../../data-sources/organisation.data-source';

@Component({
    selector: 'app-organisation-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Organisation list';

    displayedColumns = [
        'select',

        // 'idAuto',                // for column: "id_auto"
        'id',                // for column: "ID"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'name',                // for column: "Name"
        // 'image',                // for column: "Image"
        'abn',                // for column: "ABN"
        'reportingOfficer',                // for column: "Reporting Officer"
        'isThisAPlanManagerWeNeedToInvoice',                // for column: "Is this a Plan Manager we need to Invoice"
        'invoicingDetailsConfirmedAndEnteredIntoXero',                // for column: "Invoicing details confirmed and entered into Xero"
        'isThisAnOrganisationWithRpa',                // for column: "Is this an Organisation with RPA"
        'ndiaRegisrationNumber',                // for column: "NDIA Regisration Number"
        'nqscRegistrationNumber',                // for column: "NQSC Registration number"
        'employsourstaff',                // for column: "EmploysOurStaff"
        'contractstous',                // for column: "ContractsToUs"
        'principalcontractor',                // for column: "PrincipalContractor"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new OrganisationDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
