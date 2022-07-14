import { first } from 'rxjs';
import { Credits } from './../cast';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Country } from '../provider';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('500ms')])
    ])
  ]
})
export class DetailsComponent implements OnInit {
  id: number=0;
  
  type:string='';

  details:any=[];

  url:string='';

  tralier:any;

  flatrate:Country[]=[];

  providers:any;

  credits:any;

  baseUrl:string="https://image.tmdb.org/t/p/original/";

  videoUrl: SafeResourceUrl='';


  constructor(private _route:ActivatedRoute,private _moviesService:MoviesService, private sanitizer:DomSanitizer) { }

  
  getSafeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this._route.params.pipe(first()).subscribe((params) => {
      this.id = parseInt(params["id"]);
      this.type= params["type"]

    this._moviesService.getDetails(this.type,this.id).pipe(first()).subscribe((res)=>{
      this.details=res
    })  
    });

    if(this.type!='person'){
      this._moviesService.getTralier(this.type,this.id).pipe(first()).subscribe((res)=>{
        if(res.results[0]){
          this.tralier=res.results[0].key;
          this.videoUrl=this.getSafeUrl('https://www.youtube.com/embed/'+this.tralier+'?autoplay=1')
        }
      })  
  
      this._moviesService.getWatchProviders(this.type,this.id).pipe(first()).subscribe((res)=>{
        if(res.results.US){
          this.providers=res.results.US.flatrate
        }
      })  


      this._moviesService.getCast(this.type,this.id).pipe(first()).subscribe((res)=>{
        if(res.cast){
          this.credits=res.cast
        }else if(!res.cast){
          this.credits=res
        }
      })  
    }
    

    

    
  }

}
