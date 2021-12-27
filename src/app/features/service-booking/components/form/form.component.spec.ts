import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackButtonComponent } from '../../../../shared/grid/components/back-button/back-button.component';
import { MultiAutocompleteComponent } from '../../../service-booking-details/components/multi-autocomplete/multi-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatChipsModule } from '@angular/material/chips'; 

/**
 * @author seagull
 */
describe('features/service-booking/components/FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormComponent, BackButtonComponent, MultiAutocompleteComponent],
            imports: [ HttpClientTestingModule, 
                RouterTestingModule, 
                ReactiveFormsModule, 
                MatCheckboxModule, 
                MatInputModule, 
                MatFormFieldModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatAutocompleteModule,
                MatChipsModule,
                BrowserAnimationsModule],
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
        component.form.controls.serviceBookingNumber.setValue('');
        component.form.controls.start.setValue('');
        component.form.controls.end.setValue('');
        component.form.controls.revisedEnd.setValue('');
        component.form.controls.client.setValue('');
        component.form.controls.details.setValue('');
        expect(component.form.valid).toBeFalsy();
    });

    it('save button should be disabled when empty fields exist', () => {
        component.form.controls.serviceBookingNumber.setValue('');
        component.form.controls.start.setValue('');
        component.form.controls.end.setValue('');
        component.form.controls.revisedEnd.setValue('');
        component.form.controls.client.setValue('');
        component.form.controls.details.setValue('');
        expect(component.form.invalid).toBeTruthy();
    });

    it('save button should be disabled when fileds are invalid', () => {
        component.form.controls.serviceBookingNumber.setValue('no number');
        component.form.controls.start.setValue('no date');
        component.form.controls.end.setValue('no date');
        component.form.controls.revisedEnd.setValue('no date');
        const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
        expect(btn_save.disabled).toBeTruthy;
    });

    it('save button should be enabled when fields are valid', () => {
        component.form.controls.serviceBookingNumber.setValue('123456');
        component.form.controls.start.setValue('1/21/2021');
        component.form.controls.end.setValue('1/21/2021');
        component.form.controls.revisedEnd.setValue('1/21/2021');
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
