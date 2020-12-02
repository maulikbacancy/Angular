import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetailService } from '../employee-detail.service';
import { EmployeeDetail } from '../models/employee-detail.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeDetailService) { }

  ngOnInit(): void {
  }

  public onSubmitForm(form: NgForm): void {
    this.employeeService.onFormSubmit({
      role: form.value.role,
      fname: form.value.fname,
      lname: form.value.lname,
      contact: form.value.contact,
      salary: form.value.salary});
  }

}
