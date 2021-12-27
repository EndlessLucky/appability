import { FocusMonitor } from '@angular/cdk/a11y';
import { HttpEventType } from '@angular/common/http';
import {
    AfterViewInit,
    Component,
    ElementRef,
    forwardRef,
    HostBinding, Inject,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Self,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { FileUploadService } from '../../services/file-upload.service';

// type StringOrNull = string | null;

interface SelectElement {
    value: string;
    label: string;
    route: string;
}

interface FileData {
    data: any;
    inProgress: boolean;
    progress: number;
    name: any;
    value: any; // actual uploaded name
    safeName: any;
    isImage: boolean;
    src: any;
    ready: boolean;
    hash: string;
}

class FileData implements FileData {
    data = null;
    inProgress = false;
    progress = 0;
    name = null;
    value = null;
    safeName = null;
    isImage = false;
    src = null;
    ready = false;
    hash: string;
}

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    providers: [
    // {
    //     provide: NG_VALUE_ACCESSOR,
    //     useExisting: forwardRef(() => MatFormFieldControl),
    // },

        {provide: MatFormFieldControl, useExisting: FileUploadComponent},
    ],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnInit, OnDestroy, AfterViewInit, MatFormFieldControl<string>, ControlValueAccessor {

    static nextId = 0;

    // elementValue: string;

    @Input() limit = 2;

    @Input() label = 'Upload file';

    private placeholderValue: string;


    // value: string;
    stateChanges = new Subject<void>();
    // id: string;
    //   placeholder: string;
    // ngControl: import('@angular/forms').NgControl;
    focused: boolean;
    empty: boolean;
    shouldLabelFloat: boolean;
    required: boolean;
    disabled: boolean;
    errorState: boolean;
    controlType = 'file-upload';

    autofilled?: boolean;

    // ngControl: NgControl = null;

    uploadSource = environment.uploadSource;

    @HostBinding() id = `file-upload-component-${FileUploadComponent.nextId++}`;

    // call this function to update the parent element value
    // private changeCallback: (item) => void;
    changeCallback: any = (_: void) => {
        //do nothing
    };
    touchedCallback: any = (_: void) => {
        //do nothing
    };
    // private touchedCallback: () => void;

    inputControl = new FormControl();


    // @ViewChild('inputTrigger', {static: true, read: MatAutocompleteTrigger}) inputTrigger: MatAutocompleteTrigger;
    // @HostBinding() id = `input-ac-${DataMultiAutocompleteComponent.nextId++}`;
    @HostBinding('attr.aria-describedby') describedBy = '';

    // @Input('aria-describedby') userAriaDescribedBy: string;

    constructor(@Optional() @Self() public ngControl: NgControl,
                fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>,
                @Optional() @Inject(MatFormField) public formField: MatFormField,
                private service: FileUploadService
    ) {
    // Replace the provider from above with this.
        if (this.ngControl != null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }

    @Input()
    get placeholder() {
        return this.placeholderValue;
    }
    set placeholder(plh) {
        this.placeholderValue = plh;
        this.stateChanges.next();
    }


    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
    // @ViewChild('table', {static: false}) table: ElementRef;
    files  = [];

    // allowedMimeTypes = 'text/csv';
    @Input() allowedMimeTypes = 'image/*';

    error: string;
    userId = 1;
    uploadResponse = { status: '', message: '', filePath: '' };

    // urls = {};

    setDescribedByIds(ids: string[]) {
        const controlElement = this.elRef.nativeElement
            .querySelector('.file-upload-field');
        if (controlElement) {
            controlElement.setAttribute('aria-describedby', ids.join(' '));
        }
    }

    onContainerClick(event: MouseEvent) {
        if ((event.target as Element).tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }

    ngOnDestroy(): void {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    }


    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    removeElement(index) {
        // alert('removing');
        // console.log(src);
        // const index = this.files.findIndex(elm => elm.src === src);
        this.files.splice(index, 1);
        /// // this.imagePaths.splice(index, 1);
        this.stateChanges.next();
        this.changeCallback(this.value);
        // this.writeValue(this.value);
        this.inputControl.setValue(this.value);
        return false;
    }

    /**
     * Returns web safe filename
     */
    safeName(str) {
        // return string.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        return str.replace(/[^a-z0-9]/gi, '_');
    }

    writeValue(obj: any): void {
        console.warn(obj);
        // alert(this.uploadSource);
        if (obj !== undefined) {
        // this.elementValue = obj;
        /// // this.imagePaths.push(obj);

            this.inputControl.setValue(obj);
            this.stateChanges.next();
            if (obj.length && !this.files.length) {
                const safeName = this.safeName(obj);
                const fileData = new FileData();
                fileData.progress = 100;
                fileData.src = this.uploadSource + obj;
                fileData.hash = this.hash(fileData.src);
                fileData.value = obj;
                fileData.isImage = true;
                fileData.data = {size: 0, name: null};
                fileData.ready = true;
                fileData.safeName = safeName;
                this.pushFile(fileData);
            }
        }
    }

    hash(str) {
        let ha = 0;
        let chr;
        for (let i = 0; i < str.length; i++) {
            chr   = str.charCodeAt(i);
            // tslint:disable-next-line:no-bitwise
            ha  = ((ha << 5) - ha) + chr;
            // tslint:disable-next-line:no-bitwise
            ha |= 0; // Convert to 32bit integer
        }
        return ha.toString();
    }

    registerOnChange(fn: any) {
        this.changeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.touchedCallback = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
    }

    openInput() {
        document.getElementById('fileInput').click();
    }

    private upload() {
        this.fileInput.nativeElement.value = '';
        this.files.forEach(file => {
            // console.warn(file);
            if (file.progress === 0) {
                // alert(file.progress);
                this.callUploadService(file);
            }
        });
        // const sel = this.tables.filter((row: SelectElement) => row.value === this.value)[0];
        // console.warn(sel);

    // @todo
    // this.router.navigate([sel.route + '/list']);
    }

    callUploadService(file) {
    // this.pushFile(file);
    // this.pushFile(file);
    // this.addValue(file.name);
    // this.changeCallback(this.value);
    // this.writeValue('dfffff');
    //   alert('calling upload');
    // this.inputControl.setValue('dsffff');
    // alert('table' + table);
    // this.value = 'qweee';
    // return false;


        file.inProgress = true;
        file.done = false;

        // /**
        this.service.upload(file).pipe(
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
            if (typeof (event) === 'object') {
                let msg = '';
                if (event.body.success) {
                    if (event.body.isImage) {
                        msg = 'Image uploaded: ' + event.body.file.name;
                    } else {
                        msg = 'Import complete: ' + event.body.file.name + ', ' + event.body.rows + ' row(s)';
                    }
                    this.service.notifySuccess(msg);
                    // this.urls[event.body.file.name] = event.body.url;


                    /// // this.imagePaths[event.body.file.name] = event.body.url;
                    this.files.find(item => item.hash === file.hash).value = event.body.url;
                    this.inputControl.setValue(this.value);
                    // this.writeValue(this.value);
                    this.changeCallback(this.value);
                    // console.log(this.value);
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
        // **/
    }

    isImage(file: File) {
        const parts = file.type.split('/', 1);
        return 'image' === parts[0];
    }

    isSingleUpload() {
        return this.limit === 1;
    }

    resetUploads() {
        this.files = [];
    /// // this.imagePaths = [];
    }

    ngAfterViewInit() {
        const fileInput = this.fileInput.nativeElement;

        fileInput.onchange = () => {
            alert('change');
            // if (this.files.length > this.limit) {
            //   return false;
            // }
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < fileInput.files.length; index++) {
                const file = fileInput.files[index];
                // console.warn(file);
                const isImage = this.isImage(file);
                const fileInfo = new FileData();
                fileInfo.name = file.name;
                fileInfo.isImage = isImage;
                fileInfo.data = file;
                // const fileInfo = {data: file, inProgress: false, progress: 0, name: file.name, isImage, src: null, done: false};
                if (isImage) {
                    // create preview before the upload
                    const reader = new FileReader();
                    reader.onload = (event: any) => {
                        fileInfo.src = event.target.result;
                        fileInfo.hash = this.hash(fileInfo.src);
                    };
                    reader.readAsDataURL(file);
                }
                this.pushFile(fileInfo);
                this.stateChanges.next();
                /// / this.files.push(fileInfo);
                this.upload();
            }
        };
    }

    onFileSelect() {
    // new upload = delete previously uploaded files from the list

        if (this.isSingleUpload()) {
            this.resetUploads();
        }

        const fileInput = this.fileInput.nativeElement;


        // };
        fileInput.click();
    // this.upload();
    }

    save() {
        alert('save');
    }

    pushFile(file) {
        this.files.push(file);
    }

    @Input()
    set value(value: any) {
        // this.value = value;
        if (value) {
            // this.elementValue = value;
            /// // this.imagePaths.push(value);
            /// /// this.files.push(value);
            this.pushFile(value);
        }
        // if (value) {
        //   this.selectedItems = value;
        // }
        // this.inputControl.setValue(value);

        // this.stateChanges.next(value);
        this.stateChanges.next(value);
        this.changeCallback(value);
        this.touchedCallback();
    }

    get value() {
        if (this.limit === 1) {
            // return this.imagePaths.slice(0, 1).shift();
        }

        return this.files.map(item => item.value);


    // return this.imagePaths.join(', ');
    }




}
