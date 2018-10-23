import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AdminNewsEditComponent } from 'src/app/admin/admin-news-edit/admin-news-edit.component';

const adminRoute: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin/news/list', component: AdminNewsEditComponent},
  {path: 'admin/news/add', component: AdminNewsEditComponent},
  {path: 'admin/news/:newsId', component: AdminNewsEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoute)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
