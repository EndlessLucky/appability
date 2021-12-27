import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class OrganisationDataSource extends RestApiDataSource {
    searchableFields = [
        // 'idAuto',                // for column: "id_auto"
        'id',                // for column: "ID"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
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
