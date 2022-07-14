import { first } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { MovieDetails } from '../trending/movie-details';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searched: any = [];
  tvs: any = [];
  people: any = [];
  searchWord: any;

  constructor(private _route:ActivatedRoute, private _moviesService: MoviesService, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    
    this._route.params.subscribe((params) => {
      this.searchWord = params["searchWord"];
    if(this.searchWord){
      this._moviesService.getSearch(this.searchWord).subscribe((res: any) => {
        this.searched = res.results
        
        })
    }  
      
    });
  }
  
  

}