import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path: 'signin', component: SigninComponent},
  { path: '**', redirectTo: ''}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
