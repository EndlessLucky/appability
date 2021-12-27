import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadComponent } from '../../../../shared/grid/components/file-upload/file-upload.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

describe('features/client/components/FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent
      ],
      imports: [ 
        HttpClientTestingModule, 
        RouterTestingModule, 
        ReactiveFormsModule, 
        MatCheckboxModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
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
    component.form.controls.serviceRequestType.setValue('');
    component.form.controls.referralForm.setValue('');
    component.form.controls.keyConsultant.setValue('');
    component.form.controls.client.setValue('');
    component.form.controls.client_stage.setValue('');
    component.form.controls.fundsManagement.setValue('');
    component.form.controls.pipeline.setValue('');
    component.form.controls.clientGoals.setValue('');
    component.form.controls.comments.setValue('');
    component.form.controls.organisation.setValue('');
    component.form.controls.projectName.setValue('');
    component.form.controls.serviceAgreementPrint.setValue('');
    component.form.controls.planManagementOrganisation.setValue('');
    component.form.controls.currentStatus.setValue('');
    component.form.controls.statusReportPrint.setValue('');
    component.form.controls.region.setValue('');
    component.form.controls.repeatReferral.setValue('');
    component.form.controls.referralDate.setValue('');
    component.form.controls.client_file_url.setValue('');
    component.form.controls.service_last_confirmed.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('save button should be disabled when empty fields exist', () => {
    component.form.controls.serviceRequestType.setValue('');
    component.form.controls.referralForm.setValue('');
    component.form.controls.keyConsultant.setValue('');
    component.form.controls.client.setValue('');
    component.form.controls.client_stage.setValue('');
    component.form.controls.fundsManagement.setValue('');
    component.form.controls.pipeline.setValue('');
    component.form.controls.clientGoals.setValue('');
    component.form.controls.comments.setValue('');
    component.form.controls.organisation.setValue('');
    component.form.controls.projectName.setValue('');
    component.form.controls.serviceAgreementPrint.setValue('');
    component.form.controls.planManagementOrganisation.setValue('');
    component.form.controls.currentStatus.setValue('');
    component.form.controls.statusReportPrint.setValue('');
    component.form.controls.region.setValue('');
    component.form.controls.repeatReferral.setValue('');
    component.form.controls.referralDate.setValue('');
    component.form.controls.client_file_url.setValue('');
    component.form.controls.service_last_confirmed.setValue('');
    expect(component.form.invalid).toBeTruthy();
  });

  it('save button should be disabled when fileds are invalid', () => {
    component.form.controls.serviceRequestType.setValue('no value in service request type');
    component.form.controls.referralForm.setValue('no referral form value');
    component.form.controls.keyConsultant.setValue('no value in key consultant');
    component.form.controls.client.setValue('no value in client');
    component.form.controls.client_stage.setValue('no value in client stage');
    component.form.controls.fundsManagement.setValue('no value string');
    component.form.controls.pipeline.setValue('no value in pipeline');
    component.form.controls.organisation.setValue('no value in organization');
    component.form.controls.serviceAgreementPrint.setValue('no number string');
    component.form.controls.statusReportPrint.setValue('no number string');
    component.form.controls.region.setValue('no value in region');
    component.form.controls.repeatReferral.setValue('no boolean value');
    component.form.controls.referralDate.setValue('no date string');
    component.form.controls.service_last_confirmed.setValue('no date string');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    expect(btn_save.disabled).toBeTruthy;
  });

  it('save button should be enabled when fields are valid', () => {
    component.form.controls.clientGoals.setValue('my client goals string');
    component.form.controls.comments.setValue('comment string');
    component.form.controls.projectName.setValue('Travel Costs string');
    component.form.controls.serviceAgreementPrint.setValue('123');
    component.form.controls.planManagementOrganisation.setValue('Interaction Services');
    component.form.controls.currentStatus.setValue('status string');
    component.form.controls.statusReportPrint.setValue('123');
    component.form.controls.repeatReferral.setValue('TRUE');
    component.form.controls.referralDate.setValue('3/9/2021');
    component.form.controls.client_file_url.setValue('https://drive.google.com/drive/folders/1GXB1nqe_KUWUCuHq2zgcfSv68QWxXTlN');
    component.form.controls.service_last_confirmed.setValue('3/9/2021');
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