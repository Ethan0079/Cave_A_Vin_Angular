import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/Components/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortalComponent } from './portal/Components/portal.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'portal',
    pathMatch: 'full',
    redirectTo: '/portal'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

