import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG10 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 258,
        escolhida: "não",
        grupo: "10",
        modelo: "1",
        enunciado:
          "A figura abaixo demonstra estruturas relacionadas ao sentido do paladar. Analise a imagem, as indicações e as alternativas propostas e, com base em seus conhecimentos sobre este sentido, determine as proposições que julgar correspondentes, por meio de toques nos pares.",
        imagem: "img1m1sen",
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
            descricao: "Papila gustativa",
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
            descricao: "Botão gustativo",
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
            descricao: "Poro gustativo",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "O paladar permite-nos reconhecer o gosto dos alimentos, bem como a sua textura. As estruturas que desempenham essas funções, encontradas principalmente na língua, são as papilas gustativas (representadas em I). Nessas saliências, situam-se os botões gustativos (representados por II), constituídas principalmente por células sensoriais quimiorreceptoras, que partem de aberturas denominadas poros gustativos (representados por III).",
      },
      {
        id: 259,
        escolhida: "não",
        grupo: "10",
        modelo: "1",
        enunciado:
          "A figura abaixo demonstra o epitélio olfativo, região responsável pela percepção de cheiro do sentido do olfato. Analise a figura e as indicações e, com base em seus conhecimentos sobre o tema, determine as proposições que julgar correspondentes, por meio de toques nos pares.",
        imagem: "img2m1sen",
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
            descricao: "Célula mitral",
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
            descricao: "Quimiorreceptor",
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
            descricao: "Cílios olfatórios",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura demonstra, respectivamente, uma célula mitral (representada em I), um quimiorreceptor (representado em II) e cílios olfatórios (representado em III).<br/>As moléculas dispersas no ar, ao adentrarem a cavidade nasal, difundem-se no muco e atingem os prolongamentos sensoriais (cílios olfatórios) dos neurônios receptores olfativos (quimiorreceptores), gerando impulsos nervosos que são conduzidos até o corpo celular da célula olfatória e em seguida seu axônio, que se comunica com o bulbo olfatório.<br/>No bulbo olfatório, há neurônios chamados células mitrais, cujos dendritos formam um novelo esférico denominado glomérulo, que são estruturas sinápticas que recebem os impulsos das células receptoras olfativas. Após ser processada inicialmente no bulbo, a informação é enviada para diferentes regiões do cérebro.",
      },
      {
        id: 260,
        escolhida: "não",
        grupo: "10",
        modelo: "1",
        enunciado:
          "A figura abaixo ilustra algumas estruturas da orelha, órgão responsável pela audição e equilíbrio do corpo. Analise a figura com as indicações e as alternativas e, com base em seus conhecimentos sobre este órgão, determine as proposições que julgar correspondentes, por meio de toques nos pares.",
        imagem: "img3m1sen",
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
            descricao: "Tímpano",
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
            descricao: "Cóclea",
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
            descricao: "Nervo auditivo",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "As estruturas indicadas na figura são, respectivamente, o tímpano (representado em I), a cóclea (representada em II) e o nervo auditivo (representado em III).<br/>Na percepção do som, o estímulo sonoro atinge a membrana do tímpano e a faz vibrar movimentando os ossículos martelo bigorna e estribo, que atuam como amplificadores e transmissores das vibrações para a orelha interna.<br/>Localizada na orelha interna, a cóclea é uma estrutura em forma de concha cheia de líquido e é responsável pela audição, enquanto os canais semicirculares (juntamente com duas câmaras abaixo deles) são responsáveis pelo equilíbrio.<br/>Por intermédio do líquido coclear, as vibrações fazem com que as células sensoriais identifiquem o estímulo sonoro, gerando impulsos nervosos que são conduzidos pelo nervo auditivo ao centro de audição do córtex cerebral",
      },
      {
        id: 261,
        escolhida: "não",
        grupo: "10",
        modelo: "1",
        enunciado:
          "A figura abaixo ilustra parte visível de um olho humano, responsável pelo sentido da visão. Analise a figura e suas indicações juntamente com as alternativas e, com base em seus conhecimentos sobro esse órgão dos sentidos, determine as proposições que julgar correspondentes, por meio de toques nos pares.",
        imagem: "img4m1sen",
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
            descricao: "Pupila",
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
            descricao: "Íris",
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
            descricao: "Esclera",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img4m1sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura indica, respectivamente, a pupila (representada em I), a íris (representada em II) e a esclera (representada em III).<br/>A esclera é a camada mais externa, formada por tecido conjuntivo resistente, possuindo cor branca. A íris consiste no disco colorido do olho, contendo um orifício central de tamanho regulável, a pupila, por onde a luz penetra no globo ocular",
      },
      {
        id: 262,
        escolhida: "não",
        grupo: "10",
        modelo: "1",
        enunciado:
          "A figura abaixo ilustra algumas estruturas da orelha, órgão responsável pela audição e equilíbrio do corpo. Analise a figura com as indicações e as alternativas e, com base em seus conhecimentos sobre este órgão, determine as proposições que julgar correspondentes, por meio de toques nos pares.",
        imagem: "img5m1sen",
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
            descricao: "Pavilhão auditivo",
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
            descricao: "Meato acústico externo",
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
            descricao: "Tuba auditiva",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img5m1sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura demonstra, respectivamente as estruturas: pavilhão auditivo (representado em I), meato acústico externo (representado em II) e tuba auditiva (representada em III).<br/>O pavilhão auditivo, conhecido popularmente como orelha, funciona como uma concha acústica, captando os sons e direcionando para outra estrutura, o meato acústico externo, que consiste em um canal auditivo que se estende do pavilhão auricular até o tímpano. O epitélio do canal auditivo possui células secretoras de cera que retém partículas de poeira e microrganismos, protegendo as estruturas no interior da orelha.<br/>A tuba auditiva é um canal flexível que comunica a orelha média com a garganta, e sua função é equilibrar a pressão no interior da orelha de acordo com o meio externo. fim",
      },
      {
        id: 266,
        escolhida: "não",
        grupo: "10",
        modelo: "3",
        enunciado:
          "As alternativas abaixo apresentam imagens e informações acerca de três órgãos do sentido. Analise as figuras e as alternativas e, com base em seus conhecimentos, relacione a ilustração com sua respectiva característica.",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img1m3asen",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Região sensorial do paladar",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img1m3bsen",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Região sensorial do olfato",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img1m3csen",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Região sensorial do tato",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeed1m3sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura demonstra, respectivamente, regiões sensoriais dos órgãos dos sentidos: paladar, olfato e tato.",
      },
    ];
  }
}
