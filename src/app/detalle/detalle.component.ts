import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  lugares: any = [
    {id: 1, plan: 'pagado', cercania:  1, distancia:  1, active: true, nombre: 'Florería La Gardenia', description: 'una descripcion'},
    {id: 2, plan: 'gratis', cercania: 2, distancia: 2, active: false, nombre: 'Donas la pasadita', description: 'una descripcion'},
    {id: 3, plan: 'pagado', cercania: 2, distancia: 2, active: true, nombre: 'Veterinaria Huellitas Felices',
    description: 'una descripcion'},
    {id: 4, plan: 'gratis', cercania: 3, distancia: 3, active: false, nombre: 'Mi negocio', description: 'una descripcion'}
  ];

  id: number;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.lugares.find((lugar) => {
      return Number(lugar.id) === Number(this.id);
    }) || null;
  }

}
