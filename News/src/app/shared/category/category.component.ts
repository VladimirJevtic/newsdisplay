import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from './category.model';
import {News} from '../news/news.model';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<string>();
  categoryList = [];
  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.categoryList = this.newService.getCategories();
    if (this.categoryList.length) {
      this.categorySelected.emit(this.categoryList[0]);
    }
  }

  showNews(category: string) {
    this.categorySelected.emit(category);
  }
}
