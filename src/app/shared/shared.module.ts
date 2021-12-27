import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseFormComponent } from './components/base-form/base-form.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { TextGrabberComponent } from './components/text-grabber/text-grabber.component';
import { UserComponent } from './components/user/user.component';
import { CopyClipboardDirective } from './directives/copy-clipboard.directive';
import { HasRoleDirective } from './directives/has-role.directive';
import { HoldableDirective } from './directives/holdable.directive';
import { InitialsImagePipe } from './pipes/initials-image.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TruncatedComponent } from './components/truncated/truncated.component';
import { WordizePipe } from './pipes/wordize.pipe';
import { MatIconModule } from '@angular/material/icon'; 
import { DisplayModelFormatComponent } from './components/display-model-format/display-model-format.component';
// import { PersonFormatComponent } from './components/formats/person-format/person-format.component';
import { FormatsModule } from './components/formats/formats.module';
@NgModule({
    declarations: [
        HoldableDirective,
        HasRoleDirective,
        CopyClipboardDirective,
        InitialsImagePipe,
        TruncatePipe,
        WordizePipe,
        UserComponent,
        CurrentUserComponent,
        TruncatedComponent,
        BaseFormComponent,
        TextGrabberComponent,
        DisplayModelFormatComponent,
        // PersonFormatComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        FormatsModule
    ],
    exports: [
        CommonModule,
        HoldableDirective,
        HasRoleDirective,
        CopyClipboardDirective,
        InitialsImagePipe,
        UserComponent,
        CurrentUserComponent,
        TruncatedComponent,
        RouterModule,
        TruncatePipe,
        WordizePipe,
        TextGrabberComponent,
        DisplayModelFormatComponent,
    ],
    providers: [
    //  !!!
    // shared module should not have providers! (nor import modules having providers!)
    // !!!
    ],
})
export class SharedModule { }
