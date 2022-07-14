import { first } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
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
  searchWord: any = "";

  constructor(private _router: Router, private _moviesService: MoviesService, private _activatedRoute: ActivatedRoute) {
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.searchMe();
      }
    });
  }

  ngOnInit(): void {
    this.searchMe();

  }
  searchMe() {
    if(this._activatedRoute.snapshot.paramMap.get("searchWord")?.toLowerCase()!=undefined){
      this.searchWord=this._activatedRoute.snapshot.paramMap.get("searchWord")?.toLowerCase();
      this._moviesService.getSearch(this.searchWord).pipe(first()).subscribe((res: any) => {
        this.searched = res.results
      })
    }
    


  }
  

}