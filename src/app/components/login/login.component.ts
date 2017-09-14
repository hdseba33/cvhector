import { Component,Input,Output,EventEmitter} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent{
  public user:string;
  public password:string;
  public cargando:boolean;
  public
  @Input() logueado:boolean;
  @Output('login') estaLogueado= new EventEmitter();

  constructor(){}

  login(){
    this.cargando=true;
    setTimeout(()=>{
      if(this.user==="Hector" && this.password==="CVHector"){
        this.logueado=true;
        this.estaLogueado.emit({logueado:this.logueado});
      }
      else{
        this.logueado=false;
        this.estaLogueado.emit({logueado:this.logueado});
      }
      this.cargando=false;
    },1000)
  }
}
