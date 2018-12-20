import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
token: any
updatedUser: any
submitted= false
user ={
  password: '',
  cpassword: ''
};
message = '';
  constructor(private _router: Router, private _http: HttpClient, private activatedRoute: ActivatedRoute) {
    // user clicks on the link to their email the token becomes the params. Sets the params.token as the token variable.
    this.activatedRoute.params.subscribe((params) => {
      this.token = params.token;});
   }

  ngOnInit() {
    // on init the component makes an api call to the server. The route checks the token for authenication and if it has expired and sends back and error message and disables the submit button. 
    this._http.get(`/user/${this.token}`, this.token).subscribe(res=>{
      this.token = res
    }, err =>{
      this.message = err.error.msg;
    })
  }
  // still needs to confirm that password === cpassword and display error message if it is not equal, else proceed with form submission. 
  resetpw(){
    this._http.post(`/reset/${this.token}`, this.user).subscribe(res=>{
      this.updatedUser = res
      console.log(this.updatedUser)
      this._router.navigateByUrl('/login')
    })
    // ,err =>{
    //   this.message = err.error.msg;} 
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
