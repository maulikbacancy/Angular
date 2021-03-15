import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "src/app/layouts/footer/footer.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent, FooterComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: HomeComponent }])
    ]
  })
  export class HomeModule {}