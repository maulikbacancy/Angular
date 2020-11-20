import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDetail } from '../shared/employee-detail.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @Input()employeeDetailDesigner: EmployeeDetail[];

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
