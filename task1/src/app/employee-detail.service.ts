import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeDetail } from './models/employee-detail.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor() { }

  projectManager: EmployeeDetail[] = [];
  developer: EmployeeDetail[] = [];
  designer: EmployeeDetail[] = [];

  projectManagerChanged = new Subject<EmployeeDetail[]> ();
  developerChanged = new Subject<EmployeeDetail[]> ();
  designerChanged = new Subject<EmployeeDetail[]> ();

  public getProjectManager(): EmployeeDetail[] {
    return (this.projectManager.slice());
  }

  public getDesigner(): EmployeeDetail[] {
    return (this.designer.slice());
  }

  public getDeveloper(): EmployeeDetail[] {
    return (this.developer.slice());
  }

  public onFormSubmit(formData: EmployeeDetail) {
    if (formData.role === 'Project-Manager') {
      this.projectManager.push (formData);
      this.projectManagerChanged.next(this.projectManager.slice());
    }
    else if (formData.role === 'Developer') {
      this.developer.push (formData);
      this.developerChanged.next(this.developer.slice());
    }
    else {
      this.designer.push (formData);
      this.designerChanged.next(this.designer.slice());
    }
  }

  public getColor(salary: number): string{
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
