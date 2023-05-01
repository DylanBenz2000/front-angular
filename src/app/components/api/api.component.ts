import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


  productos : any = [];
  // producto: any = {
  //   nombreProducto: '',
  //   marcaProducto: '',
  //   presentacionProducto: '',
  //   contenidoProducto: '',
  //   precioProducto:'',
  //   proveedorProducto: '',
  //   cantidadProductos: '',
  //   estatusProducto: '',
  //   descripcionProducto: '',
  // }

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {

    this._http.get('http://localhost:3900/productos')
    .subscribe(res =>{
      this.productos = res;
      console.log(this.productos)
    })

  }

  // guardar(){
  //   this._http.post('http://localhost:3900/producto/nuevo', this.producto)
  //   .subscribe(res =>{
  //     console.log(res)
  //   });
  // }

}
