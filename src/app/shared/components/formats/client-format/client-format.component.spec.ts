import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormatComponent } from './client-format.component';

describe('ClientFormatComponent', () => {
  let component: ClientFormatComponent;
  let fixture: ComponentFixture<ClientFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
