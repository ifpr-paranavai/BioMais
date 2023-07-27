import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG5 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 158,
        escolhida: "não",
        grupo: "5",
        modelo: "1",
        enunciado:
          "O sistema genital humano é composto de órgãos externos e internos. Na figura abaixo, encontra-se representada a anatomia externa da genitália masculina. Sob este aspecto, analise a figura e, com base em seus conhecimentos, determine as estruturas I, II e III por meio de toques nos pares com as alternativas correspondentes.",
        imagem: "img1m1repro",
        legendaImagem:
          "Imagem: Adaptada de Wumingbai, Domínio Público, via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
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
            descricao: "Glande: extremidade do pênis com grande sensibilidade",
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
              "Corpo do pênis: formado pelos corpos esponjoso e cavernoso",
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
            descricao: "Escroto: bolsa onde se localizam os testículos",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1repro",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Wumingbai, Domínio Público, via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A glande do pênis (representada em I) está localizada em sua extremidade, e consiste em uma região aumentada com grande sensibilidade ao estímulo sexual. O corpo do pênis possui três massas de tecido erétil: dois corpos cavernosos, localizados nas laterais, e um corpo esponjoso, localizado medialmente ao redor da uretra. O escroto consiste em um saco musculocutâneo situado na base do pênis, entre as coxas, que contém os testículos (gônadas masculinas) e o epidídimo.",
      },
      {
        id: 159,
        escolhida: "não",
        grupo: "5",
        modelo: "1",
        enunciado:
          "O pudendo feminino (anteriormente chamado de vulva) consiste na parte externa do sistema genital feminino, conforme representado na figura abaixo. Sob este aspecto, analise a figura e as indicações numeradas, e determine as estruturas I, II e III, por meio de toques nos pares com as alternativas.",
        imagem: "img2m1repro",
        legendaImagem:
          "Imagem: Adaptada de Fyrstinnen, Creative Commons BY-SA 4.0, via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
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
            descricao: "Clitóris: órgão com sensibilidade ao estímulo sexual",
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
              "Lábios vaginais: pregas que delimitam a entrada vaginal",
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
            descricao: "Óstio vaginal: abertura da vagina",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1repro",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Fyrstinnen, Creative Commons BY-SA 4.0, via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O clitóris (representado em I) consiste em um órgão de cerca de 1 centímetro composto por tecido erétil e diversos nervos e vasos sanguíneos, sensível o estímulo sexual, sendo capaz de aumentar e se encher de sangue, ficando intumescido durante a excitação da mulher.<br/>Os lábios – maiores e menores – (representado em II), são dobras/pregas que delimitam a entrada vaginal. Os lábios maiores, localizados mais externamente, se estendem paralelamente desde a região inferior do púbis até as proximidades do períneo e ânus. Internamente, os lábios menores são duas pregas mais delicadas que delimitam a entrada da vagina.<br/>O óstio vaginal, consiste na abertura da vagina, localizado no vestíbulo vaginal. Internamente, se a mulher ainda for virgem, o orifício da vagina é parcialmente recoberto pelo hímen, uma membrana mucosa que se rompe no primeiro ato sexual, até então com função desconhecida.",
      },
      {
        id: 160,
        escolhida: "não",
        grupo: "5",
        modelo: "1",
        enunciado:
          "O sistema genital feminino compõe-se de órgãos e estruturas situados internamente e externamente ao corpo da mulher. Na figura abaixo, encontra-se representado o aparelho genital interno da mulher. Sob este aspecto, analise a figura e as indicações, e determine as estruturas I, II e III por meio de toque nos pares com as alternativas correspondentes.",
        imagem: "img3m1repro",
        legendaImagem:
          "Imagem: Adaptada de Jmarchn, Creative Commons BY-SA 3.0, via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
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
            descricao: "Ovário: gônada feminina",
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
            descricao: "Útero: local de implantação do óvulo e gestação",
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
            descricao: "Vagina: tubo de comunicação entre pudendo e útero",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1repro",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Jmarchn, Creative Commons BY-SA 3.0, via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os ovários (representado em I) são duas estruturas do sistema genital feminino, consistindo em gônadas, que consistem em estruturas ovoides com cerca de 3 cm. São responsáveis pela produção de gametas (ovócitos secundários) e hormônios femininos.<br/>O útero (representado em II) é um órgão muscular oco serve como parte da via para o espermatozoide depositado na vagina alcance a tuba uterina. Além disso, também é o local de implantação de um óvulo fertilizado, desenvolvimento do feto durante a gestação e trabalho de parto.<br/>A vagina (representada em III) é um tubo de paredes fibromusculares, como cerca de 10 cm de comprimento, que vai do pudendo até o cérvix uterino (base do útero). É o receptáculo do pênis durante o ato sexual, bem como a saída para o fluxo menstrual e da passagem do bebê no parto normal.",
      },
      {
        id: 165,
        escolhida: "não",
        grupo: "5",
        modelo: "3",
        enunciado:
          "O conhecimento científico sobre a reprodução humana vem garantindo às pessoas a possibilidade de controlar conscientemente sua reprodução. As alternativas abaixo remetem a diferentes métodos para se evitar uma gravidez indesejada. Com base em seus conhecimentos, analise as imagens e as informações e determine as correspondências por meio de toques nos pares.",
        legendaImagem:
          "Imagens:  Adaptadas de Pikisuperstar, via Freepik.com. Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3arepro",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "DIU: ação inflamatória",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3brepro",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Coito interrompido: ação natural de controle",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img4m3crepro",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Pílula: ação hormonal",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeedback1m3repro",
        feedBackLegendaImagem:
          "Imagem:  Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O coito interrompido consiste em uma ação natural de controle, visando interromper o coito antes do momento da ejaculação (retirar o pênis da vagina). É um método pouco eficiente pois as secreções masculinas eliminadas antes da ejaculação podem conter espermatozoides.<br/>O Dispositivo Intrauterino (DIU) consiste em um dispositivo implantado no útero (por um médico), que comumente causa uma inflamação na região, atraindo macrófagos que destroem embriões que tentam se implantar na mucosa.<br/>A pílula anticoncepcional consiste em um método contraceptivo oral de ação hormonal, contendo hormônios sintéticos (estrógeno e progesterona), que deve ser ingerido todos os dias em um período de 21 a cada ciclo menstrual, o que inibe a secreção de FSH e LH, impedindo a ovulação.",
      },
      {
        id: 166,
        escolhida: "não",
        grupo: "5",
        modelo: "3",
        enunciado:
          "As figuras e as alternativas abaixo remetem a algumas fases do ciclo ovariano, em que os folículos passam por estágios de desenvolvimento ao longo do ciclo, sob a ação hormonal. Com base em seus conhecimentos, analise as imagens e as alternativas e determine as correspondências, por meio de toques nos pares.",
        legendaImagem:
          "Imagens: Adaptadas de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  Disponíveis aqui.",
        pares: [
          {
            id: 1,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3arepro",
            idPar: 2,
          },
          {
            id: 2,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao:
              "Folículo maduro: contém o ovócito II pronto para ovulação",
            idPar: 1,
          },
          {
            id: 3,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3brepro",
            idPar: 4,
          },
          {
            id: 4,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Ovulação: ovócito II liberado para a tuba uterina",
            idPar: 3,
          },
          {
            id: 5,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "img5m3crepro",
            idPar: 6,
          },
          {
            id: 6,
            corBorda: "#F0E68C",
            desabilitar: false,
            descricao: "Corpo-lúteo: folículo rompido que produz hormônios",
            idPar: 5,
          },
        ],
        feedBackImagem: "imgfeedback2m3repro",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Na puberdade feminina, a cada 28 dias (ciclo menstrual) um folículo primário (conjunto de ovócito primário e células foliculares) amadurece, de modo que o ovócito termina a meiose I e passa a ser chamado de ovócito secundário, constituindo o folículo maduro.<br/>Por volta do 14º dia do ciclo, o folículo maduro está cheio de líquido em seu interior, causando sua ruptura e a libertação do ovócito secundário, processo denominado ovulação.<br/>Após a ovulação, a “cicatriz” do folículo desenvolve-se, passando a ser chamada de corpo-lúteo, uma estrutura rica em luteína, um carotenoide de coloração amarela. O corpo-lúteo, então, passa a produzir hormônios, sobretudo progesterona, a fim de preparar a parede do útero para receber um possível embrião.",
      },
    ];
  }
}
