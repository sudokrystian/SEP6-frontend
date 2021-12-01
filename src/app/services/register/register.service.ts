import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const URL = 'https://django-webservice.azurewebsites.net/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    console.log('getting registered')
    return this.http.put(URL + 'register', {
      username,
      email,
      password
    },httpOptions)
  }
}
