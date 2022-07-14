import { first } from 'rxjs';
import { MovieDetails } from './../movie-details';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {

  movies:MovieDetails[]=[];

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  slideIndex:number=0;

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies("movie").pipe(first()).subscribe((res)=>{
      this.movies=res.results;
    })
  }
  
}
