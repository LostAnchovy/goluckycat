import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate} from '@angular/router'
import { Observable } from 'rxjs';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _http: HttpClient, private _router: Router) { }

  public canActivate(): any {
    const token = localStorage.getItem('token')
    if(!token){
      this._router.navigate(['login'])
    } 
  }

  public loggedIn(): string {
    return localStorage.getItem('token')
  }

  // This will be used in the to determine if the user signed in has administrative rights.
  public admin(){
    var token = localStorage.getItem('token')
    const tokenPayload = decode(token)
    if(tokenPayload.isAdmin == false){
      return false
    }else{
      return true
    }

  }


}
