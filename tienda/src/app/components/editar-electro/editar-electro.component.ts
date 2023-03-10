import { Component,OnInit } from '@angular/core';
import { Electrodomestico } from 'src/app/models/electrodomestico';
import { CargarService } from 'src/app/services/cargar.service';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from 'src/app/services/global';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editar-electro',
  templateUrl: '../create-electro/create-electro.component.html',
  styleUrls: ['./editar-electro.component.css'],
  providers:[ElectrodomesticoService,CargarService]
})
export class EditarElectroComponent implements OnInit{
  public titulo:string;
  public electro:Electrodomestico;
  public electroGuardar:Electrodomestico;
  public url:string;
  public archivosParaCargar:Array<File>;
  public status:string;
  public idGuardado:string;

  constructor(
    private _electroService:ElectrodomesticoService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.titulo="EDITAR LOS ELECTRODOMESTICOS EN BODEGA";
    this.url=Global.url;
    this.electro=new Electrodomestico("","","",0,"","");
    this.electroGuardar=new Electrodomestico("","","",0,"","");
    this.archivosParaCargar=[];
    this.status='';
    this.idGuardado='';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.getElectrodomestico(id);
    })
  }
  getElectrodomestico(id:string){
    this._electroService.getElectrodomestico(id).subscribe(
      response=>{
        this.electro=response.electrodomestico;
        console.log(this.electro)
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  guardarElectrodomestico(form:NgForm){
    this._electroService.updateElectrodomestico(this.electro).subscribe(
      response=>{
        if(this.archivosParaCargar){
          this._cargarService.peticionRequest(Global.url+"subir-imagen/"+this.electro._id,[],this.archivosParaCargar,'imagen')
          .then((result:any)=>{
            this.electroGuardar=result.response;
            this.status='success';
            this.idGuardado=result.electrodomestico._id;
            form.reset();
          });
        }else{
          this.electroGuardar=response.electrodomestico;
            this.status='success';
            form.reset();
        }
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
