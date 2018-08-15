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

  lat: number = 51.678418;
  lng: number = 7.809007;
  lugares = null;

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
