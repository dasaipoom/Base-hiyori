import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth : AngularFireAuth,
    private route : Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      if(user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  
  isLoggedIn : boolean;


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin() {
    
      if(this.isLoggedIn) {
        return true;
      }
      else{
        this.route.navigate(['']);
        return false;
      }
      
  
  }
  
}
