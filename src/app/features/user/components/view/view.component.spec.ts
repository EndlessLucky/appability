import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared/shared.module';

import { ViewComponent } from './view.component';

describe('features/user/components/ViewComponent', () => {
    let component: ViewComponent;
    let fixture: ComponentFixture<ViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ViewComponent ],
            imports: [ SharedModule, HttpClientTestingModule,  RouterTestingModule.withRoutes([{ path: ':id', component: ViewComponent }])],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
