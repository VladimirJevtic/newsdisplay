import {News} from './news/news.model';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { MysqlService } from 'src/app/shared/mysql.service';
import { Response } from '@angular/http';

@Injectable()
export class NewsService {

  constructor(private mysqlService: MysqlService) {}

  @Output() newsChanged = new Subject<News[]>();

  news: News[];

  getNews() {
    return this.mysqlService.getAll();
  }

  // getSingleNews(index: string) {
  //   return this.news[index];
  // }

  showNewsByCategory(category: string) {
    return this.mysqlService.getNewsByCategory(category);
  }

  // addSingleNews(singleNews: News) {
  //   this.mysqlService.storeNews(singleNews);
  // }

  // updateSingleNews(newSingleNews: News) {
    
  // }

}
