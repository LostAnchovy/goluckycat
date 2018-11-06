import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users = new BehaviorSubject([])

  constructor(private _http:HttpClient) { }

  getAllTasks(){
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((response:any)=>{
      this.users.next(response)
    }) 
  }
 
}
