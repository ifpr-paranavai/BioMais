import { Component, OnInit,  Input} from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from '@ionic/angular';
const nav = document.querySelector('ion-nav');
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedbacknew',
  templateUrl: './feedbacknew.page.html',
  styleUrls: ['./feedbacknew.page.scss'],
})
export class FeedbacknewPage {

  @Input() home;
  @Input() imagem;
  @Input() texto;
  @Input() legenda;
  private chamada;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    this.home = navParams.get("home");
    this.imagem = navParams.get("imagem");
    this.texto = navParams.get("texto");
    this.legenda = navParams.get("legenda");

 //   console.log("TEXT "+this.texto);
   // console.log("IMG "+this.imagem);
    this.chamada = 0;
  }

  async continuar(){
    this.modalController.dismiss();
    this.home.continuar();
 
  } 
}
