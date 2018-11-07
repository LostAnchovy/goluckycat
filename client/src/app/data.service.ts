import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users = new BehaviorSubject([])
  tasks = new BehaviorSubject([])

  constructor(private _http:HttpClient) { }

  getAllUsers(){
    this._http.get('/api/users/all').subscribe((response:any)=>{
      this.users.next(response)
    }) 
  }

  getAllTasks(){
    this._http.get('/api/tasks/all').subscribe((response:any)=>{
      this.tasks.next(response)
    })
  }

  removeUser(id) {
    this._http.delete('/api/user/' + id).subscribe(
      (response: any[]) => {
        this.getAllUsers();
       }
    );
  }

  removeTask(id) {
    this._http.delete('/api/task/' + id).subscribe(
      (response: any[]) => {
        this.getAllTasks();
       }
    );
  }
 
}
