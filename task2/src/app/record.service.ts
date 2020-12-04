import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponce, IApiResponceById } from './interfaces/apiResponce';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  private readonly URL = 'https://reqres.in/api/users';

  getUserByPage(page: number): Observable<IApiResponce> {
    return this.http.get<IApiResponce>(this.URL + '?page=' + page);
  }

  getUserById(id: number): Observable<IApiResponceById> {
    return this.http.get<IApiResponceById>(this.URL + '/' + id);
  }

  addNewUser(user: {first_name: string, job: string}): void{
    this.http.post(this.URL, user).subscribe(
      (responce) => {
        console.log(responce);
      }
    );
  }

  updateUser(id: number, user: {first_name: string, job: string}): void {
    this.http.put(this.URL + '/' + id, user).subscribe(
      (responce) => {
        console.log(responce);
      }
    );
  }

  deleteUser(id: number): void {
    this.http.delete(this.URL + '/' + id)
        .subscribe(
          data => {
            console.log(data);
          }
        );
  }
}
