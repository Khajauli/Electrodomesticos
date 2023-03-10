import { Component,OnInit } from '@angular/core';
import { Electrodomestico } from 'src/app/models/electrodomestico';
import { CargarService } from 'src/app/services/cargar.service';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.css'],
  providers:[ElectrodomesticoService,CargarService]
})
export class ElectrodomesticosComponent implements OnInit{
  public electrodomesticos:Electrodomestico[];
  public electros:Electrodomestico[];
  public nombre:string;
  public url:string;

  constructor(
    private _electroService:ElectrodomesticoService
  ){
    this.url=Global.url;
    this.electrodomesticos=[];
    this.electros=[];
    this.nombre='';
  }


  ngOnInit():void{
    this.getElectrodomesticos();
  }
  getElectrodomesticos(){
  this._electroService.getElectrodomesticos().subscribe(
    response=>{
      if (response.electrodomesticos){
        this.electrodomesticos=response.electrodomesticos;
        console.log(this.electrodomesticos);
      }
    },
    error=>{
      console.log(<any>error);
    }
  );
}

  getElectros(){
    this._electroService.getElectrobyNombre(this.nombre).subscribe(
      response=>{
        if(response.electrodomestico){
          this.electros=response.electrodomestico;
          console.log(this.electros);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
