import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeDetail } from '../shared/employee-detail.model';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectManagerComponent implements OnInit {

  @Input()employeeDetailProjectManager: EmployeeDetail[];

  constructor() { 
    console.log(this.employeeDetailProjectManager);
  }

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
