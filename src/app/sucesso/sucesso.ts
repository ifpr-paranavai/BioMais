import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';
import {Pontuacao} from '../models/pontuacao';
import { Storage } from '@ionic/storage';
@Component({
    selector: 'page-sucesso',
    templateUrl: 'sucesso.html'
  })
  export class SucessoPage {
    private pontos;
    private quantidadeSequencia;
    private pontosSequencia;
    private pontuacao=Pontuacao.getInstance();
    constructor(  private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
      this.pontos = this.pontuacao.quantidadePontos;
      this.quantidadeSequencia = this.pontuacao.quantidadeQuestoesConsecutivas;
      this.pontosSequencia = this.pontuacao.quantiadePontosRecompensaQuestoesConsecutivas;  

      this.storage.get('totalPontos').then((val) => {
        let total=0;
        if(val!=null && val!=undefined){
            total = parseFloat(val);
        }
        this.pontuacao.quantidadeTotalPontos+=this.pontos;
        total+=this.pontos;
        this.storage.set('totalPontos', total);
      });
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad SucessoPage');
    }
  
  }