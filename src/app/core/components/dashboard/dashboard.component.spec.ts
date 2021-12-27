import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
// import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackButtonComponent } from '../../../shared/grid/components/back-button/back-button.component';

describe('core/components.DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent, BackButtonComponent],
            imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // let spectator: Spectator<DashboardComponent>;
    // const createComponent = createComponentFactory({
    //     component : DashboardComponent,
    //     imports: [SharedModule, HttpClientModule, RouterTestingModule]
    // });

    // beforeEach(() => spectator = createComponent());

    // it('should create', () => {
    //     expect(spectator.component).toBeTruthy();
    // });


});
