import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { DataService } from '../data.service';

export interface UserInterface {
    title: String, 
    location: string;
    cost: number;
    created: String,
    Supsend: string,
    Admin: string,
  }

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {

  displayedColumns: string[] = ['title', 'location','cost', 'created','Suspend', 'Admin', ];
  dataSource: any 
 

  constructor(private _http:HttpClient, private _dataService: DataService){
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  removeTask(id){
    this._dataService.removeAdminTask(id)
  }

  ngOnInit() {
    this._dataService.getAllTasks()

    this._dataService.tasks.subscribe(result=>{
      this.dataSource = new MatTableDataSource(result)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      console.log(result)
    })
  }

  submit(){
    console.log('form has been submitted')
  }
  
}
