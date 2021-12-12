import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchPeople} from "../../models/search-people";
import {UrlService} from "../url/url.service";
import { PersonDetails } from 'src/app/models/person-details.model';
import { KnownFor } from 'src/app/models/known-for/known-for.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getPersonDetails(personId: number): Observable<PersonDetails> {
    return this.http.get<PersonDetails>(this.url.getServerURL() + 'people/' + personId)
  }

  getPersonCredits(personId: number): Observable<KnownFor> {
    return this.http.get<KnownFor>(this.url.getServerURL() + 'people/' + personId + "/credits")
  }
  
  getTrendingPeople(): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(this.url.getServerURL() + 'people/trending')
  }
}


