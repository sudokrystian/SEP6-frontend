import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../../services/movies/search/search.service";
import {TrendingMovies} from "../../../../models/trending-movies.model";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  // @ts-ignore
  _newMovieData: TrendingMovies | undefined

  // Poster size in pixels
  posterSize: number = 300;
  searchBy: string = ''
  pageNumber: number = 1

  constructor(
    private api: SearchService,
  ) {
    // this.getMoviesDataFromAPI('fast')
  }

  ngOnInit(): void {
  }

  getMoviesDataFromAPI(searchName: string) {
    this.searchBy = searchName
    this.api.getSearchResultByInput(this.pageNumber, searchName).subscribe({
      next: value => {
        this._newMovieData = value,
          console.log(value)
      },
      error: err => console.log(err.error),
      complete: () => console.log('Have been completed')
    })
  }

  clearMovieData() {
    this._newMovieData = undefined
  }

  nextPage() {
    if (this._newMovieData) {
      if (this._newMovieData.page < this._newMovieData.total_pages) {
        this.pageNumber++
        this.getMoviesDataFromAPI(this.searchBy)
      }
    }
  }

  previousPage() {
    if (this._newMovieData) {
      if (this._newMovieData.page <= this._newMovieData.total_pages) {
        this.pageNumber--
        this.getMoviesDataFromAPI(this.searchBy)
      }
    }
  }
}
