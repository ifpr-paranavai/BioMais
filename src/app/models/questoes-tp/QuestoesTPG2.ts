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
        id: 60,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "O sangue é considerado um tipo de tecido conjuntivo de consistência fluida, constituído pelo plasma e por elementos figurados, que são células e fragmentos celulares. A figura abaixo representa os elementos figurados constituintes do sangue, emergidos no plasma sanguíneo. Sob esse aspecto, analise a figura e determine as estruturas indicadas, selecionando pares com as alternativas propostas.",
        imagem: "img26m1sc",
        legendaImagem:
          "Imagem: Adaptada de Brgfx, via Freepik.com. Disponível aqui.",
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
            descricao: "Hemácia",
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
            descricao: "Glóbulo Branco",
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
            descricao: "Plaqueta",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img26m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Brgfx, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "O sangue é considerado um tipo de tecido conjuntivo de consistência fluida, constituído pelo plasma e por elementos figurados. Os elementos figurados são constituídos por células, que são as hemácias (representada em I) e os glóbulos brancos (representado em II) e fragmentos celulares, como as plaquetas (representada em III).",
      },
      {
        id: 61,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "O sangue é um fluido que, a olho nu, apresenta-se como um líquido homogêneo, formado por plasma e elementos figurados. Ao passar por uma centrífuga, o sangue se torna um fluido heterogêneo, pois se separa em fases de acordo com seus componentes. Na imagem, é possível observar a proporção média da constituição sanguínea ilustrada por seus respectivos componentes. Nesse contexto, analise a figura e determine as proporções dos componentes representados por I, II e III.",
        imagem: "img27m1sc",
        legendaImagem:
          "Imagem: Adaptada de Brgfx, via Freepik.com. Disponível aqui.",
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
            descricao: "Plasma",
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
            descricao: "Glóbulos brancos e Plaquetas",
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
            descricao: "Glóbulos vermelhos",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img27m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Brgfx, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "O plasma corresponde a cerca de 55 do sangue, sendo constituído por 90 por cento de água e o restante inclui proteínas, sais minerais, hormônios, nutrientes, gases e excreções. As hemácias (glóbulos vermelhos) correspondem a 41 por cento do sangue, e são células com forma discoidal, sem núcleo e repletas de hemoglobina. Os glóbulos brancos (leucócitos) e as plaquetas, juntos, compõem cerca de 4 por cento do sangue, de modo que os glóbulos brancos são células esféricas e nucleadas e as plaquetas são fragmentos do citoplasmáticos anucleados, contendo forma irregular ou oval, envoltas por membrana plasmática e glicoproteínas.",
      },
      {
        id: 62,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "Os vasos sanguíneos podem ser classificados em artérias, veias e capilares, possuindo características anatômicas e fisiológicas distintas. A imagem a seguir ilustra estes três tipos de vasos, fora de proporção, tendo em vista que eles possuem diferenças significativas entre eles em relação ao calibre/diâmetro. Analise a imagem e, com base em seus conhecimentos, determine os vasos I, II e III, por meio da seleção de pares com as alternativas propostas.",
        imagem: "img28m1sc",
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
            descricao: "Artéria",
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
            descricao: "Veia",
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
            descricao: "Capilar",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img28m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Em I, encontra-se representada uma artéria, caracterizada por possuir uma parede espessa rica em musculatura lisa e podendo apresentar fibras elásticas, sendo o tipo de vaso que leva sangue do coração em direção aos órgãos e tecidos corporais. Em II, encontra-se representada uma veia, caracterizada por possuir paredes menos espessas em relação às artérias e possuir válvulas venosas, sendo o tipo de vaso que leva sangue dos tecidos corporais ao coração. Em III, encontra-se representado um capilar, que é um tipo de vaso finíssimo, de tamanho microscópico, que se comunica entre uma arteríola e uma vênula, e é constituído por apenas uma camada de células endoteliais.",
      },
      {
        id: 63,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "As veias e artérias são constituídas por três camadas principais de revestimento denominadas túnicas, enquanto os capilares contêm apenas uma camada de células endoteliais. Com relação às camadas de revestimento das veias e artérias, determine as estruturas I, II e III por meio da seleção de pares com as alternativas propostas.",
        imagem: "img29m1sc",
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
            descricao: "Túnica íntima",
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
            descricao: "Túnica média",
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
            descricao: "Túnica adventícia",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img29m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Artérias e veias são constituídas por três camadas de tecido, denominadas túnicas. A túnica íntima (representada por I) é constituída por uma camada de células endoteliais achatadas, que revestem o interior dos vasos. A túnica média (representada por II) é constituída por tecido conjuntivo elástico e tecido muscular liso, e consiste na camada intermediária dos vasos. A túnica adventícia (representada por III) é constituída de tecido conjuntivo fibroso e reveste externamente os vasos sanguíneos.",
      },
      {
        id: 64,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "O coração é um músculo oco, com função de bombear o sangue em direção aos vasos. Os vasos de maior calibre, isto é, de maior diâmetro, que se comunicam diretamente com o coração, encontram-se representados por I, II e III. Analise a figura e determine que vasos sanguíneos são esses, por meio da seleção de pares com as alternativas propostas.",
        imagem: "img30m1sc",
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
            descricao: "Aorta",
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
            descricao: "Veias cavas",
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
            descricao: "Artéria pulmonar",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img30m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A aorta (representada por I) é a maior artéria do sistema circulatório sanguíneo e é dela que se derivam todas as artérias que transportam sangue oxigenado aos tecidos do corpo. As veias cavas - superior e inferior - (representadas por II) são as maiores veias do sistema circulatório sanguíneo, sendo por meio delas que o sangue pobre em oxigênio proveniente dos tecidos de todo o corpo desemboca no coração. A artéria pulmonar (representada por III) é um tipo de artéria que transporta sangue pobre em oxigênio (sendo uma exceção, pois as demais artérias transportam sangue rico em oxigênio), levando-o do coração até os pulmões para que seja oxigenado.",
      },
      {
        id: 65,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "As valvas cardíacas são estruturas presentes ao final de cada câmara cardíaca, tendo como função garantir a circulação do sangue em um único sentido, evitando seu refluxo. Sob esse aspecto, analise a imagem e determine as valvas I, II e III, selecionando pares com as alternativas propostas.",
        imagem: "img31m1sc",
        legendaImagem:
          "Imagem: Adaptada de Zoofari, (Creative Commons BY-SA 3.0), via Wikimedia Commons. Disponível aqui.",
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
            descricao: "Semilulares",
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
            descricao: "Tricúspide",
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
            descricao: "Bicúspide",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img31m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Zoofari, (Creative Commons BY-SA 3.0), via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "As valvas semilunares (representadas por I) estão localizadas junto aos orifícios de abertura da artéria pulmonar e da aorta, ao final dos ventrículos direito e esquerdo, respectivamente. As valvas atrioventriculares, por sua vez, consistem na valva tricúspide (representada por II) e valva bicúspide (representada por III), localizadas na junção dos átrios e ventrículos, direitos e esquerdos, respectivamente.",
      },
      {
        id: 66,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "Na circulação sanguínea, o sangue proveniente dos tecidos, pobre em oxigênio e rico em gás carbônico, chega ao coração por meio das estruturas representadas por I na figura abaixo. Esse sangue é bombeado do coração aos pulmões para ser oxigenado, passando pelas estruturas representadas por II. O sangue oxigenado retorna ao coração por meio das estruturas representadas por III, para que posteriormente possa ser bombeado pelo coração em direção aos tecidos. Com base nas informações, determine as estruturas I, II e III, por meio de toques nos pares.",
        imagem: "img32m1sc",
        legendaImagem:
          "Imagem: Adaptada de Zoofari, (Creative Commons BY-SA 3.0), via Wikimedia Commons. Disponível aqui.",
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
            descricao: "Veias cavas",
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
            descricao: "Artérias pulmonares",
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
            descricao: "Veias pulmonares",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "FEEDBACK TEXTO",
        feedBackTexto:
          "GRUPO<br/>2<br/><br/>MODELO<br/>1<br/><br/>ENUNCIADO<br/>Na figura abaixo, os pequenos vasos que transportam sangue pobre em oxigênio estão representados em azul, enquanto os vasos que transportam sangue rico em oxigênio estão representados em vermelho. Esses pequenos vasos são ramificações de veias e artérias, que estão ilustrados pelas estruturas I e II, que, por sua vez, se ramificam em vasos finíssimos e de estrutura microscópica (representados por III), que estão presentes em todas as regiões do corpo, próximos das células dos tecidos, onde ocorre a nutrição, oxigenação e remoção de substâncias. Com base nas informações e em seus conhecimentos, determine as estruturas I, II e III por meio de toques nos pares.<br/><br/>IMAGEM<br/>img33m1sc<br/><br/>LEGENDA DA IMAGEM<br/>Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.<br/><br/>PARES CORRETOS<br/>I = Vênulas<br/>II = Arteríolas<br/>III = Capilares<br/><br/>FEEDBACK IMAGEM<br/>img33m1sc<br/><br/>LEGENDA DA IMAGEM DE FEEDBACK<br/>Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.<br/><br/>FEEDBACK TEXTO<br/>Os vasos sanguíneos de maior calibre se ramificam em vasos menores, de modo que as veias, ao se ramificarem em vasos mais finos, passam a ser chamadas de vênulas (representadas por I), e as ramificações arteriais finas denominam-se arteríolas (representadas por II). Vênulas e arteríolas, se ramificam em vasos ainda menores, de calibre microscópico, denominados capilares sanguíneos (representados por III), que estão presentes em todas as regiões do corpo, próximos das células dos tecidos.",
      },
      {
        id: 67,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "O ciclo cardíaco consiste em uma sequência completa de sístoles (contração) e diástoles (relaxamento) das câmaras cardíacas, com duração aproximada de 0,8 segundo. Na figura abaixo, na representação I, o ciclo é marcado por um grande silêncio devido às valvas semilunares e atrioventriculares permanecerem fechadas, ocorrendo a entrada de sangue nos átrios. Em II, as valvas atrioventriculares se abrem e os átrios se contraem, bombeando sangue para os ventrículos. Em III, os átrios relaxam, as valvas atrioventriculares se fecham, as valvas semilunares se abrem e os ventrículos se contraem, bombeando sangue para as artérias. Sob esse aspecto, determine os momentos I, II e III selecionando pares com as alternativas propostas.",
        imagem: "img34m1sc",
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
            descricao: "Diástole geral",
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
            descricao: "Sístole atrial",
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
            descricao: "Sístole ventricular",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img34m1sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Na diástole geral (representada por I), o ciclo é marcado por um grande silêncio devido às valvas semilunares e atrioventriculares permanecerem fechadas, ocorrendo a entrada de sangue nos átrios. Na sístole atrial (representada por II), as valvas atrioventriculares se abrem e os átrios se contraem, bombeando sangue para os ventrículos. Na sístole ventricular (representada por III), os átrios relaxam e as valvas atrioventriculares se fecham, enquanto as valvas semilunares se abrem e os ventrículos se contraem, bombeando sangue para as artérias",
      },
      {
        id: 68,
        escolhida: "não",
        grupo: "2",
        modelo: "1",
        enunciado:
          "O distrito linfático do sistema circulatório humano é responsável, sobretudo, pela produção e amadurecimento de células de defesa do organismo e pela drenagem e filtragem do excesso de líquido do corpo, direcionando-o à corrente sanguínea. A figura abaixo esquematiza a circulação linfática, atrelada com a circulação sanguínea. Em I, encontra-se representada um tipo de nódulo linfático, que atuam na filtragem da linfa. Em II, representa-se as estruturas de maior calibre pelos quais a linfa circula no organismo, e que se ramificam nas estruturas III, de calibre microscópico. Sob este aspecto, determine as estruturas I, II e III selecionando pares com as alternativas propostas.",
        imagem: "img35m1sd",
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
            descricao: "Linfonodos",
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
            descricao: "Vasos linfáticos",
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
            descricao: "Capilares linfáticos",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img35m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "No esquema da circulação linfática, atrelada com a circulação sanguínea demonstrado na figura, os linfonodos (representado por I) são um tipo de nódulo linfático, que atuam na filtragem da linfa. Os vasos linfáticos (representados por II), são vasos de maior calibre pelos quais a linfa circula no organismo, e que se ramificam em capilares linfáticos (representados por III), de calibre microscópico.",
      },
      {
        id: 74,
        escolhida: "não",
        grupo: "2",
        modelo: "3",
        enunciado:
          "Os órgãos linfoides são um conjunto de órgãos onde ocorre a formação, a maturação e/ou a multiplicação dos leucócitos (glóbulos brancos). No que se refere aos órgãos linfoides e dentre as alternativas abaixo, relacione as alternativas respectivas, por meio da formação de pares com as alternativas propostas.",
        legendaImagem:
          "Imagens: Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img36am3sc",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Órgão linfoide primário, origina os linfócitos B e T e é o local de maturação dos linfócitos B",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img36bm3sc",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Órgão linfoide primário, onde ocorre a maturação dos linfócitos T",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img36cm3sc",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Órgão linfoide secundário, onde há a ação dos leucócitos para remoção de microrganismos",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback1m3sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Por se constituírem dos principais locais de formação e amadurecimento dos linfócitos, a medula óssea e o timo são considerados órgãos linfoides primários. Os demais órgãos do sistema imunitário, cujas funções estão atreladas à multiplicação dos linfócitos para atuação na defesa do organismo, são denominados órgãos linfoides secundários, a exemplo do baço.",
      },
      {
        id: 75,
        escolhida: "não",
        grupo: "2",
        modelo: "3",
        enunciado:
          "Os leucócitos (glóbulos brancos) podem ser classificados de acordo com a presença ou ausência de grânulos no citoplasma, podendo ser chamados de leucócitos granulócitos (com grânulos) ou agranulócitos (sem grânulos). As alternativas abaixo se referem aos três tipos de leucócitos granulócitos, que, muitas vezes, podem ser identificados pelas características de seus núcleos. Sob este aspecto, relacione as imagens com as respectivas informações, por meio da formação de pares com as alternativas propostas.",
        legendaImagem:
          "Imagens: Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img37am3sc",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Neutrófilo: núcleo trilobado",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img37bm3sc",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Eosinófilo: núcleo bilobado",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img37cm3sc",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Basófilo: núcleo irregular",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback2m3sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os leucócitos (glóbulos brancos) podem ser classificados de acordo com a presença ou ausência de grânulos no citoplasma, podendo ser chamados de leucócitos granulócitos (com grânulos) ou agranulócitos (sem grânulos). Os leucócitos granulócitos consistem em: neutrófilos, que possuem forma esférica, núcleo trilobado e fagocitam bactérias e corpos estranhos; eosinófilos, que possuem forma esférica, núcleo bilobado e participam das reações alérgicas produzindo histamina; e os basófilos, que possuem forma esférica, núcleo irregular e participam das reações alérgicas produzindo histamina e heparina.",
      },
      {
        id: 76,
        escolhida: "não",
        grupo: "2",
        modelo: "3",
        enunciado:
          "O sangue é composto por uma parte líquida denominada plasma e por elementos figurados, como células e fragmentos celulares. Com relação aos elementos figurados do sangue, estes estão representados nas imagens contidas nas alternativas abaixo. Sob esse aspecto, relacione as imagens com as informações mais adequadas, por meio da seleção dos respectivos pares.",
        legendaImagem:
          "Imagens: Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img38am3sc",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Célula bicôncava, anucleada, contendo hemoglobina com ferro permitindo o transporte de oxigênio.",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img38bm3sc",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Célula esférica e incolor, podendo ser granulócita ou agranulócita, cuja função é a defesa do organismo.",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img38cm3sc",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Fragmentos anucleados de células que participam do processo de coagulação sanguínea.",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback3m3sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os glóbulos vermelhos, também chamados de hemácias ou eritrócitos, são células com forma discoidal, sem núcleo e repletas de hemoglobina (proteína responsável pela cor vermelha do sangue e por captar oxigênio nos pulmões), tendo como principal função o transporte de gás oxigênio para os tecidos. Os glóbulos brancos, também chamados de leucócitos, são células esféricas e nucleadas (com núcleo) e têm função de defesa contra microrganismos ou partículas estranhas que eventualmente entram no organismo. As plaquetas são fragmentos celulares anucleados, contendo forma irregular ou oval, envoltas por membrana plasmática e glicoproteínas. Esses fragmentos atuam no sangue auxiliando no processo de coagulação sanguínea.",
      },
      {
        id: 77,
        escolhida: "não",
        grupo: "2",
        modelo: "3",
        enunciado:
          "As imagens das alternativas a seguir ilustram três tipos de vasos sanguíneos (fora de proporção, tendo em vista que eles possuem diferenças significativas entre eles, em relação ao calibre/diâmetro). Sob este aspecto, analise as imagens e, com base em seus conhecimentos, relacione-as com as informações mais adequadas, por meio da seleção dos respectivos pares.",
        legendaImagem:
          "Imagens: Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img39am3sc",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Artéria",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img39bm3sc",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Veia",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img39cm3sc",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Capilar",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback4m3sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os vasos sanguíneos podem ser de três tipos: artérias, que conduzem sangue do coração aos órgãos e tecidos corporais, consistindo no tipo de vaso mais espesso; as veias, que conduzem sangue dos órgãos e tecidos corporais ao coração, com espessura pouco menos espessa que as artérias; e os capilares sanguíneos, que são vasos finíssimos de calibre microscópico e estabelecem relação entre arteríolas e vênulas, estando presentes em praticamente todas as regiões do corpo, muito próximos das células.",
      },
      {
        id: 78,
        escolhida: "não",
        grupo: "2",
        modelo: "3",
        enunciado:
          "O ciclo cardíaco é caracterizado por momentos de contração e relaxamento das câmaras cardíacas, os quais estão representados nas imagens das alternativas a seguir. Com base nas imagens e nas informações, relacione as imagens com as informações mais adequadas, por meio da seleção dos respectivos pares.",
        legendaImagem:
          "Imagens: Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img40am3sc",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Diástole geral: átrios e ventrículos relaxados.",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img40bm3sc",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Sístole atrial: átrios contraídos e ventrículos relaxados.",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img40cm3sc",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Sístole ventricular: átrios relaxados e ventrículos contraídos.",
            idPar: 5,
          },
        ],
        feedBackImagem: "feedback5m3sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Durante o ciclo cardíaco, no momento denominado diástole geral (átrios e ventrículos em diástole), o ciclo é marcado por um grande silêncio devido às valvas semilunares e atrioventriculares permanecerem fechadas, ocorrendo a entrada de sangue nos átrios. Na sístole atrial, as valvas atrioventriculares se abrem e os átrios se contraem, bombeando sangue para os ventrículos. Na sístole ventricular, os átrios relaxam, as valvas atrioventriculares se fecham, as valvas semilunares se abrem e os ventrículos se contraem, bombeando sangue para as artérias.",
      },
    ];
  }
}
