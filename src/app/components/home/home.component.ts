import { Component, OnInit} from '@angular/core';
import {DatosService} from '../../services/datos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private edad:number;
  private date=new Date();
  private date2:Date;
  private datoshome:any[]=[];
  private datospersonales:any[]=[];
  private indiceidioma:any;
  constructor(private ds:DatosService) {
    ds.obtenerDatosHome().subscribe(datos=>{
      this.datoshome=datos.json().datoshome;
      this.indiceidioma=ds.indiceaux;
    });
    ds.obtenerDatosPersonales().subscribe(datos=>{
      this.datospersonales=datos.json().datospersonales;
      this.date2=new Date(this.datospersonales[0][2].substr(6, 4))
      this.edad=this.date.getFullYear()-(this.date2.getFullYear()+1);
      this.datospersonales[0][3]=this.edad;
    });
  }
  ngOnInit(){
    this.ds.indiceidiomaobs.subscribe(indiceactual=>{
      this.indiceidioma=indiceactual;
      this.datospersonales[this.indiceidioma][3]=this.edad;
    });
  }
}
