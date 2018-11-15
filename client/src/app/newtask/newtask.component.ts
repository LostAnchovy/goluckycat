import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
taskForm: FormGroup;
submitted = false;
task ={
  title: '',
  location: '',
  description: '',
  costs: ''
};
result:any;
message: '';
_id: any
  constructor(private _http: HttpClient, private _router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      description: ['',[Validators.required, Validators.minLength(10)]],
      costs:['', Validators.required],
  });
  this._id = localStorage.getItem('id')
  }
  get f() { return this.taskForm.controls; }

  newTasks(){
    this.submitted = true

    if (this.taskForm.invalid) {
      return;
    }
    return this._http.post('/api/newtasks', this.task).subscribe(res=>{
      this.result= res
      console.log(this.result)
        this._router.navigateByUrl(`/profile/${this._id}`)
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
