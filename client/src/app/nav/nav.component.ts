import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
user: any
_id: any
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
   this.user =localStorage.getItem('user')
   this._id = localStorage.getItem('id')
   console.log(this._id)
   }

  userProfile(){
    this._router.navigateByUrl(`/user/${this._id}`)
  }

  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.clear()
    this._router.navigate(['/'])
  }

}
