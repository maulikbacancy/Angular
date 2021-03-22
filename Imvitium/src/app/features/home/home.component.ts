import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsModel } from 'src/app/core/models/news.model';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public youtube_link: any;
  public newss: NewsModel[];

  constructor(private adminService: AdminService, private dom: DomSanitizer) { }

  ngOnInit(): void {
    this.getYoutubeLink();
    this.getNews();
  }

  private getYoutubeLink(): void {
    this.adminService.getYoutubeLink().subscribe(res => {
      this.youtube_link = this.dom.bypassSecurityTrustResourceUrl(res);
    });
  }

  private getNews(): void {
    this.adminService.getNews().subscribe(res => {
      this.newss = res;
      this.transformDate();
    })
  }

  private transformDate(): void {
    for(let news of this.newss) {
      news.updated_at = news.updated_at.substring(0, 10);
    }
  }

}
