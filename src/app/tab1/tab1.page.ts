import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { NavController, ToastController, AlertController, Platform, LoadingController } from '@ionic/angular';
const nav = document.querySelector('ion-nav'); // possivel solução para o navController
import { ModalController } from '@ionic/angular';

import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { QuestaoParPage } from '../questao-par/questao-par.page';
import { SucessoPage } from '../sucesso/sucesso';
import { FeedbacknewPage } from '../feedbacknew/feedbacknew.page';

import { QuestoesMEG1 } from '../models/questoes-me/QuestoesMEG1';
import { QuestoesMEG2 } from '../models/questoes-me/QuestoesMEG2';
import { QuestoesMEG3 } from '../models/questoes-me/QuestoesMEG3';
import { QuestoesMEG4 } from '../models/questoes-me/QuestoesMEG4';
import { QuestoesMEG5 } from '../models/questoes-me/QuestoesMEG5';
import { QuestoesMEG6 } from '../models/questoes-me/QuestoesMEG6';
import { QuestoesMEG7 } from '../models/questoes-me/QuestoesMEG7';
import { QuestoesMEG8 } from '../models/questoes-me/QuestoesMEG8';
import { QuestoesMEG9 } from '../models/questoes-me/QuestoesMEG9';
import { QuestoesMEG10 } from '../models/questoes-me/QuestoesMEG10';

import { QuestoesTPG1 } from '../models/questoes-tp/QuestoesTPG1';
import { QuestoesTPG2 } from '../models/questoes-tp/QuestoesTPG2';
import { QuestoesTPG3 } from '../models/questoes-tp/QuestoesTPG3';
import { QuestoesTPG4 } from '../models/questoes-tp/QuestoesTPG4';
import { QuestoesTPG5 } from '../models/questoes-tp/QuestoesTPG5';
import { QuestoesTPG6 } from '../models/questoes-tp/QuestoesTPG6';
import { QuestoesTPG7 } from '../models/questoes-tp/QuestoesTPG7';
import { QuestoesTPG8 } from '../models/questoes-tp/QuestoesTPG8';
import { QuestoesTPG9 } from '../models/questoes-tp/QuestoesTPG9';
import { QuestoesTPG10 } from '../models/questoes-tp/QuestoesTPG10';

import {Pontuacao} from '../models/pontuacao';


import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { timeoutWith } from 'rxjs-compat/operator/timeoutWith';
import { timer } from 'rxjs/observable/timer';

