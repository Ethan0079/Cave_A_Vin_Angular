import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {
  public isLogged: boolean = false;

  constructor() {}

  public login(username: string, pwd: string): boolean {
    this.isLogged = false;
    localStorage.setItem('isLogged', String(this.isLogged));

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

  public disconect(): void{
    this.isLogged = false;
    localStorage.setItem('isLogged', String(this.isLogged));

  }
}


