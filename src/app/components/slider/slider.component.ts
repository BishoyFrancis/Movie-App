import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() sliderItems:any=[];
  
  baseUrl:string="https://image.tmdb.org/t/p/original/";

  slideIndex:number=0;

  constructor() {}
  

  ngOnInit(): void {
    setInterval(()=>{
      this.slideIndex++; 
      if(this.slideIndex==this.sliderItems.length){
        this.slideIndex=0;
      }
    },5000)
    
  }
}
