import { Component, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { QuestaoParPage } from '../questao-par/questao-par.page';
import { IonicModule } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
  })


export class QuestoesTPG2 {
    public questoesToquePares;

    getQuestoes(){
        return this.questoesToquePares;
    }
    
    constructor() {
        this.questoesToquePares = [{
            escolhida: "não",
            id: 26,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img26m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback26.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Hemácia',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glóbulo Branco',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Plaqueta',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 27,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img27m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback27.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Plasma Sanguíneo',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Capilar Sanguíneo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Célula Endotelial',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 28,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img28m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback28.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Artéria',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Veia',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Capilar',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 29,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img29m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback29.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Túnica Adventícia',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Túnica Média',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Túnica Íntima',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 30,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img30m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback30.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Aorta',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Veia Cava Superior',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Artéria Pulmonar',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 31
            ,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img31m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback31.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Valvas Semilunares',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Valva Bicúspide',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Valva Tricúspide',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 32,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img32m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback32.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ventrículo Direito',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ventrículo Esquerdo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Miocárdio',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 33,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img33m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback33.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Veias Pulmonares',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Átrio Esquerdo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Átrio Direito',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 34,
            enunciado: "Associe as fases do ciclo cardíaco de acordo com a imagem:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img34m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback34.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Diástole Geral',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Sístole Auricular',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Sístole Ventricular',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 35,
            enunciado: "Associe os órgãos linfóides com seus respectivos nomes:",
            grupo: 2,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img35m1sc.png',
            feedBackImagem: "assets/imagens/feedback/feedback35.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Tonsilas Palatinas',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Timo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Baço',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 36,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 2,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback36.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img36am3sc.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img36bm3sc.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img36cm3sc.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Órgão linfóide primário e local de formação e maturação dos linfócitos T',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Órgão linfóide primário, origina os linfócitos B e T e é o local de maturação dos linfócitos B',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Órgão linfóide secundário com agrupamento de linfócitos que realiza a filtragem da linfa',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 37,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 2,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback37.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img37am3sc.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img37bm3sc.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img37cm3sc.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Órgão linfoide secundário chamado baço, com função imunológica e hematopoiética',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Órgão linfóide secundário que limita a entrada de micro-organismos invasores pela cavidade oral',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Rede de vasos linfáticos responsáveis pelo transporte de linfa dos tecidos à corrente sanguínea',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 38,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 2,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback38.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img38am3sc.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img38bm3sc.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img38cm3sc.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Célula bicôncava, anucleada, contendo hemoglobina com ferro permitindo o transporte de oxigênio',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Célula esférica e incolor, podendo ser granulócita ou agranulócita, cuja função é a defesa do organismo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fragmentos anucleados de células que participam do processo de coagulação sanguínea',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 39,
            enunciado: "Relacione a estrutura em destaque com a informação mais adequada:",
            grupo: 2,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback39.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img39am3sc.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img39bm3sc.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img39cm3sc.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Principal artéria da grande circulação, leva sangue oxigenado a todo o corpo',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Artéria de pequena circulação, leva sangue pobre em oxigênio aos pulmões',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Veias de grande calibre que retornam sangue pobre em oxigênio do corpo ao coração',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 40,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 2,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback40.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img40am3sc.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img40bm3sc.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img40cm3sc.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Túnica constituída por tecido conjuntivo',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Túnica constituída por tecido muscular liso',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Túnica constituída por tecido endotelial',
                    imagem: '',
                    idPar: 3
                }
            ]
        }];

    }

}