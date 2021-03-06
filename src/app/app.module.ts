import { MyInterceptor } from './services/my.interceptor';
import { MyGuardService } from './services/my-guard.service';
import { AutorizacionService } from './services/autorizacion.service';
import { LugaresService } from './services/lugares.service';
import { AppRoutingModule } from './routes/app.routing.module';
import { ResaltarDirective } from './directives/resaltar.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    // componentes
    AppComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LoginComponent,
    RegistroComponent,
    // directivas
    ResaltarDirective,
    ContarClicksDirective,
    LinkifystrPipe
  ],
  imports: [
    // modulos core
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    }),
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
              LugaresService,
              AutorizacionService,
              MyGuardService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: MyInterceptor,
                multi: true
              }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
