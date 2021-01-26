import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../models/model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: Car;

  constructor() {
  }

  ngOnInit(): void {
  }

}
