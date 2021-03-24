import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsModel } from '../../core/models/news.model';
import { UserModel } from '../../core/models/user.model';
import { AdminService } from '../../core/services/admin.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public isDisable = true;
  public newss: NewsModel[];
  public user = new UserModel('','','','','','');

  constructor(private adminService: AdminService, private authService: AuthService) { }

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
    this.adminService.getNews().subscribe(res => {
      this.newss = res;
      this.transformDate()
    })
  }

  private transformDate(): void {
    for(let news of this.newss) {
      news.updated_at = news.updated_at.substring(0, 10);
    }
  }

  private getUserData(): void {
    let id: number;
    this.authService.user.subscribe(res => {
      id = +res.register.id;
      this.authService.getUserDataByID(id).subscribe(res => {
      this.user = res;
    });
    });
  }

  onSubmitForm(form: NgForm) {
    
  }

}
