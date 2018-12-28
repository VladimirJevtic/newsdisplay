import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news/news.component';
import {CategoryComponent} from './category/category.component';
import {NewsService} from './news.service';
import { MysqlService } from 'src/app/shared/mysql.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather/weather.component';
import { HttpModule } from '@angular/http';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  NewsComponent,
  CategoryComponent,
  WeatherComponent,
  AdminComponent,
  AdminNewsComponent,
  AdminFormComponent
];

@NgModule({
  declarations: [
    DropdownDirective,
    ...COMPONENTS, 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    DropdownDirective,
    CommonModule,
    HttpClientModule,
    ...COMPONENTS
  ],
  providers: [NewsService, MysqlService]
})
export class SharedModule {

}
