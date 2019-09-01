import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:4567';
  constructor(
    private http: HttpClient
  ) { }

  postUser = (data) => this.http.post(`${this.URL}/user/new`, data);
}
