import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


  productos : any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {

    this._http.get('http://localhost:3900/productos')
    .subscribe(res =>{
      this.productos = res;
      console.log(this.productos)
    })

  }


}
