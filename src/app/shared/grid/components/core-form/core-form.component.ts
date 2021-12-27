import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-core-form',
    template: 'No form elements added yet...',
    styleUrls: ['./core-form.component.scss']
})
export class CoreFormComponent {
    form: FormGroup;
    dialogRef : MatDialogRef<CoreFormComponent>;

    public save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}
