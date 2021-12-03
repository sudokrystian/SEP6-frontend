import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchMovieComponent} from "./search-movie/search-movie.component";

interface Option {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Is initialized by FormBuilder in ngOnInit()
  // @ts-ignore
  searchFormGroup: FormGroup;
  selectedOption = 'movie';

  options: Option[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'people', viewValue: 'People'}
  ]

  constructor(
    private formBuilder: FormBuilder,
    // private api: SearchService
  ) { }

  ngOnInit(): void {
    this.initializeSearchForm()
  }

  @ViewChild(SearchMovieComponent) child: SearchMovieComponent | undefined

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
      this.child?.getMoviesDataFromAPI(searchValue)
    }
  }

  submitSearch() {
    this.sendSearchToApi()
    console.log('Search Submitted')
  }

}
