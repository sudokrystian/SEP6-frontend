import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/models/movie-list.model';
import { MovieListService } from 'src/app/services/movie-list/movie-list.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {

  // to delete
  exampleList = [{ "id": 1, "user_id": 1, "list_name": "My first list" }, { "id": 2, "user_id": 1, "list_name": "My second list" }];

  @Input()
  movieId: number | undefined = 580489;

  movieLists: MovieList[] | undefined;

  errorMessageCreateList: string = '';
  newListName: string = '';

  constructor(private api: MovieListService) { }

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
        next(value) {
          console.log(value)
        },
        error(error) {
          console.log("Error");
          console.log(error);
          if (error.status === 401) {
            // redirect to login
            console.log("please log in")
          }
        },
      }).add(() => this.getUserLists())
    }
  }

  addMovieToList(listId: any) {
    console.log("Button clicked")
    if (this.movieId) {
      console.log("inside IF")
      this.api.addMovieToList(listId, this.movieId).subscribe({
        next(value) {
          console.log(value)
        },
        error(error) {
          console.log("Error");
          console.log(error);
          if (error.status === 401) {
            // redirect to login
            console.log("please log in")
          }
        },
      })
    } else {
      console.log("Can't add the movie to the list if movie id is not specified")
    }

  }

}
