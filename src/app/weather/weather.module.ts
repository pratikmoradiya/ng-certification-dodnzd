import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './components/weather/weather.component';
import { ForcastComponent } from './components/forcast/forcast.component';
import { FormsModule } from '@angular/forms';
import { DayNamePipe } from '../common/pipes/day-name.pipe';

@NgModule({
  declarations: [WeatherComponent, ForcastComponent, DayNamePipe],
  imports: [CommonModule, FormsModule, WeatherRoutingModule],
})
export class WeatherModule {}
