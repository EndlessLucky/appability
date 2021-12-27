import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-ability-calendar-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "Row ID"
        rowId: ['', []],                // for column: "Row ID"
        title: ['', []],                // for column: "Title"
        start: ['', []],                // for column: "Start"
        end: ['', []],                // for column: "End"
        location: ['', []],                // for column: "Location"
        creator: ['', []],                // for column: "Creator"
        attendees: ['', []],                // for column: "Attendees"
        status: ['', []],                // for column: "Status"
        webLink: ['', []],                // for column: "Web Link"
        hangoutLink: ['', []],                // for column: "Hangout Link"
        description: ['', []],                // for column: "Description"
    };
}
