import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchPeople} from "../../models/search-people";
import { People } from "../../models/people"
import {UrlService} from "../url/url.service";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getPersonDetails(personId: number): Observable<People> {
    return this.http.get<People>(this.url.getServerURL() + 'people/' + personId)
  }

  getTrendingPeople(): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(this.url.getServerURL() + 'people/trending')
  }
}


