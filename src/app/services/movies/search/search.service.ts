import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const URL = 'http://localhost:8080/search/'

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(searchBy: string): Observable<any> {
    console.log(`Searching for: ${searchBy}`)
    return this.http.get(URL + searchBy)
  }

  // search(searchBy: string) {
  //   console.log(searchBy)
  //   return this.http.get(URL, {
  //     params: {
  //       search: searchBy
  //     }
  //   })
  // }
}
