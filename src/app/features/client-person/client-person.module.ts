import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { ClientRelationshipModule } from '../client-relationship/client-relationship.module';
import { ClientRelationshipService } from '../client-relationship/services/client-relationship.service';
import { PersonModule } from '../person/person.module';
import { PersonService } from '../person/services/person.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { MultiAutocompleteComponent } from './components/multi-autocomplete/multi-autocomplete.component';
import { ViewComponent } from './components/view/view.component';
import { ClientPersonRoutingModule } from './client-person-routing.module';
import { ClientPersonService } from './services/client-person.service';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
        AutocompleteComponent,
        MultiAutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        ClientPersonRoutingModule,
        ClientRelationshipModule,
        PersonModule
    ],
    exports: [
        AutocompleteComponent,
        MultiAutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: ClientPersonService},
        ClientRelationshipService,
        PersonService
    ]
})
export class ClientPersonModule { }
