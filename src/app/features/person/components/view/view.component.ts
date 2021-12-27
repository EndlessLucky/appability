import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-person-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'person';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'modifiedby',                // for column: "ModifiedBy"
        'inheritFromReferralForm',                // for column: "Inherit from Referral Form"
        'referralForm',                // for column: "Referral Form"
        'referralFormRole',                // for column: "Referral Form Role"
        'isclient',                // for column: "IsClient"
        'isfamily',                // for column: "IsFamily"
        'useremail',                // for column: "UserEmail"
        'firstname',                // for column: "FirstName"
        'surname',                // for column: "Surname"
        'phone',                // for column: "Phone"
        'address',                // for column: "Address"
        'preferredName',                // for column: "Preferred Name"
        'dateOfBirth',                // for column: "Date of Birth"
        'gender',                // for column: "Gender"
        'ndisNumber',                // for column: "NDIS Number"
        'planStartDate',                // for column: "Plan Start Date"
        'planReviewDate',                // for column: "Plan Review Date"
        'notes',                // for column: "Notes"
        'image',                // for column: "Image"
        'employer',                // for column: "Employer"
        'contractorDetail',                // for column: "Contractor Detail"
        'isKeyContactForEmployer',                // for column: "Is Key Contact for Employer"
        'reportcount',                // for column: "ReportCount"
        'staffreportcount',                // for column: "StaffReportCount"
        'suburb',                // for column: "Suburb"
        'postCode',                // for column: "Post Code"
        'hasRestrictivePractices',                // for column: "Has Restrictive Practices"
        'staffCompliance',                // for column: "Staff Compliance"
        'isActiveStaff',
        'contractorOwed',
        'isStaff'
    ];
}

