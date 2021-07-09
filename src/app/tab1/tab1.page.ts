/*

Atuais problemas

1 - não é possivel selecionar mais de uma alternativa em questões de multipla escolha - MUDEI PARA BACKGROUND COLOR PARA FICAR MAIS VISÍVEL, ESTÁ DANDO AGORA.
2 - as vezes ao clickar no botão as questões são embaralhadas mas não leva para a pagina de questões e no console indica que acabaram as questões - NÃO ACONTECEU NENHUMA VEZ. PODE SER POR ALGUM ERRO EM UMA DAS PÁGINAS DE QUESTÕES
3 - ao alterar o css da página questao-multipla-escolha a maioria das funcionalidades não funcionam - TERÍAMOS QUE VER JUNTOS, NÃO CONSEGUI ENTENDER
4 - a pagina de feedback não puxa as imagens e nem os textos de feedback - AGORA ESTÁ PASSANDO OS TEXTOS E IMAGENS, NÃO ESTÁ APARECENDO POIS NA PASTA NÃO TEM AS IMAGENS NECESSÁRIAS. COLOQUEI UM CONSOLE.LOG MOSTRANDO AS IMAGENS ASSOCIADAS AS QUESTÕES
5 - a função continuar da pagina feedback não funciona - RESOLVIDO, ESTAVA FALTANDO PASSAR O THIS.HOME, ESTAVA SÓ THIS

*/

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { NavController, ToastController, AlertController, Platform } from '@ionic/angular';
const nav = document.querySelector('ion-nav'); // possivel solução para o navController
import { ModalController } from '@ionic/angular';

import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { QuestaoParPage } from '../questao-par/questao-par.page';
import { SucessoPage } from '../sucesso/sucesso';
import { FeedbackPage } from '../feedback/feedback';

import { QuestoesMEG1 } from '../models/QuestoesMEG1';
import { QuestoesMEG2 } from '../models/QuestoesMEG2';
import { QuestoesTPG1 } from '../models/QuestoesTPG1';
import { QuestoesTPG2 } from '../models/QuestoesTPG2';

import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { timeoutWith } from 'rxjs-compat/operator/timeoutWith';

