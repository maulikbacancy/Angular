import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { NewsModel } from '../../core/models/news.model';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public youtube_link: any;
  public newss: NewsModel[];
  private subscriptions: Subscription[] = [];

  constructor(private adminService: AdminService, private dom: DomSanitizer) { }

  ngOnInit(): void {
    this.getYoutubeLink();
    this.getNews();
  }

  private getYoutubeLink(): void {
    let subscription: Subscription;
    subscription = this.adminService.getYoutubeLink().subscribe(res => {
      this.youtube_link = this.dom.bypassSecurityTrustResourceUrl(res);
    });
    this.subscriptions.push(subscription);
  }

  private getNews(): void {
    let subscription: Subscription;
    subscription = this.adminService.getNews().subscribe(res => {
      this.newss = res;
      this.transformDate();
    });
    this.subscriptions.push(subscription);
  }

  private transformDate(): void {
    for(let news of this.newss) {
      news.updated_at = news.updated_at.substring(0, 10);
    }
  }

  ngOnDestroy(): void {
    if(this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
  }

}
