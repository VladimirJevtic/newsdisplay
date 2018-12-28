import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AdminNewsComponent } from './shared/admin/admin-news/admin-news.component';
import { AdminFormComponent } from './shared/admin/admin-form/admin-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'news/list', component: AdminNewsComponent},
  { path: 'news/create', component: AdminFormComponent},
  { path: 'news/:id', component: AdminFormComponent},
  {path: 'signin', component: SigninComponent},
  { path: '**', redirectTo: ''}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
