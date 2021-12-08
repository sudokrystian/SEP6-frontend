import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchPeople} from "../../models/search-people";
const URL = 'https://django-webservice.azurewebsites.net/'
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }


  getTrendingPeople(): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(URL + '/people/trending')
  }
}


