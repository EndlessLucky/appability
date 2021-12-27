import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ReferralFormDataSource } from '../../data-sources/ability-consultants-referral-form.data-source';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';

@Component({
    selector: 'app-referral-form-index',
    templateUrl: './index.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements AfterViewInit, OnInit {

    // wheres = [];
    // @todo USE INTERFACE
    wheres = [
        {
            index: 0,
            label: 'Processed',
            condition: {
                where: 'or',
                field: 'id',
                type: 'gt',
                value: '950'
            }
        },
        {
            index: 1,
            label: 'not Processed',
            condition: {
                where: 'or',
                field: 'id',
                type: 'lte',
                value: '950'
            }
        },
    ];

    // activeWhereIndex = 1;

    formComponentType = FormComponent;
    title = 'Referral Forms';

    displayedColumns = [
        'select',
        'actions',

        'id',
        'firstNameOfReferrer', 'lastNameOfReferrer'

    ];

    ngOnInit() {
        // console.log(this.wheres);
        this.dataSource = new ReferralFormDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
