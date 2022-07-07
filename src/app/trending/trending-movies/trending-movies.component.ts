import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {

  movies:any=[];

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  slideIndex:number=0;

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies("movie").subscribe((res:any)=>{
      this.movies=res.results;
    })
    
  }

}
