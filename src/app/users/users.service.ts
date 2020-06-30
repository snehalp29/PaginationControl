import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserData } from './user.model';

import { shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'assets/sample_data.json';
  // private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  getUsers(): Observable<UserData[]> {
    const getUrl = `${this.baseUrl}`;
    // const getUrl = `${this.baseUrl}/users`;
    return this.http.get<UserData[]>(getUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<UserData[]>('getUsers', [])),
        shareReplay(1)
      );
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

  updateUser(user: UserData) {
    const postUrl = `${this.baseUrl}/users/${user.id}`;
    return this.http.put<UserData>(postUrl, { id: user.id, status: user.status }, this.httpOptions)
      .pipe(
        catchError(this.handleError<UserData>('postRow', undefined))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }


}
