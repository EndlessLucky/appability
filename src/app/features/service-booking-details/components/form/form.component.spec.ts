import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AutocompleteComponent } from '../../../../features/support-item/components/autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SupportItemService } from '../../../../features/support-item/services/support-item.service';
import { FundsManagementComponent } from '../../../../features/ability-consultants-referral-form/components/funds-management/funds-management.component';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientTestingModule } from '@angular/common/http/testing';

/**
 * @author seagull
 */
describe('features/service-booking-details/components/FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormComponent, AutocompleteComponent, FundsManagementComponent],
            imports: [ HttpClientTestingModule, 
                RouterTestingModule, 
                ReactiveFormsModule, 
                MatCheckboxModule, 
                MatInputModule, 
                MatFormFieldModule,
                MatAutocompleteModule,
                SharedModule,
                MatSelectModule,
                BrowserAnimationsModule],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            providers : [
                SupportItemService
            ]
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
        component.form.controls.supportBudget.setValue('');
        component.form.controls.supportItemId.setValue('');
        component.form.controls.descriptionOfServicesOutcomeMeasures.setValue('');
        component.form.controls.hours.setValue('');
        component.form.controls.allocatedAmount.setValue('');
        component.form.controls.fundsManagement.setValue('');
        expect(component.form.valid).toBeFalsy();
    });

    it('save button should be disabled when empty fields exist', () => {
        component.form.controls.supportBudget.setValue('');
        component.form.controls.supportItemId.setValue('');
        component.form.controls.descriptionOfServicesOutcomeMeasures.setValue('');
        component.form.controls.hours.setValue('');
        component.form.controls.allocatedAmount.setValue('');
        component.form.controls.fundsManagement.setValue('');
        expect(component.form.invalid).toBeTruthy();
    });

    it('save button should be disabled when fileds are invalid', () => {
        component.form.controls.allocatedAmount.setValue('abc');
        const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
        expect(btn_save.disabled).toBeTruthy;
    });

    it('save button should be enabled when fields are valid', () => {
        component.form.controls.allocatedAmount.setValue('000');
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
