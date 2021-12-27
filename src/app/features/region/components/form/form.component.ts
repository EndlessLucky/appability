import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-region-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        name: ['', [Validators.required]],                // for column: "name"
        comments: ['', [Validators.required]],                // for column: "comments"
    // created: ['', []],                // for column: "created"
    // updated: ['', []],                // for column: "updated"
    };
}
