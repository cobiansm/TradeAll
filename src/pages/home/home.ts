import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BienvenidoPage } from '../bienvenido/bienvenido';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bienvenido = BienvenidoPage;
registrarse = RegistroPage;
  constructor(public navCtrl: NavController) {

  }

  sesion() {
    this.navCtrl.push(this.bienvenido);
  }

  registro() {
    this.navCtrl.push(this.registrarse);
  }
}
