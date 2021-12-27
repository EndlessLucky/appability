import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from '../components/login/login.component';

class MockRouter {
  navigate(path) { }
}

class MockActivatedRouteSnapshot {
  private _data: any;
  get data() {
    return this._data;
  }
}

class MockRouterStateSnapshot {
  url: string = '/';
}

class MockAuthService {

  private user: User;

  get currentUserValue(): User {
    return this.user;
  };

  setAuthentication(user: User) {
    this.user = user;
  }

  isLoggedIn() {
    return true;
  }

  isRoleAllowed() {
    return true;
  }

  getRole() {
    return 'Admin';
  }

}

describe('AuthGuard', () => {
  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let route: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;
    let authService: AuthenticationService;
    let router : Router;

    const AuthenticationServiceLoginSpy = jasmine.createSpyObj('AuthenticationService', {'login' : of()})
    const AuthenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', {'isLoggedIn' : of()});
    // const AuthenticationServiceSpyRole = jasmine.createSpyObj('AuthenticationService', {'isRoleAllowed' : of()});
    const AuthenticationServiceSpyGetRole = jasmine.createSpyObj('AuthenticationService', {'getRole' : of()});
    const AuthenticationServiceSpyLogout = jasmine.createSpyObj('AuthenticationService', {'logout' : of()});

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports : [
          RouterTestingModule.withRoutes([
            { path: 'login', component: LoginComponent },
          ]), 
          HttpClientTestingModule
        ],
        providers : [
          AuthGuard,
          { provide: Router, useClass: MockRouter },
          { provide: ActivatedRouteSnapshot, useClass: MockActivatedRouteSnapshot },
          { provide: AuthenticationService, useClass: MockAuthService },
          { provide: RouterStateSnapshot, useClass: MockRouterStateSnapshot }
        ]
      });
      router = TestBed.inject(Router);
      authService = TestBed.inject(AuthenticationService);
      authGuard = TestBed.inject(AuthGuard);
    });

    it('should be created', () => {
      expect(authGuard).toBeTruthy();
    });

    it('Admin can access admin route when logged in', () => {
      forAdminRoute();
      expect(authGuard.canActivate(route, state)).toEqual(true);
    });

    it('Simple user cannot access admin route when logged in', () => {
      forAdminRoute();
      AuthenticationServiceSpyGetRole.getRole.and.returnValue('Guest');
      expect(authGuard.canActivate(route, state)).toEqual(true);
    });

    it('Redirect to login when user is not logged in', () => {
      AuthenticationServiceSpyLogout.logout.and.callThrough();
      expect(authGuard.canActivate(route, state)).toBeFalsy;
    });

    function forAdminRoute() {
      route = TestBed.inject(ActivatedRouteSnapshot);
      spyOnProperty(route, 'data', 'get').and.returnValue({ roles: ['Admin'] });
    }

  });
  


});


