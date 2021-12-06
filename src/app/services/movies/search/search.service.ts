import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlService} from "../../url/url.service";
import {TrendingMovies} from "../../../models/trending-movies.model";
import {SearchPeople} from "../../../models/search-people";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private url: UrlService
  ) {
  }

  getSearchResultByInput(setPageNumber: number ,setMovieName: string): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(this.url.getServerURL() + `search/movie/page/${setPageNumber}/name/${setMovieName}`)
  }

  getSearchResultByPeople(setPageNumber: number, setPeopleName: string): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(this.url.getServerURL() + `search/people/page/${setPageNumber}/name/${setPeopleName}`)
  }
}
