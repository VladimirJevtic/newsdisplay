import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/news/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categorySelectedObj: string;
  citySelectedObj: string;
  
  news: News[];

  constructor() { }

  ngOnInit() {
  }

  onCategoryHandler(category: string) {
    this.categorySelectedObj = category;
  }

  onCityHandler(city: string) {
    this.citySelectedObj = city;
  }
}