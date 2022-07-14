import { DetailsComponent } from './trending/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrendingHomeComponent } from './trending/trending-home/trending-home.component';
import { TrendingFavouriteComponent } from './trending/trending-favourite/trending-favourite.component';
import { TrendingPeopleComponent } from './trending/trending-people/trending-people.component';
import { TrendingTvComponent } from './trending/trending-tv/trending-tv.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingMoviesComponent } from './trending/trending-movies/trending-movies.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {path:'auth' ,
    loadChildren:()=>import ('./auth/auth.module').then(m => m.AuthModule)},
  {path:'', component:LandingPageComponent},
  {path:'home', canActivate:[AuthGuard],component:TrendingHomeComponent},
  {path:'movies', canActivate:[AuthGuard],component:TrendingMoviesComponent},
  {path:'tv', canActivate:[AuthGuard],component:TrendingTvComponent},
  {path:'people', canActivate:[AuthGuard],component:TrendingPeopleComponent},
  {path:'favourite', canActivate:[AuthGuard],component:TrendingFavouriteComponent},
  {path:'details/:type/:id', canActivate:[AuthGuard],component:DetailsComponent},
  { path: 'search/:searchWord', canActivate:[AuthGuard],component: SearchComponent },
  { path: 'search', canActivate:[AuthGuard],component: SearchComponent },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
