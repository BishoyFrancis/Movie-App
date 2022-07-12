import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