export function continuar() {}


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private questoesMultiplaEscolhaG1 = [];
    private questoesMultiplaEscolhaG2 = [];
    private questoesMultiplaEscolhaG3 = [];
    private questoesMultiplaEscolhaG4 = [];
    private questoesMultiplaEscolhaG5 = [];
    private questoesMultiplaEscolhaG6 = [];
    private questoesMultiplaEscolhaG7 = [];
    private questoesMultiplaEscolhaG8 = [];
    private questoesMultiplaEscolhaG9 = [];
    private questoesMultiplaEscolhaG10 = [];

    private questoesToqueParesG1 = [];
    private questoesToqueParesG2 = [];
    private questoesToqueParesG3 = [];
    private questoesToqueParesG4 = [];
    private questoesToqueParesG5 = [];
    private questoesToqueParesG6 = [];
    private questoesToqueParesG7 = [];
    private questoesToqueParesG8 = [];
    private questoesToqueParesG9 = [];
    private questoesToqueParesG10 = [];

    private questoesMultiplaEscolha = [];
    private questoesToquePares = [];

    private questoesSelecionadas = [];
    private questoesSelecionadasNovaImplementacao = [];

    

    private quantidadeQuestaoResolver = 3;
    private quantidadeQuestoesResolvidas = 0;
    private questoesMultiplaGrupoSelecionado = [];
    private questoesParesGrupoSelecionado = [];

    private timeLeft: number = 60;
    public subscribeTimer: any;
    private countDown: any;
    
    public static quantidadePontosDia;
    //public static usuarioLogado={resolvidog1:"", nome:""};
    public quantidadeTotalPontos = 0;
    private pontuacao=Pontuacao.getInstance();

    constructor(
        public loadingCtrl: LoadingController,
        private questoesMEG1: QuestoesMEG1,
        private questoesMEG2: QuestoesMEG2,
        private questoesMEG3: QuestoesMEG3,
        private questoesMEG4: QuestoesMEG4,
        private questoesMEG5: QuestoesMEG5,
        private questoesMEG6: QuestoesMEG6,
        private questoesMEG7: QuestoesMEG7,
        private questoesMEG8: QuestoesMEG8,
        private questoesMEG9: QuestoesMEG9,
        private questoesMEG10: QuestoesMEG10,

        private questoesTPG1: QuestoesTPG1,
        private questoesTPG2: QuestoesTPG2,
        private questoesTPG3: QuestoesTPG3,
        private questoesTPG4: QuestoesTPG4,
        private questoesTPG5: QuestoesTPG5,
        private questoesTPG6: QuestoesTPG6,
        private questoesTPG7: QuestoesTPG7,
        private questoesTPG8: QuestoesTPG8,
        private questoesTPG9: QuestoesTPG9,
        private questoesTPG10: QuestoesTPG10,

        public modalController: ModalController,
        public router: Router,
        private toastCtrl: ToastController,
        private storage: Storage,
        public alertCtrl: AlertController,
        private platform: Platform,
        public navCtrl: NavController) {

        this.questoesMultiplaEscolhaG1 = questoesMEG1.getQuestoes();
        this.questoesMultiplaEscolhaG2 = questoesMEG2.getQuestoes();
        this.questoesMultiplaEscolhaG3 = questoesMEG3.getQuestoes();
        this.questoesMultiplaEscolhaG4 = questoesMEG4.getQuestoes();
        this.questoesMultiplaEscolhaG5 = questoesMEG5.getQuestoes();
        this.questoesMultiplaEscolhaG6 = questoesMEG6.getQuestoes();
        this.questoesMultiplaEscolhaG7 = questoesMEG7.getQuestoes();
        this.questoesMultiplaEscolhaG8 = questoesMEG8.getQuestoes();
        this.questoesMultiplaEscolhaG9 = questoesMEG9.getQuestoes();
        this.questoesMultiplaEscolhaG10 = questoesMEG10.getQuestoes();

        this.questoesToqueParesG1 = questoesTPG1.getQuestoes();
        this.questoesToqueParesG2 = questoesTPG2.getQuestoes();
        this.questoesToqueParesG3 = questoesTPG3.getQuestoes();
        this.questoesToqueParesG4 = questoesTPG4.getQuestoes();
        this.questoesToqueParesG5 = questoesTPG5.getQuestoes();
        this.questoesToqueParesG6 = questoesTPG6.getQuestoes();
        this.questoesToqueParesG7 = questoesTPG7.getQuestoes();
        this.questoesToqueParesG8 = questoesTPG8.getQuestoes();
        this.questoesToqueParesG9 = questoesTPG9.getQuestoes();
        this.questoesToqueParesG10 = questoesTPG10.getQuestoes();

        
      this.storage.get('totalPontos').then((val) => {
        let total=0;
        if(val!=null && val!=undefined){
            total = parseFloat(val);
        }
        this.pontuacao.quantidadeTotalPontos=total;
       
      });

    }

    chamarDigestorio() {
        this.router.navigate(['digestorio']);
    }
    chamarConf() {
        this.router.navigate(['configuracoes'])
    }
    chamarCardiovascular() {
        this.router.navigate(['cardiovascular'])
    }
    chamarRespiratorio() {
        this.router.navigate(['respiratorio'])
    }
    chamarUrinario() {
        this.router.navigate(['urinario'])
    }
    chamarReprodutor() {
        this.router.navigate(['reprodutor'])
    }

    chamarQuestao(tipo) {
        //console.log(tipo);

        switch (tipo) {
            case 'par':
                nav.push('QuestaoParPage');
                break;
            case 'multipla':
                nav.push('QuestaoMultiplaEscolhaPage');
                break;
        }

    }

    armazenarQuestoes(grupo) {
        let questoesG1 = [];
        let questoesG2 = [];
        let questoesG3 = [];
        let questoesG4 = [];
        let questoesG5 = [];
        let questoesG6 = [];
        let questoesG7 = [];
        let questoesG8 = [];
        let questoesG9 = [];
        let questoesG10 = [];

        let questoesArmazenar = [];

            ///////////////////// GRUPO 1
        for (let x = 0; x < this.questoesMultiplaEscolhaG1.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG1[x], "grupo": 1, "aplicacao": 0 };
            questoesG1.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG1.length; x++) {
            let qq = { "questao": this.questoesToqueParesG1[x], "grupo": 1, "aplicacao": 0 };
            questoesG1.push(qq);
        }

        questoesG1 = this.embaralharArray(questoesG1);
        for (let x = 0; x < questoesG1.length; x++) {
            let qq = questoesG1[x];
            if (x < 20) {
                qq.aplicacao = 1;
            } else if (x >= 20 && x < 40) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

            ///////////////////// GRUPO 2
        for (let x = 0; x < this.questoesMultiplaEscolhaG2.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG2[x], "grupo": 2, "aplicacao": 0 };
            questoesG2.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG2.length; x++) {
            let qq = { "questao": this.questoesToqueParesG2[x], "grupo": 2, "aplicacao": 0 };
            questoesG2.push(qq);
        }

        questoesG2 = this.embaralharArray(questoesG2);
        for (let x = 0; x < questoesG2.length; x++) {
            let qq = questoesG2[x];
            if (x < 20) {
                qq.aplicacao = 1;
            } else if (x >= 20 && x < 40) {
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 3
        for (let x = 0; x < this.questoesMultiplaEscolhaG3.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG3[x], "grupo": 3, "aplicacao": 0 };
            questoesG3.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG3.length; x++) {
            let qq = { "questao": this.questoesToqueParesG3[x], "grupo": 3, "aplicacao": 0 };
            questoesG3.push(qq);
        }

        questoesG3 = this.embaralharArray(questoesG3);
        for (let x = 0; x < questoesG3.length; x++) {
            let qq = questoesG3[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 4
        for (let x = 0; x < this.questoesMultiplaEscolhaG4.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG4[x], "grupo": 4, "aplicacao": 0 };
            questoesG4.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG4.length; x++) {
            let qq = { "questao": this.questoesToqueParesG4[x], "grupo": 4, "aplicacao": 0 };
            questoesG4.push(qq);
        }

        questoesG4 = this.embaralharArray(questoesG4);
        for (let x = 0; x < questoesG4.length; x++) {
            let qq = questoesG4[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 5
        for (let x = 0; x < this.questoesMultiplaEscolhaG5.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG5[x], "grupo": 5, "aplicacao": 0 };
            questoesG5.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG5.length; x++) {
            let qq = { "questao": this.questoesToqueParesG5[x], "grupo": 5, "aplicacao": 0 };
            questoesG5.push(qq);
        }

        questoesG5 = this.embaralharArray(questoesG5);
        for (let x = 0; x < questoesG5.length; x++) {
            let qq = questoesG5[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 6
        for (let x = 0; x < this.questoesMultiplaEscolhaG6.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG6[x], "grupo": 6, "aplicacao": 0 };
            questoesG6.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG6.length; x++) {
            let qq = { "questao": this.questoesToqueParesG6[x], "grupo": 6, "aplicacao": 0 };
            questoesG6.push(qq);
        }

        questoesG6 = this.embaralharArray(questoesG6);
        for (let x = 0; x < questoesG6.length; x++) {
            let qq = questoesG6[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 7
        for (let x = 0; x < this.questoesMultiplaEscolhaG7.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG7[x], "grupo": 7, "aplicacao": 0 };
            questoesG7.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG7.length; x++) {
            let qq = { "questao": this.questoesToqueParesG7[x], "grupo": 7, "aplicacao": 0 };
            questoesG7.push(qq);
        }

        questoesG7 = this.embaralharArray(questoesG7);
        for (let x = 0; x < questoesG7.length; x++) {
            let qq = questoesG7[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 8
        for (let x = 0; x < this.questoesMultiplaEscolhaG8.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG8[x], "grupo": 8, "aplicacao": 0 };
            questoesG8.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG8.length; x++) {
            let qq = { "questao": this.questoesToqueParesG8[x], "grupo": 8, "aplicacao": 0 };
            questoesG8.push(qq);
        }

        questoesG8 = this.embaralharArray(questoesG8);
        for (let x = 0; x < questoesG8.length; x++) {
            let qq = questoesG8[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 9
        for (let x = 0; x < this.questoesMultiplaEscolhaG9.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG9[x], "grupo": 9, "aplicacao": 0 };
            questoesG9.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG9.length; x++) {
            let qq = { "questao": this.questoesToqueParesG9[x], "grupo": 9, "aplicacao": 0 };
            questoesG9.push(qq);
        }

        questoesG9 = this.embaralharArray(questoesG9);
        for (let x = 0; x < questoesG9.length; x++) {
            let qq = questoesG9[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        ///////////////////// GRUPO 10
        for (let x = 0; x < this.questoesMultiplaEscolhaG10.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG10[x], "grupo": 10, "aplicacao": 0 };
            questoesG10.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG10.length; x++) {
            let qq = { "questao": this.questoesToqueParesG10[x], "grupo": 10, "aplicacao": 0 };
            questoesG10.push(qq);
        }

        questoesG10 = this.embaralharArray(questoesG10);
        for (let x = 0; x < questoesG10.length; x++) {
            let qq = questoesG10[x];
            if (x < 10) {
                qq.aplicacao = 1;
            } else if (x >= 10 && x < 15) { // ESSE IF ELSE É RESPONSAVEL PELAS QUESTOES SEREM EMBARALHADAS E INFLUENCIA PRA EU CHEGAR NA TELA DE FIM
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }


        this.storage.set('questoesResolver', questoesArmazenar);

        let resolucoes = { "grupo1Aplicacao1": false, "grupo1Aplicacao2": false, "grupo1Aplicacao3": false,
                           "grupo2Aplicacao1": false, "grupo2Aplicacao2": false, "grupo2Aplicacao3": false,
                           "grupo3Aplicacao1": false, "grupo3Aplicacao2": false, "grupo3Aplicacao3": false,
                           "grupo4Aplicacao1": false, "grupo4Aplicacao2": false, "grupo4Aplicacao3": false,
                           "grupo5Aplicacao1": false, "grupo5Aplicacao2": false, "grupo5Aplicacao3": false,
                           "grupo6Aplicacao1": false, "grupo6Aplicacao2": false, "grupo6Aplicacao3": false,
                           "grupo7Aplicacao1": false, "grupo7Aplicacao2": false, "grupo7Aplicacao3": false,
                           "grupo8Aplicacao1": false, "grupo8Aplicacao2": false, "grupo8Aplicacao3": false,
                           "grupo9Aplicacao1": false, "grupo9Aplicacao2": false, "grupo9Aplicacao3": false,
                           "grupo10Aplicacao1": false, "grupo10Aplicacao2": false, "grupo10Aplicacao3": false };

        this.storage.set('resolucoes', resolucoes);

        this.iniciarResolucao(grupo);
    }

    retornaQuestaoAleatoriamenteNovaImplementacao() {
        let questaoRetorno = undefined;
        if (this.quantidadeQuestoesResolvidas < this.questoesSelecionadasNovaImplementacao.length) {
            questaoRetorno = this.questoesSelecionadasNovaImplementacao[this.quantidadeQuestoesResolvidas];
            this.quantidadeQuestoesResolvidas++;
        }
        return questaoRetorno;
    }

    async maisPontos() {

        const loading = await this.loadingCtrl.create({
            spinner: null,
            message: `
      <div >
        <h3>Parabéns, você ganhou mais 10 pontos!!</h3>
      </div>`,
            duration: 1000
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();
        //("Loading Erro", role)
    }


    async continuar() {
        let questaoSelecionada = this.retornaQuestaoAleatoriamenteNovaImplementacao();


        // Finaliza o temporizador
        this.countDown.unsubscribe();

        // Reinicia o temporizador
        this.observableTimer();

        if (this.pontuacao.acerto == 1) {
            this.pontuacao.quantidadePontos += 10;
        }

        if(this.pontuacao.quantidadeQuestoesConsecutivas>4){
            this.maisPontos();
            this.pontuacao.quantiadePontosRecompensaQuestoesConsecutivas = this.pontuacao.quantiadePontosRecompensaQuestoesConsecutivas+10;
            this.pontuacao.quantidadePontos += 10;
            this.pontuacao.quantidadeQuestoesConsecutivas=0;
        }
        this.pontuacao.acerto = 0;

        if (questaoSelecionada != undefined) {
            //verificar
        

            if (questaoSelecionada.modelo == 1 || questaoSelecionada.modelo == 3) {

                const modal = await this.modalController.create({
                    component: QuestaoParPage,
                    cssClass: 'my-custom-class',
                    componentProps: { 'home': this, 'questao': questaoSelecionada }
                });
                return await modal.present();


                
            } else if (questaoSelecionada.modelo == 2 || questaoSelecionada.modelo == 4 || questaoSelecionada.modelo == 5 || questaoSelecionada.modelo == 6) {

                //nav.push('QuestaoMultiplaEscolhaPage', { 'home': this, 'questao': questaoSelecionada });

                const modal = await this.modalController.create({
                    component: QuestaoMultiplaEscolhaPage,
                    cssClass: 'my-custom-class',
                    componentProps: { 'home': this, 'questao': questaoSelecionada }
                });
                return await modal.present();

            }

            this.quantidadeTotalPontos += this.pontuacao.quantidadePontos + this.pontuacao.quantiadePontosRecompensaQuestoesConsecutivas;

            //console.log("Fim!, foram acumulados " + Tab1Page.quantidadePontos + " pontos");



        } else {
            //console.log("terminou as questões, finalizar");
            //this.navCtrl.push(SucessoPage);
            const modal = await this.modalController.create({
                component: SucessoPage,
                cssClass: 'my-custom-class'
            });
            return await modal.present();
            //nav.push(SucessoPage);
        }
    }

    retornaQuestaoAleatoriamente() {
        let questaoRetorno = undefined;

        if (this.quantidadeQuestoesResolvidas < this.questoesSelecionadas.length) {
            questaoRetorno = this.questoesSelecionadas[this.quantidadeQuestoesResolvidas].questao;
            this.quantidadeQuestoesResolvidas++;
        }

        return questaoRetorno;
    }

    static escolheMensagemAleatoriamente() {

        let list: string[] = ["Parabéns!!", "Correto!!!", "Muito bem!", "Continue assim!!"];
        return list[Math.floor(Math.random() * list.length)];
    }

    escolheModeloAleatoriamente() {
        //let list: number[] = [1, 2, 3, 4, 5, 6];
        //MUDEI PARA RETORNAR SOMENTE MULTIPLA ESCOLHA
        let list: number[] = [1, 2, 3, 4, 5, 6];
        return list[Math.floor(Math.random() * list.length)];
    }

    embaralharArray(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    /**O tipo indica se é multipla ou pares e o grupo é 1 ou 2 ou 3 ...**/
    retornaQuestoesGrupoSelecionado(grupo, tipo) {
        //let qqq=this.questoesMultiplaEscolha[1];
        //console.log("Enunciado do Primeiro: "+ qqq.enunciado);
        let listaRetorno = [];
        if (tipo == 'multipla') {
            for (let x = 0; x < this.questoesMultiplaEscolha.length; x++) {
                let questao = this.questoesMultiplaEscolha[x];
                if (questao.grupo = grupo) {
                    listaRetorno.push(questao);
                }
            }
        } else if (tipo == 'pares') {
            for (let x = 0; x < this.questoesToquePares.length; x++) {
                let questao = this.questoesToquePares[x];
                if (questao.grupo = grupo) {
                    listaRetorno.push(questao);
                }
            }
        }
        return listaRetorno;
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    observableTimer(){
        const source = timer(0, 1000);
        this.countDown = source.subscribe(val => {
            this.subscribeTimer = this.timeLeft - val;
            console.log(this.subscribeTimer);
            if(this.subscribeTimer == 55){
                this.outOfTime();
            }
        });
    }
    

    outOfTime(){
        this.countDown.unsubscribe();
        console.log("Acabou o tempo");
    }

    iniciarResolucao(grupo) {
        this.questoesSelecionadasNovaImplementacao = [];
        this.quantidadeQuestoesResolvidas=0;
        this.pontuacao.acerto=0;
        this.pontuacao.quantidadePontos=0;
        this.pontuacao.quantidadeQuestoesConsecutivas=0;

        this.observableTimer();
        
        if(grupo == 1){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG1,this.questoesToqueParesG1));
            questoesNovas = this.shuffle(questoesNovas);
            //questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
           /// console.log("AAAAAAAAAAAAAAAAA TO VIVO");
            this.continuar();
        }
        else if(grupo == 2){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG2,this.questoesToqueParesG2));
            questoesNovas = this.shuffle(questoesNovas);
            //questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 3){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG3,this.questoesToqueParesG3));
            questoesNovas = this.shuffle(questoesNovas);
            //questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 4){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG4,this.questoesToqueParesG4));
            questoesNovas = this.shuffle(questoesNovas);
           // questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 5){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG5,this.questoesToqueParesG5));
            questoesNovas = this.shuffle(questoesNovas);
            //questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 6){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG6,this.questoesToqueParesG6));
            questoesNovas = this.shuffle(questoesNovas);
            //questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 7){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG7,this.questoesToqueParesG7));
            questoesNovas = this.shuffle(questoesNovas);
           // questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 8){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG8,this.questoesToqueParesG8));
            questoesNovas = this.shuffle(questoesNovas);
           // questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 9){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG9,this.questoesToqueParesG9));
            questoesNovas = this.shuffle(questoesNovas);
           // questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 10){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG10,this.questoesToqueParesG10));
            questoesNovas = this.shuffle(questoesNovas);
           // questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        //console.log("grupo "+ grupo + "selecionado");
    }

    buscaQuestoes(aplicacao, grupo) {

        this.storage.get('questoesResolver').then((val) => {

            for (let x = 0; x < val.length; x++) {
                let qq = val[x];
                if (qq.grupo == grupo && qq.aplicacao == aplicacao) {
                    //alert(qq)
                    this.questoesSelecionadas.push(qq);
                }
            }

            this.questoesSelecionadas = this.embaralharArray(this.questoesSelecionadas);

           // console.log("Foram embaralhadas " + this.questoesSelecionadas.length + " questões");
    
    
           this.pontuacao.quantidadeQuestoesConsecutivas = 0;
           this.pontuacao.quantidadePontos = 0;
           this.pontuacao.quantiadePontosRecompensaQuestoesConsecutivas = 0;
            this.quantidadeQuestoesResolvidas = 0;
    
            this.pontuacao.acerto = 0;
           // console.log("Dentro do grupo " + grupo);
    
            this.continuar();

        });

    }

}