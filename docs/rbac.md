# RBAC access management 

(RBAC = Role Based Access Control)


## Available roles

Available roles are defined in `Role` (`src/app/core/models/role.model.ts`):

``````
export enum Role {
  // role string from API   role in Angular     explanation

          Guest   =         'Guest',          // not logged in at all
          User    =         'User',           // logged in, with default privileges
          Editor  =         'Editor',         // logged in, with default privileges
          Admin   =         'Admin',          // almost all privileges
          Root    =         'Root',           // all privileges (including programming and security related stuff)

          None = 'Admin', // this is an alias

          ALL = 'ALL', // generic role to allow public access
}
``````

### Adding new roles

In the above file you can define any new roles.  
Note this should be compatible with roles returned from API.

### Special roles

`Role.Guest` - this role is returned for all unknown roles or unauthorized users (default role)

`Role.Root` - has access to any route, without any further checking

'Role.ALL' - can be used instead of listing all or the roles one by one

## Currently logged in user role

The current role is stored in `AuthenticationService` (`src/app/core/services/authentication.service.ts`).  
This is a behavior subject holding `User` model (`src/app/core/models/user.model.ts`), 
which includes user id, username, his role and some other data provided by API.  
They are extracted from the JSON web token.

## Route guard

`AuthGuard` (`src/app/core/guards/auth.guard.ts`) checks if the currently logged user has access to the current route.

## Route access for roles

You can set which role can access which route when defining routes (in any routing module).  
For this you need to provide an array of roles which may access the route by providing `data.roles` array and enabling `canActivate: [AuthGuard].

Example:

`````
// src/app/core/core-routing.module.ts

const routes: Routes = [
  {
    path: '',
    component: LayoutSidebarComponent,
    canActivate: [AuthGuard], // <-- this route and it's children are protected by this Guard
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            title: 'Dashboard',
            roles: RoleManager.allExcept(Role.Guest) // <-- all roles, except Guest (not logged in)
          }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Dashboard',
          roles: [Role.Admin] // <- only admins are allowed to access this page
        }
      },
    ...
`````

### RoleManager helper

`RoleManager` helper (`src/app/core/models/role.model.ts`) has few useful methods for providing list of roles to guard:

- `RoleManager.allRoles()` - returns all available roles  
- `RoleManager.allExcept()` - returns all available roles except one (or some)  
- `RoleManager.only()` - returns list of provided roles (same as providing them as array)
- `RoleManager.require()` - alias for `only()`

## Default access policy

There are two optional access policies for routes which has no defined access roles (`data.roles`):

`AccessPolicy.ALLOW` - allow access by default

`AccessPolicy.DENY` - deny by default

The default one is `Deny`.

This can be changed in `AuthenticationService` (`src/app/core/services/authentication.service.ts`):

````
  private defaultPolicy: AccessPolicy = AccessPolicy.DENY;
````


## *appHasRole directive

The `HasRole` directive displays conditional content depending on current user role.

```
// Sample usage:

<div *appHasRole="'Admin">
      Content visible only for admins
</div>
```
 
