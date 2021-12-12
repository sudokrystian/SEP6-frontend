import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { KnownFor } from 'src/app/models/known-for/known-for.model';
import { RedirectService } from 'src/app/services/redirect/redirect.service';
import { ListDialogService } from 'src/app/services/list-dialog/list-dialog.service';

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

  constructor(public dialog: ListDialogService ,public redirect: RedirectService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if(this.sliderRef?.length != 0) {
      this.knownForMovieSlider = new KeenSlider<{}>(this.sliderRef!.first.nativeElement, {
        loop: true,
        rtl: true,
        drag: false,
        slides: {
          perView: 7,
          spacing: 5,
        },
      })
    } else {
      this.sliderRef?.changes.subscribe((components: QueryList<ElementRef<HTMLElement>>) => {
        console.log("Change!")
        this.knownForMovieSlider = new KeenSlider<{}>(components.first.nativeElement, {
          loop: true,
          rtl: true,
          drag: false,
          slides: {
            perView: 7,
            spacing: 5,
          },
        })
        console.log("Sldier loaded")
      });
    }

  }
}
