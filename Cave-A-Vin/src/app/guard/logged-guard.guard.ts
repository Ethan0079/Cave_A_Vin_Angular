import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../login/Services/service-authentification.service'

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardGuard implements CanActivate {
  constructor(private service: ServiceAuthentificationService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if (localStorage.getItem('isLogged') == "false") {
        this.router.navigate(['login']);
      }
      return true;
    }

}
