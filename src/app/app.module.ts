import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToastModule} from 'primeng/toast';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

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
import {DetailsComponent} from './trending/details/details.component';
import { favListReducer } from 'src/favlist.reducer';
import { HeaderLang } from './header-lang';






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
    DetailsComponent,
    ItemsComponent,
    ItemCardComponent,
    SliderComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SpeedDialModule,
    ColorPickerModule,
    HttpClientModule,
    DropdownModule,
    ReactiveFormsModule,
    ToastModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot({fav:favListReducer}, {})
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HeaderLang, multi: true},],
  bootstrap: [AppComponent]
})

export  class AppModule { }
