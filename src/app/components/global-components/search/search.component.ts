import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SearchService} from "../../../services/movies/search/search.service";
import {SearchMovieComponent} from "./search-movie/search-movie.component";
import {SearchByMovieData} from "../../../model/search/movies/searchByMovie-data";

const testData1 = [
  new SearchByMovieData('1234.jpg', 'this is an overview', new Date().toString(), 1, 'The is the best title'),
  new SearchByMovieData('1234.jpg', 'this is an overview', new Date().toString(), 2, 'The is the best title'),
  new SearchByMovieData('1234.jpg', 'this is an overview', new Date().toString(), 3, 'The is the best title'),
  new SearchByMovieData('1234.jpg', 'this is an overview', new Date().toString(), 4, 'The is the best title')]

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Is initialized by FormBuilder in ngOnInit()
  // @ts-ignore
  searchFormGroup: FormGroup;
  testGettingMovies = testData1

  constructor(
    private formBuilder: FormBuilder,
    private api: SearchService
  ) { }

  ngOnInit(): void {
    this.initializeSearchForm()
  }

  private initializeSearchForm() {
    this.searchFormGroup = this.formBuilder.group({
      search: ''
    })
  }

  sendSearchToApi() {
    let searchValue = this.searchFormGroup.get('search')?.value;

    this.api.search(searchValue)
  }

  submitSearch() {
    this.sendSearchToApi()
    console.log('Search Submitted')
    //this.movieSearch.setMovieDataFromStore()
    //console.log('The movies are set in the store, ready to be displayed.')
  }

}
