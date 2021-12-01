import { Component, OnInit } from '@angular/core';
import { TrendingMovies } from 'src/app/models/trending-movies';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {

  trendingMovies: TrendingMovies | undefined;
  // Poster size in pixels
  posterSize: number = 300;

  constructor(private api: MoviesService) { }

  ngOnInit(): void {
    this.api.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data;
        console.log(data)
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
        // Request finished
        console.info('complete')
      }
    })
  }

}
