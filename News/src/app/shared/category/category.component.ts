import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import {News} from '../news/news.model';
import {NewsService} from '../news.service';
import { MysqlService } from 'src/app/shared/mysql.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {
  @Output() categorySelected = new EventEmitter<string>();
  @Output() citySelected = new EventEmitter<string>();
  categoryList = [];
  cities: string[];
  selectedCity: string;

  @Input() news: News[];
  
  constructor(private mysqlService: MysqlService,
              private newsService: NewsService) { }

  ngOnInit() {
    this.mysqlService.getCities()
      .subscribe(
        (response: any) => {
          this.cities = response;
        }
      );
    
  }

  ngOnChanges() {
    this.mysqlService.getNewsByCity(this.cities[0])
      .subscribe(
        (response: News[]) => {
          this.news = response;
          console.log(response);
        }
      );
  }

  showCategory(city: string) {
    this.selectedCity = city;
    this.mysqlService.getCategoriesByCity(city)
    .subscribe(
      (categoryResponse: any) => {
        this.categoryList = categoryResponse;
        this.showNews(categoryResponse);
      }
    );
  }


  showNews(category: string) {
    this.categorySelected.emit(category);
    this.citySelected.emit(this.selectedCity);
  }
}
