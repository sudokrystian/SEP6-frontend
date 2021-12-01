import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {SearchByMovieData} from "../../../model/search/movies/searchByMovie-data";

interface SearchByTitleDataObject {
  page: number
  results: [{
    poster_path: string
    overview: string
    release_date: string
    id: number
    title: string
  }]
}

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
    private http: HttpClient
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

  private apiObjectToSearchByTitle(object: SearchByTitleDataObject) {
    return (
      object.page,
        object.results.map(data =>
          new SearchByMovieData(
            data.poster_path,
            data.overview,
            data.release_date,
            data.id,
            data.title
          ))
    )
  }

  private getSearchResultByInput(): Observable<any> {
    return this.http.get(RetrieveMovieSearchFromServerURL)
  }

  getAllSearchResultByInput(): Observable<SearchByMovieData[]> {
    return this.getSearchResultByInput()
      .pipe(map(result => this.apiObjectToSearchByTitle(result)))
  }
}
