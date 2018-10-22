import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
