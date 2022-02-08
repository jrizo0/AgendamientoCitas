import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { BuscarCitaComponent } from './buscar-cita/buscar-cita.component';

import { app_routing } from './app.routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgendarCitaComponent,
    BuscarCitaComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    MatDatepickerModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
