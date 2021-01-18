import { NgModule } from '@angular/core';
import {LoginComponent} from './Components/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
