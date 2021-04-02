import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navbarOpen = false;
  public loggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(res => {
      if(!!res) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    });
  }

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  onSelect() {
    this.navbarOpen = false;    
  }

  onLogout() {
    this.authService.logout();
  }

}
