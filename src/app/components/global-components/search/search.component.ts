import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SearchService} from "../../../services/movies/search/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Is initialized by FormBuilder in ngOnInit()
  // @ts-ignore
  searchFormGroup: FormGroup;

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
