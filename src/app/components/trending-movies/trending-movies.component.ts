import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TrendingMovies} from 'src/app/models/trending-movies.model';
import {MoviesService} from 'src/app/services/movies/movies.service';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import {ListDialogService} from 'src/app/services/list-dialog/list-dialog.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {
  @ViewChildren("sliderRef") sliderRef: QueryList<ElementRef<HTMLElement>> | undefined;

  slider: any = null;

  trendingMovies: TrendingMovies | undefined;
  // Poster size in pixels
  posterSize: number = 200;

  constructor(private api: MoviesService, public dialog: ListDialogService) {
  }

  ngOnInit(): void {
    this.loadMovies()
  }

  ngAfterViewInit() {
    this.sliderRef?.changes.subscribe((components: QueryList<ElementRef<HTMLElement>>) => {
        this.slider = new KeenSlider<{}>(components.first.nativeElement, {
          loop: true,
          rtl: true,
          slides: {
            perView: 5,
            spacing: 5,
          },
        })
      }
    );
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  nextSlide(): void {
    this.slider.next();
  }

  loadMovies(): void {
    this.api.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data;
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
      }
    })
  }
}
