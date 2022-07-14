import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetails } from 'src/app/trending/movie-details';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  @Input() cardItems:any=[];


  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
  }

  getMoviesPage(type:string,page:number){
    this._moviesService.getPage(type,page).subscribe((res)=>{
      this.cardItems=res.results;
    })
  }

  paginate(event:any){
    if(this.cardItems[0].media_type!=this.cardItems[0].media_type){
      this.getMoviesPage('search',event.page+1)
    }else{
      this.getMoviesPage(this.cardItems[0].media_type,event.page+1)
    }
  }

}
