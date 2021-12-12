import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { MatDialog } from '@angular/material/dialog';
import { KnownFor } from 'src/app/models/known-for/known-for.model';
import { UserListsComponent } from '../user-lists/user-lists.component';

@Component({
  selector: 'app-known-for-carousel',
  templateUrl: './known-for-carousel.component.html',
  styleUrls: ['./known-for-carousel.component.scss']
})
export class KnownForCarouselComponent implements OnInit {

  @ViewChildren("knownForMovieKeenSlider") sliderRef: QueryList<ElementRef<HTMLElement>> | undefined;
  knownForMovieSlider: any = null;

  @Input()
  credits: KnownFor | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log("View init!")
    this.sliderRef?.changes.subscribe((components: QueryList<ElementRef<HTMLElement>>) => {
      console.log("Change!")
      this.knownForMovieSlider = new KeenSlider<{}>(components.first.nativeElement, {
        loop: true,
        rtl: true,
        drag: false,
        slides: {
          perView: 2,
          // spacing: 5,
        },
      })
      console.log("Sldier loaded")
    });
  }

  loadSlider() {
    this.sliderRef?.changes.subscribe((components: QueryList<ElementRef<HTMLElement>>) => {
      this.knownForMovieSlider = new KeenSlider<{}>(components.first.nativeElement, {
        loop: true,
        rtl: true,
        drag: false,
        slides: {
          perView: 2,
          // spacing: 5,
        },
      })
      console.log("Sldier loaded")
    });
  }

  openAddToListDialog(movieId: number, movieTitle: string) {
    this.dialog.open(UserListsComponent, {
      data: {
        movieTitle: movieTitle,
        movieId: movieId,
      },
    });
  }

  test(): void {
    console.log(this.sliderRef?.length)
    console.log(this.sliderRef)
    console.log(this.knownForMovieSlider)
  }
}
