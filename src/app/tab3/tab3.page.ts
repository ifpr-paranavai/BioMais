import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Pontuacao } from '../models/pontuacao';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private pontuacao = Pontuacao.getInstance();
  constructor(public loadingCtrl: LoadingController, public alertController: AlertController) { }

  adicionarRemoverSons(som) {
    //fazer a regra para remover caso tenha
    
    if (this.pontuacao.sons.filter(function (el) { return el.som == som; }).length>0) {
      this.pontuacao.sons = this.pontuacao.sons.filter(function (el) { return el.som != som; });
      this.mostraMensagem("Som bloqueado!!");
    } else {
      let controle=0;
      if (this.pontuacao.quantidadeTotalPontos > -1 && som == 'som1') {
        this.pontuacao.sons.push({ som: 'som1' });
        this.mostraMensagem("Som desbloqueado!!");
        controle=1;
      }
      if (this.pontuacao.quantidadeTotalPontos > 99 && som == 'som2') {
        this.pontuacao.sons.push({ som: 'som2' });
        this.mostraMensagem("Som desbloqueado!!");
        controle=1;
      }
      if (this.pontuacao.quantidadeTotalPontos > 249 && som == 'som3') {
        this.pontuacao.sons.push({ som: 'som3' });
        this.mostraMensagem("Som desbloqueado!!");
        controle=1;
      }
      if (this.pontuacao.quantidadeTotalPontos > 399 && som == 'som4') {
        this.pontuacao.sons.push({ som: 'som4' });
        this.mostraMensagem("Som desbloqueado!!");
          controle=1;
      }
      console.log(controle)
      if(controle==0){
        
          this.mostraMensagem("Você não possui pontuação suficiente!!");
        
      }
    }
  }

verificar(som){
  
  return this.pontuacao.sons.filter(function (el) { return el.som == som; }).length>0?true:false;
}

  async mostraMensagem(mensagem) {

    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: mensagem,
      duration: 1000
    });
    await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed with role:', role);

    await loading.onDidDismiss().then(s => {

      console.log('Dismissed loading');
    });


  }

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
            /// console.log('Não comprou :(');
          }
        }, {
          text: 'Comprar',
          handler: () => {
            // console.log('Habilitado :D');
          }
        }
      ]
    });

    await alert.present();
  }


  alteradorCores() {
    document.getElementById("testando").style.backgroundColor = "purple";
    // console.log('é pra ter alterado a cor')
  }


}