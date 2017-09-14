import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../services/datos.service';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styles: []
})
export class OtrosComponent implements OnInit {
  private indiceidioma:any;
  constructor(private ds:DatosService) {
    ds.obtenerHistorialOtros();
    this.indiceidioma=ds.indiceaux;
  }

  ngOnInit() {
    this.ds.indiceidiomaobs.subscribe(indiceactual=>{
      this.indiceidioma=indiceactual;
    });
  }
}
