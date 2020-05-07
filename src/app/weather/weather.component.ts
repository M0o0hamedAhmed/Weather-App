import { Component, OnInit } from '@angular/core';
import{WeatherService} from '../weather.service' ;
import{KToCPipe} from '../k-to-c.pipe' ;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  weatherAll ;
  apiAll:{};
  city:string ;


 location(){
  this._WeatherService.api().subscribe((ip)=>{
    this.apiAll=ip ;
    console.log(ip.region_name)
   
  });
 }

  search(){
    this._WeatherService.getWeatherAll(this.city).subscribe((data)=>{
      this.weatherAll=data ;
     
    })
  }

  constructor(public _WeatherService:WeatherService) { 
    
    this._WeatherService.api().subscribe((ip:any)=>{
      this.apiAll=ip ;
      this.city=ip.city
      console.log( this.city);
          this._WeatherService.getWeatherAll(this.city).subscribe((data)=>{
      this.weatherAll=data ;
      console.log(data )
    });
     
    });

  }

  ngOnInit(): void {
  }
 

}
