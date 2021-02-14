import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {MenuService} from '../../menu.service'

import { StripeService, StripeCardNumberComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent,
} from '@stripe/stripe-js';

import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-yume-stripe',
  templateUrl: './yume-stripe.component.html',
  styleUrls: ['./yume-stripe.component.css'],
})
export class YumeStripeComponent implements OnInit {
  @ViewChild(StripeCardNumberComponent) card: StripeCardNumberComponent;
  m_status: any
  m_operation_hours: any
  m_item ="Ca La Han"
  m_button_flag = 0
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  stripeTest: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService,
    public menu: MenuService
  ) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      amount: [1001, [Validators.required, Validators.pattern(/\d+/)]],
      email:"",
      phone:""
    });
    this.menu.getServer().subscribe(resp =>{
      console.log(resp)
      this.m_button_flag=1
    })
    this.menu.statusRestaurant().subscribe(data=>{
      this.m_status = data["status"]
    })
    
    this.menu.getHours().subscribe(data=>{
      this.m_operation_hours = data["open"]
    })
  
  }

  pay(): void {
    this.m_button_flag = 2
    if (this.stripeTest.valid) {
      this.card.update({disabled:true})
      this.createPaymentIntent()
        .pipe(
          switchMap((pi) =>
            this.stripeService.confirmCardPayment(pi.client_secret, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.stripeTest.get('name').value,
                },
              },
            })
            
            
          )
        )
        .subscribe((result) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
            console.log("payment failed")
            this.m_button_flag = 4
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              console.log("payment succeeded")
              this.m_button_flag = 3
              let m_data ={
                "customer_name": this.stripeTest.get('name').value,
                "customer_phone_number": this.stripeTest.get('phone').value,
                "customer_email": this.stripeTest.get('email').value,
                "items": this.menu.getData()
              }
              this.createReceipt(m_data).subscribe((result)=>{
                console.log(result)
              })
              //send to server
              this.menu.sendOrder().subscribe(resp=>{
                console.log(resp)
              })
            }
          }
        });
    } else {
      console.log(this.stripeTest);
    }
    
  }

  createPaymentIntent(): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `https://yume-angular.herokuapp.com/create-payment-intent`,
      this.menu.getData()
    );
  }
  createReceipt(m_data):any{
    return this.http.post<any>(
      `https://yume-angular.herokuapp.com/send-receipt`,m_data
    )
  }
}
