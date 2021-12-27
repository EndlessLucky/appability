import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { PersonDataSource } from '../../data-sources/person.data-source';

@Component({
    selector: 'app-person-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Person list';

    displayedColumns = [
        'select',

        // 'image',                // for column: "Image"
        // 'employer',                // for column: "Employer"
        // 'contractorDetail',                // for column: "Contractor Detail"
        'isKeyContactForEmployer',                // for column: "Is Key Contact for Employer"
        // 'reportcount',                // for column: "ReportCount"
        // 'staffreportcount',                // for column: "StaffReportCount"
        // 'suburb',                // for column: "Suburb"
        // 'postCode',                // for column: "Post Code"
        // 'hasRestrictivePractices',                // for column: "Has Restrictive Practices"
        // 'staffCompliance',                // for column: "Staff Compliance"
        // 'phone',                // for column: "Phone"
        // 'address',                // for column: "Address"
        // 'preferredName',                // for column: "Preferred Name"
        // 'dateOfBirth',                // for column: "Date of Birth"
        // 'gender',                // for column: "Gender"
        // 'ndisNumber',                // for column: "NDIS Number"
        // 'planStartDate',                // for column: "Plan Start Date"
        // 'planReviewDate',                // for column: "Plan Review Date"
        // 'notes',                // for column: "Notes"
        // 'lastmodified',                // for column: "LastModified"
        // 'modifiedby',                // for column: "ModifiedBy"
        // 'inheritFromReferralForm',                // for column: "Inherit from Referral Form"
        // 'referralForm',                // for column: "Referral Form"
        // 'referralFormRole',                // for column: "Referral Form Role"
        // 'isclient',                // for column: "IsClient"
        // 'isfamily',                // for column: "IsFamily"
        'id',                // for column: "id"
        'firstname',                // for column: "FirstName"
        'surname',                // for column: "Surname"
        'useremail',                // for column: "UserEmail"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new PersonDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
    
    getFormatColumns() {
        return ['firstname','surname','useremail'];
    }
}
