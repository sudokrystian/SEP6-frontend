import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";

import {HomeComponent} from "./components/home/home.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {RatingComponent} from "./components/rating/rating.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { UserRatingsComponent } from './components/user-ratings/user-ratings.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignUpComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'myList', component: MovieListComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'people/:id', component: PersonDetailsComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'user/ratings', component: UserRatingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
