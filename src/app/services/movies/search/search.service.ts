import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {SearchByMovieData} from "../../../model/search/movies/searchByMovie-data";
import {UrlService} from "../../url/url.service";
import {TrendingMovies} from "../../../models/trending-movies";

const SendSearchURL = 'http://localhost:8080/search/'
const RetrieveMovieSearchFromServerURL = 'http://127.0.0.1:8000/search/movie/page/1/name/fast'

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private url: UrlService
  ) {
  }

  // TODO figure out how to send objects in the body to R2D2.
  search(searchBy: string): Observable<any> {
    console.log(`Searching for: ${searchBy}`)
    return this.http.get(SendSearchURL + searchBy)
  }

  // search(searchBy: string) {
  //   console.log(searchBy)
  //   return this.http.get(URL, {
  //     params: {
  //       search: searchBy
  //     }
  //   })
  // }

  /*
  private apiObjectToSearchByTitle(object: TrendingMovies) {
    return (
      object.page,
        object.results.map(data =>
          new SearchByMovieData(
            data.poster_path,
            data.overview,
            data.release_date,
            data.id,
            data.title
          )),
        object.total_pages,
        object.total_results
    )
  }
  */

  getSearchResultByInput(): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(RetrieveMovieSearchFromServerURL)
  }
}
