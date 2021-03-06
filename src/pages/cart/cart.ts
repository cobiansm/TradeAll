import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
carrito = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.carrito = this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  clickEliminar(c) {
    let index = this.carrito.findIndex(p => p.nombre == c.nombre);
    if (index >= 0) {
      this.carrito.splice(index, 1);
    }
  }

}
