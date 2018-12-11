import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AdminNewsComponent } from 'src/app/admin/admin-news/admin-news.component';
import {AdminFormComponent} from './admin-form/admin-form.component';

const adminRoute: Routes = [
  {path: '', component: AdminComponent, children: [
     { path: '', redirectTo: 'news/list'},
      { path: 'news/list', component: AdminNewsComponent},
      { path: 'news/create', component: AdminFormComponent},
      { path: 'news/:id', component: AdminFormComponent},
      //{ path: '**', redirectTo: 'news/list'},
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
