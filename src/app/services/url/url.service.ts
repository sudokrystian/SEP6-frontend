import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private SERVER = 'https://django-webservice.azurewebsites.net/';
  private LOCAL = 'http://localhost:8080/';

  constructor() {
  }

  getLocalURL(): string {
    return this.LOCAL;
  }

  getServerURL(): string {
    return this.SERVER;
  }

}
