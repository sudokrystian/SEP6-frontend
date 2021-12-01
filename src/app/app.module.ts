import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularMaterialModule} from "./angular-material.module";
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    TrendingMoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'hfian-vjarm-mg3216a4b6da13ryra451b3czf1d6a8f4d68g4a8-f1a6f1ety3a4f3d54gs6y1a3d2c1s6a5',
      headerName: 'HTTP_X_XSRF_TOKEN',
    }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
