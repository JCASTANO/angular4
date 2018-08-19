import { map, switchMap, debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  lugar: any = {};
  id: any = null;

  results$: Observable<any>;
  searchField: FormControl;

  constructor(private lugaresService: LugaresService,
              private route: ActivatedRoute,
              private httpClient: HttpClient) {

    this.id = this.route.snapshot.params['id'];

    if (this.id !== 'new') {
      this.lugaresService.getLugar(this.id).valueChanges().subscribe(lugar => {
          this.lugar = lugar;
      });
    } else {
      this.reiniciarVariables();
    }

    const URL = 'https://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      .pipe(
       debounceTime(500),
       switchMap(query => this.httpClient.get(`${URL}?address=${query}`)),
       map((response: any) => response),
       map((response: any) => response.results));

  }

  seleccionarDireccion(result) {
    this.lugar.calle = result.address_components[1].long_name + ' ' + result.address_components[0].long_name;
    this.lugar.ciudad = result.address_components[4].long_name;
    this.lugar.pais = result.address_components[5].long_name;
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
        swal('Edición exitosa...', '', 'success');
      } else {
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        /* this.lugaresService.guardarLugar(this.lugar).subscribe(retorno => {
          this.reiniciarVariables();
        }); */
        swal('Registro exitoso...', '', 'success');
        // types: question, error
      }

    });
  }

}
