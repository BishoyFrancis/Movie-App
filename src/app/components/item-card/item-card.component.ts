import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('500ms')])
    ])
  ]
})
export class ItemCardComponent implements OnInit {


  baseUrl:string="https://image.tmdb.org/t/p/w500/";
  
  @Input() itemData:any=[];

  media:any;

  constructor(private _router:Router) { }

  ngOnInit(): void {
    
    this.media=this.itemData.media_type
  }

  getMediaDetails(){
    if(this.media){
      this._router.navigate(['/details/'+this.media+'/'+this.itemData.id]);
      
    }else if(!this.media){
      this._router.navigate(['/details/person/'+this.itemData.id]);
    }
    
  }

}
