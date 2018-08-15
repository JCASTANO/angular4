import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {

  lugares: any = [
    {id: 1, plan: 'pagado', cercania:  1, distancia:  1, active: true, nombre: 'Florería La Gardenia', description: 'una descripcion'},
    {id: 2, plan: 'gratis', cercania: 2, distancia: 2, active: false, nombre: 'Donas la pasadita', description: 'una descripcion'},
    {id: 3, plan: 'pagado', cercania: 2, distancia: 2, active: true, nombre: 'Veterinaria Huellitas Felices',
    description: 'una descripcion'},
    {id: 4, plan: 'gratis', cercania: 3, distancia: 3, active: false, nombre: 'Mi negocio', description: 'una descripcion'}
  ];

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.find((lugar) => {
      return Number(lugar.id) === Number(id);
    }) || null;
  }
}
