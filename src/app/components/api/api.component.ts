import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import swal from'sweetalert2';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

listarProductos : Producto[] = [];
tituloAlerta: string = ''
  // productos : any = [];
  // producto: any = {
  //   _id: '',
  //   nombreProducto : '',
  //   marcaProducto : '',
  //   presentacionProducto: '',
  //   contenidoProducto: '',
  //   precioProducto: '',
  //   proveedorProducto: '',
  //   cantidadProductos: '',
  //   estatusProducto: '',
  //   descripcionProducto: ''
  // }


  constructor(private _productoService : ProductoService,) { }

  ngOnInit(): void {

    this.obtenerProductos()

    // this._http.get('http://localhost:3900/productos')
    // .subscribe(res =>{
    //   this.productos = res;
    //   console.log(this.productos)
    // })

  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data)
      this.listarProductos = data;
    })

  }

  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      swal.fire('Se elimino correctamente', this.tituloAlerta, 'success');
      this.obtenerProductos()
    })

  }


  // guardar(){
  //   this._http.post('http://localhost:3900/producto/nuevo', this.producto)
  //   .subscribe(res =>{
  //     console.log(res);
  //   });
  // }

  // eliminar(_id: number){
  //   this._http.delete(`http://localhost:3900/productosdel/${_id}`)
  //   .subscribe(res =>{
  //     console.log(res)
  //   })
  // }


}
