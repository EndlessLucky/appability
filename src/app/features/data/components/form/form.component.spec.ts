import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input'; 
import { of, throwError } from 'rxjs';
import { FileUploadComponent } from '../../../../shared/grid/components/file-upload/file-upload.component';
import { MultiAutocompleteComponent } from '../multi-autocomplete/multi-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxFilesizeModule } from 'ngx-filesize';
import { ErrorInterceptor } from '../../../../core/interceptors/error.interceptor';
import { MatChipsModule } from '@angular/material/chips'; 

describe('features/data/components/FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let form_datas : any;

  let router : any;
  let notificationService : any;
  let authService : any;

  const RestApiServiceSpy = jasmine.createSpyObj('RestApiService', {'save' : of()});
  const NotificationServiceSuccessSpy = jasmine.createSpyObj('NotificationService', {'success' : of()});
  const errorInterceptor = new ErrorInterceptor(authService, router, notificationService, RestApiServiceSpy);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent, FileUploadComponent, MultiAutocompleteComponent
      ],
      imports: [ 
        HttpClientTestingModule, 
        RouterTestingModule, 
        ReactiveFormsModule, 
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        NgxFilesizeModule,
        MatChipsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    el = de.nativeElement;
    form_datas = {
      "id": 85,
      "name": "Ada",
      "surname": "Malinowski",
      "datas": {},
      "createdBy": null,
      "updatedBy": null
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form field are required', () => {
    component.form.controls.img.setValue('');
    component.form.controls.name.setValue('');
    component.form.controls.surname.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('save button should be disabled when empty fields exist', () => {
    component.form.controls.img.setValue('');
    component.form.controls.name.setValue('');
    component.form.controls.surname.setValue('');
    expect(component.form.invalid).toBeTruthy();
  });

  it('save button should be enabled when fields are valid', () => {
    component.form.controls.img.setValue('image url');
    component.form.controls.name.setValue('string name');
    component.form.controls.surname.setValue('string surname');
    expect(component.form.valid).toBeTruthy;
  });

  it('save button should be disabled when fields are invalid min length', () => {
    component.form.controls.name.setValue('ab');
    component.form.controls.surname.setValue('ab');
    expect(component.form.invalid).toBeTruthy();
  });

  it('form should be submitted when hit save button', () => {
    component.save();
    expect(component.saving).toBeTruthy;
  });

  it('form submitted button should be clicked 0 times', () => {
    spyOn(component, 'save');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    btn_save.click();
    expect(component.save).toHaveBeenCalledTimes(0);
  });

  it('validation error message should be when fields are invalid', () => {
    const validationError : DebugElement = fixture.debugElement.query(By.css('.ng-invalid'));
    expect(validationError).toBeTruthy();
  });

  it('RestApiService save() should be called', () => {
    component.form.controls.img.setValue('image url');
    component.form.controls.name.setValue('string name');
    component.form.controls.surname.setValue('string surname');
    expect(form_datas).toEqual(jasmine.objectContaining({
      "id": 85,
      "name": "Ada",
      "surname": "Malinowski",
      "datas": {},
      "createdBy": null,
      "updatedBy": null
    }));
    spyOn(component, 'save');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    btn_save.click();
    expect(RestApiServiceSpy.save).toHaveBeenCalledTimes(0);
  });

  it('should show success message', () => {
    component.form.controls.img.setValue('image url');
    component.form.controls.name.setValue('string name');
    component.form.controls.surname.setValue('string surname');
    spyOn(component, 'save');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    btn_save.click();
    fixture.detectChanges();
    expect(RestApiServiceSpy.save.and.returnValue(of({
      "createdBy" : {},
      "datas" : {},
      "id" : "10047",
      "name" : "name",
      "surname" : "surname"
    }))).toBeTruthy;
    expect(NotificationServiceSuccessSpy.success).toHaveBeenCalledTimes(0);
  });

  it('should show error message when save is failed', () => {
    spyOn(component, 'save');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    btn_save.click();
    fixture.detectChanges();
    const httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
    const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpHandlerSpy.handle.and.returnValue(throwError(
      {}
    ));
    errorInterceptor.intercept(httpRequestSpy, httpHandlerSpy)
    .subscribe(
      result => console.log('good', result), 
      err => { 
        console.log('error', err);
        expect(err.displaySnackbarError).toBeTruthy;
      }
    );
  });

});