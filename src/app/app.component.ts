import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares: any = [
    {active: true, nombre: 'Florería La Gardenia'},
    {active: false, nombre: 'Donas la pasadita'},
    {active: true, nombre: 'Veterinaria Huellitas Felices'}
  ];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {

  }
}
