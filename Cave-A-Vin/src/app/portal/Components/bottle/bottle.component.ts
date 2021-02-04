import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bottle } from 'src/app/interface/bottle';
import { Cave } from 'src/app/interface/cave';
import { User } from 'src/app/interface/user';
import { BottleService } from '../../Services/bottle.service';
import { CaveService } from '../../Services/cave.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})
export class BottleComponent implements OnInit {

  public bottles: Array<Bottle> = new Array<Bottle>();
  public bottle: Bottle = {} as Bottle;
  public bottleId: number = 1;
  public users: Array<User> = new Array<User>();
  public caves: Array<Cave> = new Array<Cave>();

  constructor(private _bottleService: BottleService,private _userService: UserService,private caveService: CaveService) 
  {
    // this.bottle = { 
    //   Id: 0, Name: "", Date: "2021-01-14T09:37:43.568", Amount: 0, PricePerBottle: 0, CaveId: 0, OwnerId: 0, Typevin: "", ImageUrl:"", 
    //   Owner:{ Id:0,Firstname:"",Lastname:"",Age:0,Email:"",Type:"",Password:""},
    //   Cave:{ Id:0,Degree:0,ImageUrl:"",Location:""}
    // }
  }

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetCaves();
    this.onGetBottles();
  }

  onGetUsers():void {
    this._userService.getUsers().subscribe(
    data => {
      if (data) {
        //debugger;
        this.users = data;
      }
    },
    error => { debugger }
  );
  }
  onGetCaves():void {
    this.caveService.getCaves().subscribe(
    data => {
      if (data) {
        //debugger;
        this.caves = data;
      }
    },
    error => { debugger }
  );
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

  onIdChange(Id: any): void{
    
    this._bottleService.getBottle(parseInt(Id.target.value)).subscribe(
    data => {
      if (data) {
        //this.onGetCaves();
        this.bottle = data;
      }
    },
    //error => { debugger }
  );
  //this.cave = {} as Cave;
  }
}
