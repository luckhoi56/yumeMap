import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import {MenuService} from '../../menu.service'
import {interval, Subscription} from 'rxjs'
import { AgmDirectionModule } from 'agm-direction';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  subscription: Subscription;
  intervalId: number;
  m_user_coords ={
    "lat" : 34.049400,
    "lng": -117.706930
  }
  m_driver_coords ={
    "lat" :34.058660,
    "lng": -117.749020
  }
  m_coords_stacks=[this.m_user_coords,this.m_driver_coords]
  m_zoom: number = 14
  
  //m_coords_stacks = []
  size: NzButtonSize = 'large'
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor(public menu: MenuService) { }
  async getLocation(){
    const position = await Geolocation.getCurrentPosition();
    //this.lat = position.coords.lat
    //this.lng = position.coords.lng
  }
  ngOnInit(): void {
    const source = interval(20000);
    console.log("first init " + this.m_driver_coords)
    this.subscription = source.subscribe(() =>{
       this.getDriverCoord()
       //console.log("hey")
    }
    );
    
  }
  
  public updateDriverCoord(){
    this.m_driver_coords.lat = this.m_user_coords.lat
    this.m_driver_coords.lng = this.m_user_coords.lng
  }
  public getDriverCoord(){
    this.menu.getDriverCoord().subscribe(data=>{
      console.log("aha becing called")
      this.m_driver_coords.lat = data["lat"]
      this.m_driver_coords.lng = data["lng"]
      console.log("data received " +data)
      console.log("driver's lng " + this.m_driver_coords.lng)
      console.log("driver's lat " + this.m_driver_coords.lat)
    })
  }
}
