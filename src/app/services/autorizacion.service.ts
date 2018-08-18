import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth/auth';
import * as firebase from 'firebase/app';
import { Router } from '../../../node_modules/@angular/router';
import swal from 'sweetalert2';

@Injectable()
export class AutorizacionService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.isLogged();
  }

  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(result => {
      swal('usuario logeado con facebook', '', 'success');
      console.log(result);
      this.router.navigate(['lugares']);
    })
    .catch (error => {
      swal('error logeado con facebook', '', 'error');
      console.log(error);
    });
  }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then (response => {
        swal('Usuario Loggeado con exito', '', 'success');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch (error => {
        swal('Un error ah ocurrido', '', 'error');
        console.log(error);
      });
  }

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then (response => {
        swal('Usuario registrado con exito', '', 'success');
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch (error => {
        swal('Un error ah ocurrido', '', 'error');
        console.log(error);
      });
  }

  public logout() {
    this.angularFireAuth.auth.signOut();
    swal('Sesión Cerrada', '', 'success');
    this.router.navigate(['lugares']);
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

   public getEmail() {
    console.log(this.angularFireAuth.auth.currentUser);
    return this.angularFireAuth.auth.currentUser.displayName ? this.angularFireAuth.auth.currentUser.displayName :
                                                               this.angularFireAuth.auth.currentUser.email;
   }
}
