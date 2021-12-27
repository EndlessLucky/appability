import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormatComponent } from './person-format.component';
import { MatChipsModule } from '@angular/material/chips'; 

describe('PersonFormatComponent', () => {
  let component: PersonFormatComponent;
  let fixture: ComponentFixture<PersonFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonFormatComponent ],
      imports : [MatChipsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
