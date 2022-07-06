import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('500ms')])
    ])
  ]
})
export class TrendingMoviesComponent implements OnInit {

  movies:any=[];

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  slideIndex:number=0;

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe((res:any)=>{
      this.movies=res.results;
      console.log(this.movies)
    })
    setInterval(()=>{
      this.slideIndex++; 
      if(this.slideIndex==this.movies.length){
        this.slideIndex=0;
      }
    },5000)
  }

}
