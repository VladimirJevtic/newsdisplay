import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
