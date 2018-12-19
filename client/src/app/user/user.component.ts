import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private user:any
private id: String = ''
private p: number = 1;
private tasks:any = []

  constructor(private _http: HttpClient, private _dataService: DataService) { }
  
  ngOnInit() {
    this.user = localStorage.getItem('user')
    this.id = localStorage.getItem('id')

    this._http.get(`/api/task/${this.id}`).subscribe(res=>{
      this.tasks = res 
      console.log(res)
    })
  }

  removeTask(id){
    // this._dataService.removeTask(id)
    this._http.delete('/api/task/' + id).subscribe(res=>{
      console.log(res)
    })
    this.ngOnInit()
  }

  isActive(id) {
    this._http.put('/api/accept/'+ id, this.id)
      .subscribe(res => {
        console.log(res)
        this.ngOnInit()
        }, (err) => {
          console.error(err);
        }
      );
  }

  isreactivate(id) {
    this._http.put('/api/reactivate/'+ id, this.id)
      .subscribe(res => {
        console.log(res)
        this.ngOnInit()
        }, (err) => {
          console.error(err);
        }
      );
  }
  
  applyFilter(filterValue: any) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }


}
