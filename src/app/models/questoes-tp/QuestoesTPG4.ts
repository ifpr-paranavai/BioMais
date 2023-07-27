import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG4 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 139,
        escolhida: "não",
        grupo: "4",
        modelo: "1",
        enunciado:
          "Os rins são órgãos responsáveis pela filtração do sangue e da formação de urina. Internamente, sua anatomia é composta por uma camada fibrosa de textura fina, uma camada formada por estruturas triangulares que coletam a urina formada nos néfrons e, por estruturas que recebem os ductos e convergem entre si, direcionando a urina para os ureteres. Com base nas informações e em seus conhecimentos, analise a imagem abaixo e relacione as alternativas correspondentes por meio de toques nos pares.",
        imagem: "img1m1uri",
        legendaImagem:
          "Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
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
            descricao: "Córtex: onde se localizam os néfrons",
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
            descricao: "Medula: agrupamento de pirâmides (ductos)",
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
            descricao: "Pelve: ponto de convergência dos cálices",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1uri",
        feedBackLegendaImagem:
          "Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os rins são órgãos responsáveis pela filtração do sangue e da formação de urina. Internamente, sua anatomia é composta por uma camada fibrosa de textura fina, onde se localizam os néfrons, denominada córtex renal (representado em I).<br/>Abaixo do córtex, há uma camada formada por estruturas triangulares (pirâmides renais), que consistem em agrupamentos de ductos, os quais coletam a urina formada nos néfrons, constituindo a medula renal (representado em II).<br/>Na parte final das pirâmides renais, a urina sai da medula renal para estruturas denominadas cálices renais, que se reúnem em forma de funil formando a pelve renal (representada por III), que direciona a urina aos ureteres.",
      },
      {
        id: 140,
        escolhida: "não",
        grupo: "4",
        modelo: "1",
        enunciado:
          "Os néfrons são unidades funcionais dos rins, que consistem em estruturas tubulares compostas pelas estruturas I e II na figura abaixo, cujo líquido (filtrado) produzido desemboca na estrutura III. Analise a figura e relacione as alternativas correspondentes por meio de toques nos pares.",
        imagem: "img2m1uri",
        legendaImagem:
          "Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
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
            descricao: "Corpúsculo renal: filtragem do sangue",
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
            descricao: "Túbulo néfrico: reabsorção e secreção de substâncias",
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
            descricao: "Ducto coletor: condução da urina",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1uri",
        feedBackLegendaImagem:
          "Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os néfrons são unidades funcionais dos rins, que consistem em estruturas tubulares compostas por duas partes: o corpúsculo renal (representado em I), formado pela cápsula renal (uma expansão em forma de taça) e, interiormente, pelo glomérulo renal onde o sangue é filtrado; e outra parte que consiste no túbulo renal ou néfrico (representado em II), pelo qual passa o filtrado, desembocando no ducto coletor (representado por III).",
      },
      {
        id: 141,
        escolhida: "não",
        grupo: "4",
        modelo: "1",
        enunciado:
          "O corpúsculo renal é a primeira porção do néfron, sendo responsável pela filtragem do sangue para posterior produção da urina. A figura abaixo representa um corpúsculo renal com identificação de algumas de suas estruturas. Com base em seus conhecimentos sobre a anatomia dos néfrons, analise a figura e relacione as alternativas correspondentes por meio de toques nos pares.",
        imagem: "img3m1uri",
        legendaImagem:
          "Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
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
            descricao:
              "Arteríola: vasos sanguíneos que se comunicam com o néfron",
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
            descricao: "Glomérulo: novelo de capilares sanguíneos",
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
            descricao: "Cápsula renal: expansão externa do corpúsculo",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1uri",
        feedBackLegendaImagem:
          "Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O sangue entre e sai dos néfrons por meio de arteríolas (representadas por I). As arteríolas que entram no néfron, levando o sangue a ser filtrado, são chamadas de arteríolas aferentes, enquanto as que saem, confluindo para vasos de maior calibre, são chamadas de arteríolas eferentes.<br/>O glomérulo (representado por II) consiste em um enovelado de capilares sanguíneos, onde o sangue passa por alta pressão, forçando a saída de líquido sanguíneo, filtrando-o e direcionando-o para a cápsula renal.<br/>A cápsula renal (representada por III) consiste em uma estrutura epitelial de parede dupla em forma de taça, que circunda o glomérulo, pelo qual o filtrado glomerular é direcionado, confluindo para o túbulo néfrico.",
      },
      {
        id: 144,
        escolhida: "não",
        grupo: "4",
        modelo: "3",
        enunciado:
          "O conjunto de órgãos e estruturas responsáveis pela filtração do sangue, produção, armazenamento e eliminação de substâncias potencialmente tóxicas do organismo, constitui o sistema urinário. Sob este aspecto, analise as alternativas abaixo e relacione a informação acerca da função da estrutura com a figura mais adequada, por meio de de toques nos pares.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3uri",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Filtração do sangue e produção de urina",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3uri",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Conduzir a urina dos rins à bexiga",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3uri",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Armazenar urina até sua eliminação",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback1m3uri",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O conjunto de órgãos e estruturas responsáveis pela filtração do sangue, produção, armazenamento e eliminação de substâncias potencialmente tóxicas do organismo, constitui o sistema urinário. Dentre as alternativas apresentadas, os rins constituem a função de filtração do sangue e produção de urina, realizada por estruturas denominadas néfrons; os ureteres possuem a função de via urinífera, isto é, conduzir a urina dos rins para a bexiga; e a bexiga possui função de armazenamento da urina, até o momento da sua eliminação, que ocorre pela via urinífera denominada uretra, que conduz a urina da bexiga para o meio externo.",
      },
      {
        id: 145,
        escolhida: "não",
        grupo: "4",
        modelo: "3",
        enunciado:
          "O corpúsculo renal é uma parte do néfron onde ocorre a filtração do sangue. As figuras presentes nas alternativas abaixo indicam, por meio de cores, estruturas presentes no corpúsculo. Analise as figuras e, com base em seus conhecimentos, relacione a estrutura destacada com a respectiva descrição, por meio de toques nos pares.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3uri",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Arteríolas: entrada e saída de sangue do corpúsculo",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img8m3uri",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Glomérulo: filtração e formação do filtrado glomerular",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img9m3uri",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Cápsula renal: recebe o filtrado e direciona para o túbulo",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback2m3uri",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto: "SEM",
      },
    ];
  }
}
