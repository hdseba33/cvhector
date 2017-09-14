import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../services/datos.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: []
})
export class HistorialComponent implements OnInit {
  private indiceidioma:any;
  constructor(private ds:DatosService) {
    ds.obtenerSubMenu();
    this.indiceidioma=ds.indiceaux;
  }

  ngOnInit() {
    this.ds.indiceidiomaobs.subscribe(indiceactual=>{
      this.indiceidioma=indiceactual;
    });
  }
}
