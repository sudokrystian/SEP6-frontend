import {SearchComponent} from "./components/global-components/search/search.component";
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {TrendingMoviesComponent} from "./components/trending-movies/trending-movies.component";
import {TrendingPeopleComponent} from "./components/trending-people/trending-people.component";
import {NavbarComponent} from "./components/global-components/navbar/navbar.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignUpComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'search', component: SearchComponent},
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'trending', component: TrendingMoviesComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'trendingPeople', component: TrendingPeopleComponent},
  // {path: 'myList', component: } todo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
