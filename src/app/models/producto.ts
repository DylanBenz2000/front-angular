export class Producto{
    _id?: number;
    nombreProducto : string;
    marcaProducto : string;
    presentacionProducto: string;
    contenidoProducto: string;
    precioProducto: number;
    proveedorProducto: string;
    cantidadProductos: number;
    estatusProducto: boolean;
    descripcionProducto: string;

    constructor(nombreProducto: string, marcaProducto: string, presentacionProducto: string, contenidoProducto: string, precioProducto: number, proveedorProducto: string, cantidadProductos: number, estatusProducto: boolean, descripcionProducto: string){
        this.nombreProducto = nombreProducto;
        this.marcaProducto = marcaProducto;
        this.presentacionProducto = presentacionProducto;
        this.contenidoProducto = contenidoProducto;
        this.precioProducto = precioProducto;
        this.proveedorProducto = proveedorProducto;
        this.cantidadProductos = cantidadProductos;
        this.estatusProducto = estatusProducto;
        this.descripcionProducto = descripcionProducto;

    }

}