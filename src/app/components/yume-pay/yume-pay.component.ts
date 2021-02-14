import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yume-pay',
  templateUrl: './yume-pay.component.html',
  styleUrls: ['./yume-pay.component.css']
})
export class YumePayComponent implements OnInit {
  @Input() m_tax = 5
  @Input() m_total = 0
  @Input() m_subTotal = 0
  constructor() { }

  ngOnInit(): void {
  }

}
