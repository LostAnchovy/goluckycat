import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user ={
     email: '',
     password: '',
  }
  message = '';
  result: any
  constructor(private _http:HttpClient, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.loginForm.controls; }

  logIn(){
    console.log('this works!')
    this.submitted = true

    if (this.loginForm.invalid) {
      return;
    } 

    return this._http.post('/signin', this.user).subscribe(res=>{
      this.result= res
        console.log('jwt token:',this.result.token)
        console.log(this.result.user)
        localStorage.setItem('token', this.result.token),
        localStorage.setItem('user', this.result.user.first_name)
        if(this.result.user.isAdmin === true){
          this._router.navigateByUrl('/dashboard')
        }else{
          this._router.navigateByUrl(`/user/${this.result.user._id}`)
        }
    }, err =>{
      this.message = err.error.msg;
    })
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
