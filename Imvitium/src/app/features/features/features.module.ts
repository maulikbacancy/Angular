import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FeaturesComponent } from "./features.component";

@NgModule({
    declarations: [FeaturesComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: FeaturesComponent }])
    ]
  })
  export class FeatureModule {}