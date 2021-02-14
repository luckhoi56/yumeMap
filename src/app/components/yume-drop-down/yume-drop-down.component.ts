import { Component, Input, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'

@Component({
  selector: 'app-yume-drop-down',
  templateUrl: './yume-drop-down.component.html',
  styleUrls: ['./yume-drop-down.component.css']
})
export class YumeDropDownComponent implements OnInit {
  @Input() m_chosen_menu:string = ""
  public m_category=[]
  public m_default =""
  constructor(public menu: MenuService) { }

  ngOnInit(): void {
    this.getCategory()
    this.m_default = this.m_category[0]
    this.menu.setChosenCategory(this.m_default)
  }
  log(data: string): void {
    console.log(data);
    this.m_default=data
    this.menu.setChosenCategory(this.m_default)
  }
  
  public getCategory(){
    for(let item of this.m_chosen_menu){
      this.m_category.push(item["Category"])
    }
    this.m_category = [... new Set(this.m_category)] // remove the duplicates
  }
}
