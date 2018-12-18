import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private apiCityUrl;
  dataCity: any = {};

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { 
                console.log('Sad ce city name data ...');
        this.route.params.subscribe( params =>  this.getCityForecast(params['name']));
        this.getCityTest();
        this.getCityData();
              }

  ngOnInit() {
  }

  getCityForecast(cityName: string) {
    console.log(cityName);
    this.apiCityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  }

  getCityData() {
    return this.http.get(this.apiCityUrl)
        .pipe(map((res: Response) => res.json()))
  }

  getCityTest() {
    this.getCityData().subscribe(dataCity => {
        console.log(dataCity);
        this.dataCity = dataCity;
    })
}
}
