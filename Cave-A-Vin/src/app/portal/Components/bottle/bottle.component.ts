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
  public bottle: Bottle = {} as Bottle;
  public bottleId: number = 1;

  constructor(private http: HttpClient, public _bottleService: BottleService) {
    this.bottle = { Id: 0, Name: "", Date: "2021-01-14T09:37:43.568", Amount: 0, PricePerBottle: 0, CaveId: 0, OwnerId: 0, Typevin: 0, ImageUrl:"" }
  }

  ngOnInit(): void {
    this.onGetBottles();
  }

  onGetBottles(): void {
    this._bottleService.getBottles().subscribe(
      data => {
        if (data) {
          //debugger;
          this.bottles = data;
        }
      },
      error => { debugger }
    );
  }

  postBottle(): void {
    this._bottleService.addPost(this.bottle).subscribe(
      data => {
        if (data) {
          this.onGetBottles();
        }
      },
      error => { debugger }
    );
    this.bottle = {} as Bottle;
  }

  updateBottle(): void {
    this._bottleService.postBottle(this.bottle, this.bottleId).subscribe(
      data => {
        if (data) {
          this.onGetBottles();
        }
      },
      error => { debugger }
    );
    this.bottle = {} as Bottle;

  }
}
