import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { ForcastData } from '../../models/forcast-data';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css'],
})
export class ForcastComponent implements OnInit, OnDestroy {
  // variable declartions
  zipcode!: string;
  zipcodeArr!: ForcastData;

  // constructor methods
  constructor(
    private weatherServices: WeatherService,
    private activatedRoute: ActivatedRoute
  ) {
    this.zipcode = String(this.activatedRoute.snapshot.paramMap.get('zipcode'));
  }

  ngOnInit(): void {
    this.weatherServices.getForcastData(this.zipcode).subscribe((response) => {
      this.zipcodeArr = response;
    });
  }

  ngOnDestroy() {}
}
