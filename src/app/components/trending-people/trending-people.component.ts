import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {People} from "src/app/models/people";
import {PeopleService} from "../../services/people/people.service";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import {MoviesService} from "../../services/movies/movies.service";
import {SearchPeople} from "../../models/search-people";

@Component({
  selector: 'app-trending-people',
  templateUrl: './trending-people.component.html',
  styleUrls: ['./trending-people.component.scss']
})
export class TrendingPeopleComponent implements OnInit {
  @ViewChildren("sliderRef") sliderRef: QueryList<ElementRef<HTMLElement>> | undefined;
  slider: any = null;
  trendingPeople: SearchPeople | undefined;
  // Poster size in pixels
  posterSize: number = 200;
  numbers = [1, 2, 3, 4, 5]

  constructor(private api: PeopleService) {
  }

  ngOnInit(): void {
    this.loadPeople()
  }

  private loadPeople() {
    this.api.getTrendingPeople().subscribe({
      next: (data) => {
        this.trendingPeople = data;
      },
      error: (e) => console.error("Error: " + e),
      complete: () => {
        // Request finished here you cna optionally add updates, etc.
      }
    })
  }

  nextSlide(): void {
    this.slider.next();
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
}
