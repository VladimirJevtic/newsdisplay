import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/category/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categorySelectedObj: string;
  firstCategoryDefault: string;
  constructor() { }

  ngOnInit() {
  }

  onCategoryHandler(category: string) {
    this.categorySelectedObj = category;
  }
  firstCategoryHandler(categoryDefault: string) {
    this.firstCategoryDefault = categoryDefault;
  }
}
