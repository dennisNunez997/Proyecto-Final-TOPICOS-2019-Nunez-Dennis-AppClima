import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

import { WeatherService } from '../services/weather.service';
import { Weather1Service} from '../services/weather1.service';
import { Weather2Service } from '../services/weather2.service';
import { Weather3Service } from '../services/weather3.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weather;
  weather1;
  weather2;
  weather3;

  ngOnInit(){
    
  }
 
  constructor(
    private authSvc: AuthService,
    private router: Router, 
    private afAuth: AngularFireAuth,
    private weatherService: WeatherService,
    private weather1Service: WeatherService,
    private weather2Service: WeatherService,
    private weather3Service: Weather3Service
    ) {}

  onLogout()
  {
    console.log('logout');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName)
      .subscribe(
        res => {
          console.log(res),
            this.weather = res
        },
        err => console.log(err)
      )
  }
  getWeather1(cityName1: string)
  {
    this.weather1Service.getWeather(cityName1)
      .subscribe(
        res => {
          console.log(res),
            this.weather1 = res
        },
        err => console.log(err)
      )
  }

  getWeather2(cityName2: string) {
    this.weather2Service.getWeather(cityName2)
      .subscribe(
        res => {
          console.log(res),
            this.weather2 = res
        },
        err => console.log(err)
      )
  }

  getWeather3(cityName3: string) {
    this.weather3Service.getWeather3(cityName3)
      .subscribe(
        res => {
          console.log(res),
            this.weather3 = res
        },
        err => console.log(err)
      )
  }


  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);
      cityName.value = '';
    } else {
      alert('Por favor insert valores')
    }
    cityName.focus();
    return false
  }
  
  submitLocation1(cityName1: HTMLInputElement)
  {
    if (cityName1.value) {
      this.getWeather1(cityName1.value);
      cityName1.value = '';
    } else {
      alert('Por favor insert valores')
    }
    cityName1.focus();
    return false
  }

  submitLocation2(cityName2: HTMLInputElement) {
    if (cityName2.value) {
      this.getWeather2(cityName2.value);
      cityName2.value = '';
    } else {
      alert('Por favor insert valores')
    }
    cityName2.focus();
    return false
  }

  submitLocation3(cityName3: HTMLInputElement) {
    if (cityName3.value) {
      this.getWeather3(cityName3.value);
      cityName3.value = '';
    } else {
      alert('Por favor insert valores')
    }
    cityName3.focus();
    return false
  }

}


