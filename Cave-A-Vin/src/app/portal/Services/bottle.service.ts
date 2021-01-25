import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bottle } from 'src/app/interface/bottle';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  
  urlAllBottle: string = "https://localhost:5001/bottles";

  constructor(private http: HttpClient){}

  getBottles(): Observable<Array<Bottle>>{
    //debugger;
    return this.http.get<Array<Bottle>>(this.urlAllBottle);
  }

  getBottle(id: number): Observable<Bottle>{
    return this.http.get<Bottle>(this.urlAllBottle+"/"+ id);
    
  }

  deleteBottle(id: number): any {
    let endPoints = id;

    return this.http.delete<Bottle>(this.urlAllBottle +"/"+ endPoints.toString() );
  }

  postBottle(newBottle: Bottle, bottleId: number): Observable<Bottle> {
    //let endPoints = newBottle.Id;

    return this.http.post<Bottle>(this.urlAllBottle +"/"+ bottleId, newBottle);
  }
  
  public addPost(newBottle: Bottle): Observable<Bottle> {
    newBottle.Id= Math.floor((Math.random()*1000)+1);
    
    return this.http.post<Bottle>(this.urlAllBottle, newBottle);

  }
}
