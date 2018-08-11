import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 8;
  listo = false;
  nombre: string;
  apellido: string;

  constructor() {

    setTimeout(() => {
      this.listo = true;
    }, 2000);
  }

  hacerAlgo() {
    alert('Haciendo algo!');
  }
}
