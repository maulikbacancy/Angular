import { Component } from '@angular/core';
import { EmployeeDetail } from './models/employee-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projectManager: EmployeeDetail[] = [];
  developer: EmployeeDetail[] = [];
  designer: EmployeeDetail[] = [];

  onFormSubmit(formData: EmployeeDetail) {

    if (formData.role === 'Project-Manager') {
      this.projectManager.push ({
        role: formData.role,
        fname: formData.fname,
        lname: formData.lname,
        contact: formData.contact,
        salary: formData.salary
      });
    }
    else if (formData.role === 'Developer') {
      this.developer.push ({
        role: formData.role,
        fname: formData.fname,
        lname: formData.lname,
        contact: formData.contact,
        salary: formData.salary
      });
    }
    else {
      this.designer.push ({
        role: formData.role,
        fname: formData.fname,
        lname: formData.lname,
        contact: formData.contact,
        salary: formData.salary
      });
    }
  }
}
