import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AdminNewsEditComponent } from 'src/app/admin/admin-news-edit/admin-news-edit.component';

const adminRoute: Routes = [
  {path: '', component: AdminComponent, children: [
     {path: '', component: AdminComponent}
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
