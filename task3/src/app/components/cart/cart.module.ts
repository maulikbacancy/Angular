import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AuthGuard } from 'src/app/features/auth/auth.guard';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    SharedModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([{ path: '', component: CartComponent, canActivate: [AuthGuard] }])
  ]
})
export class CartModule { }
