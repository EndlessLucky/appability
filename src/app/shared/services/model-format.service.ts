import { Injectable } from '@angular/core';
import { PersonFormatComponent } from '../components/formats/person-format/person-format.component';
import { ClientPersonFormatComponent } from '../components/formats/client-person-format/client-person-format.component';
import { DefaultFormatComponent } from '../components/formats/default-format/default-format.component';
import { PaymentRequestFormatComponent } from '../components/formats/payment-request-format/payment-request-format.component';
import { ClientFormatComponent } from '../components/formats/client-format/client-format.component';

@Injectable({
  providedIn: 'root'
})
export class ModelFormatService {

  models = {
    'person' : PersonFormatComponent,
    'client_person' : ClientPersonFormatComponent,
    'payment_request' : PaymentRequestFormatComponent,
    'client' : ClientFormatComponent,
    'default' : DefaultFormatComponent
  }

  getComponent(key : string) : any{
    if (Object.keys(this.models).includes(key)) {
      return this.models[key];
    }
    else {
      return this.models['default'];
    }
  }
}
