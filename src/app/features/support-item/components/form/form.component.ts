import { Component } from '@angular/core';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-support-item-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
      id: ['', []],
      // supportcategoryname: ['', [Validators.required]],
      supportcategoryname: [
        '', 
        {
          validators : [Validators.required],
          asyncValidators: [this.service.checkExist('supportcategoryname')],
          updateOn: 'blur'
        }
      ],

      // supportitemdescription: ['', [Validators.required],[this.service.checkExist('supportitemdescription')],[{updateOn : 'blur'}]],
      supportitemdescription: [
        '', 
        {
          validators: [Validators.required],
          asyncValidators: [this.service.checkExist('supportitemdescription')],
          updateOn: 'blur'
        }
      ],

      hourlyRate: ['', [Validators.required]],
      isclientbillable: ['', []],
      key: ['', [Validators.required]],
      active: ['', []],
      end: ['', [Validators.required]],
      registrationGroupName: ['', [Validators.required]],
      a2019HourlyRate: ['', [Validators.required]],                // for column: "2019 Hourly Rate"
    };

    isUnique() {
      // @todo just for testing purposes
      // @todo remove later
      this.isFieldValueUnique('supportitemdescription').subscribe(value => console.log(value));
    }
}
