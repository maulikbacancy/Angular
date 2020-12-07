import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataDetail } from '../interfaces/apiResponce';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  constructor(private recordService: RecordService, private route: ActivatedRoute) { }
  public user: UserDataDetail[] = [];
  public totalPage: number;
  public currentPage = 1;

  ngOnInit(): void {
    this.getUser(this.currentPage);
  }

  public getUser(page: number): void {
    this.recordService.getUserByPage(page).subscribe(
      requestedData => {
        this.user = requestedData.data;
        this.totalPage = requestedData.total_pages;
      }
    );
  }

  public deleteUser(id: number): void {
    if (confirm('Are you sure want to delete ?')) {
      this.recordService.deleteUser(id);
      this.user = this.user.filter(
        (value) => value.id !== id
      );
    }
  }

  onEditUser(index: number): void {
    this.recordService.editUser = this.user[index] as UserDataDetail;
  }

  public getArray(n: number): Array<number> {
    return Array(n);
  }
}
