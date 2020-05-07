import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 x:{} ; 
  constructor(public _HttpClient:HttpClient) {
    
   }

   getWeatherAll(city):Observable<any>{
     return this._HttpClient.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=69ee895f09be9d1dbcebcd5d74403b66")
   }
   api():Observable<any>{
    return this._HttpClient.get("http://api.ipstack.com/41.65.186.146?access_key=9aa8f3a82cf019d8360944433e8179e3")
  }
}
