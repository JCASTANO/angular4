import { LugaresService } from './services/lugares.service';
import { AppRoutingModule } from './routes/app.routing.module';
import { ResaltarDirective } from './directives/resaltar.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    // componentes
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    // directivas
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    // modulos core
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // modulos de ruteo
    AppRoutingModule,
    // boostrap
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    // google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    })
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
