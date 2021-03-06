import { AutorizacionService } from './services/autorizacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn = false;
  public email = null;

  constructor(private autorizacionService: AutorizacionService) {
    this.autorizacionService.isLogged().subscribe(result => {
      if (result && result.uid) {
        this.loggedIn = true;
        this.email = this.autorizacionService.getEmail();
      } else {
        this.loggedIn = false;
      }
    }, error => {
      this.loggedIn = false;
    });
  }

  logout() {
    this.autorizacionService.logout();
  }
}
