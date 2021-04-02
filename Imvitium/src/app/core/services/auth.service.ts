import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChangePasswordModel } from '../models/change-password.model';
import { LoginUserModel } from '../models/login-user.model';
import { SignUpUserModel } from '../models/signup-user.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new BehaviorSubject<LoginUserModel>(null);

  constructor(private http: HttpClient, private router: Router) { }

  public signUpUser(userData: SignUpUserModel): Observable<string> {
    return this.http.post<string>(environment.url+"api/api/register1", userData);
  }

  public loginUser(userData: {email: string, password: string}): Observable<LoginUserModel> {
    return this.http.post<LoginUserModel>(environment.url+"api/api/login", userData);
  }

  public verifyEmail(token: string): Observable<string> {
    return this.http.post<string>(environment.url+"api/api/register1/verify", {token: token});
  }

  public resetPassword(password: string, token: string): Observable<any> {
    return this.http.put<any>(environment.url+"api/api/resetpassword", {token: token,new_password: password});
  }

  public autoLogin(): void {
    const userData: LoginUserModel = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = userData;

    if (loadedUser.access_token) {
      this.user.next(loadedUser);
      // const expirationDuration =
      //   new Date(userData.expires_in).getTime() -
      //   new Date().getTime();
      // this.autoLogout(expirationDuration);
    }
  }

  public logout(): void {
    this.user.next(null);
    this.router.navigate(['/auth/login']);
    localStorage.removeItem('userData');
  }

  public forgotPassword(email: string): Observable<string> {
    return this.http.post<string>(environment.url+'api/api/forgot_password', {email: email});
  }

  public getUserDataByID(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(environment.url+"api/api/user/"+id);
  }

  public changePassword(id: string, data: ChangePasswordModel): Observable<string> {
    return this.http.put<string>(environment.url+"api/api/change_password/"+id, data);
  }
}
