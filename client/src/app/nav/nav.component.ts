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
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
   this.user =localStorage.getItem('user')
  }

  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.clear()
    this._router.navigate(['/'])
  }

}
