import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import {NewsService} from '../shared/news.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNewsComponent,
    AdminFormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule,
    HttpModule
  ],
  providers: [NewsService]
})
export class AdminModule {}
