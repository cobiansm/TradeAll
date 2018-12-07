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
  productos=[
    {
      id: 0,
      imagen:'../assets/imgs/MF.jpg',
      nombre:'Halcón Milenario',
      precio:'₿551,390,290',

        vender: {
        vendedor:'Watto',
        valoracionv:[1, 2]
        },

          review: [{
            username: 'MarleneShip',
            avatar: '../assets/imgs/Avatar3.png',
            valoracion: [1, 2, 3, 4, 5],
            reseña:'Spicy jalapeno bacon ipsum dolor amet consequat sed reprehenderit aliquip, ea voluptate pork loin dolore strip steak et',
            date:'11/09/2051'
          }],

          date: [{
              fecha:'09/01/2050',
              disponibles:'0'
          }]
    },

    {
      id: 1,
      imagen:'../assets/imgs/Arwing.jpg',
      nombre:'Arwing',
      precio:'₿17,580,000',

        vender: {
        vendedor:'Falco',
        valoracionv:[1, 2, 3, 4, 5]
        },

          review: [{
            username: 'MarPlanet',
            avatar: '../assets/imgs/Marvatar.png',
            valoracion: [1, 2, 3, 4 ],
            reseña:'Non porchetta commodo bresaola enim labore. Excepteur prosciutto kevin, anim incididunt chicken cupim ut aliqua buffalo.',
            date:'05/12/2056'
          }],

          date: [{
              fecha:'11/10/2050',
              disponibles:'3'
          }]
    },

    {
      id: 2,
      imagen:'../assets/imgs/Axiom.jpg',
      nombre:'Axiom',
      precio:'₿777,900,000',

        vender: {
        vendedor:'BNL',
        valoracionv:[1, 2, 3]
        },

          review: [{
            username: 'AtomLene',
            avatar: '../assets/imgs/Cavatar.png',
            valoracion: [1, 2, 3, 4, 5],
            reseña:'upim fatback dolor ex sausage in. Consequat occaecat salami esse alcatra sirloin rump consectetur leberkas non pork. Anim burgdoggen ribeye in tail in velit',
            date:'27/12/2050'
          }],

          date: [{
              fecha:'11/10/2050',
              disponibles:'1'
          }]
    },

    {
      id: 3,
      imagen:'../assets/imgs/FS.jpg',
      nombre:'Platillo volador',
      precio:'₿6,200,030',

        vender: {
        vendedor:'NASA',
        valoracionv:[1, 2, 3, 4]
        },

          review: [{
            username: 'AtomLene',
            avatar: '../assets/imgs/Cavatar.png',
            valoracion: [1, 2, 3, 4],
            reseña:'Elit pancetta swine, est t-bone occaecat brisket non fatback.',
            date:'02/03/2050'
          }],

          date: [{
              fecha:'01/02/2050',
              disponibles:'15'
          }]
    },

    {
      id: 4,
      imagen:'../assets/imgs/Bubbleship.jpg',
      nombre:'Bubbleship',
      precio:'₿33,000,050',

        vender: {
        vendedor:'BNL',
        valoracionv:[1, 2, 3]
        },

          review: [{
            username: 'AtomLene',
            avatar: '../assets/imgs/Cavatar.png',
            valoracion: [1, 2, 3, 4],
            reseña:'Elit pancetta swine, est t-bone occaecat brisket non fatback.',
            date:'02/03/2050'
          }],

          date: [{
              fecha:'01/02/2050',
              disponibles:'15'
          }]
    },

    {
        id: 5,
        imagen:'../assets/imgs/Corvette.jpg',
        nombre:'Corvette',
        precio:'₿345,600,799',
  
          vender: {
          vendedor:'NASA',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Space Trooper',
              avatar: '../assets/imgs/Avatar2.png',
              valoracion: [1, 2, 3, 4],
              reseña:'Elit pancetta swine, est t-bone occaecat brisket non fatback.',
              date:'17/12/2052'
            }],
  
            date: [{
                fecha:'13/05/2050',
                disponibles:'1'
            }]
      },

      {
        id: 6,
        imagen:'../assets/imgs/POD.jpg',
        nombre:'Pod de carreras',
        precio:'₿7,100,000',
  
          vender: {
          vendedor:'Watto',
          valoracionv:[1, 2]
          },
  
            review: [{
              username: 'Corredor de Pods',
              avatar: '../assets/imgs/Avatar3.png',
              valoracion: [1],
              reseña:'Elit pancetta swine, est t-bone occaecat brisket non fatback.',
              date:'02/03/2053'
            }],
  
            date: [{
                fecha:'02/05/2051',
                disponibles:'4'
            }]
      },

      {
        id: 7,
        imagen:'../assets/imgs/Ranger.jpg',
        nombre:'Ranger',
        precio:'₿52,900,000',
  
          vender: {
          vendedor:'NASA',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Astronaut',
              avatar: '../assets/imgs/Avatar2.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'Ut in eros ut risus finibus tempor. Phasellus eu dignissim odio. Aliquam porta sodales tortor eget semper. Fusce ac eleifend velit.',
              date:'11/11/2056'
            }],
  
            date: [{
                fecha:'01/07/2052',
                disponibles:'2'
            }]
      },

      {
        id: 8,
        imagen:'../assets/imgs/Speeder.png',
        nombre:'Speeder',
        precio:'₿570,600',
  
          vender: {
          vendedor:'Watto',
          valoracionv:[1, 2]
          },
  
            review: [{
              username: 'Corredor de Pods',
              avatar: '../assets/imgs/Avatar3.png',
              valoracion: [1, 2, 3, 4],
              reseña:'Pellentesque venenatis lectus sagittis, iaculis diam quis, rhoncus ipsum.',
              date:'30/06/2054'
            }],
  
            date: [{
                fecha:'29/06/2056',
                disponibles:'11'
            }]
      },

      {
        id: 9,
        imagen:'../assets/imgs/Tie.jpg',
        nombre:'Caza TIE',
        precio:'₿541,000,999',
  
          vender: {
          vendedor:'Watto',
          valoracionv:[1, 2]
          },
  
            review: [{
              username: 'Corredor de Pods',
              avatar: '../assets/imgs/Avatar3.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'Quisque felis dui, mattis vel elit quis, aliquet lobortis nulla. Aliquam a justo ornare.',
              date:'30/10/2054'
            }],
  
            date: [{
                fecha:'10/09/2056',
                disponibles:'5'
            }]
      },
      
      {
        id: 10,
        imagen:'../assets/imgs/XW.jpg',
        nombre:'X-Wing',
        precio:'₿232,500,000',
  
          vender: {
          vendedor:'Watto',
          valoracionv:[1, 2]
          },
  
            review: [{
              username: 'Corredor de Pods',
              avatar: '../assets/imgs/Avatar3.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'maximus metus id, accumsan ipsum. Proin commodo, quam vitae volutpat pellentesque.',
              date:'25/11/2052'
            }],
  
            date: [{
                fecha:'07/02/2051',
                disponibles:'7'
            }]
      },

      {
        id: 11,
        imagen:'../assets/imgs/YW.jpg',
        nombre:'Y-Wing',
        precio:'₿182,900,000',
  
          vender: {
          vendedor:'Watto',
          valoracionv:[1, 2]
          },
  
            review: [{
              username: 'Corredor de Pods',
              avatar: '../assets/imgs/Avatar3.png',
              valoracion: [1, 2, 3, 4],
              reseña:' massa mauris aliquam nunc, ut posuere magna massa quis lacus.',
              date:'26/11/2052'
            }],
  
            date: [{
                fecha:'17/02/2051',
                disponibles:'6'
            }]
      },

      {
        id: 12,
        imagen:'../assets/imgs/Aurora.jpg',
        nombre:'Aurora',
        precio:'₿780,555,000',
  
          vender: {
          vendedor:'Falco',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Atomlene',
              avatar: '../assets/imgs/Cavatar.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'Duis ac aliquet dui.',
              date:'15/11/2051'
            }],
  
            date: [{
                fecha:'17/01/2051',
                disponibles:'2'
            }]
      },

      {
        id: 13,
        imagen:'../assets/imgs/CityDestroyerMothership.jpg',
        nombre:'City Destoyer Invasion Mothership',
        precio:'₿2,000,000,000',
  
          vender: {
          vendedor:'BNL',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Atomlene',
              avatar: '../assets/imgs/Cavatar.png',
              valoracion: [1, 2, 3, 4],
              reseña:'Proin commodo, quam vitae volutpat pellentesque, massa mauris aliquam nunc, ut posuere magna massa quis lacus.',
              date:'15/11/2051'
            }],
  
            date: [{
                fecha:'17/01/2051',
                disponibles:'2'
            }]
      },

      {
        id: 14,
        imagen:'../assets/imgs/EH.jpg',
        nombre:'Event Horizon',
        precio:'₿150,000,000',
  
          vender: {
          vendedor:'BNL',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Atomlene',
              avatar: '../assets/imgs/Cavatar.png',
              valoracion: [],
              reseña:'Está embrujada, la peor compra que he hecho',
              date:'17/05/2050'
            }],
  
            date: [{
                fecha:'30/02/2050',
                disponibles:'3'
            }]
      },

      {
        id: 15,
        imagen:'../assets/imgs/EternalCrusader.jpg',
        nombre:'Eternal Crusader',
        precio:'₿567,900,000',
  
          vender: {
          vendedor:'Falco',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Star Trooper',
              avatar: '../assets/imgs/Avatar2.png',
              valoracion: [],
              reseña:'Un poco apretada.',
              date:'10/01/2054'
            }],
  
            date: [{
                fecha:'30/02/2050',
                disponibles:'5'
            }]
      },

      {
        id: 16,
        imagen:'../assets/imgs/NaveR.jpg',
        nombre:'Nave Roja',
        precio:'₿233,400,000',
  
          vender: {
          vendedor:'BNL',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'MarLnet',
              avatar: '../assets/imgs/Avatar2.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'ras massa libero, eleifend in elementum sit amet, egestas quis purus.',
              date:'10/11/2053'
            }],
  
            date: [{
                fecha:'31/01/2050',
                disponibles:'10'
            }]
      },

      {
        id: 17,
        imagen:'../assets/imgs/Pelican.png',
        nombre:'Pelican',
        precio:'₿133,400,000',
  
          vender: {
          vendedor:'Falco',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'MarLnet',
              avatar: '../assets/imgs/Avatar2.png',
              valoracion: [1, 2, 3, 4],
              reseña:'Ut in est rutrum, fermentum risus in, rhoncus est.',
              date:'10/11/2052'
            }],
  
            date: [{
                fecha:'31/01/2051',
                disponibles:'20'
            }]
      },

      {
        id: 17,
        imagen:'../assets/imgs/SpaceCruiser.jpg',
        nombre:'Space Cruiser',
        precio:'₿76,900,022',
  
          vender: {
          vendedor:'NASA',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Space Trooper',
              avatar: '../assets/imgs/Cavatar.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'Ut euismod sit amet dolor non ultrices.',
              date:'21/04/2054'
            }],
  
            date: [{
                fecha:'12/12/2051',
                disponibles:'13'
            }]
      },

      {
        id: 18,
        imagen:'../assets/imgs/Tardis.jpg',
        nombre:'Tardis',
        precio:'₿51,200,100',
  
          vender: {
          vendedor:'NASA',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Space Trooper',
              avatar: '../assets/imgs/Cavatar.png',
              valoracion: [1, 2, 3, 4, 5],
              reseña:'Nullam a suscipit urna, blandit tempor lectus.',
              date:'22/03/2054'
            }],
  
            date: [{
                fecha:'12/11/2050',
                disponibles:'20'
            }]
      },

      {
        id: 19,
        imagen:'../assets/imgs/Valkyrie.png',
        nombre:'Valkyrie',
        precio:'₿251,200,100',
  
          vender: {
          vendedor:'NASA',
          valoracionv:[1, 2, 3, 4]
          },
  
            review: [{
              username: 'Space Trooper',
              avatar: '../assets/imgs/Cavatar.png',
              valoracion: [1, 2, 3],
              reseña:' Phasellus mattis eu lorem ac dapibus.',
              date:'25/05/2053'
            }],
  
            date: [{
                fecha:'12/11/2050',
                disponibles:'11'
            }]
      }
      
  ];

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
