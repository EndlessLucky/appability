import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadComponent } from '../../../../shared/grid/components/file-upload/file-upload.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

/**
 * @author seagull
 */
describe('features/person/components/FormComponent', () => {
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
                MatSlideToggleModule, 
                MatCheckboxModule, 
                MatSelectModule,
                MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule,
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
        component.form.controls.useremail.setValue('');
        component.form.controls.firstname.setValue('');
        component.form.controls.surname.setValue('');
        component.form.controls.phone.setValue('');
        component.form.controls.address.setValue('');
        component.form.controls.preferredName.setValue('');
        component.form.controls.dateOfBirth.setValue('');
        component.form.controls.gender.setValue('');
        component.form.controls.ndisNumber.setValue('');
        component.form.controls.planStartDate.setValue('');
        component.form.controls.planReviewDate.setValue('');
        component.form.controls.notes.setValue('');
        component.form.controls.image.setValue('');
        component.form.controls.employer.setValue('');
        // component.form.controls.contractorDetail.setValue('');
        component.form.controls.isKeyContactForEmployer.setValue('');
        component.form.controls.reportcount.setValue('');
        component.form.controls.staffreportcount.setValue('');
        component.form.controls.suburb.setValue('');
        component.form.controls.postCode.setValue('');
        component.form.controls.hasRestrictivePractices.setValue('');
        // component.form.controls.staffCompliance.setValue('');
        expect(component.form.valid).toBeFalsy();
    });

    it('save button should be disabled when empty fields exist', () => {
        component.form.controls.useremail.setValue('');
        component.form.controls.firstname.setValue('');
        component.form.controls.surname.setValue('');
        component.form.controls.phone.setValue('');
        component.form.controls.address.setValue('');
        component.form.controls.preferredName.setValue('');
        component.form.controls.dateOfBirth.setValue('');
        component.form.controls.gender.setValue('');
        component.form.controls.ndisNumber.setValue('');
        component.form.controls.planStartDate.setValue('');
        component.form.controls.planReviewDate.setValue('');
        component.form.controls.notes.setValue('');
        component.form.controls.image.setValue('');
        component.form.controls.employer.setValue('');
        // component.form.controls.contractorDetail.setValue('');
        component.form.controls.isKeyContactForEmployer.setValue('');
        component.form.controls.reportcount.setValue('');
        component.form.controls.staffreportcount.setValue('');
        component.form.controls.suburb.setValue('');
        component.form.controls.postCode.setValue('');
        component.form.controls.hasRestrictivePractices.setValue('');
        // component.form.controls.staffCompliance.setValue('');
        expect(component.form.invalid).toBeTruthy();
    });

    it('save button should be disabled when fileds are invalid', () => {
        component.form.controls.useremail.setValue('abc');
        component.form.controls.phone.setValue('no number');
        component.form.controls.dateOfBirth.setValue('no date');
        component.form.controls.gender.setValue('no gender');
        component.form.controls.ndisNumber.setValue('no number');
        component.form.controls.planStartDate.setValue('no date');
        component.form.controls.planReviewDate.setValue('no date');
        component.form.controls.isKeyContactForEmployer.setValue('no boolean');
        component.form.controls.reportcount.setValue('no number');
        component.form.controls.staffreportcount.setValue('no number');
        component.form.controls.postCode.setValue('no number');
        component.form.controls.hasRestrictivePractices.setValue('no boolean');
        const btn_save: HTMLButtonElement = de.query(By.css('.btn-save')).nativeElement;
        expect(btn_save.disabled).toBeTruthy;
    });

    it('save button should be enabled when fields are valid', () => {
        component.form.controls.useremail.setValue('test@email.com');
        component.form.controls.firstname.setValue('firstname');
        component.form.controls.surname.setValue('surname');
        component.form.controls.phone.setValue('+1234567890');
        component.form.controls.address.setValue('my address');
        component.form.controls.preferredName.setValue('prefered name');
        component.form.controls.dateOfBirth.setValue('17/04/2008');
        component.form.controls.gender.setValue('male');
        component.form.controls.ndisNumber.setValue('430348273');
        component.form.controls.planStartDate.setValue('17/04/2008');
        component.form.controls.planReviewDate.setValue('2021-05-01');
        component.form.controls.notes.setValue('my notes');
        component.form.controls.image.setValue('Person_Images/0582727e.Image.001601.jpg');
        component.form.controls.employer.setValue['employer'];
        // component.form.controls.contractorDetail.setValue('contractor detail');
        component.form.controls.isKeyContactForEmployer.setValue('TRUE');
        component.form.controls.reportcount.setValue('10');
        component.form.controls.staffreportcount.setValue('10');
        component.form.controls.suburb.setValue('suburb');
        component.form.controls.postCode.setValue('2154');
        component.form.controls.hasRestrictivePractices.setValue('false');
        // component.form.controls.staffCompliance.setValue('cecbd5f8');
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
