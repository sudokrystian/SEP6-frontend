import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {SessionStorageService} from "../session-storage/session-storage.service";
import { MovieList } from 'src/app/models/movie-list.model';
import { MovieListDetails } from 'src/app/models/novie-list-detail.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient, private url: UrlService, private session: SessionStorageService) { }

  getUserLists(): Observable<MovieList[]> {
    return this.http.get<MovieList[]>(this.url.getServerURL() + 'list', {headers: this.session.getCookieHeader()})
  }

  getDetailedUserLists(): Observable<MovieListDetails[]> {
    return this.http.get<MovieListDetails[]>(this.url.getServerURL() + 'list/details', {headers: this.session.getCookieHeader()})
  }

  createList(listName: string): Observable<any> {
    return this.http.put(this.url.getServerURL() + 'list', {list_name: listName}, {headers: this.session.getCookieHeader()})
  }

  addMovieToList(listId: number, movieId: number) {
    return this.http.put(this.url.getServerURL() + 'list/movies', {list_id: listId, movie_id: movieId}, {headers: this.session.getCookieHeader()})
  }

  deleteFromList(listId: number, movieId: number) {
    return this.http.delete(this.url.getServerURL() + 'list/' + listId + '/movies/' + movieId, {headers: this.session.getCookieHeader()})
  }

  deleteMovieList(listId:number) {
    return this.http.delete(this.url.getServerURL() + 'list/' + listId, {headers: this.session.getCookieHeader()})
  }




}
