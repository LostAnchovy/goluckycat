import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router'
import { Observable } from 'rxjs';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _router: Router) { }

  public canActivate(): any {
    const token = localStorage.getItem('token')
    if(!token){
      this._router.navigate(['login'])
    } else{
      return true
    }
  }

 public getToken(): string {
    return localStorage.getItem('token');
  }

  // Checks token and checks to see what type of user is loggedIn. Function is used as a toggle to display interested button. Users/Admin butto is not shown; but providers are able to view intereseted button
//  public userType(): any {
//     var token = localStorage.getItem('token')
//     var decodedToken = decode(token)
//     if(!token){
//       this._router.navigateByUrl('/')
//     }
//     else if(decodedToken.userType == 'user' || decodedToken.isAdmin == true){
//       return false
//     }
//       return true 

//  }

  public loggedIn(): string {
    return localStorage.getItem('token')
  }

  // This will be used in the to determine if the user signed in has administrative rights.
  public admin(): boolean {
    var token = localStorage.getItem('token')
    const tokenPayload = decode(token)
    if(tokenPayload.isAdmin == false){
      return false
    }else{
      return true
    }

  }

  public provider(): boolean{
    var token = localStorage.getItem('token')
    if(!token){
      return false
    }
    const tokenPayload = decode(token)
    if(tokenPayload.userType === 'provider'){
      return true
    }else{
      return false
    }
  }

  // isProvider should only allow the current logged in provider to make changes to their profile. Takes userId and validates its. If userId === req.params?


}
