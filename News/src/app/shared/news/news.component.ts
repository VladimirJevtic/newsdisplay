import {Component, Input, OnInit} from '@angular/core';
import {News} from './news.model';
import {NewsService} from '../news.service';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() defaultCategoryFromCategory: string;
  @Input() categorySelectedFromCategory: string;
  images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8vO9sju2Z1HZRRsDmsfTbkWb_XB58yJE6aweNPpCIOQx1xRw',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8vO9sju2Z1HZRRsDmsfTbkWb_XB58yJE6aweNPpCIOQx1xRw',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8vO9sju2Z1HZRRsDmsfTbkWb_XB58yJE6aweNPpCIOQx1xRw']
  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
      this.newsService.getNews()
      .subscribe(
        (response: News[]) => {
          this.news = response;
        }
      );

  }
 
}


