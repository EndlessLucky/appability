import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ModelFormatService } from '../../services/model-format.service';
import { PersonFormatComponent } from './person-format/person-format.component';
import { ClientPersonFormatComponent } from './client-person-format/client-person-format.component';
import { DefaultFormatComponent } from './default-format/default-format.component';
import { PaymentRequestFormatComponent } from './payment-request-format/payment-request-format.component';
import { ClientFormatComponent } from './client-format/client-format.component';

@NgModule({
  declarations: [
    PersonFormatComponent,
    ClientPersonFormatComponent,
    DefaultFormatComponent,
    PaymentRequestFormatComponent,
    ClientFormatComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers : [
    ModelFormatService
  ]
})
export class FormatsModule { }

