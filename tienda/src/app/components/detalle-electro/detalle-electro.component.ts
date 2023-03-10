import { Component } from '@angular/core';
import { Electrodomestico } from 'src/app/models/electrodomestico';
import { CargarService } from 'src/app/services/cargar.service';
import { ElectrodomesticoService } from 'src/app/services/electrodomestico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-detalle-electro',
  templateUrl: './detalle-electro.component.html',
  styleUrls: ['./detalle-electro.component.css'],
  providers:[ElectrodomesticoService,CargarService]
})
export class DetalleElectroComponent {
  public url:string;
  public electro:Electrodomestico;
  public confirm:boolean;

  constructor(
    private _electroService:ElectrodomesticoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
    this.electro=new Electrodomestico("","","",0,"","");
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.getElectro(id);
    })
  }
  getElectro(id:string){
    this._electroService.getElectrodomestico(id).subscribe(
      response=>{
        this.electro=response.electrodomestico;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }
  borrarElectro(id:string){
    this._electroService.deleteElectrodomestico(id).subscribe(
      response=>{
          this._router.navigate(['/electrodomesticos']);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
