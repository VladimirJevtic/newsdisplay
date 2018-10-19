import { Component, OnInit } from '@angular/core';
import {Category} from './category/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categorySelectedObj: Category;
  firstCategoryDefault: Category;
  constructor() { }

  ngOnInit() {

  }

  onCategoryHandler(category: Category) {
    this.categorySelectedObj = category;
  }
  firstCategoryHandler(categoryDefault: Category) {
    this.firstCategoryDefault = categoryDefault;
  }
}
