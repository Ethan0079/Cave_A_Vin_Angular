import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cave } from 'src/app/interface/cave';
import { CaveService } from '../../Services/cave.service';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {

  public caves: Array<Cave> = {} as Array<Cave>;
  public cave: Cave = {} as Cave;
  public caveId: number = 1;

  constructor(private http: HttpClient, private _caveService: CaveService) {
    //this.cave = { Id: 0, Location: "", Degree: 0, ImageUrl:""}
  }

  ngOnInit(): void {
    this.onGetCaves();
  }

  onGetCaves(): void {
    this._caveService.getCaves().subscribe(
      data => {
        if (data) {
          //debugger;
          this.caves = data;
        }
      },
      error => { debugger }
    );
  }

  postCave(): void {
    this._caveService.addPost(this.cave).subscribe(
      data => {
        if (data) {
          this.onGetCaves();
        }
      },
      error => { debugger }
    );
    this.cave = {} as Cave;
  }

  updateCave(): void {
    this._caveService.postCave(this.cave, this.caveId).subscribe(
      data => {
        if (data) {
          this.onGetCaves();
        }
      },
      error => { debugger }
    );
    this.cave = {} as Cave;
  }

  onIdChange(Id: any): void{
    
    this._caveService.getCave(parseInt(Id.target.value)).subscribe(
    data => {
      if (data) {
        //this.onGetCaves();
        this.cave = data;
      }
    },
    //error => { debugger }
  );
  this.cave = {} as Cave;
  }
}
