import { Component, OnChanges, OnInit } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  isLoading: boolean;
  constructor(private loaderService: LoadingSpinnerService){
    this.loaderService.isLoading.subscribe(res => {
      this.isLoading = res;
    });
  }

  ngOnInit(): void {
    
  }

}
