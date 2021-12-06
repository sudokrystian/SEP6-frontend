import { Component, OnInit } from '@angular/core';
import {SearchPeople} from "../../../../models/search-people";
import {SearchService} from "../../../../services/movies/search/search.service";

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  // @ts-ignore
  _newPeopleData: SearchPeople

  // Poster size in pixels
  posterSize: number = 300;
  searchBy: string = ''
  pageNumber: number = 1

  constructor(
    private api: SearchService
  ) { }

  ngOnInit(): void {
  }

  getPeopleDataFromAPI(searchName: string) {
    this.searchBy = searchName
    this.api.getSearchResultByPeople(this.pageNumber, searchName).subscribe({
      next: value => {
        this._newPeopleData = value,
          console.log(value)
      },
      error: err => console.log(err.error),
      complete: () => console.log('Have been completed')
    })
  }

  nextPage() {
    if (this._newPeopleData.page < this._newPeopleData.total_pages) {
      this.pageNumber++
      this.getPeopleDataFromAPI(this.searchBy)
    }
  }

  previousPage() {
    if (this._newPeopleData.page <= this._newPeopleData.total_pages) {
      this.pageNumber--
      this.getPeopleDataFromAPI(this.searchBy)
    }
  }

}
