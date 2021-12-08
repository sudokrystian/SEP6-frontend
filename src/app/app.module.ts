import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularMaterialModule} from "./angular-material.module";
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from './components/global-components/search/search.component';
import {SearchMovieComponent} from './components/global-components/search/search-movie/search-movie.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import { SearchPeopleComponent } from './components/global-components/search/search-people/search-people.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieStatisticsComponent } from './components/movie-statistics/movie-statistics.component';

import { NgxEchartsModule } from 'ngx-echarts';
import {TrendingPeopleComponent} from "./components/trending-people/trending-people.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchMovieComponent,
    LoginComponent,
    SignUpComponent,
    SearchPeopleComponent,
    MovieStatisticsComponent,
    TrendingMoviesComponent,
    NavbarComponent,
    TrendingPeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'hfian-vjarm-mg3216a4b6da13ryra451b3czf1d6a8f4d68g4a8-f1a6f1ety3a4f3d54gs6y1a3d2c1s6a5',
      headerName: 'HTTP_X_XSRF_TOKEN',
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
