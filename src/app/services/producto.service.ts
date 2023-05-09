import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  getProductos(): Observable<any>{
    return this._http.get('http://localhost:3900/productos')
  }

  eliminarProducto(id: string): Observable<any>{
    return this._http.delete('http://localhost:3900/productosdel/' + id);

  }

  guardarProducto(producto: Producto): Observable<any>{
    return this._http.post('http://localhost:3900/producto/nuevo/', producto)
  }

  obtenerActualizarProducto(id:string): Observable<any>{
    return this._http.get('http://localhost:3900/productos/' + id)
  }

 editarProducto(id: string, producto: Producto): Observable<any>{
  return this._http.put('http://localhost:3900/productoact/' + id, producto);
 }
}
