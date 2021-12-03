import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlService} from "../../url/url.service";
import {TrendingMovies} from "../../../models/trending-movies";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // private setPageNumber: number = 1

  constructor(
    private http: HttpClient,
    private url: UrlService
  ) {
  }

  // setSearchByMoviePageNumber(pageNumber: number) {
  //   this.setPageNumber = pageNumber
  // }

  getSearchResultByInput(setPageNumber: number ,setMovieName: string): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(this.url.getServerURL() + `search/movie/page/${setPageNumber}/name/${setMovieName}`)
  }
}
