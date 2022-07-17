import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, first } from 'rxjs';


@Component({
  selector: 'app-trending-favourite',
  templateUrl: './trending-favourite.component.html',
  styleUrls: ['./trending-favourite.component.scss'],

})
export class TrendingFavouriteComponent implements OnInit {
  sub: any;

  constructor(private store:Store<{fav : any}>) { }

  favlist:any = [];

  fav : Observable<any> | undefined
  
  ngOnInit(): void {
    this.sub=this.store.select('fav').subscribe((res)=>{
      this.favlist=res.movies
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
