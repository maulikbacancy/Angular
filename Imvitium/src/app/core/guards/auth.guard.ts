import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authService.user.pipe(
        take(1),
        map(user => {
          if (!!user) {
            if(user.register.type === 'user' && state.url === '/admin') {
              return this.router.createUrlTree(['/useredit']);
            }
            return true;
          }
          return this.router.createUrlTree(['/auth/login']);
        })
      );
  }
  
}
