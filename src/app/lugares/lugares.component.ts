import { LugaresService } from './../services/lugares.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '../../../node_modules/@angular/animations';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent {

  title = 'PlatziSquare';
  state = 'inicial';

  lat: number;
  lng: number;
  lugares = null;

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private lugaresService: LugaresService) {
    lugaresService.getLugares()
    .subscribe((lugares: any) => {
        this.lugares = Object.values(lugares);
        this.lat = this.lugares [0].lat;
        this.lng = this.lugares [0].lng;
        this.state = 'final';
    }, error => {
      console.log(error);
      swal('Dificultades. Error: ' + error.statusText, '', 'error');
    });
  }

  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicial(e) {
    console.log('Iniciado');
    console.log(e);
  }

  animacionTermina(e) {
    console.log('Terminado');
    console.log(e);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
