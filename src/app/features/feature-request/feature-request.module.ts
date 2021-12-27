import { NgModule } from '@angular/core';
import { FeatureRequestRoutingModule } from './feature-request-routing.module';
import { FormComponent } from './components/form/form.component';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';

import { FeatureRequestService } from './services/feature-request.service';


@NgModule({
  declarations: [FormComponent],
  imports: [
    SharedModule,
    GridModule,
    FeatureRequestRoutingModule
  ],
  providers: [
    {provide: RestApiService, useClass: FeatureRequestService},
]
})
export class FeatureRequestModule { }
