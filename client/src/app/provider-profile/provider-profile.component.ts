import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {
 provider: any ={}
 id: any = {}
  constructor(private _http: HttpClient, private activatedRoute: ActivatedRoute, private _auth: AuthService) { 
 // pull profile based on the #id from the params 
 this.activatedRoute.params.subscribe((params) => {
  this.id = params.providerId;});
  console.log("provider parmasId",this.id)
  }

  ngOnInit() {
    this._http.get(`/api/user/${this.id}`, this.id).subscribe(res=>{
      this.provider = res
      console.log('query user', res)
    })
  }

}
