// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {AngularMaterialModule} from "src/app/angular-material.module";
import {AppRoutingModule} from "src/app/app-routing.module";
import {SearchComponent} from 'src/app/components/search/search.component';
import {SearchMovieComponent} from 'src/app/components/search/search-movie/search-movie.component';
import {LoginComponent} from 'src/app/components/login/login.component';
import {SignUpComponent} from 'src/app/components/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientXsrfModule} from "@angular/common/http";
import {TrendingMoviesComponent} from 'src/app/components/trending-movies/trending-movies.component';
import {NavbarComponent} from 'src/app/components/global-components/navbar/navbar.component';
import {MovieStatisticsComponent} from 'src/app/components/movie-statistics/movie-statistics.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {TrendingPeopleComponent} from "src/app/components/trending-people/trending-people.component";
import {SimilarMovieCarouselComponent} from "src/app/components/movie-details/similar-movie-carousel/similar-movie-carousel.component";
import {CastCarouselComponent} from "src/app/components/movie-details/cast-carousel/cast-carousel.component";
import {MovieDetailsComponent} from "src/app/components/movie-details/movie-details.component";
import {SearchPeopleComponent} from "src/app/components/search/search-people/search-people.component";
import { HomeComponent } from 'src/app/components/home/home.component';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { UserListsComponent } from 'src/app/components/user-lists/user-lists.component';
import { MovieCommentsComponent } from 'src/app/components/movie-comments/movie-comments.component';
import {FooterComponent} from "src/app/components/global-components/footer/footer.component";
import {RatingComponent} from "src/app/components/rating/rating.component";
import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';
import { KnownForCarouselComponent } from 'src/app/components/person-details/known-for-carousel/known-for-carousel.component';
import { UserRatingsComponent } from 'src/app/components/user-ratings/user-ratings.component';
import { ListDialogService } from './app/services/list-dialog/list-dialog.service';


declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};


// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      // AppComponent,
      SearchComponent,
      SearchMovieComponent,
      LoginComponent,
      SignUpComponent,
      SearchPeopleComponent,
      MovieStatisticsComponent,
      TrendingMoviesComponent,
      NavbarComponent,
      HomeComponent,
      MovieDetailsComponent,
      CastCarouselComponent,
      SimilarMovieCarouselComponent,
      TrendingPeopleComponent,
      MovieListComponent,
      UserListsComponent,
      MovieCommentsComponent,
      RatingComponent,
      FooterComponent,
      PersonDetailsComponent,
      KnownForCarouselComponent,
      UserRatingsComponent
  
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      AngularMaterialModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      HttpClientTestingModule,
      HttpClientXsrfModule.withOptions({
        cookieName: 'hfian-vjarm-mg3216a4b6da13ryra451b3czf1d6a8f4d68g4a8-f1a6f1ety3a4f3d54gs6y1a3d2c1s6a5',
        headerName: 'HTTP_X_XSRF_TOKEN',
      }),
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts'),
      }),
    ],
    providers: [
      {
        provide: MatDialogRef,
        useValue: {}
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      },
      ListDialogService
    ],
  }).compileComponents();
});
