import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-compo-sucursal',
  templateUrl: './compo-sucursal.component.html',
  styleUrls: ['./compo-sucursal.component.css']
})
export class CompoSucursalComponent implements OnInit {

  sucursales : any = [];


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3900/sucursales')
    .subscribe(res =>{
      this.sucursales = res;
      console.log(this.sucursales)
    })



  }

}
