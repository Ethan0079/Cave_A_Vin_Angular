import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './Components/portal.component';
import { LoggedGuardGuard } from '../guard/logged-guard.guard';
import { LoginComponent } from '../login/Components/login.component';
import { PanelComponent } from './Components/panel/panel.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [LoggedGuardGuard],
    children: [
       { path: '', component: PanelComponent },
       { path: '', component: MainComponent}
     ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuardGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
