import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";

@NgModule({
    declarations: [ContactComponent],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([{ path: '', component: ContactComponent }])
    ]
  })
  export class ContactModule {}