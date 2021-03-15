import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListModel } from '../models/userList.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly _url = "http://809b8cfe7673.ngrok.io/";

  constructor(private http: HttpClient) { }

  public getUserList(pageNumber: number, searchString: string):Observable<UserListModel> {

    return this.http.get<UserListModel>(this._url+"api/public/api/userlist?page="+pageNumber+"&search="+searchString);

  }

  public getUserListByType(pageNumber: number, searchString: string, accountType: string):Observable<UserListModel> {

    return this.http.get<UserListModel>(this._url+"api/public/api/userlist/"+accountType+"?page="+pageNumber+"&search="+searchString);

  }

  public getYoutubeLink(): Observable<string> {
    return this.http.get<string>(this._url+'api/public/api/link');
  }

  public updateYoutubeLink(link: string): Observable<string> {
    return this.http.put<string>(this._url+'api/public/api/link',{link: link});
  }


}
