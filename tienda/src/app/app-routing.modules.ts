import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateElectroComponent } from './components/create-electro/create-electro.component';
import { DetalleElectroComponent } from './components/detalle-electro/detalle-electro.component';
import { EditarElectroComponent } from './components/editar-electro/editar-electro.component';
import { ElectrodomesticosComponent } from './components/electrodomesticos/electrodomesticos.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    {path:'inicio',component:HomeComponent},
    {path:'createElectro',component:CreateElectroComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'detalleElectro/:id',component:DetalleElectroComponent},
    {path:'editarElectro/:id',component:EditarElectroComponent},
    {path:'electrodomesticos',component:ElectrodomesticosComponent},
    {path:'**',component:HomeComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  