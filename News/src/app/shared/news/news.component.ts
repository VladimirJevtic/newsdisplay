import {Component, Input, OnInit} from '@angular/core';
import {News} from './news.model';
import {NewsService} from '../news.service';
import {map} from 'rxjs/operators'
import { MysqlService } from 'src/app/shared/mysql.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnChanges {
  @Input() categoryInput: string;
  @Input() cityInput: string;


  news: News[];

  constructor(private newsService: NewsService,
              private mysqlService: MysqlService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.mysqlService.getNewsByCityAndCategory(this.cityInput, this.categoryInput)
    .subscribe(
      (response: any) => {
        this.news = response;
      }
    );

  }
}


