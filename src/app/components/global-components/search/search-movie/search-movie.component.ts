import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/movies/search/search.service";
import {SearchByMovieData} from "../../../../model/search/movies/searchByMovie-data";
import {SearchMovieStore} from "../../../../store/search/search-movie-store";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  _movieDataStorage: SearchByMovieData[] = []

  constructor(
    private api: SearchService,
    private store: SearchMovieStore
  ) { }

  ngOnInit(): void {
    this.getMovieData()
    //this.setMovieDataFromStore()
    //this.getTestData()
  }

  getMovieData() {
    this.store.getMoviesDataFromAPI().subscribe(data =>
      this._movieDataStorage = data)
  }

  private storeReceivedMovieData(data: SearchByMovieData[]) {
    this.store.setNewMovieData(data)
  }

  setMovieDataFromStore() {
    this._movieDataStorage = this.store.getNewMovieData()
    //console.log(this._movieDataStorage)
  }
}
