import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cave } from 'src/app/interface/cave';

@Injectable({
  providedIn: 'root'
})
export class CaveService {

  
  urlAllCave: string = "https://localhost:5001/caves";

  constructor(private http: HttpClient){}

  getCaves(): Observable<Array<Cave>>{
    //debugger;
    return this.http.get<Array<Cave>>(this.urlAllCave);
  }

  getCave(id: number): Observable<Cave>{
    return this.http.get<Cave>(this.urlAllCave+"/"+ id);

  }

  deleteCave(id: number): any {
    let endPoints = id;

    return this.http.delete<Cave>(this.urlAllCave +"/"+ endPoints.toString() );
  }

  postCave(newCave: Cave, caveId: number): Observable<Cave> {
    //let endPoints = newCave.Id;

    return this.http.post<Cave>(this.urlAllCave +"/"+ caveId, newCave);
  }
  
  public addPost(newCave: Cave): Observable<Cave> {
    newCave.Id= Math.floor((Math.random()*1000)+1);
    
    return this.http.post<Cave>(this.urlAllCave, newCave);

  }
}
