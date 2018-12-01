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
  //checks to see if there is a token in the localStorage. If no token then clear the localStorage. If there is a token then validate it for the exp. If token is exp then clear the local storage
  isloggedIn(){
    var token = localStorage.getItem('token')
    if(!token){
      localStorage.clear()
    }else{
      var tokenPayload = decode(token)
      var dateNow = new Date()
      if(tokenPayload.exp < dateNow.getTime()/1000){
        localStorage.removeItem('token')
      }
    }
  }
}
