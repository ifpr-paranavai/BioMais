import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController:AlertController) {}

  async alertaPrimata() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Primata',
      message: 'Você deseja habilitar o ícone <strong>Primata</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Não comprou :(');
          }
        }, {
          text: 'Comprar',
          handler: () => {
            console.log('Habilitado :D');
          }
        }
      ]
    });

    await alert.present();
  }


  alteradorCores() {
    document.getElementById("testando").style.backgroundColor = "purple";
    console.log('é pra ter alterado a cor')
  }


}