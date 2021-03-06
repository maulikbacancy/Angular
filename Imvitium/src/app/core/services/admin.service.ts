import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserListModel } from '../models/userList.model';
import { NewsModel } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getUserList(pageNumber: number, searchString: string):Observable<UserListModel> {

    return this.http.get<UserListModel>(environment.url+"api/api/userlist?page="+pageNumber+"&search="+searchString);

  }

  public updateUser(id: number, type: string): Observable<string> {
    return this.http.put<string>(environment.url+"api/api/userlist/"+id,{account_type: type});
  }

  public getUserListByType(pageNumber: number, searchString: string, accountType: string):Observable<UserListModel> {

    return this.http.get<UserListModel>(environment.url+"api/api/userlist/"+accountType+"?page="+pageNumber+"&search="+searchString);

  }

  public getYoutubeLink(): Observable<string> {
    return this.http.get<string>(environment.url+'api/api/link');
  }

  public updateYoutubeLink(link: string): Observable<string> {
    return this.http.put<string>(environment.url+'api/api/link',{link: link});
  }

  public getTotalSubscribedUser(): Observable<string> {
    return this.http.get<string>(environment.url+'api/api/total');
  }

  public getNews(): Observable<NewsModel[]> {
    return this.http.get<NewsModel[]>(environment.url + 'api/api/news');
  }

  public updateNews(id: number, news: string): Observable<{message: string}> {
    return this.http.put<{message: string}>(environment.url + 'api/api/news/' + id, {
      news_update: news,
    });
  }

  public addNews(news: string): Observable<NewsModel> {
    return this.http.post<NewsModel>(environment.url + 'api/api/news', {
      news_update: news,
    });
  }

  public  deleteNews(id: number) {
    return this.http.delete(environment.url + 'api/api/news/' + id);
  }

  public deleteAllNews() {
    return this.http.delete(environment.url+"api/api/newsall");
  }


}
