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
    let searchValue = this.searchFormGroup.get('search')?.value;
    let optionsValue = this.searchFormGroup.get('option')?.value

    console.log(optionsValue)
    if (optionsValue === 'movie' && searchValue !== '') {
      this.childSearchPeople?.clearPeopleData()
      this.isTrendingHidden = true
      this.childSearchMovie?.getMoviesDataFromAPI(searchValue)
    } if (optionsValue === 'people' && searchValue !== '') {
      this.childSearchMovie?.clearMovieData()
      this.isTrendingHidden = true
      this.childSearchPeople?.getPeopleDataFromAPI(searchValue)
    } if (searchValue === '') {
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
