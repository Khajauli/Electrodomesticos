import { Component,OnInit,ViewChild } from '@angular/core';
import { Electrodomestico } from 'src/app/models/electrodomestico';
import { CargarService } from 'src/app/services/cargar.service';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
import { Global } from 'src/app/services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-electro',
  templateUrl: './create-electro.component.html',
  styleUrls: ['./create-electro.component.css'],
  providers:[ElectrodomesticoService,CargarService]
})
export class CreateElectroComponent implements OnInit{
  public titulo:string;
  public electro:Electrodomestico;
  public electroGuardar:Electrodomestico;
  public url:string;
  public status:string;
  public idGuardado:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _electroService:ElectrodomesticoService,
    private _cargarService:CargarService
    
  ){
    this.titulo="GUARDAR ELECTRODOMESTICO";
    this.url=Global.url;
    this.electro=new Electrodomestico('','','',0,'','');
    this.electroGuardar=new Electrodomestico('','','',0,'','');
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
  }

  ngOnInit():void{

  }

  guardarElectrodomestico(form:NgForm){
    this._electroService.guardarElectrodomesticos(this.electro).subscribe(
      response=>{
        if(response.electrodomestico){ 
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.electrodomestico._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.electroGuardar=result.response;
              this.idGuardado=result.electrodomestico._id;
              this.status='success';
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            this.status='failed';
            console.log("error");
          }
        }else{
          this.status='falied';
          console.log("errorA");
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
