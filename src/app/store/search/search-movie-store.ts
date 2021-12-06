import {Injectable} from "@angular/core";
import {SearchByMovieData} from "../../model/search/movies/searchByMovie-data";
import {Observable} from "rxjs";
import {SearchService} from "../../services/movies/search/search.service";


@Injectable({
  providedIn: 'root'
})

export class SearchMovieStore {

  private _newMovieData: SearchByMovieData[] = []


  constructor(
    private api: SearchService
  ) {
  }

  getMoviesDataFromAPI(): Observable<SearchByMovieData[]> {
    return this.api.getAllSearchResultByInput()
  }

  setNewMovieData(data: SearchByMovieData[]) {
    this._newMovieData = data
  }

  getNewMovieData(): SearchByMovieData[] {
    return this._newMovieData
  }
}
