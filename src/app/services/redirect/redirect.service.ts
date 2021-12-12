import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  redirectToMovie(movieId: number): void {
    const uri = "/movie/"
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(()=>
    this.router.navigate([uri, movieId]));
  }

  redirectToPerson(personId: number): void {
    const uri = "/people/"
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(()=>
    this.router.navigate([uri, personId]));
  }
}
