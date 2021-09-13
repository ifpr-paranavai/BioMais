import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from '@ionic/angular';
const nav = document.querySelector('ion-nav'); // possivel solução para o navController
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Pontuacao} from '../models/pontuacao';
import { FeedbacknewPage } from '../feedbacknew/feedbacknew.page';

/*
  Generated class for the QuestaoMultiplaEscolha page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({ 
    selector: 'page-questao-multipla-escolha',
    templateUrl: 'questao-multipla-escolha.page.html',
    styleUrls: ['questao-multipla-escolha.page.scss']
})


export class QuestaoMultiplaEscolhaPage {
    //private home;
    //private questao;
    private pontuacao=Pontuacao.getInstance();
    private alternativaSelecionada;
    private tentativas = 0;
    private totalPontos;
    private corAlternativa1 = "#F0E68C";
    private corAlternativa2 = "#F0E68C";
    private corAlternativa3 = "#F0E68C";
    private corAlternativa4 = "#F0E68C";
    private corAlternativa5 = "#F0E68C";
    private corAlternativa6 = "#F0E68C";
    private alternativas;
    private home;
    @Input() questao: {feedBackTexto:"", feedBackImagem: "", alternativaCorreta: "", alternativa1: "", alternativa2: "", alternativa3: "", alternativa4: "", alternativa5: "", alternativa6: "" }


    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, public loadingCtrl: LoadingController, public modalController: ModalController,) {
        this.home = navParams.get("home");
        this.questao = navParams.get("questao");
        this.tentativas = 0;
        this.totalPontos = this.pontuacao.quantidadePontos;

        this.alternativas = [{ "alernativa": 1, "corBorda": "#F0E68C", "texto": this.questao.alternativa1 },
        { "alernativa": 2, "corBorda": "#F0E68C", "texto": this.questao.alternativa2 },
        { "alernativa": 3, "corBorda": "#F0E68C", "texto": this.questao.alternativa3 },
        { "alernativa": 4, "corBorda": "#F0E68C", "texto": this.questao.alternativa4 },
        { "alernativa": 5, "corBorda": "#F0E68C", "texto": this.questao.alternativa5 },
        { "alernativa": 6, "corBorda": "#F0E68C", "texto": this.questao.alternativa6 }];
        //console.log("alternativa 6: " + this.questao.alternativa6);
    }



    marcarAlteranativa(alternativa) {
        if (alternativa.corBorda == '#F0E68C') {
            alternativa.corBorda = "#5cb85c";
        } else {
            alternativa.corBorda = "#F0E68C";
        }
    }



    verificar() {

        if (this.arraysIguais(this.verificarMarcadas(), this.questao.alternativaCorreta)) {
          //  console.log("Parabéns, você acertou");
          this.pontuacao.quantidadeQuestoesConsecutivas++;
          this.pontuacao.acerto++;
            this.presentLoadingCustomSucesso();
            this.feedback();
            //this.home.continuar();
        } else {
         //   console.log("Você errou :(");
            if (this.tentativas == 0) {
              //  console.log("Você tem " + this.tentativas + " tentativas");
              this.pontuacao.quantidadeQuestoesConsecutivas = -1;
                this.presentLoadingCustomErro();
                this.feedback();

            } else if (this.tentativas == 1) {
                //HomePage.quantidadeQuestoesConsecutivas = -1;
                //this.mostraErroSegundaTentativa();
            }
        }
    }

    verificarMarcadas() {
        let marcadas = [];
        if (this.alternativas[0].corBorda == "#5cb85c") {
            marcadas.push(1);
        }
        if (this.alternativas[1].corBorda == "#5cb85c") {
            marcadas.push(2);
        }
        if (this.alternativas[2].corBorda == "#5cb85c") {
            marcadas.push(3);
        }
        if (this.alternativas[3].corBorda == "#5cb85c") {
            marcadas.push(4);
        }
        if (this.alternativas[4].corBorda == "#5cb85c") {
            marcadas.push(5);
        }
        if (this.alternativas[5].corBorda == "#5cb85c") {
            marcadas.push(6);
        }
        
        return marcadas;
    }


    async feedback() { // TEM Q ARRUMAR ISSO
        this.modalController.dismiss();
        let feedBackImagem = this.questao.feedBackImagem;
        let feedBackTexto = this.questao.feedBackTexto;
        
        const modal = await this.modalController.create({
            component: FeedbacknewPage,
            cssClass: 'my-custom-class',
            componentProps: {"home":this.home,"imagem": feedBackImagem, "texto":feedBackTexto}
            
        });
        
        return await modal.present();
    }

    feedbackPrimeiraTentativa() {
        let alert: any = this.alertCtrl.create();
        alert.setTitle('Ops!!');


        alert.setMessage("Você tem mais uma chance!!");

        alert.addButton('Continuar');

        alert.present().then(() => {
        });

    }

    async mostraErroPrimeiraTentativa() {

        let loading: any = this.loadingCtrl.create({
            spinner: null,
            message: `
        <div >
          <img src="assets/imagens/incorreto.png"/>
        </div>`,
            duration: 700
        });

        loading.onDidDismiss(() => {
            this.feedbackPrimeiraTentativa();
           // console.log('Dismissed loading');
        });

        loading.present();
    }

    async mostraErroSegundaTentativa() {

        const loading = await this.loadingCtrl.create({
            spinner: 'bubbles',
            message: `
        <div >
          <img src="assets/imagens/incorreto.png"/>
        </div>`,
            duration: 700
        });

        await loading.onDidDismiss();
            this.feedback();

        loading.present();
    }

    async presentLoadingCustomErro() {

        const loading = await this.loadingCtrl.create({
            spinner: null,
            message: `
      <div >
        <img src="assets/imagens/incorreto.png"/>
      </div>`,
            duration: 500
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();
        //("Loading Erro", role)
    }

    async presentLoadingCustomSucesso() {
        let conteudo = '<h2 color="secondary">' + this.escolheMensagemAleatoriamente() + '</h2>';
        const loading = await this.loadingCtrl.create({
            spinner: null,
            message: conteudo,
            duration: 500
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();
        //console.log("ta pegand", role) 
    }

    presentToast(mensagem) {
        let toast: any = this.toastCtrl.create({
            message: mensagem,
            duration: 2000,
            position: 'middle',
            cssClass: 'alertDanger'
        });
        toast.onDidDismiss(() => {
        });
        toast.present();
    }

    escolheMensagemAleatoriamente() {
        let list: string[] = ["Parabéns!!", "Correto!!!", "Muito bem!", "Continue assim!!"];
        return list[Math.floor(Math.random() * list.length)];
    }


    arraysIguais(a, b) {
        a=a.toString();
        b=b.toString();
        //alert(a);
        //alert(b);
        var i = a.length;
        if (i != b.length) return false;
        while (i--) {
            if (a[i] != b[i]) return false;
        }       
        return true;
    };

}