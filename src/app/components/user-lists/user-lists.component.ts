import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list.model';
import { MovieListService } from 'src/app/services/movie-list/movie-list.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  // to delete
  exampleList = [{ "id": 1, "user_id": 1, "list_name": "My first list" }, { "id": 2, "user_id": 1, "list_name": "My second list" }];

  movieTitle: string;
  movieId: number;

  movieLists: MovieList[] | undefined;

  errorMessageDisplayLists: string = "You have no existing lists."

  errorMessageCreateList: string = '';
  newListName: string = '';

  constructor(private api: MovieListService, public dialogRef: MatDialogRef<UserListsComponent>, @Inject(MAT_DIALOG_DATA) public data: UserMovieListData) {
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
        console.log("Error");
        console.log(error);
        if (error.status === 401) {
          this.errorMessageDisplayLists = "You have to log in to add movie to your lists"
          // redirect to login
          console.log("please log in")
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
          console.log("Error");
          console.log(error);
          if (error.status === 401) {
            this.errorMessageCreateList = "You have to be logged in to create a list";
            // redirect to login
            console.log("please log in")
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
        console.log(value)
      },
      error: error => {
        console.log("Error");
        console.log(error);
        if (error.status === 401) {
          // redirect to login
          console.log("please log in")
        }
      },
    })
  }

  closeDialog(): void {
    console.log("closing the dialog")
    this.dialogRef.close();
  }

}
