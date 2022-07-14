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
    let searchWord :any = this._activatedRoute.snapshot.paramMap.get("searchWord")?.toLowerCase();
    this._moviesService.getSearch(searchWord).subscribe((res: any) => {
      this.searched = res.results
      console.log(this.searched)
    })


  }
  searched: any = [];
  tvs: any = [];
  people: any = [];
  searchWord: any = "";
  movies: MovieDetails[] = [];

}