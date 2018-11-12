import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import {Observable} from "rxjs"



@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})


export class ListingsComponent implements OnInit {
  p: number = 1;
  tasks:any = []

  constructor(private _http: HttpClient) { }
  
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

  

}
