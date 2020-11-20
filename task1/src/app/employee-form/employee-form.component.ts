import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  fname = '';
  lname = '';
  contact: number;
  salary: number;
  role = 'Project-Manager';

  @Output()onSubmit = new EventEmitter<{ role: string, fname: string, lname: string, contact: number, salary: number }>();



  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.onSubmit.emit({ role: this.role, fname: this.fname, lname: this.lname, contact: this.contact, salary: this.salary });
    this.fname = '';
    this.lname = '';
    this.contact = null;
    this.salary = null;
    this.role = 'Project-Manager';
  }

}
