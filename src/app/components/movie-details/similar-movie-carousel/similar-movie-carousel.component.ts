import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import KeenSlider from "keen-slider";
import {TrendingMovies} from "../../../models/trending-movies.model";

@Component({
  selector: 'app-similar-movie-carousel',
  templateUrl: './similar-movie-carousel.component.html',
  styleUrls: ['./similar-movie-carousel.component.scss']
})
export class SimilarMovieCarouselComponent implements OnInit {
  @ViewChildren("sliderRef") sliderRef: QueryList<ElementRef<HTMLElement>> | undefined;
  similarMovieSlider: any = null;
  @Input()
  similarMovies: TrendingMovies | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sliderRef?.changes.subscribe((components: QueryList<ElementRef<HTMLElement>>) => {
      this.similarMovieSlider = new KeenSlider<{}>(components.first.nativeElement, {
        loop: true,
        rtl: true,
        drag: false,
        slides: {
          perView: 7,
          spacing: 5,
        },
      })
    });
  }
}
