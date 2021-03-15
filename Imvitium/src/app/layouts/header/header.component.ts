import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  onSelect() {
    this.navbarOpen = false;    
  }

}
