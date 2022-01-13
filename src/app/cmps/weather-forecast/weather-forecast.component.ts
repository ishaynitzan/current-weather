import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor() { }

  @Input() weather : any

  ngOnInit(): void {
  }

}
