import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-action-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        doToday: ['', []],                // for column: "Do Today"
        complete: ['', []],                // for column: "Complete"
        action: ['', []],                // for column: "Action"
        priority: ['', []],                // for column: "Priority"
        context: ['', []],                // for column: "Context"
        start: ['', []],                // for column: "Start"
        due: ['', []],                // for column: "Due"
        duration: ['', []],                // for column: "Duration"
        note: ['', []],                // for column: "Note"
        client: ['', []],                // for column: "Client"
        tag: ['', []],                // for column: "Tag"
        staff: ['', []],                // for column: "Staff"
        safehomechecklist: ['', []],                // for column: "SafeHomeChecklist"
        learninggoal: ['', []],                // for column: "LearningGoal"
    };
}
