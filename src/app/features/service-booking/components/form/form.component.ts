import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-service-booking-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    /**
     * @author seagull
     * @summary service booking form control name
     */
    fields = {
        id: ['', []],
        // lastmodified: ['', []],
        // lastmodifiedby: ['', []],
        client: ['', [Validators.required]],
        serviceBookingNumber: ['', [Validators.required]],
        start: ['', [Validators.required]],
        end: ['', [Validators.required]],
        revisedEnd: ['', [Validators.required]],
        active: ['', []],
        isdraft: ['', []],
        details: ['', [Validators.required]]
    };
}
