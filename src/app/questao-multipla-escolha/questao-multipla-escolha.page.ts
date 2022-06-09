import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Platform } from '@ionic/angular';
const nav = document.querySelector('ion-nav'); // possivel solução para o navController
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Pontuacao } from '../models/pontuacao';
import { FeedbacknewPage } from '../feedbacknew/feedbacknew.page';
import { Tab1Page } from '../tab1/tab1.page';
import { timer } from 'rxjs/observable/timer';
/* import { NativeAudio } from '@ionic-native/native-audio/ngx'; */


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
    private pontuacao = Pontuacao.getInstance();
    private alternativaSelecionada;
    private tentativas = 0;
    private totalPontos;
    private verifyTime;
    private time;
    private corAlternativa1 = "#F0E68C";
    private corAlternativa2 = "#F0E68C";
    private corAlternativa3 = "#F0E68C";
    private corAlternativa4 = "#F0E68C";
    private corAlternativa5 = "#F0E68C";
    private corAlternativa6 = "#F0E68C";
    private alternativas;
    private home;
    @Input() questao: { legendaImagem: "", feedBackTexto: "", feedBackImagem: "", alternativaCorreta: "", alternativa1: "", alternativa2: "", alternativa3: "", alternativa4: "", alternativa5: "", alternativa6: "" }


    constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, public loadingCtrl: LoadingController, public modalController: ModalController) {
        this.home = navParams.get("home");
        this.questao = navParams.get("questao");
        this.tentativas = 0;    
        this.totalPontos = this.pontuacao.quantidadePontos;
        this.startTimer();

       // console.log(this.questao.alternativaCorreta)

        this.alternativas = [];

        if (this.questao.alternativa1 != undefined) {
            this.alternativas.push({ "alernativa": 1, "corBorda": "#F0E68C", "texto": this.questao.alternativa1 });
        }

        if (this.questao.alternativa2 != undefined) {
            this.alternativas.push({ "alernativa": 2, "corBorda": "#F0E68C", "texto": this.questao.alternativa2 });
        }

        if (this.questao.alternativa3 != undefined) {
            this.alternativas.push({ "alernativa": 3, "corBorda": "#F0E68C", "texto": this.questao.alternativa3 });
        }

        if (this.questao.alternativa4 != undefined) {
            this.alternativas.push({ "alernativa": 4, "corBorda": "#F0E68C", "texto": this.questao.alternativa4 });
        }

        if (this.questao.alternativa5 != undefined) {
            this.alternativas.push({ "alernativa": 5, "corBorda": "#F0E68C", "texto": this.questao.alternativa5 });
        }

        if (this.questao.alternativa6 != undefined) {
            this.alternativas.push({ "alernativa": 6, "corBorda": "#F0E68C", "texto": this.questao.alternativa6 });
        }

        this.alternativas = this.embaralharArray(this.alternativas);
        //console.log(this.alternativas);
        //console.log("alternativa 6: " + this.questao.alternativa6);

    }

    startTimer(){
        const source = timer(0, 1000);
        this.verifyTime = source.subscribe(val =>{
            this.time = Tab1Page.subscribeTimer;
            if(this.time == 0){
                Tab1Page.outOfTime();
                this.feedback(false);
                this.verifyTime.unsubscribe()
            }
        })
    }

    formatTimeLeft(time) {
        const minutes = Math.floor(time / 60);
        let seconds: number =  time % 60;
        let secondsConverted: string = (time % 60).toString();
        if(seconds < 10){
            secondsConverted = `0${seconds}`;
        }
        return `${minutes}:${secondsConverted}`;
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
            this.feedback(true);
            //this.home.continuar();
        } else {
            //   console.log("Você errou :(");
            if (this.tentativas == 0) {
                //  console.log("Você tem " + this.tentativas + " tentativas");
                this.pontuacao.quantidadeQuestoesConsecutivas = 0;
                this.presentLoadingCustomErro();
                this.feedback(false);

            } else if (this.tentativas == 1) {
                //HomePage.quantidadeQuestoesConsecutivas = -1;
                //this.mostraErroSegundaTentativa();
            }
        }
    }

    verificarMarcadas() {
        let marcadas = [];
        if (this.questao.alternativa1 != undefined && this.alternativas[0].corBorda == "#5cb85c") {
            marcadas.push(this.alternativas[0].alernativa);
        }
        if (this.questao.alternativa2 != undefined && this.alternativas[1].corBorda == "#5cb85c") {
            marcadas.push(this.alternativas[1].alernativa);
        }
        if (this.questao.alternativa3 != undefined && this.alternativas[2].corBorda == "#5cb85c") {
            marcadas.push(this.alternativas[2].alernativa);
        }
        if (this.questao.alternativa4 != undefined && this.alternativas[3].corBorda == "#5cb85c") {
            marcadas.push(this.alternativas[3].alernativa);
        }
        if (this.questao.alternativa5 != undefined && this.alternativas[4].corBorda == "#5cb85c") {
            marcadas.push(this.alternativas[4].alernativa);
        }
        if (this.questao.alternativa6 != undefined && this.alternativas[5].corBorda == "#5cb85c") {
            marcadas.push(this.alternativas[5].alernativa);
        }

        return marcadas;
    }


    async feedback(acertou) { // TEM Q ARRUMAR ISSO
        this.modalController.dismiss();
        let feedBackImagem = this.questao.feedBackImagem;
        let feedBackTexto = this.questao.feedBackTexto;
        //alert(acertou);
        const modal = await this.modalController.create({
            component: FeedbacknewPage,
            cssClass: 'my-custom-class',
            componentProps: { "acertou": acertou, "legenda": this.questao.legendaImagem, "home": this.home, "imagem": feedBackImagem, "texto": feedBackTexto }

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
        this.feedback(false);

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

        const { role, data } = await loading.onDidDismiss();
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

        const { role, data } = await loading.onDidDismiss();
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
        a = a.toString();
        b = b.toString();
        //alert(a);
        //alert(b);
        var i = a.length;
        if (i != b.length) return false;
        while (i--) {
            if (a[i] != b[i]) return false;
        }
        return true;
    };

    embaralharArray(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

}