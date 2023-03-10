import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateElectroComponent } from './components/create-electro/create-electro.component';
import { DetalleElectroComponent } from './components/detalle-electro/detalle-electro.component';
import { EditarElectroComponent } from './components/editar-electro/editar-electro.component';
import { AppRoutingModule } from './app-routing.modules';
import { FormsModule } from '@angular/forms';
import { ElectrodomesticosComponent } from './components/electrodomesticos/electrodomesticos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PieComponent,
    ContactoComponent,
    CreateElectroComponent,
    DetalleElectroComponent,
    EditarElectroComponent,
    ElectrodomesticosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
