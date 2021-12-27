import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { InitialsImagePipe } from '../../pipes/initials-image.pipe';

import { CurrentUserComponent } from './current-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('shared/components/UserComponent', () => {
    let component: CurrentUserComponent;
    let fixture: ComponentFixture<CurrentUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CurrentUserComponent, InitialsImagePipe ],
            imports: [RouterModule, HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
