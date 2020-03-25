import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn = new Subject<boolean>();
  public username = new Subject<boolean>();

  login(username:string) {
    localStorage.setItem('isLoggedIn',"true");
    localStorage.setItem('username',username);
    this.isLoggedIn.next(true);
    this.username.next(username);
  }

  logout() {
    localStorage.setItem('isLoggedIn',"false");
    localStorage.removeItem('username');
    this.isLoggedIn.next(false);
  }

}