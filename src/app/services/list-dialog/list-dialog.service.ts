import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserListsComponent } from 'src/app/components/user-lists/user-lists.component';

@Injectable({
  providedIn: 'root'
})
export class ListDialogService {

  constructor(private dialog: MatDialog) { }

  openAddToListDialog(movieId: number, movieTitle: string) {
    this.dialog.open(UserListsComponent, {
      data: {
        movieTitle: movieTitle,
        movieId: movieId,
      },
    });
  }
}
