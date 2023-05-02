import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-compo-proveedores',
  templateUrl: './compo-proveedores.component.html',
  styleUrls: ['./compo-proveedores.component.css']
})
export class CompoProveedoresComponent implements OnInit {

  proveedores : any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {

    this._http.get('http://localhost:3900/proveedores')
    .subscribe(res =>{
      this.proveedores = res;
      console.log(this.proveedores)
    })

  }

}
