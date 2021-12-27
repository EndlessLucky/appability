import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-contractor-detail-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        businessName: ['', []],                // for column: "Business Name"
        abn: ['', []],                // for column: "ABN"
        accountName: ['', []],                // for column: "Account Name"
        bsb: ['', []],                // for column: "BSB"
        accountNumber: ['', []],                // for column: "Account Number"
        businessAddress: ['', []],                // for column: "Business Address"
        currentContractUrl: ['', []],                // for column: "Current Contract URL"
        superChoiceFormUrl: ['', []],                // for column: "Super Choice Form URL"
    };
}
