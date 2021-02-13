import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthComponent } from './features/auth/auth.component';
import { AuthGuard } from './features/auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "product",
    loadChildren: () => import("./components/product-list/product-list.module").then(m => m.ProductListModule)
  },
  {
    path: "cart",
    loadChildren: () => import("./components/cart/cart.module").then(m => m.CartModule)
  },
  {
    path: "product/:id",
    loadChildren: () => import("./components/edit-product/edit-product.module").then(m => m.EditProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
