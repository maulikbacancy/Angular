import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDetail } from '../shared/employee-detail.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  @Input()employeeDetailDeveloper: EmployeeDetail[];

  constructor() { }

  ngOnInit(): void {
  }

  getColor(salary: number){
    if ( salary < 50000) {
      return 'red';
    }
    else if ( salary >= 50000 && salary < 100000 ) {
      return 'blue';
    }
    else if ( salary >= 100000 && salary < 200000 ){
      return 'purple';
    }
    else {
      return 'green';
    }
  }

}
