import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { UserListModel } from 'src/app/core/models/userList.model';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public youtube_link = "";
  public users: UserModel[];
  public total_page: number;
  public current_page = 1;
  public searchQuery='';
  public subscription = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUserList(this.current_page,this.searchQuery);
    this.getYoutubeLink();
  }

  private getUserList(pageNumber: number,searchString: string): void {
    this.current_page = 1;
    this.adminService.getUserList(pageNumber,searchString).subscribe(
      (res: UserListModel) => {
        this.users = res.data.data;
        this.total_page = res.data.last_page;
      }
    )
  }

  private getUserListByType(pageNumber: number,subscription: string,searchString:string): void {
    this.current_page = 1;
    this.adminService.getUserListByType(pageNumber,searchString,subscription).subscribe(
      (res: UserListModel) => {
        this.users = res.data.data;
        this.total_page = res.data.last_page;
      }
    )
  }

  private getYoutubeLink(): void {
    this.adminService.getYoutubeLink().subscribe(res => {
      this.youtube_link = res;      
    })
  }

  public updateYoutubeLink(): void {
    this.adminService.updateYoutubeLink(this.youtube_link).subscribe(res => {
      console.log(res);
    })
  }

  public onChangePage(pageNumber: number): void {
    console.log('onChange');
    
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
}
