import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from 'src/app/login/Services/service-authentification.service';
import { IAuthentification } from 'src/app/iauthentification';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  // login: IAuthentification;

  constructor(private service: ServiceAuthentificationService) { }

  ngOnInit(): void
  {
    // this.login = this.service.login;
  }

  disconnect(): void{
    this.service.disconnect();
  }
}
