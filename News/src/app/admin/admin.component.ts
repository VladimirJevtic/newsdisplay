import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
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

  @Input() category: Category;
  @Input() categoryDefault: Category;

  constructor() { }

  ngOnInit() {
  }

  showNewsEdit(category: Category) {
    this.categorySelected.emit(this.category);
    console.log(this.category);
    console.log(this.firstCategoryDefault);
  }

  onCategoryHandler(category: Category) {
    this.categorySelectedObj = category;
  }
  firstCategoryHandler(categoryDefault: Category) {
    this.firstCategoryDefault = categoryDefault;
  }

}
