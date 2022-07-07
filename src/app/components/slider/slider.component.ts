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

  name:string="";
  date:string="";

  slideIndex:number=0;

  constructor() {}
  
  

  ngOnInit(): void {
    // switch(this.sliderItems[0].media_type) {
    //   case "tv":
    //       this.name="name"
    //     break;
    //   case "movie":
    //       this.name="title"
    //     break;
    //   default:
    //     console.log(this.sliderItems[0].media_type)
    // }
    setInterval(()=>{
      this.slideIndex++; 
      if(this.slideIndex==this.sliderItems.length){
        this.slideIndex=0;
      }
    },5000)
  }
}
