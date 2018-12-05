import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BienvenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html',
})
export class BienvenidoPage {
  usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidoPage');
  }

  user() {
    this.navCtrl.push('perfil');
  }

}
