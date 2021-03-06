import { NgModule } from '@angular/core';
import {PortalComponent} from './Components/portal.component';
import {PortalRoutingModule} from './portal-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { BannerComponent } from './Components/banner/banner.component';
import { MainComponent } from './Components/main/main.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { BottleComponent } from './Components/bottle/bottle.component';
import { CardBottleComponent } from './Components/card-bottle/card-bottle.component';
import { AboutComponent } from './Components/about/about.component';
import { CardCaveComponent } from './Components/card-cave/card-cave.component';
import { CaveComponent } from './Components/cave/cave.component';



@NgModule({
  declarations: [
    PortalComponent,
    BannerComponent,
    MainComponent,
    HomePageComponent,
    BottleComponent,
    CardBottleComponent,
    AboutComponent,
    CardCaveComponent,
    CaveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalRoutingModule,
    FormsModule
  ]
})
export class PortalModule { }
