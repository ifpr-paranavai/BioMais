import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG2 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 119,
        escolhida: "não",
        grupo: "3",
        modelo: "1",
        enunciado: "",
        imagem: "img1m1res",
        legendaImagem:
          "Imagem: Adaptada de LadyoHats, Domínio Público, via Wikimedia Commons. Disponível aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "I",
            imagem: "",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Brônquios",
            imagem: "",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "II",
            imagem: "",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Alvéolos",
            imagem: "",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "III",
            imagem: "",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Bronquíolos",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de LadyoHats, Domínio Público, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A estrutura representada por I consiste nos brônquios, isto é, dois tubos de maior calibre respiratório que partem da traqueia, reforçados por cartilagem e que conduzem ar aos dois pulmões. A estrutura representada em II consiste nos alvéolos pulmonares, que são pequenos sacos de paredes finas, recobertos por capilares sanguíneos, onde ocorre a troca de gases entre o ar dos pulmões e o sangue. A estrutura III consiste nos bronquíolos, que consistem em ramificações dos brônquios (estrutura I), constituindo tubos mais finos, que, juntos, formam um conjunto chamado de árvore respiratória. É nas extremidades da árvore respiratória que se localizam os alvéolos (estrutura II).",
      },
      {
        id: 120,
        escolhida: "não",
        grupo: "3",
        modelo: "1",
        enunciado:
          "Durante a respiração, o ar entra pelas narinas, passa pelas cavidades nasais e faringe, seguindo seu trajeto e perpassando pela estrutura representada por I, II e III representadas na figura abaixo. Adiante, o ar segue por ramificações mais finas, até chegarem aos alvéolos pulmonares, onde ocorre a hematose. Com base nas informações e na figura abaixo, determine as estruturas anatômicas indicadas, formando pares com as alternativas propostas.",
        imagem: "img2m1res",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "I",
            imagem: "",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Laringe",
            imagem: "",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "II",
            imagem: "",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Traqueia",
            imagem: "",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "III",
            imagem: "",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Brônquios",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Durante a respiração, o ar entra pelas narinas, passa pelas cavidades nasais e faringe, seguindo seu trajeto e perpassando pela laringe (representada por I), traqueia (representada por II) e brônquios (representados por III). Adiante, o ar segue por ramificações mais finas, até chegarem aos alvéolos pulmonares, onde ocorre a hematose.",
      },
      {
        id: 121,
        escolhida: "não",
        grupo: "3",
        modelo: "1",
        enunciado:
          "O sistema respiratório pode ser estruturado em vias respiratórias superiores e inferiores. A figura abaixo demonstra parte das estruturas do trato respiratório superior, de modo que I consiste em um orifício por onde o ar é inalado, II em uma estrutura intracraniana por onde o ar passa, sendo filtrado, umedecido e aquecido, enquanto as estruturas III são orifícios nos ossos faciais reduzindo o peso, oferecendo proteção térmica e mecânica e servindo como câmaras de ressonância para o som da fala. Com base nas informações e na figura abaixo, determine as estruturas anatômicas representadas em I, II e III, formando pares com as alternativas propostas.",
        imagem: "img3m1res",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "I",
            imagem: "",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Narina",
            imagem: "",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "II",
            imagem: "",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Cavidade nasal",
            imagem: "",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "III",
            imagem: "",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Seios paranasais",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O trato respiratório superior é formado pelo nariz e cavidades nasais (incluindo os seios paranasais), faringe e laringe. A figura demonstra três dessas estruturas: as narinas, que consistem no orifício nasal para a inalação do ar atmosférico (representado por I), a cavidade nasal (representada por II), constituída por uma grande cavidade com projeções e canais para a passagem do ar, onde o ar é aquecido filtrado, umedecido, e duas estruturas que representam alguns dos seios paranasais (representados por III) que são orifícios nos ossos faciais que reduzem o peso craniano, oferecem proteção térmica e mecânica e atuam como câmaras de ressonância para o som da fala.",
      },
      {
        id: 125,
        escolhida: "não",
        grupo: "3",
        modelo: "3",
        enunciado:
          "Assim como todos os outros sistemas do corpo humano, o sistema respiratório, em condições anormais, pode ser acometido por algumas doenças. As figuras nas alternativas abaixo demonstram os principais sintomas de três doenças distintas do trato respiratório humano. Sob esse aspecto, a partir de seus conhecimentos sobre o assunto, relacione as figuras com as informações mais adequadas, por meio de toque nos pares.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3ares",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Enfisema: destruição dos alvéolos, decorrente do hábito de fumar.",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3bres",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Edema pulmonar: acúmulo de líquido no interior dos pulmões, geralmente associado à doença cardíaca.",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3cres",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Bronquite: inflamação da mucosa dos brônquios e bronquíolos, geralmente causada por infecção viral.",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback7m3res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A enfisema pulmonar é uma doença degenerativa, onde ocorre a destruição dos alvéolos em decorrência de muito tempo de agressão ao pulmão, sendo o cigarro sua causa principal. O edema pulmonar consiste em um acúmulo de líquido no interior dos pulmões, geralmente causado por uma doença cardíaca, quando o coração se encontra com dificuldade de bombear o sangue, aumentando a pressão no interior dos pequenos vasos sanguíneos dos pulmões. A bronquite consiste em uma inflamação da mucosa dos brônquios e bronquíolos, geralmente causada por uma infecção viral, na qual os bronquíolos secretam uma quantidade excessiva de muco, tornando-se comprimidos e inflamados.",
      },
      {
        id: 126,
        escolhida: "não",
        grupo: "3",
        modelo: "3",
        enunciado:
          "O sistema respiratório pode ser estruturado em vias respiratórias superiores e inferiores. As figuras nas alternativas abaixo demonstram algumas das estruturas do trato respiratório superior e suas designações. Com base nas alternativas e em seus conhecimentos, associe as correspondências por meio de toques nos pares.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img8m3ares",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Laringe: região dilatada de comunicação entre hipofaringe e traqueia",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img8m3bres",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Pregas vocais: estruturas envolvidas na produção de voz",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img8m3cres",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Epiglote: estrutura que regula a abertura e fechamento da laringe",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback8m3res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A laringe é uma região dilatada de conexão entre a hipofaringe e a traqueia. É constituída por peças cartilaginosas que se movem por ação dos músculos e fecham a passagem de ar.<br/>Na entrada da laringe, há uma estrutura de cartilagem denominada epiglote, que consiste em que se mantem aberta durante a passagem de ar, que vem da faringe, passa pela laringe e é direcionado à traqueia. Quando engolimos, essa estrutura fecha a entrada da laringe, o que impede o alimento ou líquido ingerido de entrar nas vias respiratórias e causar engasgamento.<br/>Internamente à laringe, encontram-se as principais estruturas envolvidas na produção de voz: as pregas vocais. O ar que passa pela laringe vibra as pregas e produz som (fonação), de modo que a variação do som está relacionada com a tensão nas pregas vocais (quanto maior a tensão, mais alto o som).",
      },
      {
        id: 127,
        escolhida: "não",
        grupo: "3",
        modelo: "3",
        enunciado:
          "No processo de respiração, destacam-se três momentos básicos: a ventilação pulmonar, a respiração interna (tecidual) e a respiração externa (pulmonar). As alternativas abaixo ilustram esses três momentos e suas designações. Com base em seus conhecimentos e nas alternativas em imagem e texto, associe as correspondências por meio de toques nos pares.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img9m3ares",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Ventilação pulmonar: entrada e saída de ar dos pulmões por meio da inspiração e expiração",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img9m3bres",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Respiração interna: troca de gases entre o sangue nos capilares sistêmicos com as células teciduais",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img9m3cres",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Respiração externa: troca de gases entre os alvéolos pulmonares e o sangue nos capilares pulmonares",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback9m3res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A ventilação pulmonar consiste na inspiração (inalação do ar) e expiração (exalação do ar) e envolve a troca de ar entre a atmosfera e os alvéolos pulmonares. A respiração externa consiste na troca de gases entre os alvéolos pulmonares e o sangue nos capilares pulmonares através da membrana respiratória. O sangue dos capilares ganha oxigênio (O2) e perde gás carbônico (CO2). A respiração interna consiste na troca de gases entre o sangue nos capilares sistêmicos com as células teciduais. O sangue dos capilares perde oxigênio (O2) e ganha gás carbônico (CO2).",
      },
    ];
  }
}
