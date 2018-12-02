import { MysqlService } from 'src/app/shared/mysql.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/shared/news/news.model';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-admin-news-edit',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  @Output() adminNewsEmitter = new EventEmitter<string>();
  categorySelectedObj: string;


  news: News[] = [];
  singleNews = new News({});

  constructor(
    private router: Router,
    private mysqlService: MysqlService) { }

  ngOnInit() {
    this.mysqlService.getAll()
      .subscribe(
        (response: News[]) => {
          this.news = response;
        }
      );
  }

  disableNews(id: number) {
      this.mysqlService.removeNews(id)
        .subscribe(
          (response: any) => {
            this.singleNews = response;
            this.router.navigate(['admin', 'news', 'list']);
          }
        );
  }

  onCategoryHandler(category: string) {
    this.categorySelectedObj = category;
  }
  goToNewsProfile(id: number) {
    this.router.navigate(['admin', 'news', id]);
  }

  goToCreate() {
    this.router.navigate(['admin', 'news', 'create']);
  }

}
