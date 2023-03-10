import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Electrodomestico } from "../models/electrodomestico";
import { Global } from "./global";
import { Observable } from 'rxjs';

@Injectable()
export class ElectrodomesticoService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }


    getElectrodomesticos():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'electrodomesticos',{headers:headers});
    }


    guardarElectrodomesticos(electrodomestico:Electrodomestico):Observable<any>{
        let params=JSON.stringify(electrodomestico);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardarElectro',params,{headers:headers});
    }


    getElectrodomestico(id:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'electrodomestico/'+id,{headers:headers});
    }

    getElectrobyNombre(nombre:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'electoByNombre/'+nombre,{headers:headers});
    }


    updateElectrodomestico(electrodomestico:Electrodomestico):Observable<any>{
        let params=JSON.stringify(electrodomestico);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'electrodomestico/'+electrodomestico._id,params,{headers:headers});
    }

    deleteElectrodomestico(id:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'electrodomestico/'+id,{headers:headers});
    }

}