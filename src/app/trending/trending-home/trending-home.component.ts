import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetails } from '../movie-details';
import { PersonDetails } from '../person-details';
import { TvDetails } from '../tv-details';

@Component({
  selector: 'app-trending-home',
  templateUrl: './trending-home.component.html',
  styleUrls: ['./trending-home.component.scss']
})
export class TrendingHomeComponent implements OnInit {

  people:PersonDetails[]=[];
  movies:MovieDetails[]=[];
  tv:TvDetails[]=[];

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  slideIndex:number=0;

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    // this._moviesService.getMovies("person").subscribe((res)=>{
    //   this.people=res.results;
    // })
    // this._moviesService.getMovies("movie").subscribe((res)=>{
    //   this.movies=res.results;
    // })
    // this._moviesService.getMovies("tv").subscribe((res)=>{
    //   this.tv=res.results;
    // })
    
  }

}
