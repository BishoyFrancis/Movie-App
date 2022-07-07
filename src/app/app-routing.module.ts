import { NotFoundComponent } from './not-found/not-found.component';
import { TrendingHomeComponent } from './trending/trending-home/trending-home.component';
import { TrendingFavouriteComponent } from './trending/trending-favourite/trending-favourite.component';
import { TrendingPeopleComponent } from './trending/trending-people/trending-people.component';
import { TrendingTvComponent } from './trending/trending-tv/trending-tv.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingMoviesComponent } from './trending/trending-movies/trending-movies.component';

const routes: Routes = [

   {path:'auth' ,
    loadChildren:()=>import ('./auth/auth.module').then(m => m.AuthModule)}
  {path:'', component:LandingPageComponent},
  {path:'home', component:TrendingHomeComponent},
  {path:'movies', component:TrendingMoviesComponent},
  {path:'tv', component:TrendingTvComponent},
  {path:'people', component:TrendingPeopleComponent},
  {path:'favourite', component:TrendingFavouriteComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
