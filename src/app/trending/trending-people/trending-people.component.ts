import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending-people',
  templateUrl: './trending-people.component.html',
  styleUrls: ['./trending-people.component.scss']
})
export class TrendingPeopleComponent implements OnInit {

  people:any=[];

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  slideIndex:number=0;

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies("person").subscribe((res:any)=>{
      this.people=res.results;
      console.log(this.people)
    })
    
  }

}
