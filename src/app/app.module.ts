import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router'
import { ApiComponent } from './components/api/api.component';
import { CompoPersonalComponent } from './components/compo-personal/compo-personal.component';
import { CompoProveedoresComponent } from './components/compo-proveedores/compo-proveedores.component';
import { CompoSucursalComponent } from './components/compo-sucursal/compo-sucursal.component';
import { FormsModule } from '@angular/forms';
import { CompoProducComponent } from './components/compo-produc/compo-produc.component';
import { APP_ROUTING } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    CompoPersonalComponent,
    CompoProveedoresComponent,
    CompoSucursalComponent,
    CompoProducComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
