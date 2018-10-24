import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminNewsService } from './admin-news/admin-news.service';
import { AdminFormComponent } from './admin-form/admin-form.component';
import {NewsService} from '../shared/news.service';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNewsComponent,
    AdminFormComponent,
  ],
  imports: [
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [AdminNewsService,
  NewsService]
})
export class AdminModule {}
