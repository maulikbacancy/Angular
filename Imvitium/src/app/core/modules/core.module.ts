import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { AdminService } from '../services/admin.service';
import { LoaderInterceptor } from '../interceptors/loader.interceptor';

@NgModule({
  providers: [
    AdminService,
    AuthService,
    [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
    ]
  ]
})
export class CoreModule { }