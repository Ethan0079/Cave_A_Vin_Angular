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

  constructor(private router: Router, private service: ServiceAuthentificationService) {
    this.auth = {} as IAuthentification;
  }

  ngOnInit(): void {
    localStorage.setItem('isLogged', 'false');
  }

  login(): void{
    if (this.service.login(this.auth.username, this.auth.password)) {
      console.log('logged');
      this.router.navigate(['portal']);
    } else
    {
      this.errormessage = "error login";
    }
  }

}
