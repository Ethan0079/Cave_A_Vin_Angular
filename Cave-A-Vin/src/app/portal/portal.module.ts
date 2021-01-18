import { NgModule } from '@angular/core';
import {PortalComponent} from './Components/portal.component';
import {PortalRoutingModule} from './portal-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    PortalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalRoutingModule,
    FormsModule
  ]
})
export class PortalModule { }
