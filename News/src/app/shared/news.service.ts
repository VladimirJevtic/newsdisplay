import {News} from './news/news.model';
import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { MysqlService } from 'src/app/shared/mysql.service';

@Injectable()
export class NewsService {

  constructor(private mysqlService: MysqlService) {}

  @Output() newsChanged = new Subject<News[]>();

  news: News[];

  getNews() {
    return this.mysqlService.getAll();
  }

  showNewsByCategory(category: string) {
    return this.mysqlService.getNewsByCategory(category);
  }

}
