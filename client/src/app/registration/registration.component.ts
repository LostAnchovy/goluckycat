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
  submitted = false;
  user ={
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    category: '',
  };
  message = '';

  constructor(private _http:HttpClient, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['',Validators.required],
      category:['',Validators.required],
      terms:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.userForm.controls; }

  newUser(){
    this.submitted = true

    if (this.userForm.invalid) {
      return;
    } 
    console.log('form has been submmited')
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
