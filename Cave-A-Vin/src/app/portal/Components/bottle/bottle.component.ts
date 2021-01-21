import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bottle } from 'src/app/interface/bottle';
import { BottleService } from '../../Services/bottle.service';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})
export class BottleComponent implements OnInit {

  
  public bottles = Array<Bottle>();
  //public character = {} as Character;
  public bottle : Bottle = {} as Bottle;

  // Id: number;
  // Name : string;
  // HitPoints: number;
  // Strength: number;
  // Defense: number;
  // Intelligence: number;
  // Class: number;


  constructor(private http: HttpClient, public _bottleService:BottleService) { 
    this.bottle = {Id:0,Name:"",Date:"2021-01-14T09:37:43.568",Amount:0,PricePerBottle:0,Cave:0,CaveID:0,Owner:0,OwnerID:0,TypeVin:0}
  }

  ngOnInit(): void {
    this.onGetBottles();
  }

  onGetBottles(): void
  {
    this._bottleService.getBottles().subscribe(
      data =>
      {
        if(data)
        {
          //debugger;
          this.bottles = data;
        }
      },
      error =>
      {debugger}
    );
  }

  postBottle(): void
  {
    this._bottleService.addPost(this.bottle).subscribe(
      data =>
      {
        if(data)
        {
          this.onGetBottles();
        }
      },
      error =>
      {debugger}
    );
    this.bottle = {} as Bottle;
  }

}
