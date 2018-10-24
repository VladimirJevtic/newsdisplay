import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news/news.component';
import {CategoryComponent} from './category/category.component';
import {NewsService} from './news.service';

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
    CommonModule
  ],
  exports: [
    DropdownDirective,
    CommonModule,
    ...COMPONENTS
  ],
  providers: [NewsService]
})
export class SharedModule {

}
