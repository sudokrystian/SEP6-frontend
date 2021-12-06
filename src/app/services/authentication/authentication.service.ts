import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlService} from "../url/url.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private url: UrlService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url.getServerURL() + 'login', {
      username,
      password
    })
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.put(this.url.getServerURL() + 'register', {
      username,
      email,
      password
    }, httpOptions)
  }
}
