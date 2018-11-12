import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any
p: number = 1;
tasks:any = []

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('/api/tasks/all').subscribe(res=>{
      this.tasks = res 
      console.log(res)
    })
    this.user = localStorage.getItem('user')
  }
  
  applyFilter(filterValue: any) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }


}
