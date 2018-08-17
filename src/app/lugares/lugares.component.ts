import { LugaresService } from './../services/lugares.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {

  title = 'PlatziSquare';
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
    }, error => {
      console.log(error);
      alert('Dificultades. Error: ' + error.statusText);
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