export function continuar() {}


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private questoesMultiplaEscolhaG1 = [];
    private questoesToqueParesG1 = [];
    private questoesMultiplaEscolhaG2 = [];
    private questoesToqueParesG2 = [];
    private questoesMultiplaEscolha = [];
    private questoesToquePares = [];

    private questoesSelecionadas = [];
    private questoesSelecionadasNovaImplementacao = [];

    public static acerto = 0;

    private quantidadeQuestaoResolver = 3;
    private quantidadeQuestoesResolvidas = 0;
    private questoesMultiplaGrupoSelecionado = [];
    private questoesParesGrupoSelecionado = [];

    public static quantidadeQuestoesConsecutivas = 0;
    public static quantiadePontosRecompensaQuestoesConsecutivas = 0;
    public static quantidadePontos = 0;
    public static quantidadePontosDia;
    //public static usuarioLogado={resolvidog1:"", nome:""};
    public quantidadeTotalPontos = 0;


    constructor(
        private questoesMEG1: QuestoesMEG1,
        private questoesMEG2: QuestoesMEG2,
        private questoesTPG1: QuestoesTPG1,
        private questoesTPG2: QuestoesTPG2,
        public modalController: ModalController,
        public router: Router,
        private toastCtrl: ToastController,
        private storage: Storage,
        public alertCtrl: AlertController,
        private platform: Platform,
        public navCtrl: NavController) {

        this.questoesMultiplaEscolhaG1 = questoesMEG1.getQuestoes();
        this.questoesMultiplaEscolhaG2 = questoesMEG2.getQuestoes();
        this.questoesToqueParesG1 = questoesTPG1.getQuestoes();
        this.questoesToqueParesG2 = questoesTPG2.getQuestoes();

        // alert(this.questoesMultiplaEscolhaG1.length);


    }

    chamardiGestorio() {
        this.router.navigate(['digestorio']);
    }
    chamarConf() {
        this.router.navigate(['configuracoes'])
    }
    chamarcarDiovascular() {
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


    //--------------------------------------------------------------------------------------------------------


    chamarQuestao(tipo) {
        console.log(tipo);

        switch (tipo) {
            case 'par':
                nav.push('QuestaoParPage');
                break;
            case 'multipla':
                nav.push('QuestaoMultiplaEscolhaPage');
                break;
        }

    }

    //--------------------------------------------------------------------------------------------------------


    armazenarQuestoes(grupo) {
        let questoesG1 = [];
        let questoesG2 = [];
        let questoesArmazenar = [];
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

        this.storage.set('questoesResolver', questoesArmazenar);

        let resolucoes = { "grupo1Aplicacao1": false, "grupo1Aplicacao2": false, "grupo1Aplicacao3": false, "grupo2Aplicacao1": false, "grupo2Aplicacao2": false, "grupo2Aplicacao3": false };

        this.storage.set('resolucoes', resolucoes);

        this.iniciarResolucao(grupo);
    }

    //--------------------------------------------------------------------------------------------------------

    retornaQuestaoAleatoriamenteNovaImplementacao() {
        let questaoRetorno = undefined;
        if (this.quantidadeQuestoesResolvidas < this.questoesSelecionadasNovaImplementacao.length) {
            questaoRetorno = this.questoesSelecionadasNovaImplementacao[this.quantidadeQuestoesResolvidas];
            this.quantidadeQuestoesResolvidas++;
        }
        return questaoRetorno;
    }

    //--------------------------------------------------------------------------------------------------------


    async continuar() {
        let questaoSelecionada = this.retornaQuestaoAleatoriamenteNovaImplementacao();

        if (questaoSelecionada != undefined) {
            //verificar
            if (Tab1Page.acerto == 1) {
                Tab1Page.quantidadePontos += 10;
            }
            Tab1Page.acerto = 0;

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

            this.quantidadeTotalPontos += Tab1Page.quantidadePontos + Tab1Page.quantiadePontosRecompensaQuestoesConsecutivas;

            console.log("Fim!, foram acumulados " + Tab1Page.quantidadePontos + " pontos");



        } else {
            console.log("terminou as questões, finalizar");
            //this.navCtrl.push(SucessoPage);
            const modal = await this.modalController.create({
                component: SucessoPage,
                cssClass: 'my-custom-class'
            });
            return await modal.present();
            //nav.push(SucessoPage);
        }
    }

    //--------------------------------------------------------------------------------------------------------


    retornaQuestaoAleatoriamente() {
        let questaoRetorno = undefined;

        if (this.quantidadeQuestoesResolvidas < this.questoesSelecionadas.length) {
            questaoRetorno = this.questoesSelecionadas[this.quantidadeQuestoesResolvidas].questao;
            this.quantidadeQuestoesResolvidas++;
        }

        return questaoRetorno;
    }

    //--------------------------------------------------------------------------------------------------------

    static escolheMensagemAleatoriamente() {

        let list: string[] = ["Parabéns!!", "Correto!!!", "Muito bem!", "Continue assim!!"];
        return list[Math.floor(Math.random() * list.length)];
    }

    //--------------------------------------------------------------------------------------------------------

    escolheModeloAleatoriamente() {
        //let list: number[] = [1, 2, 3, 4, 5, 6];
        //MUDEI PARA RETORNAR SOMENTE MULTIPLA ESCOLHA
        let list: number[] = [1, 2, 3, 4, 5, 6];
        return list[Math.floor(Math.random() * list.length)];
    }

    //--------------------------------------------------------------------------------------------------------

    embaralharArray(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    //--------------------------------------------------------------------------------------------------------


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

    //--------------------------------------------------------------------------------------------------------

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

    //--------------------------------------------------------------------------------------------------------


    iniciarResolucao(grupo) {
        this.questoesSelecionadasNovaImplementacao = [];
        if(grupo == 1){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG1,this.questoesToqueParesG1));
            questoesNovas = this.shuffle(questoesNovas);
            questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
        else if(grupo == 2){
            let questoesNovas = this.shuffle([].concat(this.questoesMultiplaEscolhaG2,this.questoesToqueParesG2));
            questoesNovas = this.shuffle(questoesNovas);
            questoesNovas = this.shuffle(questoesNovas);

            for(let x=0; x<20; x++){
                this.questoesSelecionadasNovaImplementacao.push(questoesNovas[x]);
            }
            this.continuar();
        }
    }

    //--------------------------------------------------------------------------------------------------------

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

            console.log("Foram embaralhadas " + this.questoesSelecionadas.length + " questões");
    
    
            Tab1Page.quantidadeQuestoesConsecutivas = 0;
            Tab1Page.quantidadePontos = 0;
            Tab1Page.quantiadePontosRecompensaQuestoesConsecutivas = 0;
            this.quantidadeQuestoesResolvidas = 0;
    
            Tab1Page.acerto = 0;
            console.log("Dentro do grupo " + grupo);
    
            this.continuar();

        });

    }




    //---------------------------------------------------------------------------------------------------------


}