import { Component, OnInit } from '@angular/core';
import { UserRating } from 'src/app/models/user-rating.model';
import { RatingService } from 'src/app/services/rating/rating.service';

@Component({
  selector: 'app-user-ratings',
  templateUrl: './user-ratings.component.html',
  styleUrls: ['./user-ratings.component.scss']
})
export class UserRatingsComponent implements OnInit {

  userRatings: UserRating[] | undefined

  constructor(private api: RatingService) { }

  ngOnInit(): void {
    this.getUserRating()
  }

  getUserRating(): void {
    this.api.getAllUserRatings().subscribe({
      next: (data) => {
        this.userRatings = data;
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
        // Request finished here you cna optionally add updates, etc.
      }
    })
  }

}
