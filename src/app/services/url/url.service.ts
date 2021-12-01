import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private SERVER = 'https://django-webservice.azurewebsites.net/';
  private LOCAL = 'http://localhost:8000/';

  constructor() {
  }

  getLocalURL(): string {
    return this.SERVER;
  }

  getServerURL(): string {
    return this.LOCAL;
  }

}
