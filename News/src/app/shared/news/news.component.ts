import {Component, Input, OnInit} from '@angular/core';
import {News} from './news.model';
import { MysqlService } from 'src/app/shared/mysql.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit, OnChanges {
  @Input() categoryInput: string;
  @Input() cityInput: string;

   @Input() showNavigationArrows = false;
   @Input() showNavigationIndicators = false;

  news: News[];

  constructor(private mysqlService: MysqlService) {
                  
               }

  ngOnInit() {
    this.mysqlService.getNewsByCity(this.cityInput)
      .subscribe(
        (response: News[]) => {
          this.news = response;
          console.log(response);
        }
      );
  }

  ngOnChanges() {
    this.mysqlService.getNewsByCityAndCategory(this.cityInput, this.categoryInput)
    .subscribe(
      (response: any) => {
        this.news = response;
        console.log(response);
      }
    );

  }
}


