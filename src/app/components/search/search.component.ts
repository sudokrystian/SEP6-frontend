import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchMovieComponent} from "./search-movie/search-movie.component";
import {SearchPeopleComponent} from "./search-people/search-people.component";

interface Option {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Is initialized by FormBuilder in ngOnInit()
  // @ts-ignore
  searchFormGroup: FormGroup;
  selectedOption = 'movie';
  isTrendingHidden: boolean = false

  searchValue: string = '';

  options: Option[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'people', viewValue: 'People'}
  ]

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeSearchForm()
  }

  @ViewChild(SearchMovieComponent) childSearchMovie: SearchMovieComponent | undefined
  @ViewChild(SearchPeopleComponent) childSearchPeople: SearchPeopleComponent | undefined

  private initializeSearchForm() {
    this.searchFormGroup = this.formBuilder.group({
      search: '',
      option: [this.selectedOption, [Validators.required]]
    })
  }

  sendSearchToApi() {
    let optionsValue = this.searchFormGroup.get('option')?.value

    if (optionsValue === 'movie' && this.searchValue !== '') {
      this.childSearchPeople?.clearPeopleData()
      this.isTrendingHidden = true
      this.childSearchMovie?.getMoviesDataFromAPI(this.searchValue)
    } if (optionsValue === 'people' && this.searchValue !== '') {
      this.childSearchMovie?.clearMovieData()
      this.isTrendingHidden = true
      this.childSearchPeople?.getPeopleDataFromAPI(this.searchValue)
    } if (this.searchValue === '') {
      this.childSearchPeople?.clearPeopleData()
      this.childSearchMovie?.clearMovieData()
      this.isTrendingHidden = false
    }
  }

  submitSearch() {
    this.sendSearchToApi()
    console.log('Search Submitted')
  }

  resetSearch() {
    this.searchFormGroup.reset({
      search: '',
      option: 'movie'
    })
  }

}
