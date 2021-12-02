import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/movies/search/search.service";
import {TrendingMovies} from "../../../../models/trending-movies";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  // @ts-ignore
  _newMovieData: TrendingMovies

  constructor(
    private api: SearchService,
  ) { }

  ngOnInit(): void {
    this.getMoviesDataFromAPI()
  }

  getMoviesDataFromAPI() {
    this.api.getSearchResultByInput().subscribe({
      next: value => this._newMovieData = value,
      error: err => console.log(err),
      complete: () => console.log('Have been completed')
    })
  }
}
