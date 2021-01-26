import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {RouterModule} from '@angular/router';
import {FullCarComponent} from './full-car/full-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FullCarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/cars', component: CarsComponent, children: [{
        path: ':id', component: FullCarComponent,
      }]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
