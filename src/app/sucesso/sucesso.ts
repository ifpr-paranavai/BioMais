import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
    selector: 'page-sucesso',
    templateUrl: 'sucesso.html'
  })
  export class SucessoPage {
    private pontos;
    private quantidadeSequencia;
    private pontosSequencia;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pontos = Tab1Page.quantidadePontos;
      this.quantidadeSequencia = Tab1Page.quantidadeQuestoesConsecutivas;
      this.pontosSequencia = Tab1Page.quantiadePontosRecompensaQuestoesConsecutivas;    
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad SucessoPage');
    }
  
  }