import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private apiCityUrl;
  @Input() cityInput: string;
  //cities: any = {};
  city: string;
  today: number = Date.now();

  constructor(private http: Http,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCityForecast(this.cityInput);
    this.getCityTest();
    this.getCityData();
  }

  getCityForecast(city: string) {
    console.log(city);
    this.apiCityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e800bfa881e35f4ed26e14e83db9c5ce';
  }

  getCityData() {
    return this.http.get(this.apiCityUrl)
        .pipe(map((res: any) => res.json()))
  }

  getCityTest() {
    this.getCityData()
      .subscribe(response => {
          console.log(response);
          this.city = response;
      })
  }
}
