import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-organisation-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        // idAuto: ['', []],                // for column: "id_auto"
        id: ['', []],                // for column: "ID"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        name: ['', [Validators.required]],                // for column: "Name"
        image: ['', [Validators.required]],                // for column: "Image"
        abn: ['', [Validators.required, Validators.pattern('[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}')]],                // for column: "ABN"
        reportingOfficer: ['', [Validators.required]],                // for column: "Reporting Officer"
        isThisAPlanManagerWeNeedToInvoice: ['TRUE', [Validators.required]],                // for column: "Is this a Plan Manager we need to Invoice"
        invoicingDetailsConfirmedAndEnteredIntoXero: ['TRUE', [Validators.required]],                // for column: "Invoicing details confirmed and entered into Xero"
        isThisAnOrganisationWithRpa: ['TRUE', [Validators.required]],                // for column: "Is this an Organisation with RPA"
        ndiaRegisrationNumber: ['', [Validators.required]],                // for column: "NDIA Regisration Number"
        nqscRegistrationNumber: ['', [Validators.required]],                // for column: "NQSC Registration number"
        employsourstaff: ['TRUE', [Validators.required]],                // for column: "EmploysOurStaff"
        contractstous: ['TRUE', [Validators.required]],                // for column: "ContractsToUs"
        principalcontractor: ['', [Validators.required]],                // for column: "PrincipalContractor"

    };
}
