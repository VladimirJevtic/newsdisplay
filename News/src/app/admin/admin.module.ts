import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AdminNewsEditComponent } from './admin-news-edit/admin-news-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNewsEditComponent,
  ],
  imports: [
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule {}
