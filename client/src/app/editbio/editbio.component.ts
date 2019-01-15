import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editbio',
  templateUrl: './editbio.component.html',
  styleUrls: ['./editbio.component.css']
})
export class EditbioComponent implements OnInit {
  user: any = {}
  _id: any = {}
  constructor(private _http:HttpClient, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._id = localStorage.getItem('id')
    //get task on Init from the activate routes params
    this.getUser(this.route.snapshot.params['userId']); 
  }

  getUser(id) {
    this._http.get('/api/user/' + id).subscribe(data => {
      this.user = data;
      console.log(this.user)
    });
  }

  updatedBio(_id) {
    this.user.updatedAt = Date.now();
    this._http.put('/api/user/'+ _id, this.user)
      .subscribe(res => {
        console.log(res)
          this._router.navigate([`/provider/${this._id}`]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
