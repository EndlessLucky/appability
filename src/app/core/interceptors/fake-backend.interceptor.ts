import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
    HttpEventType
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize, tap, map } from 'rxjs/operators';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';

const users: User[] = [{ id: 1, username: 'test@example.com', password: 'test', firstName: 'Test', lastName: 'User', role: Role.Guest }];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        // return of(null)
        //   .pipe(mergeMap(handleRoute))
        //   .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        //   .pipe(delay(500))
        //   .pipe(dematerialize());

        return handleRoute();

        function handleRoute() {
            switch (true) {
            case url.endsWith('/oauth') && method === 'POST':
                return authenticate();
            case url.endsWith('/users') && method === 'GET':
                return getUsers();
            default:
                // pass through any requests not handled above
                return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            body.client_id = 'testclient';
            body.client_secret = 'testpass';
            body.grant_type = 'password';
            request = request.clone({
                headers: request.headers.set('Accept', 'application/json'),
                body
            }
            );

            return next
                .handle(request)
                .pipe(
                    tap(req => console.log(req)),
                    map((req: HttpResponse<any>) => req)
                );

            // const { username, password } = body;
            // const user = users.find(x => x.username === username && x.password === password);
            // if (!user) return error('Username or password is incorrect');
            // return ok({
            //   id: user.id,
            //   username: user.username,
            //   firstName: user.firstName,
            //   lastName: user.lastName,
            //   token: 'fake-jwt-token'
            // })
        }

        function getUsers() {
            if (!isLoggedIn()) {
                return unauthorized(); 
            }
            return ok(users);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
