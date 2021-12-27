import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ModelFormatService } from './model-format.service';
import { PersonFormatComponent } from '../components/formats/person-format/person-format.component';
import { ClientPersonFormatComponent } from '../components/formats/client-person-format/client-person-format.component';
import { DefaultFormatComponent } from '../components/formats/default-format/default-format.component';

describe('ModelFormatService', () => {
  let service: ModelFormatService;

  let person_component: PersonFormatComponent;
  let person_fixture: ComponentFixture<PersonFormatComponent>;

  let client_person_component : ClientPersonFormatComponent;
  let client_person_fixture : ComponentFixture<ClientPersonFormatComponent>;

  let default_component : DefaultFormatComponent;
  let default_fixture : ComponentFixture<DefaultFormatComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelFormatService);

    person_fixture = TestBed.createComponent(PersonFormatComponent);
    person_component = person_fixture.componentInstance;
    person_fixture.detectChanges();

    client_person_fixture = TestBed.createComponent(ClientPersonFormatComponent);
    client_person_component = client_person_fixture.componentInstance;
    client_person_fixture.detectChanges();

    default_fixture = TestBed.createComponent(DefaultFormatComponent);
    default_component = default_fixture.componentInstance;
    default_fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return person format component', () => {
    expect(service.getComponent('person')).toBeDefined(person_component);
  });

  it('should return client person format component', () => {
    expect(service.getComponent('client_person')).toBeDefined(client_person_component);
  });

  it('should return default format component', () => {
    expect(service.getComponent('default')).toBeDefined(default_component);
  });
});
