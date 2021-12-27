import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-person-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    /**
     * @author seagull
     * @summary person's form fields control name
     */
    fields = {
        id: ['', []],
        // lastmodified: ['', []],
        // modifiedby: ['', []],
        inheritFromReferralForm: ['', []],
        referralForm: [this.getDefaultReferralForm(), []],
        referralFormRole: [null, []],
        isclient: ['', []],
        isfamily: ['', []],
        useremail: ['', [Validators.required, Validators.email]],
        firstname: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        phone: ['', [Validators.required,Validators.pattern('^[+]((\\+91-?)|0)?[0-9]{10}$')]],
        address: ['', [Validators.required]],
        preferredName: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        gender: ['Male', [Validators.required]],
        ndisNumber: ['', [Validators.required]],
        planStartDate: ['', [Validators.required]],
        planReviewDate: ['', [Validators.required]],
        notes: ['', [Validators.required]],
        image: ['', []],
        employer: ['', [Validators.required]],
        // contractorDetail: ['', [Validators.required]],
        isKeyContactForEmployer: ['FALSE', [Validators.required]],
        reportcount: ['', [Validators.required]],
        staffreportcount: ['', [Validators.required]],
        suburb: ['', [Validators.required]],
        postCode: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
        hasRestrictivePractices: ['FALSE', [Validators.required]],
        // staffCompliance: ['', [Validators.required]],
    };

    /**
     * Read default value from values entered in previous form (client create form)
     */
    getDefaultReferralForm() {
        const clientFormData = this.formStateService.getValues('FormComponent', '/client/create');
        if (clientFormData && clientFormData.referralForm) {
            return clientFormData.referralForm;
        }

        return '';
    }
}
