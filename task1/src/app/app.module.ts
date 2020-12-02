import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { DeveloperComponent } from './developer/developer.component';
import { DesignerComponent } from './designer/designer.component';
import { EmployeeDetailService } from './employee-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    ProjectManagerComponent,
    DeveloperComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
