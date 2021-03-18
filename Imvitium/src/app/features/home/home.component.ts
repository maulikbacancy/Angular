import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public youtube_link: any;

  constructor(private adminService: AdminService, private dom: DomSanitizer) { }

  ngOnInit(): void {

    this.getYoutubeLink();
  }

  private getYoutubeLink(): void {
    this.adminService.getYoutubeLink().subscribe(res => {
      this.youtube_link = this.dom.bypassSecurityTrustResourceUrl(res);
    });
  }

}
