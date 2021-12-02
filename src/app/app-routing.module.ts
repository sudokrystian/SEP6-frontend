import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {TrendingMoviesComponent} from "./components/trending-movies/trending-movies.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignUpComponent},
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'trending', component: TrendingMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
