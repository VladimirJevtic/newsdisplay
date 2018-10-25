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

  constructor(
    private router: Router,
    private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

  disableNews(id: number) {
    // GET request po ID da promeni active true u false
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
