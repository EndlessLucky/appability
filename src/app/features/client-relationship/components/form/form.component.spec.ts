import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox'; 

/**
 * @author seagull
 */
describe('features/client-relationship/components/FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ 
        HttpClientTestingModule, 
        RouterTestingModule, 
        ReactiveFormsModule, 
        MatInputModule,
        MatAutocompleteModule,
        MatCheckboxModule,
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
    component.form.controls.relationship.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('save button should be disabled when empty fields exist', () => {
    component.form.controls.relationship.setValue('');
    expect(component.form.invalid).toBeTruthy();
  });

  it('save button should be disabled when fileds are invalid', () => {
    component.form.controls.relationship.setValue('no value in relationship');
    const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
    expect(btn_save.disabled).toBeTruthy;
  });

  it('save button should be enabled when fields are valid', () => {
    component.form.controls.relationship.setValue('Brother');
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
