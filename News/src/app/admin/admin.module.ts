import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AdminNewsEditComponent } from './admin-news-edit/admin-news-edit.component';
import {AdminNewsService} from './admin-news-edit/admin-news.service';
import { AdminFormComponent } from './admin-form/admin-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNewsEditComponent,
    AdminFormComponent,
  ],
  imports: [
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [AdminNewsService]
})
export class AdminModule {}
