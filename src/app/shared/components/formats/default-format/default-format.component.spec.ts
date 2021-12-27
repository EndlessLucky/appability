import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFormatComponent } from './default-format.component';

describe('DefaultFormatComponent', () => {
  let component: DefaultFormatComponent;
  let fixture: ComponentFixture<DefaultFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
