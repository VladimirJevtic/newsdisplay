import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import {News} from '../news/news.model';
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
  cities = [];
  selectedCity: string;

  @Input() news: News[];

  show: boolean;
  
  constructor(private mysqlService: MysqlService) { }

  ngOnInit() {
    this.mysqlService.getCities()
      .subscribe(
        (response: any) => {
          this.cities = response;
        }
      );
    
  }

  ngOnChanges() {
  }

  showCategory(city: string) {
    this.show = true;
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
