import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if (this.authenticationService.isLoggedIn()) {
            if (this.authenticationService.isRoleAllowed(route)) {
                return true;
            } else {
                // not logged in so redirect to unauthorized page with the return url

                // document.referer returns whole, encoded URL, we just need the route name
                const referrer = document.referrer;
                if (referrer && referrer.length) {
                    const parts = decodeURI(referrer).split('://')[1].split('/');
                    const url = '/' + parts.slice(1).join('/');
                    this.router.navigate(['/unauthorized'], {queryParams: {returnUrl: url}});
                } else {
                    this.router.navigate(['/unauthorized']);
                }

                return false;
            }
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});

        return false;
    }
}
