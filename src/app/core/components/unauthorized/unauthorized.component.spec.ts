import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { UnauthorizedComponent } from './unauthorized.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackButtonComponent } from '../../../shared/grid/components/back-button/back-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('core/components/UnauthorizedComponent', () => {
    let component: UnauthorizedComponent;
    let fixture: ComponentFixture<UnauthorizedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UnauthorizedComponent, BackButtonComponent],
            imports: [
                HttpClientTestingModule, RouterTestingModule.withRoutes([{ path: 'unauthorized', component: UnauthorizedComponent }])
            ],
            providers: [
                AuthenticationService,
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UnauthorizedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
