import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { CompoPersonalComponent } from './components/compo-personal/compo-personal.component';
import { CompoProveedoresComponent } from './components/compo-proveedores/compo-proveedores.component';
import { CompoSucursalComponent } from './components/compo-sucursal/compo-sucursal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    CompoPersonalComponent,
    CompoProveedoresComponent,
    CompoSucursalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
