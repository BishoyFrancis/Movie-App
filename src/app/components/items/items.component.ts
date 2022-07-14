import { first } from 'rxjs';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Credits } from 'src/app/trending/cast';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  @Input() cardItems:any=[];

  searched:string | null =null;
  credits:Credits[]=[];
  cast:any;
  parametar:any;
  constructor(private _route:ActivatedRoute,private _moviesService:MoviesService) { }

  ngOnInit(): void {
    
    this.parametar=this._route.snapshot.routeConfig?.path

    this._route.params.pipe(first()).subscribe((params) => {
      this.searched = params['searchWord'];  
    });
  }
  
  getMoviesPage(type:string,page:number,searched:string=''){
    this._moviesService.getPage(type,page).subscribe((res)=>{
      this.cardItems=res.results;
    })
  }

  getSearchedPage(page:number,searched:string=''){
    if(searched){
        this._moviesService.getSearchPage(page,searched).subscribe((res)=>{
      this.cardItems=res.results;
      })
    }
    
  }
  
  paginate(event:any){
    if(this.searched){
      this.getSearchedPage(event.page+1,this.searched)
    }else{
      this.getMoviesPage(this.cardItems[0].media_type,event.page+1)
      console.log(this.cardItems[0].media_type)
    }
  }

}
