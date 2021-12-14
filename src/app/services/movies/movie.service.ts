import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";
import {Comment} from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
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

  getCommentsForTheMovie(movie_id: number) : Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url.getServerURL() + 'movies/' + movie_id + '/comments')
  }

  addCommentForTheMovie(movie_id: number, comment: string) : Observable<any> {
    return this.http.put(this.url.getServerURL() + 'movies/comments', {comment: comment, movie_id: movie_id}, {headers: this.session.getCookieHeader()})

  }
}
