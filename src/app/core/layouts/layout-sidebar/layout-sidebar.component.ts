import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent {

  /**
   * Hide the sidebar after menu item clicked?
   */
  hideAfterClick = false;

  @ViewChild('drawer', {static: false}) drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  /**
   * Name of the currently logged in user
   */
  public get currentUserName(): string {
    const currentUser = this.authenticationService.currentUserValue;

    if (currentUser && currentUser.username) {
      return currentUser.username;
    }

    return null;
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthenticationService,
              private router: Router) {

    if (this.hideAfterClick) {
      router.events.pipe(
        withLatestFrom(this.isHandset$),
      ).subscribe(() => {
          this.closeDrawer();
        }
      );
    } else {
      router.events.pipe(
        withLatestFrom(this.isHandset$),
        filter(([a, b]) => b && a instanceof NavigationEnd)
      ).subscribe(() => {
          this.closeDrawer();
        }
      );
    }
  }

  closeDrawer(): void {
    if (this.drawer) {
      this.drawer.close().then();
    }
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


  /**
   * Name of the currently logged in user
   */
  public get currentUserRole(): string {
    return this.authenticationService.getRole();
  }
}
