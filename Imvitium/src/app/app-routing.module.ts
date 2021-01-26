import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: "/home", pathMatch: "full"},
  {
    path: "home",
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import("./features/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "features",
    loadChildren: () => import("./features/features/features.module").then(m => m.FeatureModule)
  },
  {
    path: "contact",
    loadChildren: () => import("./features/contact/contact.module").then(m => m.ContactModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
