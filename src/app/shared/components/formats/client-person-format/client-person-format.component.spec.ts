import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPersonFormatComponent } from './client-person-format.component';

describe('ClientPersonFormatComponent', () => {
  let component: ClientPersonFormatComponent;
  let fixture: ComponentFixture<ClientPersonFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPersonFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPersonFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
