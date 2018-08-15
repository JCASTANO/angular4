import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable()
export class LugaresService {

  constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}

  public getLugares() {
    return this.afDB.list('lugares').valueChanges();
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }

  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }
}
