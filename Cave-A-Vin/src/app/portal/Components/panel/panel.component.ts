import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from 'src/app/login/Services/service-authentification.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private service: ServiceAuthentificationService) { }

  ngOnInit(): void {
  }

  disconect(): void{
    this.service.disconect();
  }
}
