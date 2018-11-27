import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {News} from './news.model';
import { MysqlService } from 'src/app/shared/mysql.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NgbCarouselConfig]
})
export class NewsComponent implements OnInit, OnChanges {
  @Input() categoryInput: string;
  @Input() cityInput: string;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  news: News[];
  news2: News[];

  constructor(private mysqlService: MysqlService,
                      config: NgbCarouselConfig) {
                      config.showNavigationArrows = true;
                      config.showNavigationIndicators = true;
              }                        

  ngOnInit() {
    this.mysqlService.getNewsByCity(this.cityInput)
      .subscribe(
        (response: News[]) => {
          this.news = response;
          console.log(response);
          setTimeout( () => {
            if(this.categoryInput){
              this.showNewsByCityAndCategory();
            }
            },5000)
        }
      );
    
     
  }

  ngOnChanges() {
    this.mysqlService.getNewsByCity(this.cityInput)
      .subscribe(
        (response: News[]) => {
          this.news = response;
          console.log(response);
          setTimeout( () => {
            if(this.categoryInput){
              this.showNewsByCityAndCategory();
            }
            },5000)
        }
      );

      
  }
  
  showNewsByCityAndCategory() {
    this.mysqlService.getNewsByCityAndCategory(this.cityInput, this.categoryInput)
        .subscribe(
          (response: News[]) => {
            this.news = response;
            console.log(response);
          }
        );
    }
}



