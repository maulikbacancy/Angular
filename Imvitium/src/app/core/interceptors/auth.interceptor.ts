import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { exhaustMap, take } from 'rxjs/operators';
import { LoginUserModel } from '../models/login-user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user: LoginUserModel) => {
        if (!user) {
          return next.handle(request);    
        }
        const modifiedReq = request.clone({
          params: new HttpParams().set('auth', user.access_token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
