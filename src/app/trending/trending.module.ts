import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingHomeComponent } from './trending-home/trending-home.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { TrendingTvComponent } from './trending-tv/trending-tv.component';
import { TrendingPeopleComponent } from './trending-people/trending-people.component';
import { TrendingFavouriteComponent } from './trending-favourite/trending-favourite.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    TrendingHomeComponent,
    TrendingMoviesComponent,
    TrendingTvComponent,
    TrendingPeopleComponent,
    TrendingFavouriteComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule
  ]
})
export class TrendingModule { }
