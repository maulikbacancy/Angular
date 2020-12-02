import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';
import { EmployeeDetail } from '../models/employee-detail.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  public employeeDetailDesigner: EmployeeDetail[];

  constructor(private employeeService: EmployeeDetailService) { }

  ngOnInit(): void {
    this.employeeDetailDesigner = this.employeeService.getDesigner();

    this.employeeService.designerChanged.subscribe((designer: EmployeeDetail[]) => {
      this.employeeDetailDesigner = designer;
    });
  }

  public getColor(salary: number): string{
    return this.employeeService.getColor(salary);
  }

}
