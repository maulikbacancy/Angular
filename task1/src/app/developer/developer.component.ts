import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';
import { EmployeeDetail } from '../models/employee-detail.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeveloperComponent implements OnInit {
  public employeeDetailDeveloper: EmployeeDetail[];

  constructor(private employeeService: EmployeeDetailService) { }

  ngOnInit(): void {
    this.employeeDetailDeveloper = this.employeeService.getDeveloper();

    this.employeeService.developerChanged.subscribe((developer: EmployeeDetail[]) => {
      this.employeeDetailDeveloper = developer;
    });
  }

  public getColor(salary: number): string{
    return this.employeeService.getColor(salary);
  }
}
