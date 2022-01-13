import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './cmps/main-header/main-header.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherForecastComponent } from './cmps/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,  
    FavoritePageComponent,
    HomePageComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
