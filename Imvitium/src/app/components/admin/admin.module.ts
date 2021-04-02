import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoaderComponent } from "../../core/components/loader/loader.component";
import { AuthGuard } from "../../core/guards/auth.guard";
import { AdminComponent } from "./admin.component";
@NgModule({
    declarations: [AdminComponent, LoaderComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: AdminComponent, canActivate: [AuthGuard]}]),
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule
    ],
  })
  export class AdminModule {}