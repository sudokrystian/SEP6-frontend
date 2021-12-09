import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() { }

  getCookieHeader(): HttpHeaders {
    if(localStorage.getItem('token')) {
      return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})
    } else {
      return new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
