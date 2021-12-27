import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-service-booking-details-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    /**
     * @author seagull
     * @summary service booking detail form control name
     */
    fields = {
        id: ['', []],                // for column: "id"
        // lastmodified: ['', []],                // for column: "LastModified"
        // lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        // serviceBooking: ['', []],                // for column: "Service Booking"
        supportBudget: ['', [Validators.required]],                // for column: "Support Budget"
        supportItemId: ['', [Validators.required]],                // for column: "Support Item ID"
        // supportItemName: ['', []],                // for column: "Support Item Name"
        descriptionOfServicesOutcomeMeasures: ['', [Validators.required]],                // for column: "Description of Services & Outcome Measures"
        hours: ['', [Validators.required]],                // for column: "Hours"
        allocatedAmount: ['', [Validators.required]],                // for column: "Allocated Amount"
        fundsManagement: ['', [Validators.required]],                // for column: "Funds Management"
        enteredPre3July2019: ['', []],                // for column: "Entered Pre 3 July 2019"
    };
}
