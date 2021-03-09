import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  userUrl: string = `https://jsonplaceholder.typicode.com/users`;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
}
