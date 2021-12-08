import { Component, OnInit } from '@angular/core';
import { MovieListDetails } from 'src/app/models/novie-list-detail.model';
import { MovieListService } from 'src/app/services/movie-list/movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: MovieListDetails[] | undefined;

  constructor(private api: MovieListService) { }

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
        console.log("Error");
        console.log(error);
      }
    })
  }

}
