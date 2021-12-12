import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SearchPeople} from "../../../models/search-people";
import {SearchService} from "../../../services/movies/search/search.service";

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  // @ts-ignore
  _newPeopleData: SearchPeople | undefined

  // Poster size in pixels
  posterSize: number = 300;
  searchBy: string = ''
  pageNumber: number = 1

  constructor(
    private api: SearchService,
    private router: Router
  ) {
  }

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

  clearPeopleData() {
    this._newPeopleData = undefined
  }

  peoplePictureClicked(id: number) {
    console.log(id)
  }

  nextPage() {
    if (this._newPeopleData) {
      if (this._newPeopleData.page < this._newPeopleData.total_pages) {
        this.pageNumber++
        this.getPeopleDataFromAPI(this.searchBy)
      }
    }
  }

  previousPage() {
    if (this._newPeopleData) {
      if (this._newPeopleData.page <= this._newPeopleData.total_pages) {
        this.pageNumber--
        this.getPeopleDataFromAPI(this.searchBy)
      }
    }
  }

  redirectToPerson(personId: number): void {
    const uri = "/people/"
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(()=>
    this.router.navigate([uri, personId]));
  }

}
