import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {MovieDetails} from "../../models/movie-details/movie-detail.model";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";
import {MovieImages} from "../../models/movie-details/movie-images";
import {Credits} from "../../models/credits.model";
import {PeopleDetail} from "../../models/movie-details/people-detail";
import {TrendingMovies} from "../../models/trending-movies.model";
import {MovieRatings} from "../../models/movie-ratings";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  constructor(
    private http: HttpClient,
    private url: UrlService) { }


  getMovieDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.url.getServerURL() + 'movies/' + id)
  }

  getCast(id: number): Observable<Credits> {
    return this.http.get<Credits>(this.url.getServerURL() + 'movies/' + id + '/credits')
  }

  getDirector(id: number): Observable<PeopleDetail> {
    return this.http.get<PeopleDetail>(this.url.getServerURL() + 'people/'+ id)
  }

  getSimilarMovies(id: number): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(this.url.getServerURL() + 'movies/' + id + '/similar')
  }

  getRating(id: number): Observable<MovieRatings[]> {
    return this.http.get<MovieRatings[]>(this.url.getServerURL() + 'rating/movie/'+id);
  }
}
