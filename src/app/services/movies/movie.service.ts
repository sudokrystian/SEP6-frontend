import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const URL = 'http://localhost:8080/search'

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  movieTitle(title: string): Observable<any> {
    return this.http.get(URL, {
      params: new HttpParams().set('title', title)
    })
  }
}
