import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from './category.model';
import {News} from '../news/news.model';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [NewsService]
})
export class CategoryComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<Category>();
  constructor(private newService: NewsService) { }

  categories: Category[] = this.newService.getCategories();

  ngOnInit() {
    if (this.categories.length) {
      this.categorySelected.emit(this.categories[0]);
    }
  }

  showNews(category: Category) {
    this.categorySelected.emit(category);
  }
}
