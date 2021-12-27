import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-unauthorized',
    templateUrl: './unauthorized.component.html',
    styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

    returnUrl: string;

    constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    currentRole = this.authenticationService.getRole();

    logout() : void {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    goBack() : any {

        if ('/login' === this.returnUrl) {
            this.authenticationService.logout();
        }
        return this.router.navigate([this.returnUrl]);
    }

    public requiresRelogin() : any {
        return this.returnUrl.startsWith('/login');
    }

}
