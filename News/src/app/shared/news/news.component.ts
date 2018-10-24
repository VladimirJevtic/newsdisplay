import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category/category.model';
import {News} from './news.model';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() defaultCategoryFromCategory: string;
  @Input() categorySelectedFromCategory: string;

  allNews: News[] = [];
  filteredNews: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.allNews = this.newsService.getNews();
    //this.filterNewsByCategory();
  }

  ge
  // filterNewsByCategory() {
  //   this.filteredNews = [];
  //   for (let news of this.allNews) {
  //     if (news.category === this.defaultCategoryFromCategory || news.category === this.categorySelectedFromCategory) {
  //       this.filteredNews.push(news);
  //     }
  //   }
  // }
  getAllCategories() {
    // for (let singleNew of this.news){
    //   this.categories.push();
    // }
  }

}


