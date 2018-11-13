import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
resetForm: FormGroup;
submitted = false;
user ={
  email: ''
}
authenticated: boolean = false
result: any =[]
message = '';
  constructor( private _router: Router, private _http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }
  get f() { return this.resetForm.controls; }

  reset(){
    this.submitted = true

    if (this.resetForm.invalid) {
      return;
    }

    return this._http.post('/resetpassword', this.user).subscribe(res=>{
      this.result= res
      console.log(this.result)
      if(res){
        this.authenticated = true
        this.message = ''
      }
    }, err =>{
      if(err){
        this.resetForm.reset()
      }
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
