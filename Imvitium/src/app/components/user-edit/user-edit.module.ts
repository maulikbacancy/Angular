import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserEditComponent } from "./user-edit.component";
@NgModule({
    declarations: [UserEditComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: UserEditComponent }]),
      FormsModule
    ],
    exports: [
      CommonModule
    ]
  })
  export class UserEditModule {}