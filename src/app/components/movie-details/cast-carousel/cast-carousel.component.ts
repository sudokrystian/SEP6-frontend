import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CastMember} from "../../../models/cast-member.model";
import KeenSlider from "keen-slider";
import { RedirectService } from 'src/app/services/redirect/redirect.service';

@Component({
  selector: 'app-cast-carousel',
  templateUrl: './cast-carousel.component.html',
  styleUrls: ['./cast-carousel.component.scss']
})
export class CastCarouselComponent implements OnInit {
  @ViewChildren("sliderRef") sliderRef: QueryList<ElementRef<HTMLElement>> | undefined;
  crewSlider: any = null;

  @Input()
  movieCast: CastMember[] | undefined;

  constructor(public redirect: RedirectService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sliderRef?.changes.subscribe((components: QueryList<ElementRef<HTMLElement>>) => {
      this.crewSlider = new KeenSlider<{}>(components.first.nativeElement, {
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
