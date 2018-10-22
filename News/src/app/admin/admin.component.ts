import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../shared/category/category.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
