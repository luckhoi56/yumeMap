import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-yume-card',
  templateUrl: './yume-card.component.html',
  styleUrls: ['./yume-card.component.css']
})
export class YumeCardComponent implements OnInit {
  radioValue_1 = ""
  radioValue_2 = ""
  @Input() item
  @Input() m_content
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
    if(this.item.Toppings[0] == null){ //no topping, then set the topping price = 0
      this.item["chosenToppingPrice"] = 0
    }
    if(this.item.Sizes[0] == null){ //no size, then set the size price = 0
      this.item["chosenSizePrice"] = 0
    }
    if(this.item.Toppings[0] != null && this.item.chosenTopping==null){
      //console.log(this.item.Toppings[0].Choice)
      this.radioValue_1 = this.item.Toppings[0].Choice
      this.item["chosenTopping"] = this.radioValue_1
      this.item["chosenToppingPrice"] = 0
    }
    if(this.item.chosenTopping!=null){
      this.radioValue_1 = this.item.chosenTopping
    }
    if(this.item.Sizes[0] != null && this.item.chosenSize == null){
      //console.log(this.item.Sizes[0].Choice)
      this.radioValue_2 = this.item.Sizes[0].Choice
      this.item["chosenSize"] = this.radioValue_2
      this.item["chosenSizePrice"] = 0
    }
    if(this.item.chosenSize != null){
      this.radioValue_2 = this.item.chosenSize
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  plusOne():void{
    this.item.Quantity <9 ?this.item.Quantity++:false
  }
  minusOne():void{
    this.item.Quantity >0 ?this.item.Quantity--:false
  }
  public updateToppingChosen(target):void{
    this.item["chosenTopping"] = target.Choice
    this.item["chosenToppingPrice"] = target.Price
    //this.item["chosenToppingPrice"]
    console.log(this.item)
    //console.log("ehy")
  }
  public updateSizeChosen(target):void{
    this.item["chosenSize"] = target.Choice
    this.item["chosenSizePrice"] = target.Price
    console.log(this.item)
    //console.log("ehy")
  }
}
