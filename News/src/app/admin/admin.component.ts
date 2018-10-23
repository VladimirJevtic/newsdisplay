import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Category} from '../shared/category/category.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<Category>();

  categorySelectedObj: Category;
  firstCategoryDefault: Category;


  constructor() { }

  ngOnInit() {
    this.categorySelected.emit(this.firstCategoryDefault);
  }

  onCategoryHandler(category: Category) {
    this.categorySelectedObj = category;
  }
  firstCategoryHandler(categoryDefault: Category) {
    this.firstCategoryDefault = categoryDefault;
  }
}
