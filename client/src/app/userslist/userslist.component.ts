import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { DataService } from '../data.service';

export interface UserInterface {
    _id: string;
    cost: number;
    location: string;
    phone: string,
    Admin: string,
  }


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'location','phone', 'cost', 'Admin'];
  dataSource: any 
 

  constructor(private _http:HttpClient, private _dataService: DataService){
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  removeUser(user, id){
    this._dataService.removeUser(id)
  }

  ngOnInit() {
    this._dataService.getAllUsers()

    this._dataService.users.subscribe(result=>{
      this.dataSource = new MatTableDataSource(result)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    })
  }

  submit(){
    console.log('form has been submitted')
  }

}
