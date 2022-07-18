import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './services/movies.service';
import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 title:string = "Movie App";
 
show:boolean = false;
constructor(private router:Router){
  // this.router.navigate(['/'])

 }
}





