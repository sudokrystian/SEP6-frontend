import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {TrendingMoviesComponent} from "./components/trending-movies/trending-movies.component";
import {TrendingPeopleComponent} from "./components/trending-people/trending-people.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {SearchComponent} from "./components/global-components/search/search.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignUpComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'trending', component: TrendingMoviesComponent},
  {path: 'home', component: SearchComponent},
  {path: 'list', component: MovieListComponent},
  {path: 'trendingPeople', component: TrendingPeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
