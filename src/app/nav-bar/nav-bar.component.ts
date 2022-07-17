import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  searchText : string = "";

  constructor(private _router:Router) { }

  ngOnInit(): void {
    
  }
  getSearch() {

    if(this.searchText){
      this._router.navigate(['/search/'+this.searchText]);
    }
  }
}
