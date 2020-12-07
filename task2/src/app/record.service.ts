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

  public addNewUser(user: {first_name: string, job: string}): void{
    this.http.post(this.URL, user).subscribe(
      (responce) => {
        console.log(responce);
      }
    );
  }

  public updateUser(id: number, user: {first_name: string, job: string}): void {
    this.http.put(this.URL + '/' + id, user).subscribe(
      (responce) => {
        console.log(responce);
      }
    );
  }

  public deleteUser(id: number): void {
    this.http.delete(this.URL + '/' + id)
        .subscribe(
          data => {
            console.log(data);
          }
        );
  }
}
