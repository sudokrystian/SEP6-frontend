import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private httpOption = {headers: this.session.getCookieHeader()}
  constructor(
    private http: HttpClient,
    private url: UrlService,
    private session: SessionStorageService
  ) { }

  movieTitle(title: string): Observable<any> {
    return this.http.get(this.url.getServerURL() + 'search', {
      params: new HttpParams().set('title', title),

    })
  }
}
