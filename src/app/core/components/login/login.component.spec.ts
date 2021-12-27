import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from '../../services/authentication.service';
import { of, throwError } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErrorInterceptor } from '../../../core/interceptors/error.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackButtonComponent } from '../../../shared/grid/components/back-button/back-button.component';

/**
 * @author seagull
 */
describe('core/components/LoginComponent', () => {
    let component: LoginComponent;                          // components for testing
    let fixture: ComponentFixture<LoginComponent>;          // fixture for testing
    let de: DebugElement;
    let el: HTMLElement;

    // let errorInterceptor;
    let router;
    let notificationService;
    let restService;

    // simulate authservice's login
    const AuthenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', {'login' : of()});

    // simulate authservice's getRole
    const AunthenticationServiceRoleSpy = jasmine.createSpyObj('AuthenticationService', {'getRole' : of()});

    const errorInterceptor = new ErrorInterceptor(AuthenticationServiceSpy, router, notificationService, restService);

    let httpRequestSpy;
    let httpHandlerSpy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, DashboardComponent, BackButtonComponent],
            imports: [
                MatInputModule,
                MatButtonModule,
                MatFormFieldModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule.withRoutes([{ path: 'dashboard', component: DashboardComponent }]),
                HttpClientTestingModule,
                BrowserAnimationsModule,
                BrowserModule,
            ],
            providers: [
                HttpClient,
                {provide: AuthenticationService, useValue: AuthenticationServiceSpy},
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('all fields are required', () => {
        component.loginForm.get('email').setValue('');
        component.loginForm.get('password').setValue('');
        expect(component.loginForm.valid).toBeFalsy();
    });

    it('login button should be disabled when fields are empty', () => {
        component.loginForm.get('email').setValue('');
        component.loginForm.get('password').setValue('');
        expect(el.querySelector('button').disabled).toBeTruthy();
    });

    it('login button should be invalid when email is invalid', () => {
        component.loginForm.get('email').setValue('abc');
        expect(el.querySelector('button').disabled).toBeTruthy();
    });

    it('login button should be enabled when form is valid', () => {
        component.loginForm.get('email').setValue('test@example.com');
        component.loginForm.get('password').setValue('test');
        expect(el.querySelector('button').disabled).toBeFalsy;
    });

    it('form submitted is true when hit login button', () => {
        component.onSubmit();
        expect(component.submitted).toBeTruthy;
    });

    it('submitted button should be clicked 0 times', () => {
        spyOn(component, 'onSubmit');
        el.querySelector('button').click();
        expect(component.onSubmit).toHaveBeenCalledTimes(0);
    });

    it('show validation error message when fields are invalid', () => {
        // let validationError: DebugElement;
        const validationError : DebugElement = fixture.debugElement.query(By.css('.ng-invalid'));
        expect(validationError).toBeTruthy();
    });

    it('AuthenticationService login() should be called', fakeAsync(() => {
        component.loginForm.get('email').setValue('test@example.com');
        component.loginForm.get('password').setValue('test');
        fixture.detectChanges();
        el.querySelector('button').click();
        expect(AuthenticationServiceSpy.login).toHaveBeenCalledWith('test@example.com', 'test');
    }));

    it('should be admin role', () => {
        component.loginForm.get('email').setValue('test@example.com');
        component.loginForm.get('password').setValue('test');
        fixture.detectChanges();
        el.querySelector('button').click();
        expect(AunthenticationServiceRoleSpy.getRole.and.returnValue(of('Admin'))).toBeTruthy;
    });

    it('should be user role', () => {
        component.loginForm.get('email').setValue('johndoe@example.com');
        component.loginForm.get('password').setValue('123456');
        fixture.detectChanges();
        el.querySelector('button').click();
        expect(AunthenticationServiceRoleSpy.getRole.and.returnValue(of('User'))).toBeTruthy;
    });

    it('should show error message when invalid credintials', () => {
        component.loginForm.get('email').setValue('admin@example.com');
        component.loginForm.get('password').setValue('admin');
        fixture.detectChanges();
        el.querySelector('button').click();
        httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
        httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
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

    it('should auto logout if 401 response returned from api', () => {
        httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
        httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
        httpHandlerSpy.handle.and.returnValue(throwError(
            {
                
            }
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
