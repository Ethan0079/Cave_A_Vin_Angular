import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './Components/portal.component';
import { LoggedGuardGuard } from '../guard/logged-guard.guard';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent//,
    //canActivate: [LoggedGuardGuard] //,
    // children: [
    //   {path: '', component: RedComponent},
    //   {path: 'red', component: RedComponent},
    //   {path: 'blue', component: BlueComponent},
    //   {path: 'character', component: CharacterComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
