import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares: any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Florería La Gardenia'},
    {plan: 'gratis', cercania: 2, distancia: 2, active: false, nombre: 'Donas la pasadita'},
    {plan: 'pagado', cercania: 2, distancia: 2, active: true, nombre: 'Veterinaria Huellitas Felices'},
    {plan: 'gratis', cercania: 3, distancia: 3, active: false, nombre: 'Mi negocio'}
  ];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {

  }
}
