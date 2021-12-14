import {Component, Input, OnInit} from '@angular/core';
import {RatingService} from "../../services/rating/rating.service";
import {MovieRatings} from "../../models/movie-rating.model";


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() movieId: number | undefined

  _RatingByUser: MovieRatings | undefined

  isRatingSelectedPrevious = true;
  ratingId = 0

  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];

  constructor(private api: RatingService) {
  }

  ngOnInit(): void {
    if (this.movieId) {
      this.getRatingFromUser(this.movieId)
    }
  }

  getRatingFromUser(movie_id: number) {
    this.api.getRatingFromUser(movie_id).subscribe({
      next: value => {
        if (value.length !== 0) {
          this.isRatingSelectedPrevious = true
          this._RatingByUser = value[0]
          this.setPreviousRating()
        }
      },
      error: err => {
        this.isRatingSelectedPrevious = false
        console.log(err)
      },
      complete: () => {
        this.showUserRating()
      }
    })
  }

  alterRatingByUser(rating_id: number, rating: number) {
    this.api.alterRatingFromUser(rating_id, rating).subscribe({
      error: (err) => console.log(err)
    })
  }

  private setPreviousRating() {
    if (this._RatingByUser) {
      this.selectedRating = this._RatingByUser.rating
      this.ratingId = this._RatingByUser.id
    }
  }

  showUserRating() {
    this.stars.filter((star) => {
      if (star.id <= this.selectedRating) {
        star.class = 'star-gold star'
      } else {
        star.class = 'star-gray star'
      }
      return star
    })
  }

  alterSelectedStar(value: number): void {
    if (this.selectedRating === 0) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }
        return star;
      });
    }
    this.selectedRating = value;

    this.alterRatingByUser(this.ratingId, this.selectedRating)
    this.showUserRating()
  }

  selectStar(value: number): void {
    if (this.selectedRating === 0) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }
        return star;
      });
    }
    this.selectedRating = value;

    if (this.movieId)
      this.api.sendRatingFromUser(this.movieId, this.selectedRating).subscribe({
        error: (err) => console.log(err)
      })
  }
}
