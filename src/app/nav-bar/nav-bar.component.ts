import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  searchText : string = "";

  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    this.searchText = "";
  }
}
