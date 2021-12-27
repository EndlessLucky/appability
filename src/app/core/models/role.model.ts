/**
 * Rbac roles
 *
 * @see AuthenticationService::getRole()
 */

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

/**
 * TODO: implement role inheritance
 */
export class RoleManager {
    public static allRoles(): string[] {
        return Object.keys(Role).filter(key => isNaN(Number(Role[key]))).filter(key => key !== Role.ALL);
    }

    public static allExcept(roles): string[] {
        if (typeof roles === 'string') {
            roles = [roles];
        }

        // includes and filter methods are available in ES6
        return this.allRoles().filter(value => !roles.includes(value));
    }

    public static only(roles) {
        if (typeof roles === 'string') {
            return [roles];
        }

        return roles;
    }

    public static require(roles) {
        return this.only(roles);
    }
}
