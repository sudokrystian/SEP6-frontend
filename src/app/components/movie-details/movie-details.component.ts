import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieDetailService} from "../../services/movie-details/movie-detail.service";
import {MovieDetails} from "../../models/movie-details/movie-detail.model";
import {MovieImages} from "../../models/movie-details/movie-images";
import {Credits} from "../../models/credits.model";
import {CrewMember} from "../../models/crew-member.model";
import {CastMember} from "../../models/cast-member.model";
import {PeopleDetail} from "../../models/movie-details/people-detail";
import {TrendingMovies} from "../../models/trending-movies.model";
import {MovieRatings} from "../../models/movie-ratings";
import {ActivatedRoute} from "@angular/router";
import { RedirectService } from 'src/app/services/redirect/redirect.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movieToDisplay: MovieDetails | undefined;
  movieImagesToDisplay: MovieImages | undefined;
  credits: Credits | undefined;
  movieCrew: CrewMember[] | undefined;
  movieCast: CastMember[] | undefined;
  director: CrewMember | undefined;
  directorInfo: PeopleDetail | undefined;
  similarMovies: TrendingMovies | undefined;
  movieRating: number = 0;
  numberOfRatings: number = 0;

  constructor(private service: MovieDetailService, private route: ActivatedRoute, public redirect: RedirectService) {
  }

  id: number = 200;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id) {
      this.id = parseInt(id);
    }
    this.getMovieDetails(this.id);
    this.getCast(this.id);
    this.getRating(this.id);
  }

  getMovieDetails(id: number): void {
    this.service.getMovieDetails(id).subscribe({
      next: (res: MovieDetails) => {
        console.log(res)
        this.movieToDisplay = res
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        this.getSimilarMovies(this.id)
      }
    })
  }

  getMovieImages(id: number): void {
    this.service.getMovieImages(id).subscribe({
      next: (res: MovieImages) => {
        this.movieImagesToDisplay = res
      }
    })
  }

  getCast(id: number): void {
    this.service.getCast(id).subscribe({
      next: (res: Credits) => {
        this.credits = res;
        this.movieCrew = res.crew;
        this.movieCast = res.cast;
        this.director = res.crew.find((crew) => crew.job === 'Director');
        console.log(this.director);
      },
      error: (err) => {
      },
      complete: () => {
        this.getDirector()
      }
    })
  }

  getDirector(): void {
    if (this.director)
      this.service.getDirector(this.director.id).subscribe({
        next: (res: PeopleDetail) => {
          this.directorInfo = res
        },
        error: (err) => {
        }
      })
  }

  getSimilarMovies(id: number): void {
    this.service.getSimilarMovies(id).subscribe({
      next: (res: TrendingMovies) => {
        this.similarMovies = res
      }
    })
  }

  getRating(id: number): void {
    this.service.getRating(id).subscribe({
      next: (res: MovieRatings[]) => {
        let total_rating = 0;
        res.forEach((rating) => total_rating = total_rating + rating.rating)
        const avg_rating = parseInt((total_rating / res.length).toFixed(1))
        this.movieRating = avg_rating;
        this.numberOfRatings = res.length;
      }
    });
  }

  ngOnDestroy(): void {

  }
}
