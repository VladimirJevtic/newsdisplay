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
    private newsService: NewsService,
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
    // GET request po ID da promeni active true u false
      // this.news.splice(id, 1);
      // for(let singleNews of this.news) {
      //   singleNews.active = false;
      // }
      // console.log(this.singleNews);
      this.mysqlService.removeNews(id + 1)
        .subscribe(
          (response: any) => {
            this.singleNews = response;
          }
        );
  }

  onCategoryHandler(category: string) {
    this.categorySelectedObj = category;
  }
  goToNewsProfile(id: number) {
    this.router.navigate(['admin', 'news', id + 1]);
  }

  goToCreate() {
    this.router.navigate(['admin', 'news', 'create']);
  }

}
