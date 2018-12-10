import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home', loadChildren:'./admin/admin.module#AdminModule'},
  {path: 'signin', component: SigninComponent},
  { path: '**', redirectTo: 'home'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
