import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG7 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 198,
        escolhida: "não",
        grupo: "7",
        modelo: "1",
        enunciado:
          "Os músculos estriados esqueléticos possuem três tipos de camadas de tecidos conjuntivos, responsáveis por manter o músculo firme, unindo as estruturas que formam o músculo, permitindo que a força da contração atue sobre a musculatura como um todo. Analise a figura e as alternativas abaixo e determine as proposições correspondentes, selecionando os pares.",
        imagem: "img1m1mus",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
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
            descricao: "Epimísio: camada externa que envolve todo o músculo.",
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
            descricao:
              "Perimísio: camada que circunda grupos de fibras musculares, separando-as em fascículos.",
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
            descricao:
              "Endomísio: camada que separa as fibras musculares individualmente.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1mus",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "Os músculos estriados esqueléticos possuem três tipos de camadas de tecidos conjuntivos, responsáveis por manter o músculo firme, unindo as estruturas que formam o músculo, permitindo que a força da contração atue sobre a musculatura como um todo. São elas: o epimísio (representada em I), que consiste na camada externa que envolve todo o músculo, o perimísio (representada em II), que consiste na camada que circunda grupos de fibras musculares, separando-as em fascículos, e o endomísio (representado em III), que consiste na camada que separa as fibras musculares individualmente.",
      },
      {
        id: 199,
        escolhida: "não",
        grupo: "7",
        modelo: "1",
        enunciado:
          "Os músculos estriados esqueléticos são assim chamados pois, em sua maioria, movimentam os ossos do esqueleto, efetivando a locomoção. A figura abaixo representa a organização deste tipo de músculo. Analise a figura e as alternativas abaixo e determine as proposições correspondentes, selecionando os pares.",
        imagem: "img2m1mus",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
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
            descricao: "Tendão: cordão fibroso que liga o músculo aos ossos.",
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
            descricao: "Fascículo: conjunto de fibras musculares.",
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
            descricao:
              "Fibra: célula muscular contendo muitos filamentos, as miofibrilas.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1mus",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura representa um músculo estriado esquelético, de modo que as estruturas indicadas em sua organização consistem em:<br/>Tendão (representado em I), que consiste em um cordão fibroso altamente resistente, formado por tecido cartilaginoso, cuja função é prender os músculos aos ossos, possibilitando o movimento;<br/>Fascículo (representado em II), que consiste em um conjunto de 10 a 100 (ou mais) fibras musculares organizadas em grandes feixes (os fascículos);<br/>Fibra muscular (representada em III), que consiste na unidade fundamental do músculo, correspondente à célula muscular, que é bastante alongada, contém numerosos núcleos e mitocôndrias e, internamente apresenta muitos filamentos – as miofibrilas – que percorre toda a fibra no sentido longitudinal, as quais apresentam um padrão de estrias (sarcômero) que constituem as unidades contráteis básicas dos músculos.",
      },
      {
        id: 200,
        escolhida: "não",
        grupo: "7",
        modelo: "1",
        enunciado:
          "Os músculos do tronco são aqueles que se situam em regiões do corpo que englobam o tórax, dorso, nuca, abdome, pelve e períneo. A figura abaixo apresenta indicações de alguns dos principais músculos da região do tronco. Analise a figura e as alternativas abaixo e determine as proposições correspondentes, selecionando os pares.",
        imagem: "img3m1mus",
        legendaImagem:
          "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
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
            descricao: "Peitoral maior",
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
            descricao: "Reto abdominal",
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
            descricao: "Oblíquo externo",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1mus",
        feedBackLegendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura destaca alguns dos músculos do tronco em sua porção frontal.<br/>O músculo peitoral maior (representado em I) situa-se na região ântero-superior do tórax e tem como função a rotação medial, flexão e adução do braço.<br/>O músculo reto abdominal (representado em II) situa-se verticalmente em cada lado da face anterior do abdome, e é “dividido” por faixas fibrotendinosas, que variam de número de pessoa para pessoa, formando os “gominhos” do abdome. Esse tipo de músculo tem como função a flexão do tronco, comprimir o abdome e auxiliar a expiração forçada.<br/>O músculo oblíquo externo (representado em III) situa-se na face lateral do abdome e tem como função comprimir o abdome, rotacionar o tronco para o lado oposto e auxiliar a expiração forçada.",
      },
      {
        id: 201,
        escolhida: "não",
        grupo: "7",
        modelo: "1",
        enunciado:
          "A figura abaixo apresenta os músculos da face posterior do corpo humano, contendo indicações em três deles. Analise a imagem e as alternativas abaixo e determine as proposições correspondentes, selecionando os pares.",
        imagem: "img4m1mus",
        legendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
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
            descricao: "Trapézio",
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
            descricao: "Deltoide",
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
            descricao: "Grande dorsal",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img4m1mus",
        feedBackLegendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura indica os ossos:<br/>Trapézio (representado em I), cujo nome se dá pelo seu formato, situado na parte posterior do tronco, abrangendo a parte posterior do pescoço, superior e dorsal dos ombros e parte superior do dorso. Sua função consiste na elevação e adução (movimento de afastamento em relação a linha média corporal) da escápula.<br/>Deltoide (representado em II), situado na região do ombro, logo acima da cabeça do úmero. Sua função consiste em realizar abdução (até 90º), adução, rotação medial e lateral do braço.<br/>Grande dorsal (representado em III), situado na parte posterior do tronco, abrangendo a porção inferior ao tórax e a região lombar, em direção ao úmero. Sua função consiste em realizar a abdução, adução, rotação medial e lateral do braço.",
      },
      {
        id: 202,
        escolhida: "não",
        grupo: "7",
        modelo: "1",
        enunciado:
          "Os músculos dos membros inferiores são muito importantes na locomoção e manutenção da postura. A figura abaixo apresenta os principais músculos da face posterior do corpo humano, contendo indicações de três deles. Sob este enfoque, analise a figura e as alternativas abaixo e determine as proposições correspondentes, selecionando os pares.",
        imagem: "img5m1mus",
        legendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
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
            descricao: "Glúteo máximo",
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
            descricao: "Bíceps femoral",
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
            descricao: "Gastrocnêmio",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img5m1mus",
        feedBackLegendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura indica três dos principais músculos da face posterior membros inferiores:<br/>Glúteo máximo (representado em I), situa-se na região glútea (acima da coxa e abaixo da cintura). Sua função consiste em suportar a massa corporal e participar ativamente da locomoção na extensão, rotação lateral e abdução no quadril e auxiliar na extensão do joelho.<br/>Bíceps femoral (representado em II) é um músculo alongado situado na região posterior da coxa, e sua função consiste em possibilitar movimentos de extensão, adução e rotação lateral da coxa e flexão e rotação lateral da perna.<br/>Gastrocnêmio (representado em III) consiste em um músculo disposto em pares: dois músculos situados na face posterior de cada perna (lateral e medial), abaixo dos joelhos. Sua função consiste em possibilitar a flexão e supinação plantar e dos joelhos (quando a perna não estiver suportando o peso). Juntamente com o músculo sóleo e plantar, os músculos gastrocnêmios formam a panturrilha.",
      },
      {
        id: 203,
        escolhida: "não",
        grupo: "7",
        modelo: "1",
        enunciado:
          "Os músculos dos membros inferiores são muito importantes na locomoção e manutenção da postura. A figura abaixo apresenta os principais músculos da face anterior (frontal) do corpo humano, contendo indicações de três deles. Sob este enfoque, analise a figura e as alternativas abaixo e determine as proposições correspondentes, selecionando os pares.",
        imagem: "img6m1mus",
        legendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
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
            descricao: "Sartório",
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
            descricao: "Reto femoral",
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
            descricao: "Tibial anterior",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img6m1mus",
        feedBackLegendaImagem:
        "Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura demonstra três músculos dos membros inferiores, sendo eles:<br/>Sartório (representado em I), que consiste no músculo mais longo do corpo humano, situado transversalmente na região frontal da coxa. Sua função engloba a flexão, rotação lateral e abdução do quadril, flexão e rotação medial do joelho.<br/>Reto femoral (representado em II), localizado na porção central da face anterior da coxa e sua função inclui a adução e flexão do quadril, atuando também na extensão do joelho. O conjunto dos músculos reto femoral, vasto medial (à esquerda), vasto lateral (à direita) e vasto intermediário (atrás do reto femoral) compõem os músculos do quadríceps femoral.<br/>Tibial anterior (representado em III), situado lateralmente ao osso tíbia, apresenta como função a flexão dorsal e supinação do pé.",
      },
      {
        id: 207,
        escolhida: "não",
        grupo: "7",
        modelo: "3",
        enunciado:
          "Os músculos constituem cerca de 40 por cento da massa corporal do corpo humano, havendo cerca de 700 músculos que podem ser classificados em três tipos. As figuras abaixo ilustram uma estrutura correspondente a cada tipo de tecido muscular. Analise as figuras e as alternativas e selecione os pares correspondentes que julgar como corretos.",
        legendaImagem:
        "Imagem: Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3amus",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Musculatura lisa: movimentos involuntários",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3bmus",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Musculatura estriada cardíaca: movimentos involuntários",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3cmus",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Musculatura estriada esquelética: movimentos voluntários",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeedback7mus",
        feedBackLegendaImagem:
        "Imagem: Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "O músculo liso é encontrado em órgãos viscerais, como estômago, intestino e o útero, por exemplo. Esse tipo de musculatura não apresenta estrias transversais e seus movimentos são involuntários, como, por exemplo, os movimentos peristálticos.<br/>O músculo estriado cardíaco é encontrado apenas no coração, sendo responsável pelos batimentos cardíacos. As fibras musculares cardíacas assemelham-se às fibras esqueléticas por apresentarem estrias transversais, contudo, esse tipo de músculo se diferencia, sobretudo, por apresentar contração involuntária, ou seja, independentemente da nossa vontade.<br/>O músculo estriado esquelético constitui a maior parte da musculatura do corpo e se caracteriza por estar associada aos ossos permitindo os movimentos e a postura corporal. O termo estriado deve-se ao fato de conter fibras que apresentam estrias transversais, dispostas ao longo de seu comprimento. Esse tipo de musculatura pode se contrair voluntariamente, ou seja, é possível contraí-los quando queremos.",
      },
    ];
  }
}
