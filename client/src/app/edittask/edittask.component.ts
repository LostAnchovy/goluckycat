import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  task: any = {}
  _id: any
  constructor(private _http:HttpClient, private _router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this._id = localStorage.getItem('id')
    //get task on Init from the activate routes params
    this.getTask(this.route.snapshot.params['taskId']); 
  }

  getTask(id) {
    this._http.get('/api/onetask/' + id).subscribe(data => {
      this.task = data;
      console.log(this.task)
    });
  }

  updatedTasks(id) {
    this.task.updatedAt = Date.now();
    this._http.put('/api/task/'+ id, this.task)
      .subscribe(res => {
        console.log(res)
          this._router.navigate([`/profile/${this._id}`]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
