import { NgModule } from '@angular/core';
import { GridModule } from '../../shared/grid/grid.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './components/index/index.component';
import { HelpRoutingModule } from './help-routing.module';



@NgModule({
    declarations: [
        IndexComponent,
    ],
    imports: [
        SharedModule,
        GridModule,
        HelpRoutingModule
    ],
    exports: [
    ],
    providers: [
    // {provide: RestApiService, useClass: UserService},
    ],
    // entryComponents: [
    // FormComponent
    // ]
})
export class HelpModule { }
