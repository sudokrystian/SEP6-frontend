import {Injectable} from '@angular/core';
import {SessionStorageModel} from "./SessionStorageModel";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  sessionStorage: SessionStorageModel | undefined;
  constructor() { }

  initSession(){
    if (!this.sessionStorage){
      this.sessionStorage = new SessionStorageModel('', false);
    }
  }

  setUsername(username: string) {
    if (this.sessionStorage)
    this.sessionStorage.username = username;
  }

  setLoginStatus(status: boolean){
    if (this.sessionStorage)
      this.sessionStorage.loggedIn = status;
  }

  clear(){
    this.sessionStorage = new SessionStorageModel('', false);
  }

  setSessionCookie(token: string) {
    console.log('setting token');
    if (this.sessionStorage)
    this.sessionStorage.sessionToken = token;
    console.log(this.sessionStorage?.sessionToken)
  }

  getSessionToken(): string | undefined {
    console.log('getting token:' + this.sessionStorage?.sessionToken)
    if (this.sessionStorage) {
      if (this.sessionStorage.sessionToken){
        return this.sessionStorage.sessionToken;
      } else
        return '';
    }
    return '';
  }

  getCookieHeader(): HttpHeaders {
    if(localStorage.getItem('token')) {
      return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})
    } else {
      return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})
    }
  }

  getLoginStatus(): boolean {
    if (this.sessionStorage){
      return this.sessionStorage.loggedIn
    }else {
      return false;
    }
  }
}
