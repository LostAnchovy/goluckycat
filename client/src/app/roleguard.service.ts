import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router'
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token')
    if(!token){
      this._router.navigate(['login'])
    }
    // DECODE THE TOKEN TO GET THE PAYLOAD OAND CHECK TO SEE IF THE ADMIN ROLE IS TRUE || FALSE
    const tokenPayload = decode(token);
    if (!token || tokenPayload.isAdmin == false) {
      this._router.navigate(['login']);
      return false;
    }
      return true;
  }

}
