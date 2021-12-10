import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarMovieCarouselComponent } from './similar-movie-carousel.component';

describe('SimilarMovieCarouselComponent', () => {
  let component: SimilarMovieCarouselComponent;
  let fixture: ComponentFixture<SimilarMovieCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarMovieCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarMovieCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
