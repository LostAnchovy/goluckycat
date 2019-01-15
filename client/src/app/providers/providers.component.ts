import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: any =[]
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this._http.get('/api/providers/all').subscribe(result=>{
      this.providers= result
      console.log(result)
    })

  }

}
