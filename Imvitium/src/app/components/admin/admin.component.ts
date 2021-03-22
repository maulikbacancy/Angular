import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EditUserModel } from 'src/app/core/models/edituser.model';
import { NewsModel } from 'src/app/core/models/news.model';
import { UserModel } from '../../core/models/user.model';
import { UserListModel } from '../../core/models/userList.model';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit, OnDestroy {

  public youtube_link = "youtube link will display here";
  public users: UserModel[];
  public total_page: number;
  public totalSubscribedUser = '0';
  public current_page = 1;
  public searchQuery='';
  public subscription = '';
  public editMode = false;
  public editUser: EditUserModel;
  public news: NewsModel[];
  public newsForm: FormGroup;
  public newsArray: FormArray;
  private subscriptions: Subscription[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.initForm();
    this.editUser = new EditUserModel('','','subscribe');
    this.getUserList(this.current_page,this.searchQuery);
    this.getYoutubeLink();
    this.getTotalSubscribedUser();
    this.getNews();
  }

  public get newsControls() {
    return (this.newsForm.get('news') as FormArray).controls;
  }

  private getUserList(pageNumber: number,searchString: string): void {
    let subscription: Subscription;
    subscription = this.adminService.getUserList(pageNumber,searchString).subscribe(
      (res: UserListModel) => {
        this.users = res.data.data;
        this.total_page = res.data.last_page;
      }
    );
    this.subscriptions.push(subscription);
  }

  private getUserListByType(pageNumber: number,subscription_1: string,searchString:string): void {
    let subscription: Subscription;
    subscription = this.adminService.getUserListByType(pageNumber,searchString,subscription_1).subscribe(
      (res: UserListModel) => {
        this.users = res.data.data;
        this.total_page = res.data.last_page;
      }
    );
    this.subscriptions.push(subscription);
  }

  private getYoutubeLink(): void {
    let subscription: Subscription;
    subscription = this.adminService.getYoutubeLink().subscribe(res => {
      this.youtube_link = res;      
    });
    this.subscriptions.push(subscription);
  }

  private getTotalSubscribedUser(): void {
    let subscription: Subscription;
    subscription = this.adminService.getTotalSubscribedUser().subscribe(res => {
      this.totalSubscribedUser = res;
    });
    this.subscriptions.push(subscription);
  }

  private getNews(): void {
    let subscription: Subscription;
    subscription = this.adminService.getNews().subscribe(res => {
      this.news = res;
      this.pushNewsToForm();
    });
    this.subscriptions.push(subscription);
  }

  private pushNewsToForm(): void {
    for (let news of this.news) {
      this.newsArray.push(
        new FormGroup({
          news: new FormControl(
            { value: news.news_update, disabled: true },
            Validators.required
          ),
        })
      );
    }
  }

  public updateYoutubeLink(): void {
    let subscription: Subscription;
    subscription = this.adminService.updateYoutubeLink(this.youtube_link).subscribe(res => {
      console.log(res);
    });
    this.subscriptions.push(subscription);
  }

  public onChangePage(pageNumber: number): void {
    switch(this.subscription){
      case 'subscribe': {
        this.getUserListByType(pageNumber,'subscribe',this.searchQuery);
        break;
      }
      case 'unsubscribe': {
        this.getUserListByType(pageNumber,'unsubscribe',this.searchQuery);
        break;
      }
      case 'free': {
        this.getUserListByType(pageNumber,'free',this.searchQuery);
        break;
      }
      default: {
        this.getUserList(pageNumber,this.searchQuery);
        break;
      }
    }
  }

  public getIndex(n: number): Array<number> {
    return Array(n);
  }

  public onApplyFilter(subscription: string): void {
    if(subscription == this.subscription) {
      this.subscription = '';
      this.current_page = 1;
    }
    else {
      this.current_page = 1;
      this.subscription = subscription;
    }
    this.onChangePage(1);
  }

  public onEditUser(index: number): void {
    this.editUser.name = this.users[index].name;
    this.editUser.email = this.users[index].email;
    this.editUser.account_type = this.users[index].account_type;
    this.editUser.id = +this.users[index].id;
    this.editMode = true;
  }

  public onUpdateUser(): void {
    let subscription: Subscription;
    subscription = this.adminService.updateUser(this.editUser.id,this.editUser.account_type).subscribe(res => {
      console.log(res);
      this.editMode = false;
    });
    this.subscriptions.push(subscription);
  }

  public onCloseDialogBox(): void {
    this.editMode = false;
  }

  private initForm() {
    this.newsArray = new FormArray([]);

    this.newsForm = new FormGroup({
      news: this.newsArray
    });
  }

  public onAddNews() {
    if(this.newsArray.controls[this.newsArray.length-1].value['news'] === '') {
      console.log('please enter news in previous node');
      
    }
    else {
      if(this.newsArray.length === this.news.length) {
        this.newsArray.push(
          new FormGroup({
            news: new FormControl({ value: '', disabled: false }, [Validators.required])
          })
        );
      }
      else {
        console.log('please save previous news');
        
      }
    }
           
  }

  public onDeleteNews(i: number): void {
    if(this.news.length < this.newsArray.length) {
      this.newsArray.removeAt(i);
    }
    else {
      let subscription: Subscription;
      subscription = this.adminService.deleteNews(this.news[i].id).subscribe(res => {
        this.news.splice(i, 1);
        this.newsArray.removeAt(i);
      });
      this.subscriptions.push(subscription);
    }
    
  }

  public onNewsEdit(i: number): void {

    if (this.newsArray.controls[i].disabled) {
      this.newsArray.controls[i].enable();
    }
    else if(this.news.length <= i+1) {
      let subscription: Subscription;
      subscription = this.adminService.addNews(this.newsArray.controls[i].value['news']).subscribe(res => {
        this.news.push(res);
        this.newsArray.controls[i].disable();
      },
      (error) => {
        console.log(error);
      }
      );
      this.subscriptions.push(subscription);
    }
    else {
      let subscription: Subscription;
      subscription = this.adminService.updateNews(this.news[i].id, this.newsArray.controls[i].value['news']).subscribe(res => {
        this.news[i].news_update = this.newsArray.controls[i].value['news'];
        this.newsArray.controls[i].disable();
        console.log(res);
      },
      (error) => {
        console.log(error);
      });
      this.subscriptions.push(subscription);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
