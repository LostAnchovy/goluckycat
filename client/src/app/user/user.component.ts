import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any
id: String = ''
p: number = 1;
tasks:any = []

  constructor(private _http: HttpClient, private _dataService: DataService) { }
  
  ngOnInit() {
    this.user = localStorage.getItem('user')
    this.id = localStorage.getItem('id')
    console.log(this.id)

    this._http.get(`/api/task/${this.id}`).subscribe(res=>{
      this.tasks = res 
      console.log(res)
    })
  }

  removeTask(id){
    this._dataService.removeTask(id)
  }
  
  applyFilter(filterValue: any) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }


}
