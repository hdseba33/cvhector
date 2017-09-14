import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class DatosService {
datospersonales:any={};
datoshome:any[]=[];
datoscargados:boolean=false;
indice:number=0;
indiceaux:number=0;
submenus:any[]=[];
trabajos:any[]=[];
formaciones:any[]=[];
otros:any[]=[];
private encontrarIdiomaObservable = new Subject<string>();
    indiceidiomaobs = this.encontrarIdiomaObservable.asObservable();

  constructor(private http:Http) {}

  indiceIdioma(indiceaux: any) {
    this.encontrarIdiomaObservable.next(indiceaux);
  }
  encontrarIdioma(idiomas:any[],nombre:string){
  this.indice=0;
  idiomas.forEach(idioma=>{
    if(idioma.indexOf(nombre)==0){
      this.indiceaux=this.indice;
    }
    this.indice++;
  });
  return this.indiceaux;
}

  obtenerIdiomas(){
    return this.http.get("assets/data/idiomas.json");
  }

  obtenerMenu(){
    return this.http.get("assets/data/menu.json");
  }

  obtenerDatosPersonales(){
      return this.http.get("assets/data/datospersonales.json");
  }

  obtenerHistorialTrabajos(){
    this.datoscargados=false;
    this.http.get("assets/data/historial.json").subscribe(trabajos=>{
      this.trabajos=trabajos.json().perfilprofesional;
      this.datoscargados=true;
    });
  }

  obtenerHistorialPerfilProfesional(){
    this.datoscargados=false;
    this.http.get("assets/data/historial.json").subscribe(formaciones=>{
      this.formaciones=formaciones.json().formacionacademica;
      this.datoscargados=true;
    });
  }

  obtenerHistorialOtros(){
    this.datoscargados=false;
    this.http.get("assets/data/historial.json").subscribe(otros=>{
      this.otros=otros.json().otros;
      this.datoscargados=true;
    });
  }

  obtenerDatosHome(){
     this.datoscargados=false;
    return this.http.get("assets/data/datoshome.json");
  }

  obtenerSubMenu(){
    this.datoscargados=false;
    this.http.get("assets/data/historial.json").subscribe(submenus=>{
      this.submenus=submenus.json().submenu;
      this.datoscargados=true;
    });
  }
}
