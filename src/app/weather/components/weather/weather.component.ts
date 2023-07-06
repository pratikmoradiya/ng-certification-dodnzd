import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  zipcode!: string;
  zipcodeArr!: WeatherData[];
  zipcodeList!: string[];

  constructor(private weatherServices: WeatherService) {}

  ngOnInit(): void {
    this.zipcodeArr = JSON.parse(localStorage.getItem('zipcodeArr') || '[]');
    this.zipcodeList = JSON.parse(localStorage.getItem('zipcodeList') || '[]');
  }

  closeWeatherCard(event: Event, index: number) {
    event.stopPropagation();
    this.zipcodeArr = this.zipcodeArr.filter((v, i) => {
      return i !== index;
    });
    this.zipcodeList = this.zipcodeList.filter((v, i) => {
      return i !== index;
    });
    localStorage.setItem('zipcodeList', JSON.stringify(this.zipcodeList));
    localStorage.setItem('zipcodeArr', JSON.stringify(this.zipcodeArr));
  }

  addLocation() {
    if (this.zipcode) {
      if (!this.zipcodeList.includes(this.zipcode)) {
        this.weatherServices.addLocation(this.zipcode).subscribe((response) => {
          response.zipcode = this.zipcode;
          this.zipcodeArr.push(response);
          this.zipcodeList.push(this.zipcode);
          localStorage.setItem('zipcodeArr', JSON.stringify(this.zipcodeArr));
          localStorage.setItem('zipcodeList', JSON.stringify(this.zipcodeList));
          this.zipcode = '';
        });
      } else {
        // We can also set session flash message or error message but now i just put alert message for understand purpose.
        alert('Zipcode already exist!');
      }
    }
  }

  // track by used to help identify unique items in our arrays, angular to detect the specific node element that needs to change or be added instead of rebuilding the whole array
  trackByMethod(index: number, el: WeatherData) {
    return index;
  }

  // any subscription you must be unsubscription before you leave a component.
  ngOnDestroy() {}
}
