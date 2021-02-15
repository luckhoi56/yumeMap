import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  m_zoom: number = 16
  size: NzButtonSize = 'large'
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }
  async getLocation(){
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude
  }
  ngOnInit(): void {
  }

}
