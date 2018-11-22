import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import {Observable} from "rxjs"
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})


export class ListingsComponent implements OnInit {
  p: number = 1;
  tasks:any = []
  taskId: any

  constructor(private _http: HttpClient, private _auth:AuthService, private _router: Router) { }
  
  applyFilter(filterValue: any) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this._http.get('/api/tasks/all').subscribe(res=>{
      this.tasks = res 
      console.log(res)
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  addTask(id){
    var token = localStorage.getItem('token')
    if(!token){
      this._router.navigate[('login')]
    }
    this._http.post(`/api/task/${id}`, this.taskId).subscribe(res=>{
      console.log(res)
    })
    
}

  

}
