import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';
import { UniverseFormat } from '../../../shared/components/formats/universe-format';
import { Formatter } from '../components/index/formatter';

export class PersonModel extends Deserializable implements ToString, UniverseFormat {
    public id: number;                // for column: "id"
    // public lastmodified: string;                // for column: "LastModified"
    // public modifiedby: string;                // for column: "ModifiedBy"
    public inheritFromReferralForm: boolean;                // for column: "Inherit from Referral Form"
    public referralForm: string;                // for column: "Referral Form"
    public referralFormRole: string;                // for column: "Referral Form Role"
    public isclient: boolean;                // for column: "IsClient"
    public isfamily: boolean;                // for column: "IsFamily"
    public useremail: string;                // for column: "UserEmail"
    public firstname: string;                // for column: "FirstName"
    public surname: string;                // for column: "Surname"
    public phone: string;                // for column: "Phone"
    public address: string;                // for column: "Address"
    public preferredName: string;                // for column: "Preferred Name"
    public dateOfBirth: string;                // for column: "Date of Birth"
    public gender: string;                // for column: "Gender"
    public ndisNumber: string;                // for column: "NDIS Number"
    public planStartDate: string;                // for column: "Plan Start Date"
    public planReviewDate: string;                // for column: "Plan Review Date"
    public notes: string;                // for column: "Notes"
    public image: string;                // for column: "Image"
    public employer: string;                // for column: "Employer"
    public contractorDetail: string;                // for column: "Contractor Detail"
    public isKeyContactForEmployer: string;                // for column: "Is Key Contact for Employer"
    public reportcount: string;                // for column: "ReportCount"
    public staffreportcount: string;                // for column: "StaffReportCount"
    public suburb: string;                // for column: "Suburb"
    public postCode: string;                // for column: "Post Code"
    public hasRestrictivePractices: string;                // for column: "Has Restrictive Practices"
    public staffCompliance: string;                // for column: "Staff Compliance"
    public isActiveStaff : string;
    public contractorOwed : string;
    public isStaff : string;

    getKeys() {
        return [
            'id',                // for column: "id"
            // 'lastmodified',                // for column: "LastModified"
            // 'modifiedby',                // for column: "ModifiedBy"
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

    toString() {
        return this.firstname + ' ' + this.surname;
    }

    adapt() {
        return new Formatter(this).getFormatter();
    }

}
