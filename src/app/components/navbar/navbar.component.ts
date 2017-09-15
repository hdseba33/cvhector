import { Component,Output,EventEmitter} from '@angular/core';
import {DatosService} from '../../services/datos.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  public idiomas:any[]=[];
  public nombreidiomas:any[]=[];
  public menus:any[]=[];
  public nombrecombo:string;
  public indicesel:number=0;
  @Output('login') salio= new EventEmitter();
  constructor(private ds:DatosService) {
    ds.obtenerIdiomas().subscribe(idioma=>{
      this.idiomas=idioma.json().idiomas;
      this.nombreidiomas=idioma.json().idiomasnombre;
    });
    ds.obtenerMenu().subscribe(menu=>{
      this.indicesel=ds.indiceaux;
      this.menus=menu.json().menu;
      this.nombrecombo=this.menus[this.indicesel][2];
    });
  }

  selIdioma(idiomasel:string){
     this.indicesel=this.ds.encontrarIdioma(this.idiomas,idiomasel);
     this.nombrecombo=this.menus[this.indicesel][2];
     this.ds.indiceIdioma(this.indicesel);
  }
  salir(){
  this.salio.emit({logueado:false});
  }
}
