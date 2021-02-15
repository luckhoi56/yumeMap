import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {MenuModule} from './menu/menu.module';
import { YumeCardComponent } from './components/yume-card/yume-card.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { YumeRadioButtonComponent } from './components/yume-radio-button/yume-radio-button.component';
import { YumePayComponent } from './components/yume-pay/yume-pay.component';
import { YumeDropDownComponent } from './components/yume-drop-down/yume-drop-down.component';
import { YumeStripeComponent } from './components/yume-stripe/yume-stripe.component'
import { StripeModule } from "stripe-angular";
import { NgxStripeModule } from 'ngx-stripe';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { YumeSpinComponent } from './components/yume-spin/yume-spin.component';
import { LocationComponent } from './pages/location/location.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './pages/map/map.component';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    YumeCardComponent,
    CheckoutComponent,
    YumeRadioButtonComponent,
    YumePayComponent,
    YumeDropDownComponent,
    YumeStripeComponent,
    YumeSpinComponent,
    LocationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MenuModule,
    NgxStripeModule.forRoot("pk_live_51GwwqJJpV9cXOdRhw2mJFANLPJbH5XwafRmdIDPAjfbMBW7Y3tjaOr4jXtMwQknbbdaCO1aTMa0r4GaeqYd8YCvf00Rpo2xypa"),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCdWEUdEmkClwVHt3NZsvBjKXWGtJdRWk'
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
