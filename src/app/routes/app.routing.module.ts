import { MyGuardService } from './../services/my-guard.service';
import { RegistroComponent } from './../registro/registro.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';
import { CrearComponent } from '../crear/crear.component';
import { LoginComponent } from '../login/login.component';

export const RootRouterConfig: Routes = [
    {path: '', component: LugaresComponent},
    {path: 'lugares', component: LugaresComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'crear/:id', component: CrearComponent, canActivate: [MyGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(RootRouterConfig, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
