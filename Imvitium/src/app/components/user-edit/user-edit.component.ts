import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsModel } from '../../core/models/news.model';
import { UserModel } from '../../core/models/user.model';
import { AdminService } from '../../core/services/admin.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {

  public isDisable = true;
  public newss: NewsModel[];
  public user = new UserModel('','','','','','');
  private subscriptions: Subscription[] = [];

  constructor(
    private adminService: AdminService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNews();
    this.getUserData();
  }

  public onSave(): void {
    this.isDisable = !this.isDisable;
  }

  public onCancel(): void {
    this.isDisable = true;
  }

  private getNews(): void {
    let subscription: Subscription;
    subscription = this.adminService.getNews().subscribe(res => {
      this.newss = res;
      this.transformDate()
    });
    this.subscriptions.push(subscription);
  }

  private transformDate(): void {
    for(let news of this.newss) {
      news.updated_at = news.updated_at.substring(0, 10);
    }
  }

  private getUserData(): void {
    let id: number;
    let subscription: Subscription;
    subscription = this.authService.user.subscribe(res => {
      id = +res.register.id;
      let subscription: Subscription;
      subscription = this.authService.getUserDataByID(id).subscribe(res => {
         this.user = res;
      });
      this.subscriptions.push(subscription);
    });
    this.subscriptions.push(subscription);
  }

  public onChangePassword(): void {
    this.router.navigate(['auth/changepassword']);
  }

  public onContact(): void {
    this.router.navigate(['contact']);
  }

  ngOnDestroy(): void {
    if(this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
  }

}
