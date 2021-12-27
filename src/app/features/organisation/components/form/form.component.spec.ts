import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadComponent } from '../../../../shared/grid/components/file-upload/file-upload.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input'; 

/**
 * @author seagull
 */
describe('features/organisation/components/FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, FileUploadComponent],
      imports: [ 
        HttpClientTestingModule, 
        RouterTestingModule, 
        ReactiveFormsModule, 
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form field are required', () => {
    component.form.controls.name.setValue('');
    component.form.controls.image.setValue('');
    component.form.controls.abn.setValue('');
    component.form.controls.reportingOfficer.setValue('');
    component.form.controls.isThisAPlanManagerWeNeedToInvoice.setValue('');
    component.form.controls.invoicingDetailsConfirmedAndEnteredIntoXero.setValue('');
    component.form.controls.isThisAnOrganisationWithRpa.setValue('');
    component.form.controls.ndiaRegisrationNumber.setValue('');
    component.form.controls.nqscRegistrationNumber.setValue('');
    component.form.controls.employsourstaff.setValue('');
    component.form.controls.contractstous.setValue('');
    component.form.controls.principalcontractor.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('save button should be disabled when empty fields exist', () => {
    component.form.controls.name.setValue('');
    component.form.controls.image.setValue('');
    component.form.controls.abn.setValue('');
    component.form.controls.reportingOfficer.setValue('');
    component.form.controls.isThisAPlanManagerWeNeedToInvoice.setValue('');
    component.form.controls.invoicingDetailsConfirmedAndEnteredIntoXero.setValue('');
    component.form.controls.isThisAnOrganisationWithRpa.setValue('');
    component.form.controls.ndiaRegisrationNumber.setValue('');
    component.form.controls.nqscRegistrationNumber.setValue('');
    component.form.controls.employsourstaff.setValue('');
    component.form.controls.contractstous.setValue('');
    component.form.controls.principalcontractor.setValue('');
    expect(component.form.invalid).toBeTruthy();
  });

  it('save button should be disabled when fileds are invalid', () => {
    component.form.controls.abn.setValue('no number');
    component.form.controls.isThisAPlanManagerWeNeedToInvoice.setValue('no boolean');
    component.form.controls.invoicingDetailsConfirmedAndEnteredIntoXero.setValue('no boolean');
    component.form.controls.isThisAnOrganisationWithRpa.setValue('no boolean');
    component.form.controls.ndiaRegisrationNumber.setValue('no number');
    component.form.controls.employsourstaff.setValue('no boolean');
    component.form.controls.contractstous.setValue('no boolean');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    expect(btn_save.disabled).toBeTruthy;
  });

  it('save button should be enabled when fields are valid', () => {
    component.form.controls.abn.setValue('96 760 398 961');
    component.form.controls.isThisAPlanManagerWeNeedToInvoice.setValue('TRUE');
    component.form.controls.invoicingDetailsConfirmedAndEnteredIntoXero.setValue('TRUE');
    component.form.controls.isThisAnOrganisationWithRpa.setValue('TRUE');
    component.form.controls.ndiaRegisrationNumber.setValue('2134');
    component.form.controls.employsourstaff.setValue('TRUE');
    component.form.controls.contractstous.setValue('TRUE');
    expect(component.form.valid).toBeTruthy;
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

});
