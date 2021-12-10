import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RatingService} from "../../services/rating/rating.service";
import {MovieRatings} from "../../models/movie-rating.model";
import {log} from "echarts/types/src/util/log";


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() movieId: number | undefined

  _RatingByUser: MovieRatings | undefined

  isRatingSelectedPrevious = true;

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
    this.getRatingFromUser(550)
  }

  getRatingFromUser(movie_id: number) {
    this.api.getRatingFromUser(movie_id).subscribe({
      next: value => {
        if (value.length !== 0) {
          this.isRatingSelectedPrevious = true
          this._RatingByUser = value[0]
          this.setPreviousRating()
          console.log(value)
        }
      },
      error: err => {
        this.isRatingSelectedPrevious = false
        console.log(err.error)
      },
      complete: () => {
        this.showUserRating()
        console.log('Have been completed')
      }
    })
  }

  private setPreviousRating() {
    if (this._RatingByUser) {
      this.selectedRating = this._RatingByUser.rating
      console.log('selectedRating is set: ' + this.selectedRating)
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

  selectStar(value: number): void {
     // prevent multiple selection
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

    this.api.sendRatingFromUser(550, this.selectedRating).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => console.log(err)
    })
  }
}
