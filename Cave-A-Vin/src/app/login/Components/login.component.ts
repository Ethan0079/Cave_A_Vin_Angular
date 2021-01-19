import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../Services/service-authentification.service';
import { IAuthentification } from '../../iauthentification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: IAuthentification;
  errormessage: string = "";
  validemessage: string = "";
  valideclass: string = "";
  errorclass: string = "";
  invisible: string = "";

  constructor(private router: Router, private service: ServiceAuthentificationService) {
    this.auth = {} as IAuthentification;
  }

  ngOnInit(): void {
    localStorage.setItem('isLogged', 'false');
    this.invisible = "";
  }

  login(): void{
    if (this.service.login(this.auth.username, this.auth.password)) {
      console.log('logged');
      this.router.navigate(['portal']);
      this.validemessage = "Connection autorisée";
      this.valideclass = "alert alert-success"; 
      this.invisible = "invisible";
    } else
    {
      this.errormessage = "Erreur de login";
      this.errorclass = "alert alert-danger"; 
      this.invisible = "invisible";
    }
  }

}
