import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../services/datos.service';
@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styles: []
})
export class TrabajosComponent implements OnInit {
  private indiceidioma:any;
  constructor(private ds:DatosService) {
    ds.obtenerHistorialTrabajos();
    this.indiceidioma=ds.indiceaux;
   }

  ngOnInit() {
    this.ds.indiceidiomaobs.subscribe(indiceactual=>{
      this.indiceidioma=indiceactual;
    });
  }
}
