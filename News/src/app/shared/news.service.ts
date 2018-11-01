import {News} from './news/news.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { MysqlService } from 'src/app/shared/mysql.service';
import { Response } from '@angular/http';

@Injectable()
export class NewsService {

  constructor(private mysqlService: MysqlService) {}

  newsChanged = new Subject<News[]>();

  news: News[];

  getCities() {
    // GET poziv za cities
    return ['Beograd', 'Novi Sad', 'Sabac'];
  }
  getNews() {
    return this.mysqlService.getAll();
  }

  getSingleNews(index: string) {
    return this.news[index];
  }
  getCategories() {
    // GET poziv za category
    return ['Sport', 'Fun'];
  }

  addSingleNews(singleNews: News) {
    this.mysqlService.storeNews(singleNews);
  }

  updateSingleNews(index: string, newSingleNews: News) {
    this.news[index] = newSingleNews;
    this.newsChanged.next(this.news);
  }

}
