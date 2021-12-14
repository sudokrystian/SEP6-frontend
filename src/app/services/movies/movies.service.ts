import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrendingMovies} from 'src/app/models/trending-movies.model';
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient, private url: UrlService) { }

  getTrendingMovies(): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(this.url.getServerURL() + 'movies/trending')
  }
}
