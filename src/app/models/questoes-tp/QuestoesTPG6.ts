import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG6 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 178,
        escolhida: "não",
        grupo: "6",
        modelo: "1",
        enunciado:
          "Os membros inferiores se ligam ao esqueleto axial por meio do cíngulo dos membros inferiores, também chamado de cintura pélvica, formado por um par de ossos (esquerdo e direito), cada um resultante da fusão de três ossos da região pélvica. A cintura pélvica juntamente com o osso sacro, formam a pelve, popularmente conhecida como bacia. Analise e figura abaixo e as alternativas propostas e, por meio de toque nos pares, associe as proposições correspondentes acerca do cíngulo dos membros inferiores.",
        imagem: "img1m1esq",
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
            descricao: "Ílio",
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
            descricao: "Púbis",
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
            descricao: "Ísquio",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os membros inferiores se ligam ao esqueleto axial por meio do cíngulo dos membros inferiores, também chamado de cintura pélvica, formado por um par de ossos (esquerdo e direito), cada um resultante da fusão de três ossos da região pélvica: o osso ílio (representado em I), o osso púbis (representado em II) e o osso ísquio (representado em III). A cintura pélvica juntamente com o osso sacro, formam a pelve, popularmente conhecida como bacia.",
      },
      {
        id: 179,
        escolhida: "não",
        grupo: "6",
        modelo: "1",
        enunciado:
          "A caixa torácica consiste em um conjunto de ossos (esterno, costelas e vértebras torácicas) que protegem os órgãos internos do tórax. Com auxílio dos músculos intercostais e diafragma, as costelas se movimentam e possibilitam o aumento e diminuição do volume interno da caixa torácica, auxiliando na inspiração e expiração. Sob este enfoque, analise a figura abaixo e por meio de toque nos pares, associe as proposições correspondentes acerca dos ossos da caixa torácica.",
        imagem: "img2m1esq",
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
            descricao: "Costelas verdadeiras",
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
            descricao: "Costelas falsas",
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
            descricao: "Costelas flutuantes",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os seis primeiros pares de costelas, unem-se por cartilagens ao osso esterno, localizado no meio do peito, sendo chamadas de costelas verdadeiras (representadas em I). Os quatro pares seguintes são mais curtos e suas extremidades prendem-se a cartilagens que se conectam, sendo que estas costelas são denominadas costelas falsas (representadas em II). Os dois últimos pares de costelas terminam em pontas livres e, por isso, são chamadas costelas flutuantes (representadas em III).",
      },
      {
        id: 180,
        escolhida: "não",
        grupo: "6",
        modelo: "1",
        enunciado:
          "Os ossos do crânio constituem um tipo de osso plano, sendo fino e achatado, cujas junções (articulações) são denominadas suturas, caracterizando o tipo fibrosa (ossos articulados por tecido conjuntivo fibroso) e de sinartrose (conferindo imobilidade). A figura abaixo indica três ossos planos do crânio. Analise a figura e as alternativas e, por meio de toque nos pares, associe as proposições correspondentes.",
        imagem: "img3m1esq",
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
            descricao: "Frontal",
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
            descricao: "Parietal",
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
            descricao: "Occiptal",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3feedbackm1esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os ossos do crânio constituem um tipo de osso plano, sendo fino e achatado, cujas junções (articulações) são denominadas suturas, caracterizando o tipo fibrosa (ossos articulados por tecido conjuntivo fibroso) e de sinartrose (conferindo imobilidade). Dentre os ossos que constituem o crânio (ossos que protegem o encéfalo), destacam-se: um osso frontal, dois parietais, dois temporais, um occipital, um esfenoide e um etmoide.",
      },
      {
        id: 181,
        escolhida: "não",
        grupo: "6",
        modelo: "1",
        enunciado:
          "A face humana consiste na região frontal da cabeça, onde se localizam os olhos, o nariz e a boca. Os ossos que compõem essa região, são classificados como ossos da face e, compõem os ossos da cabeça, assim como os ossos do crânio (que protegem o encéfalo). A figura abaixo indica três ossos da face. Analise a figura e as alternativas e, por meio de toque nos pares, associe as proposições correspondentes.",
        imagem: "img4m1esq",
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
            descricao: "Zigomático",
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
            descricao: "Maxila",
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
            descricao: "Mandíbula",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img4feedbackm1esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A face humana consiste na região frontal da cabeça, onde se localizam os olhos, o nariz e a boca. Os ossos que compõem essa região, são classificados como ossos da face e, compõem os ossos da cabeça, assim como os ossos do crânio. Os ossos da face são constituídos por: dois nasais, duas maxilas, dois zigomáticos, uma mandíbula, dois lacrimais, dois palatinos, duas conchas nasais inferiores e um vômer.",
      },
      {
        id: 185,
        escolhida: "não",
        grupo: "6",
        modelo: "3",
        enunciado:
          "A coluna vertebral apresenta curvaturas normais nas regiões cervical, torácica, lombar e sacral, que aumentam a resistência da coluna, ajudam manter o equilíbrio e reduzem o risco de fraturas nas vértebras. Contudo, existem condições em que essas curvaturas estão alteradas, caracterizando uma patologia da coluna vertebral. Com base nas informações, analise as imagens e as alternativas abaixo e, por meio de toque nos pares, associe as proposições correspondentes.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3aesq",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Escoliose",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3besq",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Lordose",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3cesq",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Cifose",
            idPar: 5,
          },
        ],
        feedBackImagem: "img5feedbackm3esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto: "Sem",
      },
      {
        id: 186,
        escolhida: "não",
        grupo: "6",
        modelo: "3",
        enunciado:
          "As articulações no sistema esquelético consistem no local onde os ossos fazem contato, possibilitando, ou não, a movimentação. As figuras presentes nas alternativas abaixo consistem em representações de articulações do tipo estrutural sinovial e funcional diartrose. Com base nas informações e em seus conhecimentos, analise as imagens e as alternativas abaixo e, por meio de toque nos pares, associe as proposições correspondentes.",
        legendaImagem:
          "Imagens: Adaptadas de OpenStax College, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3aesq",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Pivô. Ex: articulação atlantoaxial (pescoço)",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3besq",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Dobradiça. Ex: articulação úmero-ulnar (cotovelo)",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img6m3cesq",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Sela. Ex: articulação do trapezoide carpal e metacarpo do polegar",
            idPar: 5,
          },
        ],
        feedBackImagem: "img6feedbackm3esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de OpenStax College, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "As articulações representadas na questão consistiram nos tipos: pivô (representado em (a)), dobradiça (representada em (b)) e sela representada em (c)).<br/><br/>Pivô ou trocoide: a face arredondada ou pontiaguda de um osso se articula com um anel formado parcialmente por outro osso e parcialmente por um ligamento, permitindo a rotação em torno de seu próprio eixo longitudinal. Exemplo: articulação atlantoaxial, que permite que a cabeça vire de um lado a outro (movimento uniaxial).<br/>Dobradiça ou gínglimo: a face convexa de um osso se encaixa na face côncava de outro osso, permitindo o movimento em torno de um único eixo, possibilitando apenas flexão e extensão (movimento uniaxial). Exemplo: articulação úmero-ulnar (cotovelo) e fêmoro-patelar (joelho).<br/>Sela ou de renda: a face articular de um osso tem formato de sela e a face articular do outro osso se encaixa na “sela”, permitindo movimentos de flexão-extensão e abdução-adução (biaxial). Exemplo: articulação entre o trapezoide carpal (punho) e o metacarpo do polegar.",
      },
      {
        id: 187,
        escolhida: "não",
        grupo: "6",
        modelo: "3",
        enunciado:
          "As articulações no sistema esquelético consistem no local onde os ossos fazem contato, possibilitando, ou não, a movimentação. As figuras presentes nas alternativas abaixo consistem em representações de articulações do tipo estrutural sinovial e funcional diartrose. Com base nas informações e em seus conhecimentos, analise as imagens e as alternativas abaixo e, por meio de toque nos pares, associe as proposições correspondentes.",
        legendaImagem:
          "Imagens: Adaptadas de OpenStax College, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3aesq",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Esferoide. Ex: articulação coxofemoral (quadril)",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3besq",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Condiloide. Ex: articulações radio-carpais (punho)",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img7m3cesq",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Plana. Ex: articulações intercarpais e intertarsais",
            idPar: 5,
          },
        ],
        feedBackImagem: "img6feedbackm3esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de OpenStax College, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "As articulações representadas na questão consistiram nos tipos: esferoide (representada em (d)), condiloide (representada em (e)) e plana (representada em (f)).<br/>Esferoide ou bola e soquete: superfície redonda como uma bola de um osso que se encaixa em uma depressão em forma de copo de outro osso, permitindo movimentos de flexão-extensão, abdução-adução e rotação (triaxial). Exemplo: articulação coxofemoral (quadril) e escapulo-umeral (ombro).<br/>Condiloide ou elipsoide: a projeção convexa oval de um osso se encaixa em uma depressão oval de outro osso, permitindo movimentos de flexão-extensão e abdução-adução (movimento biaxial). Exemplo: articulações radio-carpais (punho).<br/>Plana ou deslizante: as faces articulares dos ossos são planas ou discretamente curvas. Esse tipo de articulação pode possibilitar movimentos flexão-extensão e abdução-adução entre as superfícies planas dos ossos, mas também são capazes de fazer rotação umas com as outras. Se fizerem dois tipos de movimentos, são consideradas biaxiais, se fizerem três, triaxiais. Exemplo: articulações intercarpais e intertarsais.",
      },
    ];
  }
}
