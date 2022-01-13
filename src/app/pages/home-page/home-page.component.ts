import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private http: WeatherApiService) {
    this.inputSearchUpdate.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        if(value) this.http.getPosts(value)
      });
  }

  inputSearch: string
  inputSearchUpdate = new Subject<string>();
  weather$: Observable<any[]>

  ngOnInit(): void {
    this.weather$ = this.http.weather$
  }




}
