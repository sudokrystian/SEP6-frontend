import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {Observable} from "rxjs";
import { MovieRatings } from 'src/app/models/movie-rating.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getMovieStatistics(movieId: number): Observable<MovieRatings[]> {
    return this.http.get<MovieRatings[]>(this.url.getServerURL() + 'rating/movie/' + movieId, httpOptions)
  }
}
