import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
producto;
carrito = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get('producto');
    this.carrito = this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  agregarCarrito() {
    this.carrito.push(this.producto);
    this.navCtrl.pop();
  }

}
