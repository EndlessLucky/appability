import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClientDataSource } from '../../data-sources/client.data-source';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';

@Component({
    selector: 'app-client-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements AfterViewInit, OnInit {
    title = 'Clients';

    wheres = [
        {
            index: 0,
            label: 'All',
            // disabled: true
        },
        {
            index: 1,
            label: 'Only mine',
            condition: {
                where: 'or',
                field: 'created',
                type: 'eq',
                value: this.authService.currentUserValue.id
            }
        },
    ];

    activeWhereIndex = 0;

    displayedColumns = [
        'select',

        'id',
        // 'lastModified',
        // 'modifiedBy',
        'serviceRequestType',
        'referralForm',
        'keyConsultant',
        // 'keyConsultant2',
        'client',
        'fundsManagement',
        'pipeline',
        // 'clientGoals',
        // 'comments',
        // 'organisation',
        // 'projectName',
        // 'serviceAgreementPrint',
        // 'planManagementOrganisation',
        // 'currentStatus',
        // 'clientisabletolegallyconsenttoservice',
        // 'statusReportPrint',
        // 'serviceAgreementSignedandSaved',
        // 'region',
        // 'repeatReferral',
        // 'referralDate',
        // 'proda_checked',
        // 'plan_managed_funds_confirmed',
        // 'client_file_url',
        // 'service_last_confirmed',
        'clientStage',
        'remainingHoursToWork',
        'revisedEndDate',
        'safe_home_visit_policy',
        'endDate',
        'address',
        'actions',

    ];

    ngOnInit() {
        this.dataSource = new ClientDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }

    getFormatColumns() {
        return ['client','clientStage','remainingHoursToWork','revisedEndDate','safe_home_visit_policy','endDate','address'];
    }
}
