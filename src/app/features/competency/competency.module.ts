import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { ViewComponent } from './components/view/view.component';
import { CompetencyRoutingModule } from './competency-routing.module';
import { CompetencyService } from './services/competency.service';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
        AutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        CompetencyRoutingModule
    ],
    exports: [
        AutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: CompetencyService},
    ]
})
export class CompetencyModule { }
