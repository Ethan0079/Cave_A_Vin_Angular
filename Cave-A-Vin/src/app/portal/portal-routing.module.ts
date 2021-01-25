import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './Components/portal.component';
import { LoggedGuardGuard } from '../guard/logged-guard.guard';
import { BottleComponent } from './Components/bottle/bottle.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutComponent } from './Components/about/about.component';
import { CaveComponent } from './Components/cave/cave.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [LoggedGuardGuard],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'bottles', component: BottleComponent},
      { path: 'caves', component: CaveComponent},
      { path: 'about', component: AboutComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
