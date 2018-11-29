import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {
 provider: any ={}
 id: any = {}
  constructor(private _http: HttpClient, private activatedRoute: ActivatedRoute) { 
 // pull profile based on the #id from the params 
 this.activatedRoute.params.subscribe((params) => {
  this.id = params.providerId;});
  console.log(this.id)
  }

  ngOnInit() {
    this._http.get(`/api/user/${this.id}`, this.id).subscribe(res=>{
      this.provider = res
      console.log('query user', res)
    })
  }

}
