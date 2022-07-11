import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToFavList } from 'src/favlist.action';
import { MoviesService } from 'src/app/services/movies.service';
import { MessageService } from 'primeng/api';
import { removeFromFavList } from 'src/favlist.action';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  providers:[MessageService]
})
export class ItemCardComponent implements OnInit {

  @Input() itemData:any=[];
  
  baseUrl:string="https://image.tmdb.org/t/p/w500/";
  // fav$ : Observable<any> | undefined;

  
  
  constructor(private store:Store<{fav : any}> , private messageService: MessageService) {}


  // removeFromFav(id:number){
  //   const el = document.getElementById(`heart#${this.itemData.id}`);
  //   this.store.dispatch(removeFromFavList({data:id}));
  //   this.store.select('fav').subscribe((res)=>{console.log("RESULT OF STATE AFTER REMOVING:",res);});
  //   el?.classList.remove('fa-solid')
  // }
  
  favButtonClick(id:number){
    const el = document.getElementById(`heart#${this.itemData.id}`);
    if(el?.classList.contains('fa-solid')){
      console.log("HE IS ALREADY IN LIST");
      this.messageService.add({ key:'c',sticky: true, severity:'warn', summary:'Are you sure you want to remove this movie from your Favourite List?', detail:'Confirm to proceed'});
      // this.store.dispatch(removeFromFavList({data:id}));
      // this.store.select('fav').subscribe((res)=>{console.log("RESULT OF STATE AFTER REMOVING:",res);});
      // el?.classList.remove('fa-solid');
    }
    else{
    this.store.dispatch(addToFavList({data : this.itemData}));
    this.store.select('fav').subscribe((res)=>{console.log("RESULT OF STATE AFTER ADDING:",res);});  
    el?.classList.add('fa-solid');
    this.addSingle(this.itemData)
    }
  }

  addSingle(data:any) {
    this.messageService.add({severity:'success', summary:`Added ${data.title} To your Favourite List` });
  }

  onConfirm(id:number){
  const el = document.getElementById(`heart#${this.itemData.id}`);
  this.store.dispatch(removeFromFavList({data:id}));
  this.store.select('fav').subscribe((res)=>{console.log("RESULT OF STATE AFTER REMOVING:",res);});
  el?.classList.remove('fa-solid');
  this.messageService.clear('c')

}

  onReject(){this.messageService.clear('c')}

  ngOnInit(): void {
  }

}
