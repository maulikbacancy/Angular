import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
@NgModule({
    declarations: [AdminComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: AdminComponent}]),
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule
    ],
  })
  export class AdminModule {}