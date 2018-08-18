import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LugaresService {

  API_ENDPOINT = 'https://platzisquare-c44ac.firebaseio.com';

  constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}

  public getLugares() {
    return this.afDB.list('lugares').valueChanges();
    // return this.http.get(this.API_ENDPOINT + '/lugares.json');
    // return this.http.get(this.API_ENDPOINT + '/.json?auth=jwt').pipe(map((resultado: any) => resultado.json().lugares));
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }

  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers});
  }

  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }
}
