import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayModelFormatComponent } from './display-model-format.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PersonModel } from '../../../features/person/models/person.model';

describe('DisplayModelFormatComponent', () => {
  let component: DisplayModelFormatComponent;
  let fixture: ComponentFixture<DisplayModelFormatComponent>;
  let model : PersonModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayModelFormatComponent ],
      imports : [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayModelFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should instantiatе hosted component correctly", () => {
    fixture.componentInstance.text = 'text';
    fixture.componentInstance.colName = 'firstname';
    fixture.componentInstance.model = model;
    fixture.detectChanges();
    expect(fixture.componentInstance.text).toBe('text');
    expect(fixture.componentInstance.colName).toBe('firstname');
    expect(fixture.componentInstance.model).toBe(model);
  });
});
