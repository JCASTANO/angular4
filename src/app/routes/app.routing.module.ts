import { ContactoComponent } from '../contacto/contacto.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';
import { CrearComponent } from '../crear/crear.component';

export const RootRouterConfig: Routes = [
    {path: '', component: LugaresComponent},
    {path: 'lugares', component: LugaresComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'crear', component: CrearComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(RootRouterConfig, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
