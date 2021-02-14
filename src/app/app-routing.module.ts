import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import { MenuComponent } from './pages/menu/menu.component';
import {CheckoutComponent} from './pages/checkout/checkout.component'
import {LocationComponent} from './pages/location/location.component'

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'location',component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
