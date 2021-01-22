import { NgModule } from '@angular/core';
import {PortalComponent} from './Components/portal.component';
import {PortalRoutingModule} from './portal-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { BannerComponent } from './Components/banner/banner.component';
import { PanelComponent } from './Components/panel/panel.component';
import { MainComponent } from './Components/main/main.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { BottleComponent } from './Components/bottle/bottle.component';
import { CardBottleComponent } from './Components/card-bottle/card-bottle.component';
import { AboutComponent } from './Components/about/about.component';



@NgModule({
  declarations: [
    PortalComponent,
    BannerComponent,
    PanelComponent,
    MainComponent,
    MainContentComponent,
    HomePageComponent,
    BottleComponent,
    CardBottleComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalRoutingModule,
    FormsModule
  ]
})
export class PortalModule { }
