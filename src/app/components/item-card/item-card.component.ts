import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, first, filter } from 'rxjs';
import { addToFavList } from 'src/favlist.action';
import { MoviesService } from 'src/app/services/movies.service';
import { MessageService } from 'primeng/api';
import { removeFromFavList } from 'src/favlist.action';
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  providers:[MessageService],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('500ms')])
    ])
  ]
})
export class ItemCardComponent implements OnInit {

  @Input() itemData:any=[];
  
  media:any;

  baseUrl:string="https://image.tmdb.org/t/p/w500/";
  id: any;
  favList: any;


  constructor(private _router:Router,private store:Store<{fav : any}> , private messageService: MessageService) {
    this.store.select('fav').pipe(first()).subscribe((res)=> {
      this.favList=res.movies
    });
  }


  
  favButtonClick(id:number,e:Event){
    this.id=id
    e.stopPropagation();
    const el = document.getElementById(this.id);
    if(el?.classList.contains('fa-solid')){
      console.log("THIS ITEM ALREADY IN LIST");
      this.messageService.add({ key:'c',sticky: true, severity:'warn', summary:'Are you sure you want to remove this movie from your Favourite List?', detail:'Confirm to proceed'});
      
    }
    else{
    this.store.dispatch(addToFavList({data : this.itemData}));
    el?.classList.add('fa-solid');
    this.addSingle(this.itemData)
    }
  }

  addSingle(data:any) {
    if(data.title){
      this.messageService.add({severity:'success', summary:`Added ${data.title} To your Favourite List` , life:1200});
    }else if(data.name){
      this.messageService.add({severity:'success', summary:`Added ${data.name} To your Favourite List` , life:1200});
    }
    
  }

  onConfirm(id:number){
  const el = document.getElementById(this.id);
  this.store.dispatch(removeFromFavList({data:this.id}));
  el?.classList.remove('fa-solid');
  this.messageService.clear('c');
}

  onReject(){this.messageService.clear('c')}

  getMediaDetails(){
    if(this.media){
      this._router.navigate(['/details/'+this.media+'/'+this.itemData.id]);
      
    }else if(!this.media){
      this._router.navigate(['/details/person/'+this.itemData.id]);
    }
  }

  ngOnInit(): void {

    this.media=this.itemData.media_type
    console.log(this.favList)
    

  }
  ngAfterViewChecked(){
    for(let item of this.favList){
      const elem = document.getElementById(item.id);
      if(elem){
        elem.classList.add('fa-solid');
      }
      
    } 
  }

}
