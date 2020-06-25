import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'assets/sample_data.json';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.baseUrl, this.httpOptions);
  }
}
