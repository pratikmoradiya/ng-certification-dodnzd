import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { ForcastComponent } from './components/forcast/forcast.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'forcast/:zipcode', component: ForcastComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
