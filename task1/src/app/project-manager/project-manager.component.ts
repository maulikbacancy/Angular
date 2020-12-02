import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';
import { EmployeeDetail } from '../models/employee-detail.model';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectManagerComponent implements OnInit {

  public employeeDetailProjectManager: EmployeeDetail[];

  constructor(private employeeService: EmployeeDetailService) {
  }

  ngOnInit(): void {
    this.employeeDetailProjectManager = this.employeeService.getProjectManager();

    this.employeeService.projectManagerChanged.subscribe((projectManager: EmployeeDetail[]) => {
      this.employeeDetailProjectManager = projectManager;
    });
  }

  public getColor(salary: number): string{
    return this.employeeService.getColor(salary);
  }

}
