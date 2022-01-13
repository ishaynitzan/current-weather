import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';
import API_KEY from '../../../api_key.js';


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) { }

  readonly ROOT_KEY_URl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=`;
  readonly ROOT_WEATHER_URl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

  private _weather$ = new BehaviorSubject<any>([]);
  public weather$ = this._weather$.asObservable()

  public query(value) {
    this._weather$.next(value );
  }


  async getPosts(searchWord: string) {
    let api = `?apikey=${API_KEY}&language=en&details=true&metric=true`
    let language = '&language=en';
    let searchKey: string[] = searchWord.split(' ');
    let word = searchKey.join('%20');
    let key = await firstValueFrom(this.http.get(this.ROOT_KEY_URl + word + language)).then(data => data[0].Key)
    let weatherDb = await firstValueFrom(this.http.get(this.ROOT_WEATHER_URl + key + api)).then(data => data)
    console.log('weatherDb',weatherDb);
    this.query(weatherDb)
  }



  private _telAvivDb: any = {
    "Headline": {
      "EffectiveDate": "2022-01-13T19:00:00+02:00",
      "EffectiveEpochDate": 1642093200,
      "Severity": 3,
      "Text": "Rain Thursday evening",
      "Category": "rain",
      "EndDate": "2022-01-14T01:00:00+02:00",
      "EndEpochDate": 1642114800,
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-01-13T07:00:00+02:00",
        "EpochDate": 1642050000,
        "Sun": {
          "Rise": "2022-01-13T06:42:00+02:00",
          "EpochRise": 1642048920,
          "Set": "2022-01-13T16:57:00+02:00",
          "EpochSet": 1642085820
        },
        "Moon": {
          "Rise": "2022-01-13T13:22:00+02:00",
          "EpochRise": 1642072920,
          "Set": "2022-01-14T03:46:00+02:00",
          "EpochSet": 1642124760,
          "Phase": "WaxingGibbous",
          "Age": 11
        },
        "Temperature": {
          "Minimum": {
            "Value": 13.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 18.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 18.6,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Pleasant"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 16.6,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Pleasant"
          }
        },
        "HoursOfSun": 3.4,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 2,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 3,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 13,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "An afternoon shower in spots",
          "LongPhrase": "Cloudy this morning, then times of sun and clouds this afternoon with a shower in the area",
          "PrecipitationProbability": 40,
          "ThunderstormProbability": 8,
          "RainProbability": 40,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 16.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 218,
              "Localized": "SW",
              "English": "SW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 40.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 238,
              "Localized": "WSW",
              "English": "WSW"
            }
          },
          "TotalLiquid": {
            "Value": 0.2,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0.2,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0.5,
          "HoursOfRain": 0.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 74,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 4499,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 40,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate",
          "ShortPhrase": "Evening rain",
          "LongPhrase": "Mild; evening rain, then partly cloudy late",
          "PrecipitationProbability": 100,
          "ThunderstormProbability": 13,
          "RainProbability": 100,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 260,
              "Localized": "W",
              "English": "W"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 37,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 267,
              "Localized": "W",
              "English": "W"
            }
          },
          "TotalLiquid": {
            "Value": 19.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 19.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 6,
          "HoursOfRain": 6,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 69,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2022-01-14T07:00:00+02:00",
        "EpochDate": 1642136400,
        "Sun": {
          "Rise": "2022-01-14T06:42:00+02:00",
          "EpochRise": 1642135320,
          "Set": "2022-01-14T16:58:00+02:00",
          "EpochSet": 1642172280
        },
        "Moon": {
          "Rise": "2022-01-14T14:00:00+02:00",
          "EpochRise": 1642161600,
          "Set": "2022-01-15T04:41:00+02:00",
          "EpochSet": 1642214460,
          "Phase": "WaxingGibbous",
          "Age": 12
        },
        "Temperature": {
          "Minimum": {
            "Value": 11.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 15.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 7.4,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 13.8,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 7.4,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 13.2,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "HoursOfSun": 3.7,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 4,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 13,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy",
          "ShortPhrase": "Downpours in the afternoon",
          "LongPhrase": "Some sun, then turning cloudy with showers, some heavy in the afternoon",
          "PrecipitationProbability": 98,
          "ThunderstormProbability": 20,
          "RainProbability": 98,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 22.2,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 259,
              "Localized": "W",
              "English": "W"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 38.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 260,
              "Localized": "W",
              "English": "W"
            }
          },
          "TotalLiquid": {
            "Value": 26,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 26,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 3,
          "HoursOfRain": 3,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 73,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 4416.2,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate",
          "ShortPhrase": "A bit of late-night rain",
          "LongPhrase": "Mostly cloudy with a touch of rain late",
          "PrecipitationProbability": 75,
          "ThunderstormProbability": 0,
          "RainProbability": 75,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 16.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 250,
              "Localized": "WSW",
              "English": "WSW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 37,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 235,
              "Localized": "SW",
              "English": "SW"
            }
          },
          "TotalLiquid": {
            "Value": 6.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 6.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 3,
          "HoursOfRain": 3,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 77,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2022-01-15T07:00:00+02:00",
        "EpochDate": 1642222800,
        "Sun": {
          "Rise": "2022-01-15T06:42:00+02:00",
          "EpochRise": 1642221720,
          "Set": "2022-01-15T16:59:00+02:00",
          "EpochSet": 1642258740
        },
        "Moon": {
          "Rise": "2022-01-15T14:43:00+02:00",
          "EpochRise": 1642250580,
          "Set": "2022-01-16T05:35:00+02:00",
          "EpochSet": 1642304100,
          "Phase": "WaxingGibbous",
          "Age": 13
        },
        "Temperature": {
          "Minimum": {
            "Value": 12.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 15.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 7.1,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 14.8,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 7.1,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 13.8,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "HoursOfSun": 3.1,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 4,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "A passing shower or two",
          "LongPhrase": "Mostly cloudy with a passing shower or two",
          "PrecipitationProbability": 84,
          "ThunderstormProbability": 17,
          "RainProbability": 84,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 14.8,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 237,
              "Localized": "WSW",
              "English": "WSW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 44.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 243,
              "Localized": "WSW",
              "English": "WSW"
            }
          },
          "TotalLiquid": {
            "Value": 4.9,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 4.9,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 2.5,
          "HoursOfRain": 2.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 76,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 4467.9,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Periods of rain",
          "LongPhrase": "Periods of rain",
          "PrecipitationProbability": 95,
          "ThunderstormProbability": 0,
          "RainProbability": 95,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 14.8,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 226,
              "Localized": "SW",
              "English": "SW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 31.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 255,
              "Localized": "WSW",
              "English": "WSW"
            }
          },
          "TotalLiquid": {
            "Value": 14.8,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 14.8,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 6,
          "HoursOfRain": 6,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 85,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2022-01-16T07:00:00+02:00",
        "EpochDate": 1642309200,
        "Sun": {
          "Rise": "2022-01-16T06:42:00+02:00",
          "EpochRise": 1642308120,
          "Set": "2022-01-16T17:00:00+02:00",
          "EpochSet": 1642345200
        },
        "Moon": {
          "Rise": "2022-01-16T15:33:00+02:00",
          "EpochRise": 1642339980,
          "Set": "2022-01-17T06:25:00+02:00",
          "EpochSet": 1642393500,
          "Phase": "WaxingGibbous",
          "Age": 14
        },
        "Temperature": {
          "Minimum": {
            "Value": 9.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 15.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 9.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 13,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 9.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 13,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "HoursOfSun": 1.4,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 5,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 1,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate",
          "ShortPhrase": "Morning rain; breezy",
          "LongPhrase": "Breezy in the morning with rain ending; otherwise, considerable clouds",
          "PrecipitationProbability": 100,
          "ThunderstormProbability": 0,
          "RainProbability": 100,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 25.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 294,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 40.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 229,
              "Localized": "SW",
              "English": "SW"
            }
          },
          "TotalLiquid": {
            "Value": 19.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 19.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 6,
          "HoursOfRain": 6,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 86,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 3923.6,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Mainly clear",
          "LongPhrase": "Mainly clear",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 11.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 39,
              "Localized": "NE",
              "English": "NE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 25.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 16,
              "Localized": "NNE",
              "English": "NNE"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 9,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2022-01-17T07:00:00+02:00",
        "EpochDate": 1642395600,
        "Sun": {
          "Rise": "2022-01-17T06:42:00+02:00",
          "EpochRise": 1642394520,
          "Set": "2022-01-17T17:01:00+02:00",
          "EpochSet": 1642431660
        },
        "Moon": {
          "Rise": "2022-01-17T16:27:00+02:00",
          "EpochRise": 1642429620,
          "Set": "2022-01-18T07:11:00+02:00",
          "EpochSet": 1642482660,
          "Phase": "WaxingGibbous",
          "Age": 15
        },
        "Temperature": {
          "Minimum": {
            "Value": 8.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 14.5,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 7.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 16,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 7.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 12.4,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "HoursOfSun": 10.3,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 6,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 3,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Plenty of sunshine",
          "LongPhrase": "Plenty of sunshine",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 11.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 238,
              "Localized": "WSW",
              "English": "WSW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 20.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 321,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 0,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 10937.6,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Clear",
          "LongPhrase": "Clear",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 260,
              "Localized": "W",
              "English": "W"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 301,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 0,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
      }
    ]
  }
}
