import { HttpClient } from '@angular/common/http';
import { reflectObjectLiteral } from '@angular/compiler-cli/src/ngtsc/reflection';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AccessPolicy } from '../models/access-policy.enum';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private defaultPolicy: AccessPolicy = AccessPolicy.deny;

    private defaultRole = Role.Guest;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}oauth`, { username, password })
            .pipe(
                map((response) => {
                    const user = this.jwt2user(response.access_token, username);
                    // store response details and jwt token in local storage to keep response logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return response;
                }
                )
            );
    }

    // refreshToken() {
    //   return this.http.post<any>(`${config.apiUrl}/refresh`, {
    //     'refreshToken': this.getRefreshToken()
    //   }).pipe(tap((tokens: Tokens) => {
    //     this.storeJwtToken(tokens.jwt);
    //   }));
    // }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}oauth/refresh`, {grant_type: 'refresh_token_cookie', client_id: 'testclient', client_secret: 'testpass'})
            .pipe(
                map((response) => 
                // const user = this.jwt2user(response.access_token, username);
                // store response details and jwt token in local storage to keep response logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                // this.currentUserSubject.next(user);

                    response
          
                )
            );
    }


    decodeJwt(token) {
        try {
            const decoded = jwt_decode(token);
            return decoded;
        } catch (Error) {
            return null;
        }
    }

    isTokenExpired(token) {
        const decoded = this.decodeJwt(token);
        const exp = new Date(decoded.exp * 1000);
        if (decoded) {
            return exp.getTime() < new Date().getTime();
        }

        return true;
    }

    isExpExpired(e) {
        const exp = new Date(e * 1000);
        return exp.getTime() < new Date().getTime();
    }

    jwt2user(token, username) {
        const decoded = this.decodeJwt(token);
        const user = new User();
        user.id = decoded.sub;
        user.username = username;
        user.token = token;
        user.role = this.string2role(decoded.user.role);

        return user;
    }

    logout() {
    // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    isLoggedIn() {
        if (this.currentUserValue) {
            if (!this.isTokenExpired(this.currentUserValue.token)) {
                return true;
            }
        }

        return false;
    }

    getRole() {
        if (this.currentUserValue) {
            if (!this.isTokenExpired(this.currentUserValue.token)) {
                return this.currentUserValue.role;
            }
        }

        return this.getDefaultRole();
    }

    getToken() {
        const currentUser = this.currentUserValue;
        if (currentUser) {
            return currentUser.token;
        }

        return null;
    }

    roleExists(role) {
        if (typeof role === 'string') {
            for (const roleName in Role) {
                if (isNaN(Number(roleName))) {
                    if (roleName === role) {
                        return Role[roleName];
                    }
                }
            }
        }

        return false;
    }

    string2role(roleString: string) {
    // make it first capitalized lowercase Rolename
        roleString = roleString.charAt(0).toUpperCase() + roleString.slice(1).toLowerCase();
        const role = this.roleExists(roleString);
        if (role) {
            return role;
        }

        return this.defaultRole;
    }

    getDefaultRole() {
        return this.defaultRole;
    }

    isRoleAllowed(route: ActivatedRouteSnapshot) {
        const role = this.getRole();
        if (role === Role.Root) {
            // Root role has access to anything
            return true;
        }

        const routeData = this.getRouteData(route);
        if (routeData && routeData.roles) {
            if (routeData.roles.indexOf(Role.ALL) !== -1) {
                return true;
            }

            if (routeData.roles.indexOf(role) !== -1) {
                return true;
            }
        }

        return this.asDefaultPolicy();
    }

    getRouteData(route) {
        if (route.firstChild) {
            if (route.firstChild.data) {
                return route.firstChild.data;
            }
        } else {
            if (route.data) {
                return route.data;
            }
        }

        return false;
    }

    asDefaultPolicy(): boolean {
        switch (this.defaultPolicy) {
        case AccessPolicy.allow:
            return true;
        case AccessPolicy.deny:
            return false;
        }

        return null;
    }

    isRoleOnList(roleList = [], role = null) {
        if (null === role) {
            role = this.getRole();
        }
        return roleList.filter(r => r === role).length;
    }

    isAnyPermissionOnList(list, permissions) {
        for (const permission of permissions) {
            for (const item of list) {
                if (item === permission) {
                    return true;
                }
            }
        }

        return false;
    }

    isAllowed(resourceDefinitions, resourceName, actions, role = null) {
        let defaultValue = true;
        const resources = resourceDefinitions.filter(access => access.resource === resourceName);
        if (resources && resources.length) {
            if (null === role) {
                role = this.getRole();
            }
            const roleResources = resources.filter(access => this.isRoleOnList(access.roles, role));
            if (roleResources && roleResources.length) {
                const actionOnList = roleResources.filter(access => this.isAnyPermissionOnList(access.permissions, actions));

                if (actionOnList && actionOnList.length) {
                    return true;
                } else {
                    return actionOnList[0].default;
                }
            } else {
                defaultValue = resources[0].default;
            }
        } else {
            // return default
        }

        return defaultValue;
    }
}
