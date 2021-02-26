import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../sevices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userData: {
        email: string;
        _token: string;
      } = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return true;
      }
  
      const loadedUser = new User(
        userData.email,
        userData._token
      );
  
      if (loadedUser.token) {
        this.authService.user.next(loadedUser);
        return this.router.createUrlTree(['/product']);
      }
  }
  
}
