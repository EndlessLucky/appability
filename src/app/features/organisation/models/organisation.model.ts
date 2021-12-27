import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class OrganisationModel extends Deserializable implements ToString {
    // public idAuto: number;                // for column: "id_auto"
    public id: string;                // for column: "ID"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public name: string;                // for column: "Name"
    public image: string;                // for column: "Image"
    public abn: string;                // for column: "ABN"
    public reportingOfficer: string;                // for column: "Reporting Officer"
    public isThisAPlanManagerWeNeedToInvoice: string;                // for column: "Is this a Plan Manager we need to Invoice"
    public invoicingDetailsConfirmedAndEnteredIntoXero: string;                // for column: "Invoicing details confirmed and entered into Xero"
    public isThisAnOrganisationWithRpa: string;                // for column: "Is this an Organisation with RPA"
    public ndiaRegisrationNumber: string;                // for column: "NDIA Regisration Number"
    public nqscRegistrationNumber: string;                // for column: "NQSC Registration number"
    public employsourstaff: string;                // for column: "EmploysOurStaff"
    public contractstous: string;                // for column: "ContractsToUs"
    public principalcontractor: string;                // for column: "PrincipalContractor"

    getKeys() {
        return [
            // 'idAuto',                // for column: "id_auto"
            'id',                // for column: "ID"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'name',                // for column: "Name"
            'image',                // for column: "Image"
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
        ];
    }

    toString() {
        return this.name;
    }
}
