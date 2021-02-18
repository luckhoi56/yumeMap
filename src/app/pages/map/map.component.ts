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
  m_driver_coords ={
    "latitude" : 34.049400,
    "longitude": -117.706930
  }
  m_user_coords ={
    "latitude" : 34.049400,
    "longitude": -117.706930
  }
  
  m_zoom: number = 14
  
  m_coords_stacks = []
  size: NzButtonSize = 'large'
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor(public menu: MenuService) { }
  async getLocation(){
    const position = await Geolocation.getCurrentPosition();
    //this.latitude = position.coords.latitude
    //this.longitude = position.coords.longitude
  }
  ngOnInit(): void {
    const source = interval(20000);
    console.log("first init " + this.m_driver_coords)
    this.subscription = source.subscribe(() =>{
       this.getDriverCoord()
       //console.log("hey")
    }
    );
    this.m_coords_stacks.push([this.m_user_coords,this.m_driver_coords])
  }
  
  public updateDriverCoord(){
    this.m_driver_coords.latitude = this.m_user_coords.latitude
    this.m_driver_coords.longitude = this.m_user_coords.longitude
  }
  public getDriverCoord(){
    this.menu.getDriverCoord().subscribe(data=>{
      console.log("aha becing called")
      this.m_driver_coords.latitude = data["latitude"]
      this.m_driver_coords.longitude = data["longitude"]
      console.log("data received " +data)
      console.log("driver's longitude " + this.m_driver_coords.longitude)
      console.log("driver's latitude " + this.m_driver_coords.latitude)
    })
  }
}
