import {Component, Input, OnInit} from '@angular/core';
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

  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.newsChanged
      .subscribe(
        (news: News[]) => {
          this.news = news;
        }
      );
     this.news = this.newsService.getNews();

  }
 
}


