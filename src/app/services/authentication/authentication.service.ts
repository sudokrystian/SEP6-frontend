import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpOptions = {headers: this.session.getCookieHeader()};

  userLoogedIn: boolean = false;

  constructor(private http: HttpClient, private url: UrlService, private session: SessionStorageService) {
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
    })
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }
}
