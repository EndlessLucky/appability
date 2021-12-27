import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    apiUrl = environment.apiUrl;

    /**
     * Readable environment name (production or development)
     *
     * @returns
     */
    getEnvName(): string {
        if (environment.production) {
            return 'production';
        }

        return 'development';
    }
}
