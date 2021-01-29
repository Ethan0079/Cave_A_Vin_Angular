import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/portal/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {
  public isLogged: boolean = false;

  public users = Array<User>();
  public user: User;
  
  // user = User;

  constructor(private _userService: UserService) {
   this.user = {} as User;
  }


  public login(username: string, pwd: string): boolean {
    this.isLogged = false;  
    localStorage.setItem('isLogged', String(this.isLogged));

  //   this._userService.getUsers().subscribe( // recupere le username depuis le back
  //     data =>
  //     {
  //       if (data){
  //         this.users = data;
  //       }
  //     },
  //     error =>
  //     { }
  //   );

  //   if(this.users.filter( n => n.Email === username)){

  //     this.user = this.users.filter( n => n.Firstname === username)[0]

  //   }

  //   return false;
  // }
    if (username === 'user' && pwd === 'epsic')
    {
      this.isLogged = true;
    } else {
      console.log('Crendentials non valide ...');
      this.isLogged = false;
    }
    localStorage.setItem('isLogged', String(this.isLogged));
    return this.isLogged;
}

  public disconnect(): void{
    this.isLogged = false;
    localStorage.setItem('isLogged', String(this.isLogged));
  }
}


