import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HistorialComponent} from './components/historial/historial.component';
import {TrabajosComponent} from './components/historial/trabajos.component';
import {FormacionAcademicaComponent} from './components/historial/formacion-academica.component';
import {OtrosComponent} from './components/historial/otros.component';
// import {PasatiempoComponent} from './components/pasatiempo/pasatiempo.component';
// import {LoginComponent} from './components/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'historial', component: HistorialComponent,
    children:[
      { path: 'trabajos', component: TrabajosComponent },
      { path: 'formacion', component: FormacionAcademicaComponent },
      { path: 'otros', component: OtrosComponent }
    ]
  },
  // { path: 'historial/trabajos', component: TrabajosComponent },
  // { path: 'historial/formacion', component: FormacionAcademicaComponent },
  // { path: 'historial/otros', component: OtrosComponent },
  // { path: 'pasatiempo', component: PasatiempoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
