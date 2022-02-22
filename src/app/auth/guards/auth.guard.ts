import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.verificaAuthentication()
      .pipe(
        tap(
          isAutenticated => {
            if (!isAutenticated) {
              this._router.navigate(['./auth/login']);
            }
          }
        )
      );
    // if (this._authService.auth.id) return true;
    // console.log('Bloqueado por el Guard - Can Activate')
    // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

    return this._authService.verificaAuthentication()
      .pipe(
        tap(
          isAutenticated => {
            if (!isAutenticated) {
              this._router.navigate(['./auth/login']);
            }
          }
        )
      );
    // if (this._authService.auth.id) return true;
    // console.log('Bloqueado por el Guard - Can Load')
    // return false;
  }


}
