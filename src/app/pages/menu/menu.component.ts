import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
import {Item} from "./item"
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public m_items = []
  //these are for the http call holders
  public m_menu_items
  public m_drinkSize
  public m_drinkTopping
  public m_soupSize
  public m_soupTopping
  public m_processData
  public m_count = 0
  public m_chosen_category=""
  public m_ready:any ={
    "menu_item_ready":0,
    "drink_size_ready":0,
    "drink_topping_ready":0,
    "soup_size":0,
    "soup_topping":0,
    "invoked":0
  }
  public m_data=[] //this will hold data for entire table
   constructor(public menu: MenuService) { }

  ngOnInit(): void {
    this.getMenuItems()
    this.getDrinkSize()
    this.getDrinkTopping()
    this.getSoupTopping()
    this.getSoupSize()
    
  }
  
  public getMenuItems(){
    this.menu.searchMenuItems().subscribe(resp =>{
      this.m_menu_items = resp
    })
  }

  public getDrinkSize(){ //worked
    this.menu.searchDrinkSize().subscribe(resp =>{
      this.m_drinkSize = resp
      //console.log(this.m_drinkSize)
    })
  }

  public getDrinkTopping(){ //worked
    this.menu.searchDrinkTopping().subscribe(resp =>{
      this.m_drinkTopping = resp
    })
  }
  public getSoupTopping(){ //worked
    this.menu.searchSoupTopping().subscribe(resp =>{
      this.m_soupTopping=resp
    })
  }
  public getSoupSize(){ //worked
    this.menu.searchSoupSize().subscribe(resp =>{
      this.m_soupSize=resp
    })
  }
  public processData(){
    //console.log(this.m_menu_items)
    if(this.menu.m_ready.invoked == 0){
     // console.log("invoked")
      this.menu.m_ready.invoked = 1
      for(let item of this.m_menu_items){
        let m_temp = item
        m_temp["Quantity"] = "0"
        if(m_temp.Category=="Soup"){
          m_temp["Sizes"]=this.m_soupSize
          m_temp["Toppings"]=this.m_soupTopping
        }
        else if(m_temp.Category=="Smoothie" || m_temp.Category == "Tea" || m_temp.Category == "Coffee"){
          m_temp["Sizes"]=this.m_drinkSize
          m_temp["Toppings"]=this.m_drinkTopping
        }
        else{
          m_temp["Sizes"]=''
          m_temp["Toppings"]=''
        }
        this.m_data.push(m_temp) //make sure to inject back to the service
        //console.log(m_temp)
        //
        
      }
      //console.log(this.m_data) 
    }
    
  }
  public menuItemReady(){
    this.menu.m_ready.menu_item_ready= 1
    //console.log("menu item" + this.m_ready.menu_item_ready )
  }
  public drinkSizeReady(){
    this.menu.m_ready.drink_size_ready= 1
    //console.log("drink Size" + this.m_ready.drink_size_ready )
  }
  public drinkToppingReady(){
    this.menu.m_ready.drink_topping_ready = 1
    //console.log("drink Topping" + this.m_ready.drink_topping_ready)
  }
  public soupSizeReady(){
    this.menu.m_ready.soup_size = 1
    //console.log("soup Size" + this.m_ready.soup_size)
  }
  public soupToppingReady(){
    this.menu.m_ready.soup_topping = 1
    //console.log("soup toppping" + this.m_ready.soup_topping )
  }

  public checkReady(){
    //console.log(this.menu.m_ready)
    if(this.menu.m_ready.menu_item_ready + this.menu.m_ready.drink_size_ready+this.menu.m_ready.drink_topping_ready+this.menu.m_ready.soup_size+this.menu.m_ready.soup_topping == 5 && this.menu.m_ready.invoked ==0){
      //
      this.processData()
      //console.log(this.menu.m_ready)
      this.menu.setFlag() //got all data now
      this.menu.setData(this.m_data)
      return true
    }
    else if(this.menu.m_ready.invoked ==1){
      //console.log(this.menu.m_data)
      //console.log("it is ready")
      return true
    }
    else
      return false
  }
  
}
