import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './Components/portal.component';
import { LoggedGuardGuard } from '../guard/logged-guard.guard';
import { LoginComponent } from '../login/Components/login.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [LoggedGuardGuard] //,
    // children: [
    //   {path: '', component: RedComponent},
    //   {path: 'red', component: RedComponent},
    //   {path: 'blue', component: BlueComponent},
    //   {path: 'character', component: CharacterComponent}
    // ]
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
