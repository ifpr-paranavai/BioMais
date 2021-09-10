import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG9 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 238,
        escolhida: "não",
        grupo: "9",
        modelo: "1",
        enunciado:
          "Entre o córtex cerebral e os ossos da caixa craniana existem três membranas que revestem o encéfalo, tendo como função proteger esse importante órgão do corpo humano. Sob este aspecto, analise a figura e as alternativas abaixo e relacione as proposições que julgar como correspondentes.",
        imagem: "img1m1ner",
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
            descricao: "Dura-máter",
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
            descricao: "Aracnoide",
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
            descricao: "Pia-máter",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "As meninges são membranas que revestem o encéfalo, tendo como função proteger esse importante órgão do corpo humano. São elas: dura-máter (representada em I), que consiste em uma camada fibrosa mais externa, espessa e resistente; aracnoide (representada em II), que consiste em uma camada fina intermediária; e pia-máter (representada em III), que consiste em uma camada interna, delicada e vascularizada, mantendo contato direto com o encéfalo.",
      },
      {
        id: 239,
        escolhida: "não",
        grupo: "9",
        modelo: "1",
        enunciado:
          "Os nervos são fios finos e esbranquiçados que partem do Sistema Nervoso Central (SNC) e se ramificam, atingindo todas as partes do corpo. A figura abaixo ilustra a estrutura de um nervo motor. Assim, sobre a constituição de um nervo com função motora, analise a figura e as alternativas e relacione as proposições que julgar como correspondentes.",
        imagem: "img2m1ner",
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
            descricao: "Tecido conjuntivo",
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
            descricao: "Feixe de fibras nervosas",
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
            descricao: "Neurofibra mielinizada",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os nervos são constituídos por tecido conjuntivo (representado em I) que envolve vários feixes de fibras nervosas (representadas em II), sendo que cada feixe de fibras contém neurofibras mielinizadas (representadas em III).<br/>Vale lembrar que, no organismo humano, as neurofibras dos nervos motores são mielinizados, promovendo que o impulso nervoso se propague com grande rapidez entre o SNC e os músculos que efetivarão a contração.",
      },
      {
        id: 240,
        escolhida: "não",
        grupo: "9",
        modelo: "1",
        enunciado:
          "Os nervos possuem neurofibras que geralmente estão agrupados em feixes, de modo que as estruturas são envolvidas por tecido conjuntivo fibroso, constituindo três camadas: uma mais externa, que reveste o nervo, outra intermediária, que envolve os feixes de fibras, e outra mais interna, que envolve as neurofibras. Sob este aspecto, analise a figura e as alternativas e relacione as proposições que julgar como correspondentes.",
        imagem: "img3m1ner",
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
            descricao: "Epineuro",
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
            descricao: "Perineuro",
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
            descricao: "Endoneuro",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os nervos possuem neurofibras que geralmente estão agrupados em feixes, de modo que as estruturas são envolvidas por tecido conjuntivo fibroso, constituindo três camadas: uma mais externa, que reveste o nervo, denominada epineuro (representada em I); outra intermediária, que envolve os feixes de fibras, denominada perineuro (representada em II) e outra mais interna, que envolve diretamente as neurofibras, denominada endoneuro (representada em III).",
      },
      {
        id: 241,
        escolhida: "não",
        grupo: "9",
        modelo: "1",
        enunciado:
          "A figura abaixo representa o encéfalo, que é a parte do Sistema Nervoso Central (SNC) localizada no interior do crânio, cujas principais estruturas estão indicadas. Analise a figura e as alternativas e determine as proposições que julgar correspondentes às estruturas I, II e III.",
        imagem: "img4m1ner",
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
            descricao: "Telencéfalo",
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
            descricao: "Diencéfalo",
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
            descricao: "Cerebelo",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img4m1ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O encéfalo pode ser dividido em quatro regiões principais:<br/>Telencéfalo (representado em I), que consiste em 85 por cento a 90 por cento da massa encefálica do crânio, possuindo uma superfície marcada por sulcos e depressões e é dividido em dois hemisférios (direito e esquerdo), que se comunicam pelo corpo caloso. diencéfalo, cerebelo e tronco encefálico.<br/>Diencéfalo (representado em II), que se constitui do tálamo e hipotálamo, que são duas regiões encefálicas localizadas que, juntamente com o telencéfalo, constituem o que denominamos de cérebro.<br/>Cerebelo (representado em III), que se constitui de uma estrutura localizada na porção posterior do encéfalo.<br/>Tronco encefálico, que consiste em uma região de comunicação entre o cérebro e a medula, e é formado pela ponte e bulbo (medula oblonga).",
      },
      {
        id: 242,
        escolhida: "não",
        grupo: "9",
        modelo: "1",
        enunciado:
          "Os neurônios, juntamente com os gliócitos, compõem o tecido nervoso. A figura abaixo ilustra um neurônio e suas estruturas. Analise a figura e as alternativas e, com base em seus conhecimentos acerca do tecido nervoso, relacione as estruturas I, II e III com as respectivas proposições que julgar como corretas.",
        imagem: "img5m1ner",
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
            descricao: "Dendritos",
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
            descricao: "Axônio",
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
            descricao: "Terminações axônicas",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img5m1ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A figura ilustra as estruturas de um neurônio de modo que, a estrutura I corresponde aos dendritos, que são prolongamentos citoplasmáticos geralmente mais curtos dos neurônios, que garantem a recepção de estímulos, conduzindo-os ao corpo celular.<br/>A estrutura II corresponde ao axônio, que são prolongamentos citoplasmáticos geralmente mais longos dos neurônios, que garantem a condução de impulsos do corpo celular para outras células (outros neurônios, músculos ou glândulas).<br/>Ao chegar nas proximidades dessas células, a condução é feita nas terminações axônicas (representadas em III), que são extremidades de um axônio, que se comunicam com as células por meio de uma região denominada sinapse nervosa (ação de juntar), que pode ser do tipo elétrica ou química.",
      },
      {
        id: 246,
        escolhida: "não",
        grupo: "9",
        modelo: "3",
        enunciado:
          "Os neurônios podem ser classificados em diferentes tipos estruturais básicos, de acordo com o arranjo de suas neurofibras. As figuras nas alternativas abaixo representam três deles. Analise as alternativas e, com base em seus conhecimentos sobre as células do sistema nervoso, relacione as figuras com a nomenclatura do tipo de neurônio que julgar como correto.",
        legendaImagem:
          "Imagens: Adaptadas de Holly Fischer, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3aner",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Neurônio pseudounipolar",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3bner",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Neurônio bipolar",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3cner",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Neurônio multipolar",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeedbackm3ner",
        feedBackLegendaImagem:
          "Imagem: Adaptadas de Holly Fischer, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "Os neurônios podem ser classificados estruturalmente em quatro tipos: unipolar, pseudounipolar, bipolar e multipolar. Essa classificação está diretamente relacionada ao número de prolongamentos celulares (neurofibras).<br/>O neurônio unipolar, possui apenas um axônio.<br/>O neurônio pseudounipolar, apresenta apenas uma neurofibra, porém esta se divide em duas: uma correspondente aos dendritos e outra ao axônio.<br/>O neurônio bipolar, apresenta apenas um dendrito e um axônio, em posições opostas.<br/>O neurônio multipolar, apresenta vários prolongamentos, sendo um deles o axônio e múltiplos dendritos, geralmente ramificados.<br/>Dentre estes, o tipo mais comum consiste no neurônio multipolar, presentes no encéfalo e medula espinhal. Os neurônios bipolares são responsáveis pela transmissão das informações sensoriais, enquanto os neurônios pseudounipolares estão presentes em gânglios nervosos e levam informações de sensores da pele ao SNC.",
      },
    ];
  }
}