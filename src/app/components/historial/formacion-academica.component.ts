import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../services/datos.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styles: []
})
export class FormacionAcademicaComponent implements OnInit {
  private indiceidioma:any;
  constructor(private ds:DatosService) {
    ds.obtenerHistorialPerfilProfesional();
    this.indiceidioma=ds.indiceaux;
  }

  ngOnInit() {
    this.ds.indiceidiomaobs.subscribe(indiceactual=>{
      this.indiceidioma=indiceactual;
    });
  }

}
