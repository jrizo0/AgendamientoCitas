import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { Cita } from '../modelo/cita';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css'],
})
export class AgendarCitaComponent implements OnInit {
  urlDates = 'http://localhost:5000/date/';
  citaToSave: Cita = new Cita();

  constructor(public router: Router, public _api: APIService) {}

  guardarCita() {
    this._api.saveDate(this.citaToSave).subscribe(
      (resp) => {
        alert('Se guardó correctamente la cita');
        console.log('Se guardo la cita');
        this.irAInicio();
      },
      (error) => {
        alert(error.error.message);
        console.error(error);
      }
    );
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {}
}
