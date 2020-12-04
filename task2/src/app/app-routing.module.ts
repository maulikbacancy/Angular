import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordEditComponent } from './record-edit/record-edit.component';
import { RecordListComponent } from './record-list/record-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recordlist', pathMatch: 'full'},
  { path: 'recordlist', component: RecordListComponent},
  { path: 'recordlist/new', component: RecordEditComponent},
  { path: 'recordlist/:id', component: RecordEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
