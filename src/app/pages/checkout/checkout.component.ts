import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../menu.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public menu: MenuService) { }
  public getTotal(){
    let m_total = 0
    for(let item of this.menu.getData()){
      m_total += item.Quantity * (item.Price + (item.chosenSizePrice ? item.chosenSizePrice : 0) + (item.chosenToppingPrice ? item.chosenToppingPrice : 0))
    }
    return m_total
  }
  public makePost(){
    console.log("button being clicked")
    this.menu.sendOrder().subscribe(resp=>{
      console.log(resp)
    })
  }
  ngOnInit(): void {
  }

}

