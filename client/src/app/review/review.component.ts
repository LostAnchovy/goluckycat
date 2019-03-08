import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewForm: FormGroup;
  submitted = false;
  review ={
    date: '',
    rate: '',
    review: '',
  }
  message: '';
  constructor(private _http: HttpClient,private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      date: ['', Validators.required],
      rate: ['', Validators.required],
      review: ['',[Validators.required, Validators.minLength(10)]],
  });
  }
  get f() { return this.reviewForm.controls; }

  newReview(){
    console.log('this review works')
    this.submitted = true
    if (this.reviewForm.invalid) {
      return;
    }
    return this._http.post('/api/newreviews', this.review).subscribe(res=>{
      console.log(res)
        // this._router.navigateByUrl(`/`)
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
