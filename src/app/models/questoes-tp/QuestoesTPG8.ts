import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG8 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 218,
        escolhida: "não",
        grupo: "8",
        modelo: "1",
        enunciado:
          "As glândulas endócrinas são responsáveis por produzir hormônios que atuam contribuindo para a homeostasia do organismo, regulando a atividade e o crescimento de células-alvo no corpo, bem como o metabolismo. A figura abaixo demonstra as principais glândulas do sistema endócrino e três delas encontram-se indicadas. Analise a imagem e as alternativas e, por meio de toque nos pares, associe as proposições que julgar como correspondentes.",
        imagem: "img1m1endo",
        legendaImagem:
          "Imagem: Adaptada de MrArifnajafov, <a href='https://creativecommons.org/publicdomain/mark/1.0/deed.pt_BR'>Domínio Público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Illu_endocrine_system-az.jpg'>Disponível aqui</a>.",
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
            descricao: "Regula o funcionamento de outras glândulas endócrinas",
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
            descricao: "Estimula e mantém os processos metabólicos",
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
              "Regula os níveis de sódio, potássio e água no organismo",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1endo",
        feedBackLegendaImagem:
          "Imagem: Adaptada de MrArifnajafov, <a href='https://creativecommons.org/publicdomain/mark/1.0/deed.pt_BR'>Domínio Público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Illu_endocrine_system-az.jpg'>Disponível aqui</a>.",
        feedBackTexto:
          "As glândulas endócrinas indicadas na figura consistem, respectivamente:<br/>Glândula hipófise (representada em I), conhecida como “glândula-mestra” por apresentar como uma de suas funções a regulação do funcionamento de outras glândulas endócrinas, por meio da liberação de hormônios tróficos como o TSH, ACTH, FSH e LH. Essa função é exercida por sua porção anterior, denominada adenoipófise.<br/>Glândula tireoide (representada em II), na qual os principais hormônios produzidos são a tri-iodotironina (T3) e a tiroxina (T4), cuja função fundamental consiste em estimular e manter os processos metabólicos. Além destes, outro importante hormônio da tireoide é a calcitonina, responsável por reduzir a concentração de cálcio no sangue.<br/>Glândula suprarrenal (representada em III), formada pelo córtex, cuja função inclui a regulação dos níveis de sódio, potássio e água no organismo e auxiliar na manutenção da glicemia; e pela medula, cuja função principal é produzir adrenalina (hormônio que promove reações de alerta em situações de estresse) e noradrenalina (hormônio que regula a pressão arterial).",
      },
      {
        id: 219,
        escolhida: "não",
        grupo: "8",
        modelo: "1",
        enunciado:
          "As glândulas endócrinas são responsáveis por produzir hormônios que atuam contribuindo para a homeostasia do organismo, regulando a atividade e o crescimento de células-alvo no corpo, bem como o metabolismo. A figura abaixo demonstra as principais glândulas do sistema endócrino e três delas encontram-se indicadas. Analise a imagem e as alternativas e, por meio de toque nos pares, associe as proposições que julgar como correspondentes.",
        imagem: "img2m1endo",
        legendaImagem:
        "Imagem: Adaptada de MrArifnajafov, <a href='https://creativecommons.org/publicdomain/mark/1.0/deed.pt_BR'>Domínio Público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Illu_endocrine_system-az.jpg'>Disponível aqui</a>.",
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
            descricao: "Regula os níveis de glicose no sangue",
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
            descricao: "Estimula a espermatogênese",
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
            descricao: "Estimula o crescimento da mucosa uterina",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1endo",
        feedBackLegendaImagem:
        "Imagem: Adaptada de MrArifnajafov, <a href='https://creativecommons.org/publicdomain/mark/1.0/deed.pt_BR'>Domínio Público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Illu_endocrine_system-az.jpg'>Disponível aqui</a>.",
        feedBackTexto:
          "As glândulas endócrinas indicadas na figura consistem, respectivamente:<br/>Pâncreas (representado em I), consiste em uma glândula mista (endócrina e exócrina). Em sua função endócrina, produz os hormônios insulina (responsável por reduzir a quantidade de glicose no sangue) e glucagon (responsável por aumentar a quantidade de glicose no sangue).<br/>Testículo (representado em II), consiste na gônada masculina. Produz o hormônio testosterona, responsável por estimular a espermatogênese (produção de espermatozoides) e pelo desenvolvimento e manutenção das características sexuais secundárias masculinas.<br/>Ovário (representado em III), consiste na gônada feminina. Produz os hormônios estrógeno, que promove a maturação dos órgãos reprodutores, estimula o crescimento da mucosa uterina e desenvolve e mantem as características sexuais secundárias femininas; e o hormônio progesterona, que completa a preparação da mucosa uterina, preparando-a para uma possível gravidez, além de estimular o desenvolvimento das glândulas mamárias.",
      },
      {
        id: 220,
        escolhida: "não",
        grupo: "8",
        modelo: "1",
        enunciado:
          "A figura abaixo ilustra uma região do corpo de suma importância na regulação endócrina do organismo. Sob este enfoque, analise a figura e as alternativas e, por meio de toque nos pares, associe as proposições que julgar como correspondentes.",
        imagem: "img3m1endo",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
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
            descricao: "Hipotálamo",
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
            descricao: "Adenoipófise",
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
            descricao: "Neuroipófise",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1endo",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "O hipotálamo (representado em I), consiste em uma região do encéfalo que desempenha um importante papel na integração entre os sistemas nervoso e endócrino. Ao receber informações trazidas dos nervos, secreta hormônios que atuam sobre a hipófise.<br/>A hipófise, por sua vez, é uma glândula constituída por duas porções:<br/>Adenoipófise (representada em II), localizada na porção anterior, produz e libera no sangue diversos hormônios, inclusive os chamados hormônios tróficos, que estimulam o funcionamento de outras glândulas endócrinas. Contudo, a liberação dos hormônios da adenoipófise é estimulada por hormônios liberadores e suprimida por hormônios inibidores do hipotálamo.<br/>Neuroipófise (representada em III), localizada na porção posterior, armazena e libera hormônios produzidos no hipotálamo.",
      },
      {
        id: 225,
        escolhida: "não",
        grupo: "8",
        modelo: "3",
        enunciado:
          "As figuras e as alternativas abaixo caracterizam três das principais glândulas endócrinas do corpo humano. Analise as imagens e as alternativas em texto e, acerca do sistema endócrino, forme pares com as alternativas propostas, estabelecendo correspondência entre a figura e sua respectiva caraterística.",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3aendo",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Produz hormônios tróficos que estimulam outras glândulas",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3bendo",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Estimula e mantém os processos metabólicos",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3cendo",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Regula a taxa de glicose na corrente sanguínea",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeedback1m3",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "Glândula hipófise, conhecida como “glândula-mestra” por apresentar como uma de suas funções a regulação do funcionamento de outras glândulas endócrinas, por meio da liberação de hormônios tróficos como o TSH, ACTH, FSH e LH. Essa função é exercida por sua porção anterior, denominada adenoipófise.<br/>Glândula tireoide, na qual os principais hormônios produzidos são a tri-iodotironina (T3) e a tiroxina (T4), cuja função fundamental consiste em estimular e manter os processos metabólicos. Além destes, outro importante hormônio da tireoide é a calcitonina, responsável por reduzir a concentração de cálcio no sangue.<br/>Pâncreas, consiste em uma glândula mista (endócrina e exócrina). Em sua função endócrina, produz os hormônios insulina (responsável por reduzir a quantidade de glicose no sangue) e glucagon (responsável por aumentar a quantidade de glicose no sangue).",
      },
      {
        id: 226,
        escolhida: "não",
        grupo: "8",
        modelo: "3",
        enunciado:
          "As figuras e as alternativas abaixo caracterizam três das principais glândulas endócrinas do corpo humano. Analise as imagens e as alternativas em texto e, acerca do sistema endócrino, forme pares com as alternativas propostas, estabelecendo correspondência entre a figura e sua respectiva caraterística.",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3aendo",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Produz catecolaminas, glicocorticoides e mineralocorticoides",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3bendo",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Produz estrógeno e progesterona",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3cendo",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Produz andrógenos",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeedback2m3",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "Glândula suprarrenal, formada pelo córtex, que produz hormônios cuja função inclui a regulação dos níveis de sódio, potássio e água no organismo (mineralocorticoides) e hormônios que auxiliam na manutenção da glicemia (glicocorticoides); e pela medula, cuja função principal é produzir hormônios do tipo catecolaminas, como a adrenalina (hormônio que promove reações de alerta em situações de estresse) e noradrenalina (hormônio que regula a pressão arterial).<br/>Ovário, consiste na gônada feminina. Produz o hormônio estrógeno, que promove a maturação dos órgãos reprodutores, estimula o crescimento da mucosa uterina e desenvolve e mantem as características sexuais secundárias femininas; e o hormônio progesterona, que completa a preparação da mucosa uterina, preparando-a para uma possível gravidez, além de estimular o desenvolvimento das glândulas mamárias.<br/>Testículo, consiste na gônada masculina. Produz hormônios andrógenos (testosterona), responsável por estimular a espermatogênese (produção de espermatozoides) e pelo desenvolvimento e manutenção das características sexuais secundárias masculinas.",
      },
    ];
  }
}
