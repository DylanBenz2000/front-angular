import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-compo-produc',
  templateUrl: './compo-produc.component.html',
  styleUrls: ['./compo-produc.component.css']
})
export class CompoProducComponent implements OnInit {

  productoForm: FormGroup;
  tituloAlerta: string = ''
  titulo = 'Crear producto'
  id : string;


  constructor(private fb:FormBuilder, private _productoService: ProductoService, private aRouter: ActivatedRoute) { 
    this.productoForm = this.fb.group({
      nombreProducto: ['', Validators.required],
      marcaProducto : ['', Validators.required],
      presentacionProducto : ['', Validators.required],
      contenidoProducto : ['', Validators.required],
      precioProducto : ['', Validators.required],
      proveedorProducto : ['', Validators.required],
      cantidadProductos : ['', Validators.required],
      estatusProducto : ['', Validators.required],
      descripcionProducto : ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.editarProducto();
  }

  agregarProducto(){

    const PRODUCTO: Producto = {
      nombreProducto: this.productoForm.get('nombreProducto')?.value,
      marcaProducto: this.productoForm.get('marcaProducto')?.value,
      presentacionProducto: this.productoForm.get('presentacionProducto')?.value,
      contenidoProducto: this.productoForm.get('contenidoProducto')?.value,
      precioProducto: this.productoForm.get('precioProducto')?.value,
      proveedorProducto: this.productoForm.get('proveedorProducto')?.value,
      cantidadProductos: this.productoForm.get('cantidadProductos')?.value,
      estatusProducto: this.productoForm.get('estatusProducto')?.value,
      descripcionProducto: this.productoForm.get('descripcionProducto')?.value,
    }

    if(this.id !== null){
      //editar producto
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
        swal.fire('Actualizado correctamente', this.tituloAlerta, 'success')
        window.history.go(-1)
      }
      )
    }
    else{
      //se agrega el producto
      console.log(PRODUCTO)
      this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
        swal.fire('Registro exitoso', this.tituloAlerta, 'success');
        window.history.go(-1)
        
      })
  
    }

  }

  editarProducto(){
    if(this.id !== null){
      this.titulo = 'Editar producto';
      this._productoService.obtenerActualizarProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          nombreProducto : data.nombreProducto,
          marcaProducto : data.marcaProducto,
          presentacionProducto : data.presentacionProducto,
          contenidoProducto : data.contenidoProducto,
          precioProducto : data.precioProducto,
          proveedorProducto : data.proveedorProducto,
          cantidadProductos : data.cantidadProductos,
          estatusProducto : data.estatusProducto,
          descripcionProducto : data.descripcionProducto,
        })
      })
    }
  }

}
