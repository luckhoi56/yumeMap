import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m_status :any // if m_status = 1, regular, 0 means forced close. m_status has more precedence than m_operation_hours
  m_reason_to_close: any
  m_operation_hours: any
  m_announcement: any
  constructor(public menu: MenuService) { }

  ngOnInit(): void {
    this.menu.statusRestaurant().subscribe(data=>{
      this.m_status = data["status"]
    })
    this.menu.getReasonToClose().subscribe(data=>{
      this.m_reason_to_close = data["reason"]
    })
    this.menu.getHours().subscribe(data=>{
      this.m_operation_hours = data["open"]
    })
    this.menu.getAnnouncement().subscribe(data=>{
      this.m_announcement = data["announcement"]
    })
  }

}
