import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies/movie.service';
import { Comment } from 'src/app/models/comment.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-movie-comments',
  templateUrl: './movie-comments.component.html',
  styleUrls: ['./movie-comments.component.scss']
})
export class MovieCommentsComponent implements OnInit {

  movieComments: Comment[] | undefined;

  newComment: string = '';
  newCommentError: string | undefined

  @Input()
  movieId: number | undefined;

  constructor(private api: MovieService, public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    console.log('starting commments')
    this.getCommentsForTheMovie()
  }

  getCommentsForTheMovie(): void {
    if (this.movieId) {
      this.api.getCommentsForTheMovie(this.movieId).subscribe({
        next: values => {
          let filteredByDate = values.sort((a, b) => new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds());
          this.movieComments = filteredByDate;
        },
        error: error => {
          console.log(error);
        }
      })
    }
  }

  addNewComment(): void {
    if(this.newComment !== '') {
      this.newCommentError = undefined
      this.api.addCommentForTheMovie(this.movieId!, this.newComment).subscribe({
        next: value => {

        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.newComment = '';
          this.getCommentsForTheMovie();
        }
      })
    } else {
      console.log("Update error!")
      this.newCommentError = "Can't add an empty comment";
    }
  }

}
