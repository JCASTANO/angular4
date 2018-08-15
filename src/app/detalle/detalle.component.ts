import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  id: number;
  lugar: any = {};

  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }

}
