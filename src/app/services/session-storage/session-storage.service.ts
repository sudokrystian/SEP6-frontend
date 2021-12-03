import { Injectable } from '@angular/core';
import {SessionStorageModel} from "./SessionStorageModel";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  sessionStorage: SessionStorageModel | undefined;
  constructor() { }

  initSession(){
    this.sessionStorage = new SessionStorageModel('', false);
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
}
