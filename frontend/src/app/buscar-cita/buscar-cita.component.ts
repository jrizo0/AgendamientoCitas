import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { Cita } from '../modelo/cita';

@Component({
  selector: 'app-buscar-cita',
  templateUrl: './buscar-cita.component.html',
  styleUrls: ['./buscar-cita.component.css'],
})
export class BuscarCitaComponent implements OnInit {
  citasToShow: Cita[] = [];
  fecha: string | undefined;

  constructor(public router: Router, public _api: APIService) {}

  mostrarCitasByDate() {
    this._api.getCitasByDate(this.fecha).subscribe(
      (resp) => {
        this.citasToShow = resp;
        console.log(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
