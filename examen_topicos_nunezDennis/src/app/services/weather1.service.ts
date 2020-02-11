import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather1Service {

  apiKey = '3254e7e0e6fdc2ddc59e5f749d4dcf17'
  URI: string
  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
  }

  getWeather1(cityName1: string) {
    return this.http.get(`${this.URI}${cityName1}`);
  }

}
