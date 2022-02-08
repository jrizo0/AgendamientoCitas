import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarCitaComponent } from './buscar-cita/buscar-cita.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';

const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'buscar', component: BuscarCitaComponent },
  { path: 'agendar', component: AgendarCitaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const app_routing = RouterModule.forRoot(app_routes);
