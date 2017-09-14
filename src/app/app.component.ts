
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public logueado:boolean;
  constructor(){
      this.logueado=false;
  }

  estaLogueado(event):void{
    this.logueado=event.logueado;
  }

  salio(event):void{
    this.logueado=event.logueado;
  }
}
