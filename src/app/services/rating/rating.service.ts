import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {Observable} from "rxjs";
import {SessionStorageService} from "../session-storage/session-storage.service";
import {MovieRatings} from "../../models/movie-rating.model";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private httpOptions = {headers: this.session.getCookieHeader()};

  constructor(
    private http: HttpClient,
    private url: UrlService,
    private session: SessionStorageService
  ) {
  }

  sendRatingFromUser(movie_id: number, rating: number): Observable<any> {
    console.log(movie_id)
    console.log(rating)
    return this.http.put(this.url.getServerURL() + 'rating', {
      movie_id,
      rating
    }, this.httpOptions)
  }

  alterRatingFromUser(rating_id: number, rating: number): Observable<any> {
    return this.http.post(this.url.getServerURL() + 'rating', {
      rating_id,
      rating
    }, this.httpOptions)
  }

  getRatingFromUser(movie_id: number): Observable<MovieRatings[]> {
    return this.http.get<MovieRatings[]>(
      this.url.getServerURL() + `/rating/user/${movie_id}`,
      this.httpOptions)
  }
}
