import { Component, OnInit,  Input} from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from '@ionic/angular';
const nav = document.querySelector('ion-nav');
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { ModalController } from '@ionic/angular';
import { Pontuacao } from '../models/pontuacao';

@Component({
  selector: 'app-feedbacknew',
  templateUrl: './feedbacknew.page.html',
  styleUrls: ['./feedbacknew.page.scss'],
})
export class FeedbacknewPage {
  private pontuacao = Pontuacao.getInstance();
  som = this.embaralharArray(this.pontuacao.sons).length>0?this.embaralharArray(this.pontuacao.sons)[0]:[];
  @Input() home;
  @Input() imagem;
  @Input() texto;
  @Input() legenda;
  private chamada;
  @Input() acertou;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
   //console.log( this.embaralharArray(this.pontuacao.sons)[0])
    this.home = navParams.get("home");
    this.imagem = navParams.get("imagem");
    this.texto = navParams.get("texto");
    this.legenda = navParams.get("legenda");
    this.acertou = navParams.get("acertou");

 //   console.log("TEXT "+this.texto);
   // console.log("IMG "+this.imagem);
    this.chamada = 0;
  }

  async continuar(){
    this.modalController.dismiss();
    this.home.continuar();
 
  } 

  embaralharArray(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}

}
