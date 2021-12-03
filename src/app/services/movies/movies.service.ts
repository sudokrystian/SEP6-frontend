import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { TrendingMovies } from 'src/app/models/trending-movies.model';
import { MovieDetails } from 'src/app/models/movie-detail.model';

const URL = 'https://django-webservice.azurewebsites.net/'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) { }

  getTrendingMovies(): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(URL + '/movies/trending')
  }

}
