import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpOptions = {headers: this.session.getCookieHeader()};

  constructor(private http: HttpClient, private url: UrlService, private session: SessionStorageService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url.getServerURL() + 'login', {
      username,
      password
    }, this.httpOptions)
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.put(this.url.getServerURL() + 'register', {
      username,
      email,
      password
    })
  }

  logout() {
    return this.http.get(this.url.getServerURL() + 'logout', this.httpOptions)
  }
}
