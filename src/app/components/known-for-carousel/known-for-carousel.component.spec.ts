import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownForCarouselComponent } from './known-for-carousel.component';

describe('KnownForCarouselComponent', () => {
  let component: KnownForCarouselComponent;
  let fixture: ComponentFixture<KnownForCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnownForCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnownForCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
