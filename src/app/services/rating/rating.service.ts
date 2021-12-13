import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../url/url.service";
import { Observable } from "rxjs";
import { SessionStorageService } from "../session-storage/session-storage.service";
import { MovieRatings } from "../../models/movie-rating.model";
import { UserRating } from 'src/app/models/user-rating.model';
import { AveragePersonRating } from 'src/app/models/average-rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

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
    }, { headers: this.session.getCookieHeader() })
  }

  alterRatingFromUser(rating_id: number, rating: number): Observable<any> {
    return this.http.post(this.url.getServerURL() + 'rating', {
      rating_id,
      rating
    }, { headers: this.session.getCookieHeader() })
  }

  getRatingFromUser(movie_id: number): Observable<MovieRatings[]> {
    return this.http.get<MovieRatings[]>(
      this.url.getServerURL() + `/rating/user/${movie_id}`,
      { headers: this.session.getCookieHeader() })
  }

  getAllUserRatings(): Observable<UserRating[]> {
    return this.http.get<UserRating[]>(
      this.url.getServerURL() + '/rating/user',
      { headers: this.session.getCookieHeader() }
    )
  }

  getPersonAverageRating(personId: number): Observable<AveragePersonRating> {
    return this.http.get<AveragePersonRating>(
      this.url.getServerURL() + '/rating/person/' + personId,
      { headers: this.session.getCookieHeader() }
    )
  }
}
