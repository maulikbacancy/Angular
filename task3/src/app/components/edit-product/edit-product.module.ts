import { NgModule } from '@angular/core';
import { EditProductComponent } from './edit-product.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/features/auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/modules/shared.module';



@NgModule({
  declarations: [
    EditProductComponent
],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: EditProductComponent, canActivate: [AuthGuard] }])
  ]
})
export class EditProductModule { }
