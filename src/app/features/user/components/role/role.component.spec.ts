import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GridModule } from '../../../../shared/grid/grid.module';
import { SharedModule } from '../../../../shared/shared.module';
import { RoleComponent } from './role.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackButtonComponent } from '../../../../shared/grid/components/back-button/back-button.component';

describe('features/user/components/RoleComponent', () => {
    let component: RoleComponent;
    let fixture: ComponentFixture<RoleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoleComponent, BackButtonComponent],
            imports: [
                SharedModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
                GridModule,
                RouterTestingModule.withRoutes([{path: ':id/role', component: RoleComponent}])
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
