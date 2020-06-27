import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // private baseUrl = 'assets/sample_data.json';
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${this.baseUrl}/users`, this.httpOptions);
  }

  getUsersPage(
    currentPage: number = 1,
    rowsPerPage: number = 10
  ): Observable<UserData[]> {
    const queryParams = `?_page=${currentPage}&_limit=${rowsPerPage}`;
    return this.http.get<UserData[]>(
      `${this.baseUrl}/users/${queryParams}`,
      this.httpOptions
    );
  }
}
