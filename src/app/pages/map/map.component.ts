import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import {MenuService} from '../../menu.service'
import {interval, Subscription} from 'rxjs'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  subscription: Subscription;
  intervalId: number;
  latitude: number;
  longitude: number;
  m_latitude: number = -117.7;
  m_longitude: number = 34.05;
  m_zoom: number = 16
  m_driver_latitude:number 
  m_driver_longitude:number
  size: NzButtonSize = 'large'
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor(public menu: MenuService) { }
  async getLocation(){
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude
  }
  ngOnInit(): void {
    const source = interval(20000);
    this.subscription = source.subscribe(() =>{
       //this.getDriverCoord()
       console.log("hey")
    }
    );
  }
  public updateCoord(){
    this.latitude = this.m_latitude
    this.longitude = this.m_longitude
  }
  public updateDriverCoord(){
    this.m_driver_latitude = this.m_latitude
    this.m_driver_longitude = this.m_longitude
  }
  public getDriverCoord(){
    this.menu.getDriverCoord().subscribe(data=>{
      console.log("aha becing called")
      this.m_driver_latitude = data["latitude"]
      this.m_driver_longitude = data["longitude"]
      console.log("data received " +data)
      console.log("driver's longitude " + this.m_driver_longitude)
      console.log("driver's latitude " + this.m_driver_latitude)
    })
  }
}
