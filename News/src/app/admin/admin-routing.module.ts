import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AdminNewsEditComponent } from 'src/app/admin/admin-news-edit/admin-news-edit.component';
import {AdminFormComponent} from './admin-form/admin-form.component';

const adminRoute: Routes = [
  {path: '', component: AdminComponent, children: [
     { path: '', redirectTo: 'list'},
      { path: 'list', component: AdminNewsEditComponent},
      { path: 'edit', component: AdminFormComponent}
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoute)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
