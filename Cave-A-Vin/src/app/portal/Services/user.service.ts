import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  
  urlAllUser: string = "https://localhost:5001/users";

  constructor(private http: HttpClient){
    
  }

  getUsers(): Observable<Array<User>>{
    //debugger;
    return this.http.get<Array<User>>(this.urlAllUser);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.urlAllUser+"/"+ id);
    
  }

  deleteUser(id: number): any {
    let endPoints = id;

    return this.http.delete<User>(this.urlAllUser +"/"+ endPoints.toString() );
  }

  postUser(newUser: User, userId: number): Observable<User> {
    //let endPoints = newUser.Id;

    return this.http.post<User>(this.urlAllUser +"/"+ userId, newUser);
  }
  
  public addPost(newUser: User): Observable<User> {
    newUser.Id= Math.floor((Math.random()*1000)+1);
    
    return this.http.post<User>(this.urlAllUser, newUser);

  }
}
