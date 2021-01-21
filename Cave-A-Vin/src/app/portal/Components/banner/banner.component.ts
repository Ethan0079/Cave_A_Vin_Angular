import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from 'src/app/login/Services/service-authentification.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private service: ServiceAuthentificationService) { }

  ngOnInit(): void
  {
    
  }

  disconect(): void{
    this.service.disconect();
  }

}
