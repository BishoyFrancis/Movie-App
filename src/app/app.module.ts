import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import {ButtonModule} from 'primeng/button';
import {ColorPickerModule} from 'primeng/colorpicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {SpeedDialModule} from 'primeng/speeddial';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ItemsComponent } from './components/items/items.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { SliderComponent } from './components/slider/slider.component';
import {TrendingMoviesComponent} from './trending/trending-movies/trending-movies.component';
import {TrendingTvComponent} from './trending/trending-tv/trending-tv.component';
import {TrendingPeopleComponent} from './trending/trending-people/trending-people.component';
import {TrendingFavouriteComponent} from './trending/trending-favourite/trending-favourite.component';
import {TrendingHomeComponent} from './trending/trending-home/trending-home.component';
import {DetailsComponent} from './trending/details/details.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import {SkeletonModule} from 'primeng/skeleton';
import {PaginatorModule} from 'primeng/paginator';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { RemoveWhiteSpacePipe } from './remove-white-space.pipe';
import { RemoveColonPipe } from './remove-colon.pipe';







@NgModule({

  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    NotFoundComponent,
    NavBarComponent,
    TrendingMoviesComponent,
    TrendingFavouriteComponent,
    TrendingPeopleComponent,
    TrendingTvComponent,
    TrendingHomeComponent,
    DetailsComponent,
    ItemsComponent,
    ItemCardComponent,
    SliderComponent,
    HomeSliderComponent,
    RemoveSpacesPipe,
    RemoveWhiteSpacePipe,
    RemoveColonPipe
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SpeedDialModule,
    SkeletonModule,
    PaginatorModule,
    ColorPickerModule,
    HttpClientModule,
    DropdownModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export  class AppModule { }
