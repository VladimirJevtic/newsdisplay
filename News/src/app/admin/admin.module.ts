import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule {}
