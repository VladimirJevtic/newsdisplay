import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news/news.component';
import {CategoryComponent} from './category/category.component';
import {NewsService} from './news.service';
import { MysqlService } from 'src/app/shared/mysql.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather/weather.component';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';

const COMPONENTS = [
  NewsComponent,
  CategoryComponent,
  WeatherComponent
];

@NgModule({
  declarations: [
    DropdownDirective,
    ...COMPONENTS, 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    AngularWeatherWidgetModule.forRoot({
      key: 'e800bfa881e35f4ed26e14e83db9c5ce',
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    })
  ],
  exports: [
    DropdownDirective,
    CommonModule,
    HttpClientModule,
    ...COMPONENTS
  ],
  providers: [NewsService, MysqlService]
})
export class SharedModule {

}
