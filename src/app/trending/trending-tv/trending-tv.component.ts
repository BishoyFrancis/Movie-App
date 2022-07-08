import { TvDetails } from './../tv-details';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { RequestData } from '../request-data';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.scss']
})
export class TrendingTvComponent implements OnInit {

  tv:TvDetails[]=[];

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies("tv").subscribe((res)=>{
      this.tv=res.results;
      console.log(this.tv)
    })
    
  }

}
