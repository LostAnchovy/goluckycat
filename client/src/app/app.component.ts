import { Component, OnInit } from '@angular/core';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'goluckycat';

  constructor(){
  }

  ngOnInit() {
    this.isloggedIn()
  }

  isloggedIn(){
    var token = localStorage.getItem('token')
    if(!token){
      localStorage.clear()
      return false
    }else{
      var tokenPayload = decode(token)
      var dateNow = new Date()
      console.log('app:', tokenPayload.exp)
      if(tokenPayload.exp < dateNow.getTime()/1000){
        localStorage.clear()
        return false
      }
    }
        return true 
  }
}
