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
    // decodes the token to get the payload and check if the loggeIn user is an ADMIN.This is used as an authentication check and role guard. 
    const tokenPayload = decode(token);
    if (!token || tokenPayload.isAdmin == false) {
      this._router.navigate(['login']);
      return false;
    }
      return true;
  }

}
