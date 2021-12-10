import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {TrendingMoviesComponent} from "./components/trending-movies/trending-movies.component";
import {TrendingPeopleComponent} from "./components/trending-people/trending-people.component";

import {HomeComponent} from "./components/home/home.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import { PersonDetailsComponent } from './components/person-details/person-details.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignUpComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'trending', component: TrendingMoviesComponent},
  {path: 'myList', component: MovieListComponent},
  {path: 'trendingPeople', component: TrendingPeopleComponent},
  {path: 'people/:id', component: PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
