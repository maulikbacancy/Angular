import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public contactDetailSubmit(contactData: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(environment.url+"api/public/api/contact",contactData);
  }
}
