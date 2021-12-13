import { Component, Inject, OnInit } from '@angular/core';
import { MovieList } from 'src/app/models/movie-list.model';
import { MovieListService } from 'src/app/services/movie-list/movie-list.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";


export interface UserMovieListData {
  movieTitle: string,
  movieId: number
}

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {

  movieTitle: string;
  movieId: number;

  movieLists: MovieList[] | undefined;

  errorMessageDisplayLists: string = "You have no existing lists."

  errorMessageCreateList: string = '';
  newListName: string = '';

  constructor(private api: MovieListService,
              public dialogRef: MatDialogRef<UserListsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserMovieListData,
              private router: Router) {
    this.movieId = data.movieId;
    this.movieTitle = data.movieTitle;
  }

  ngOnInit(): void {
    this.getUserLists();
  }

  getUserLists(): void {
    this.api.getUserLists().subscribe({
      next: value => {
        this.movieLists = value;
      },
      error: error => {
        if (error.status === 401) {
          this.errorMessageDisplayLists = "You have to log in to add movie to your lists";
          this.redirectToLogin();
          localStorage.clear();
        } else {
          console.log(error);
        }
      }
    })
  }

  createList(listName: string): void {
    if (listName == '') {
      this.errorMessageCreateList = "Can't create a list without a name";
    } else {
      this.errorMessageCreateList = '';
      this.api.createList(listName).subscribe({
        next: value => {
        },
        error: error => {
          if (error.status === 401) {
            this.errorMessageCreateList = "You have to be logged in to create a list";
            this.redirectToLogin();
            localStorage.clear();
          } else {
            console.log(error);
          }
        },
      }).add(() => this.getUserLists())
    }
  }

  addMovieToList(listId: any) {
    this.api.addMovieToList(listId, this.movieId).subscribe({
      next: value => {
        this.closeDialog();
        //TODO maybe add a snack bar to show info that the movie was added? https://material.angular.io/components/snack-bar/overview
        // console.log(value)
      },
      error: error => {
        if (error.status === 401) {
          this.redirectToLogin();
          localStorage.clear();
        } else {
          console.log(error);
        }
      },
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('/login');
    this.closeDialog();
  }

}
