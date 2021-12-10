import { Component, OnInit } from '@angular/core';
import { MovieListDetails } from 'src/app/models/novie-list-detail.model';
import { MovieListService } from 'src/app/services/movie-list/movie-list.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: MovieListDetails[] | undefined;

  movieListsErrorMessage: string = 'You have no existing movie lists.';

  constructor(private api: MovieListService, private router: Router) { }

  ngOnInit(): void {
    this.getUserLists()
  }

  getUserLists(): void {
    this.api.getDetailedUserLists().subscribe({
      next: value => {
        this.movieList = value;
        console.log(value)
      },
      error: error => {
        console.log(error);
        if(error.status == 401) {
          this.movieListsErrorMessage = "Log in to see your movie lists"
          this.router.navigateByUrl('/login');
        }
      }
    })
  }

  deleteMovieList(listId: number): void {
    this.api.deleteMovieList(listId).subscribe({
      next: value => {
        this.getUserLists()
      },
      error: error => {
        console.log(error);
        if(error.status == 401) {
          this.router.navigateByUrl('/login');
        }
      }
    })
  }

  deleteMovieFromList(listId: number, movieId: number): void {
    this.api.deleteFromList(listId, movieId).subscribe({
      next: value => {
        this.getUserLists()
      },
      error: error => {
        console.log(error);
        if(error.status == 401) {
          this.router.navigateByUrl('/login');
        }
      }
    })

  }

}
