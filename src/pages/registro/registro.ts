import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { BienvenidoPage } from '../bienvenido/bienvenido';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
correo = '';
contra = '';
nombre = '';
tel = '';
usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alert: AlertController) {
  this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickRegistro() {
    if (this.contra.length >= 8 && this.correo.length > 0) {
      this.usuarios.push({
        correo: this.correo,
        contra: this.contra,
        nombre: this.nombre,
        tel: this.tel
      });
      this.storage.set('usuarios', JSON.stringify(this.usuarios));
      this.navCtrl.pop();
    } else if (this.contra.length < 8) {
      const alerta = this.alert.create({
        title: "Error 411",
        subTitle: "Contraseña inválida",
        buttons: ['Ok']
      });
      alerta.present();
    } else if (this.correo.length <= 0 && this.correo.length <= 0) {
      const alerta = this.alert.create({
        title: "Error 204",
        subTitle: "Llena todos los campos",
        buttons: ['Ok']
      });
      alerta.present();
    }
   
  }

  home() {
    this.navCtrl.push(BienvenidoPage);  
  }

sesionPage() {
  this.navCtrl.push(HomePage);
}

}
