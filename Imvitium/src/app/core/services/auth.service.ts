import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUserModel } from '../models/login-user.model';
import { SignUpUserModel } from '../models/signup-user.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new BehaviorSubject<LoginUserModel>(null);

  constructor(private http: HttpClient) { }

  public signUpUser(userData: SignUpUserModel): Observable<string> {
    return this.http.post<string>(environment.url+"api/public/api/register1", userData);
  }

  public loginUser(userData: {email: string, password: string}): Observable<LoginUserModel> {
    return this.http.post<LoginUserModel>(environment.url+"api/public/api/login", userData);
  }

  public getUserDataByID(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(environment.url+"api/public/api/user/"+id);
  }
}
