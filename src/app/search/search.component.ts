import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private _moviesService: MoviesService, private activatedRoute: ActivatedRoute) {

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.searchMe();
      }
    });
  }

  ngOnInit(): void {
    this.searchMe();
  }
  searchMe() {
    this._moviesService.getMovies('movie').subscribe((res: any) => {
      this.movies = res.results
       this.searchMovies = []
      let searchWord = this.activatedRoute.snapshot.paramMap.get("searchWord")?.toLowerCase();
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].title.toLowerCase().includes(searchWord)) {
          this.searchMovies.push(this.movies[i])
        }
      }

    })

    this._moviesService.getMovies('tv').subscribe((res: any) => {
      this.tvs = res.results
      this.searchTvs = []
      let searchWord = this.activatedRoute.snapshot.paramMap.get("searchWord")?.toLowerCase();
      for (let i = 0; i < this.tvs.length; i++) {
        if (this.tvs[i].name.toLowerCase().includes(searchWord)) {
          this.searchTvs.push(this.tvs[i])
        }
      }
    })

    this._moviesService.getMovies("person").subscribe((res: any) => {
      this.people = res.results;
      this.searchPeople = []
      let searchWord = this.activatedRoute.snapshot.paramMap.get("searchWord")?.toLowerCase();
      for (let i = 0; i < this.people.length; i++) {
        if (this.people[i].name.toLowerCase().includes(searchWord)) {
          this.searchPeople.push(this.people[i])
        }
      }
    })
  }

  movies: any = [];
  tvs: any = [];
  people: any = [];
  searchMovies: Array<any> = [];
  searchTvs: any = [];
  searchPeople: any = [];
}