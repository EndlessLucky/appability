import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BackButtonComponent } from '../../../../shared/grid/components/back-button/back-button.component';;

/**
 * @author seagull
 */
describe('features/support-item/components/FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, BackButtonComponent],
      imports: [ 
        HttpClientTestingModule, 
        RouterTestingModule, 
        ReactiveFormsModule, 
        MatCheckboxModule, 
        MatInputModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule
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
    component.form.controls.supportcategoryname.setValue('');
    component.form.controls.supportitemdescription.setValue('');
    component.form.controls.hourlyRate.setValue('');
    component.form.controls.key.setValue('');
    component.form.controls.end.setValue('');
    component.form.controls.registrationGroupName.setValue('');
    component.form.controls.a2019HourlyRate.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('save button should be disabled when empty fields exist', () => {
    component.form.controls.supportcategoryname.setValue('');
    component.form.controls.supportitemdescription.setValue('');
    component.form.controls.hourlyRate.setValue('');
    component.form.controls.key.setValue('');
    component.form.controls.end.setValue('');
    component.form.controls.registrationGroupName.setValue('');
    component.form.controls.a2019HourlyRate.setValue('');
    expect(component.form.invalid).toBeTruthy();
  });

  it('save button should be disabled when fileds are invalid', () => {
    component.form.controls.hourlyRate.setValue('no number');
    component.form.controls.isclientbillable.setValue('no boolean');
    component.form.controls.active.setValue('no boolean');
    component.form.controls.end.setValue('no date');
    component.form.controls.a2019HourlyRate.setValue('no number');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    expect(btn_save.disabled).toBeTruthy;
  });

  it('save button should be enabled when fields are valid', () => {
    component.form.controls.supportcategoryname.setValue('supportcategoryname');
    component.form.controls.supportitemdescription.setValue('supportitemdescription');
    component.form.controls.hourlyRate.setValue('11');
    component.form.controls.key.setValue('key');
    component.form.controls.end.setValue('30/06/2019');
    component.form.controls.registrationGroupName.setValue('registrationGroupName');
    component.form.controls.a2019HourlyRate.setValue('11');
    component.form.controls.isclientbillable.setValue('true');
    component.form.controls.active.setValue('true');
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
