import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BienvenidoPage } from '../bienvenido/bienvenido';
import { RegistroPage } from '../registro/registro';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bienvenido = BienvenidoPage;
registrarse = RegistroPage;

correo = '';
contra = '';

usuarios = [];

  constructor(public navCtrl: NavController, public alert:AlertController, public storage: Storage) {
    this.storage.keys()
    .then(keys => {
      if (keys.some(k => k == 'usuarios')) {
        this.storage.get('usuarios')
          .then(usuarios => {
            this.usuarios = JSON.parse(usuarios);
          });
      }
    });
  }

  sesion() {
    if (this.correo.length > 0 && this.contra.length > 0) {
    let index = this.usuarios.findIndex(u => u.correo == this.correo && u.contra == this.contra);

    if (index >= 0) {
      const alerta = this.alert.create({
        title: "¡Hola!",
        subTitle: "Bienvenido de nuevo.",
        buttons: ['Ok']
      });
      alerta.present();
      this.navCtrl.push(this.bienvenido);
    }
    else {
      const alerta = this.alert.create({
        title: "Error 101",
        subTitle: "User not found",
        buttons: ['Ok']
      });
      alerta.present();
    }
  } else {
    const aler = this.alert.create({
    title: "Error 13",
    subTitle: 'No coinciden los datos',
    buttons: ['Ok']
  });
  aler.present();
  }
  }

  registro() {
    this.navCtrl.push(this.registrarse, {usuarios: this.usuarios});
  }

  inicio() {
    this.navCtrl.push(BienvenidoPage);  
  }

}
