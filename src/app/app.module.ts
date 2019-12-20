import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { CartComponent } from './cart/cart.component';


/////////////////////////////////////////////
import {RouterModule, GuardsCheckEnd} from '@angular/router';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';

//generate your custom routes

const myRoute = [
  {path:'',component:HomeComponent},
  {path:'cartpage',component: CartComponent},
  {path:'loginpage',component: LoginComponent, canActivate:[Guard1Guard]},
  {path:'passwordpage',component: PasswordComponent, canActivate:[Guard2Guard]}
  
]

/////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LeftComponent,
    RightComponent,
    HomeComponent,
    LoginComponent,
    PasswordComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(myRoute),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
