import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponce, UserDataDetail } from './interfaces/apiResponce';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  public editUser: UserDataDetail;

  private readonly URL = 'https://reqres.in/api/users';

  public getUserByPage(page: number): Observable<IApiResponce> {
    return this.http.get<IApiResponce>(this.URL + '?page=' + page);
  }

  public addNewUser(user: {first_name: string, job: string}): Observable<any> {
    return this.http.post(this.URL, user);
  }

  public updateUser(id: number, user: {first_name: string, job: string}): Observable<any> {
    return this.http.put(this.URL + '/' + id, user);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }
}
