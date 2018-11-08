import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news/news.component';
import {CategoryComponent} from './category/category.component';
import {NewsService} from './news.service';
import { MysqlService } from 'src/app/shared/mysql.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS = [
  NewsComponent,
  CategoryComponent
];

@NgModule({
  declarations: [
    DropdownDirective,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
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
