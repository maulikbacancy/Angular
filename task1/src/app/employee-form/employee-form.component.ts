import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeDetail } from '../models/employee-detail.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  formDetails = new EmployeeDetail('', '', '', null, null);

  @Output()onSubmit = new EventEmitter<EmployeeDetail>();



  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.onSubmit.emit(this.formDetails);
  }

}
