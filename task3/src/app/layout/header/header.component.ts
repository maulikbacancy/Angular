import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/sevices/auth.service';
import { ProductService } from '../../core/sevices/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isAuthenticated = false;
  private userSub: Subscription;
  public productTitle:string;

  constructor(
      private authService: AuthService, 
      private router: Router,
      private productService: ProductService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  public onLogout(): void {
    this.authService.logout();
  }

  public search(): void {
    this.productService.productTitle.next(this.productTitle);
  }
  
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
