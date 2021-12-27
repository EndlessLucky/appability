import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

interface SelectElement {
    value: string;
    label: string;
    route: string;
}

@Component({
    selector: 'app-csv-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
    @ViewChild('table', {static: false}) table: ElementRef;
    files  = [];

    tables: SelectElement[] = [
        {value: 'payment_outcome', label: 'Payment Outcome', route: 'payment-outcome'},
        {value: 'xero_payments', label: 'Xero Payments', route: 'xero-payments'},
        {value: 'person', label: 'Person', route: 'person'},
        {value: 'timetrack', label: 'Timetrack', route: 'timetrack'},
    ];

    defaultTable = 'payment_outcome';

    allowedMimeTypes = 'text/csv';
    // allowedMimeTypes = 'image/*';

    error: string;
    userId = 1;
    uploadResponse = { status: '', message: '', filePath: '' };

    urls = {};


    fields = {
        id: ['', []],                // for column: "id"
        file: ['', []],
        table: ['', []]
    };

    openInput() {
        document.getElementById('fileInput').click();
    }

    private upload() {
        this.fileInput.nativeElement.value = '';
        this.files.forEach(file => {
            // console.warn(file);
            this.callUploadService(file, this.form.controls.table.value);
        });
        const sel = this.tables.filter((row: SelectElement) => row.value === this.form.controls.table.value)[0];
        console.warn(sel);

    // @todo
    // this.router.navigate([sel.route + '/list']);
    }

    callUploadService(file, table) {
        file.inProgress = true;
        this.service.upload(file, table).pipe(
            map(event => {
                switch (event.type) {
                case HttpEventType.UploadProgress: {
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                }
                case HttpEventType.Response: {
                    return event;
                }
                }
            })).subscribe((event: any) => {
            console.log(event);
            if (typeof (event) === 'object') {
                let msg = '';
                if (event.body.success) {
                    if (event.body.isImage) {
                        msg = 'Image uploaded: ' + event.body.file.name;
                    } else {
                        if (event.body.rows) {
                          msg = 'Import complete: ' + event.body.file.name + ', ' + event.body.rows + ' row(s)';
                        } else {
                          msg = 'File uploaded: ' + event.body.file.name;
                        }
                    }
                    this.service.notifySuccess(msg);
                    this.urls[event.body.file.name] = event.body.url;
                } else {
                    if (event.body.isImage) {
                        msg = 'Image upload error: ' + event.body.file.name;
                    } else {
                        msg = 'Import error: ' + event.body.file.name;
                    }
                    this.service.notifyError(msg);
                }
            }
        });
    }

    isImage(file: File) {
        const parts = file.type.split('/', 1);
        return 'image' === parts[0];
    }

    onFileSelect() {
    // new upload = delete previously uploaded files from the list
        this.files = [];

        const fileInput = this.fileInput.nativeElement;
        fileInput.onchange = () => {
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < fileInput.files.length; index++) {
                const file = fileInput.files[index];
                console.warn(file);
                const isImage = this.isImage(file);
                const fileInfo = { data: file, inProgress: false, progress: 0, name: file.name, isImage, src: null};
                if (isImage) {
                    const reader = new FileReader();
                    reader.onload = (event: any) => {
                        fileInfo.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
                this.files.push(fileInfo);
            }
            this.upload();
        };
        fileInput.click();
    }

    save() {
        if (this.form.valid) {
            console.log('save cl');
            let methodName = 'save';
            if (this.isUpdate) {
                methodName = 'update';
            }
            this.subscriptions.add(this.service[methodName](this.form.value).subscribe(data => {
                // this.saving = true;
                // this.location.back();
                this.form.reset();
            }
            )
            );
        } else {
            alert('form invalid');
        }
    }
}
