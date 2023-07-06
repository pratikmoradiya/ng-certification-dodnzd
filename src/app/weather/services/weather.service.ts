import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather-data';
import { ForcastData } from '../models/forcast-data';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherMapApiUrl = 'https://api.openweathermap.org/data/2.5/';
  weatherApiKey = 'bd5e378503939ddaee76f12ad7a97608';

  weatherApiUrl = this.weatherMapApiUrl + 'weather';
  forcastApiUrl = this.weatherMapApiUrl + 'forecast/daily';

  constructor(private http: HttpClient) {}

  addLocation(zipcode: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('zip', zipcode)
      .set('appid', this.weatherApiKey);
    return this.http.get<WeatherData>(this.weatherApiUrl, { params });
  }

  getForcastData(zipcode: string): Observable<ForcastData> {
    const params = new HttpParams()
      .set('cnt', 5)
      .set('zip', zipcode)
      .set('appid', this.weatherApiKey);
    return this.http.get<ForcastData>(this.forcastApiUrl, { params });
  }
}
