import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  lugar: any = {};
  id: any = null;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {

    this.id = this.route.snapshot.params['id'];

    if (this.id !== 'new') {
      this.lugaresService.getLugar(this.id).valueChanges().subscribe(lugar => {
          this.lugar = lugar;
      });
    } else {
      this.reiniciarVariables();
    }
  }

  private reiniciarVariables() {
    this.lugar.nombre = 'Un negocio';
    this.lugar.distancia = 1;
    this.lugar.cercania = 1;
    this.lugar.descripcion = 'Una descripcion';
    this.lugar.plan = 'pagado';
    this.lugar.calle = 'Calle 72 9-55';
    this.lugar.ciudad = 'Bogota';
    this.lugar.pais = 'Colombia';
  }

  guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion).subscribe ((result: any)  => {
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;

      if (this.id !== 'new') {
        this.lugaresService.editarLugar(this.lugar);
        alert('Negocio editado con exito');
      } else {
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        alert('Negocio guardado con exito');
        this.reiniciarVariables();
      }

    });
  }

}
