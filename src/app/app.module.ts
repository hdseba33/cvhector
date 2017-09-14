import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {APP_ROUTING} from './app.routes';
import {HttpModule} from '@angular/http';
//Servicios
import {DatosService} from './services/datos.service';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PasatiempoComponent } from './components/pasatiempo/pasatiempo.component';
import { TrabajosComponent } from './components/historial/trabajos.component';
import { FormacionAcademicaComponent } from './components/historial/formacion-academica.component';
import { OtrosComponent } from './components/historial/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HistorialComponent,
    PasatiempoComponent,
    TrabajosComponent,
    FormacionAcademicaComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
