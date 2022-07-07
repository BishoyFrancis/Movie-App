import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {


  baseUrl:string="https://image.tmdb.org/t/p/w500/";
  
  @Input() itemData:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
