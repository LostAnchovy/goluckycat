import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from "@angular/router";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  submitted: Boolean = false;
  user ={
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    category: '',
  };
  message = '';
  result:any
  constructor(private _http:HttpClient, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Form controls used to for validations
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['',Validators.required],
      category:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.userForm.controls; }

  // function that adds new user to the database
  newUser(){
    this.submitted = true

    if (this.userForm.invalid) {
      return;
    } 
    return this._http.post('/api/newuser', this.user).subscribe(res=>{
      this.result= res
        localStorage.setItem('token', this.result.token),
        localStorage.setItem('user', this.result.user.first_name)
        localStorage.setItem('id', this.result.user._id)
        if(this.result.user.category === 'provider'){
          this._router.navigateByUrl(`/provider/${this.result.user._id}`)
        }else{
          this._router.navigateByUrl(`/profile/${this.result.user._id}`)
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
