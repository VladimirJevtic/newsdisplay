import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from './category.model';
import {News} from '../news/news.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<Category>();

  categories: Category[] = [
    new Category('Sport', [
      new News('Basketball', 'This is a Basketball text'),
      new News('Football', 'This is a Football text')
    ] ),
    new Category('Fun',  [
      new News('Game', 'This is a Game text'),
      new News('Show', 'This is a Show text')
    ])
  ];



  constructor() { }

  ngOnInit() {
    if (this.categories.length) {
      this.categorySelected.emit(this.categories[0]);
    }
  }

  showNews(category: Category) {
    this.categorySelected.emit(category);
  }
}
