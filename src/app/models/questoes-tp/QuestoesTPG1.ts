import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesTPG1 {
  public questoesToquePares;

  getQuestoes() {
    return this.questoesToquePares;
  }

  constructor() {
    this.questoesToquePares = [
      {
        id: 0,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "As glândulas salivares são responsáveis por produzir a saliva, uma secreção que atua no processo de digestão e na garantia da saúde bucal. Dentre essas glândulas, algumas são maiores e outras menores. Os três principais pares de glândulas maiores estão representados na figura abaixo e sua nomenclatura remete à região em que elas se encontram na cavidade bucal. De acordo com os seus conhecimentos sobre o assunto e com base nas indicações da imagem, determine quais são estas glândulas por meio de toques nos pares.",
        imagem: "img1m1sd",
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
            descricao: "Glândula Parótida.",
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
            descricao: "Glândula Submandibular.",
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
            descricao: "Glândula Sublingual.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img1m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "As glândulas salivares são responsáveis por produzir a saliva, uma secreção que atua no processo de digestão e na garantia da saúde bucal. Na imagem, encontram-se representadas as glândulas salivares maiores, que ocorrem em pares no corpo humano e são responsáveis pela maior parte da produção de saliva. São elas, as glândulas parótidas (representada em I), glândulas submandibulares (representada em II) e glândulas sublinguais (representada em III).",
      },
      {
        id: 1,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Durante a alimentação, o processo de digestão envolve estruturas distintas presentes ao longo do trato digestório. A figura abaixo representa os primeiros momentos deste processo. Na estrutura I, ocorre a desintegração mecânica dos alimentos, o início da digestão química e a deglutição. Na estrutura II, ocorre a passagem do bolo alimentar para a estrutura III, que por meio de peristaltismo levará o alimento ao estômago. Com base nessas informações, determine as estruturas indicadas na imagem, selecionando os respectivos pares.",
        imagem: "img2m1sd",
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
            descricao: "Boca.",
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
            descricao: "Faringe.",
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
            descricao: "Esôfago.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img2m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Na boca (estrutura I), ocorre a desintegração mecânica dos alimentos (por meio da mastigação), o início da digestão química (por meio da amilase salivar) e a deglutição. Na faringe (estrutura II), ocorre a passagem do bolo alimentar para o esôfago (estrutura III), que por meio de peristaltismo (movimentos involuntários) levará o alimento ao estômago.",
      },
      {
        id: 2,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Na figura abaixo estão representadas estruturas consideradas anexas ao trato gastrointestinal, pois não entram em contato direto com o alimento ingerido. A estrutura I é a maior glândula do corpo humano, cuja principal função digestiva é a produção de bile, enquanto a estrutura II armazena esta substância. A estrutura III é responsável pela produção de substâncias como o suco pancreático, a insulina e o glucagon. Com base nas informações, determine quais são estas estruturas indicadas na imagem, selecionando os respectivos pares.",
        imagem: "img3m1sd",
        legendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
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
            descricao: "Fígado.",
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
            descricao: "Vesícula Biliar.",
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
            descricao: "Pâncreas.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img3m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
        feedBackTexto:
          "As estruturas representadas na imagem consistem em órgãos anexos ao sistema digestório. O fígado (estrutura I) é a maior glândula do corpo humano, cuja principal função digestiva é a produção de bile, enquanto a vesícula biliar (estrutura II) armazena esta substância. O pâncreas (estrutura III) é responsável pela produção de substâncias como o suco pancreático (auxiliador na digestão), a insulina e o glucagon (hormônios envolvidos na regulação da taxa de glicose no sangue).",
      },
      {
        id: 3,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Durante a alimentação, o alimento sofre o processo de mastigação e início da digestão na boca, deglutição, passagem da faringe ao esôfago e, por meio do peristaltismo, o alimento é levado à estrutura I, onde o bolo alimentar se converte em quimo por meio da digestão. Em seguida, na estrutura II o quimo passa por outro processo digestivo e se torna quilo. Na estrutura III, após a absorção de água e nutrientes restantes, o quilo é convertido em bolo fecal que será eliminado pelo ânus. De acordo com as informações, determine as estruturas I, II e III, selecionando os respectivos pares propostos nas alternativas.",
        imagem: "img4m1sd",
        legendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
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
            descricao: "Estômago.",
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
            descricao: "Intestino Delgado.",
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
            descricao: "Intestino Grosso.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img4m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
        feedBackTexto:
          "Os órgãos representados na figura são locais fundamentais para o processo de digestão. No estômago (estrutura I), o bolo alimentar (alimento mastigado com saliva) se converte em quimo por meio da ação do suco gástrico no processo de digestão. Em seguida, o quimo é conduzido ao intestino delgado (estrutura II) e passa por outro processo digestivo, pela ação do suco entérico, suco pancreático e bile, e torna-se quilo, onde se inicia o processo de absorção de nutrientes. No intestino grosso (estrutura III), após a absorção de água e nutrientes restantes, o quilo é convertido em bolo fecal que será eliminado pelo ânus.",
      },
      {
        id: 4,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "As estruturas indicadas na imagem são importantes no trato gastrointestinal pois desempenham funções específicas, necessárias durante o processo digestivo. A estrutura I é responsável pela defecação. II produz uma secreção exócrina o suco pancreático que é liberado no duodeno e por secreção endócrina a insulina e glucagon, que entram no sangue. III realiza a quimificação do bolo alimentar, digerindo grande parte das proteínas e pequena quantidade de gordura. Sob esse aspecto, determine quais são essas estruturas, selecionando os pares propostos nas alternativas.",
        imagem: "img5m1sd",
        legendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
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
            descricao: "Ânus.",
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
            descricao: "Pâncreas.",
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
            descricao: "Estômago.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img5m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
        feedBackTexto:
          "O ânus (estrutura I) é responsável pela defecação, ou seja, eliminação das fezes. O pâncreas (estrutura II) produz uma secreção exócrina (ou seja, que é secretada em superfície livre no organismo por meio de ductos) o suco pancreático que é liberado no duodeno, e por secreção endócrina a insulina e glucagon, que entram na corrente sanguínea. O estômago (estrutura III) realiza a quimificação do bolo alimentar, digerindo grande parte das proteínas e pequena quantidade de gordura.",
      },
      {
        id: 5,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "A deglutição é o ato de engolir alimentos e ocorre em uma sequência de fatos, envolvendo estruturas presentes na cavidade oral. A figura abaixo representa algumas dessas estruturas. Neste processo, o bolo alimentar é colocado e pressionado entre a parte superior da língua com a estrutura I.  A estrutura II serve como sinalizador da passagem de alimento e a estrutura III se eleva, fechando a ligação com o nariz e facilitando a passagem do bolo alimentar através da faringe para o esôfago. Com base nas informações e em seus conhecimentos, determine quais são as estruturas I, II e III, formando os respectivos pares com as alternativas.",
        imagem: "img6m1sd",
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
            descricao: "Palato duro.",
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
            descricao: "Úvula.",
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
            descricao: "Palato mole.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img6m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O alimento, ao ser mastigado e misturado com a saliva, se torna o bolo alimentar, que para a deglutição (ato de engolir) é colocado e pressionado entre a parte superior da língua e o palato duro (estrutura I).  A úvula (estrutura II) serve como sinalizador da passagem de alimento e o palato mole (estrutura III) se eleva, fechando a ligação com o nariz e facilitando a passagem do bolo alimentar através da faringe para o esôfago.",
      },
      {
        id: 6,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Na imagem abaixo estão identificadas algumas estruturas presentes na cavidade oral humana. I é uma estrutura que auxilia no processo de mastigação (guiando e moldando o alimento), deglutição (direcionando o alimento para ser engolido) e está relacionada ao paladar (percepção de sabores) e à fala. As estruturas representadas por II são ricas em linfócitos que auxiliam na defesa do organismo contra microrganismos causadores de doenças. A estrutura III é constituída por cartilagem e sua principal função é evitar a entrada de alimentos do sistema digestório no aparelho respiratório. A partir das informações e de seus conhecimentos, determine as estruturas I, II e III, formando pares com as alternativas.",
        imagem: "img7m1sd",
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
            descricao: "Língua.",
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
            descricao: "Tonsilas.",
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
            descricao: "Epiglote.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img7m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A língua (estrutura I) é uma estrutura que auxilia no processo de mastigação (guiando e moldando o alimento), deglutição (direcionando o alimento para ser engolido) e está relacionada ao paladar (percepção de sabores) e à fala. As tonsilas, representadas por II são estruturas ricas em linfócitos que auxiliam na defesa do organismo contra microrganismos causadores de doenças. A epiglote (estrutura III) é constituída por cartilagem e sua principal função é evitar a entrada de alimentos do sistema digestório no aparelho respiratório, por meio de um mecanismo de “tampa” que “abre e fecha” a glote.",
      },
      {
        id: 7,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Os mamíferos têm distintos tipos de dentes adaptados às diferentes formas de alimentação. Nos seres humanos, podemos encontrar dentes incisivos (cuja função é cortar alimentos), caninos (rasgar ou perfurar alimentos), pré-molares e molares (cortar, esmagar e triturar). Três deles estão indicados na figura abaixo. Como base nas informações e em seus conhecimentos, determine os tipos de dentes I, II e III representados na figura, selecionando os respectivos pares.",
        imagem: "img8m1sd",
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
            descricao: "Dentes incisivos.",
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
            descricao: "Dentes molares.",
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
            descricao: "Dentes pré-molares.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img8m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Nos seres humanos, podemos encontrar dentes incisivos (representados em I), cuja função é cortar alimentos; dentes caninos, que atuam ao rasgar ou perfurar alimentos (não indicados na figura, são as “presas” ao lado dos dentes incisivos); pré-molares (representados por III) e molares (representados por II), cujas funções são cortar, esmagar e triturar os alimentos.",
      },
      {
        id: 8,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "A estrutura destacada nas cores verde, azul e roxa na figura se refere à faringe, estrutura localizada na parte posterior às cavidades do nariz e da boca, estendendo-se para baixo atrás da laringe. A faringe pode ser dividida em três partes anatômicas. A primeira exerce função exclusivamente respiratória, enquanto a segunda e a terceira exercem tanto função respiratória como digestória, por compartilharem passagem comum para o ar e alimento. Com base nas informações e em seus conhecimentos, determine as partes anatômicas indicadas na figura, formando pares com as alternativas propostas.",
        imagem: "img9m1sd",
        legendaImagem:
          "Imagem: Adaptada de Patrick J. Lynch, ilustrador médico, Creative Commons BY 2.5, via Wikimedia Commons. Disponível aqui.",
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
            descricao: "Nasofaringe.",
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
            descricao: "Orofaringe.",
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
            descricao: "Hipofaringe.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img9m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Patrick J. Lynch, ilustrador médico, Creative Commons BY 2.5, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A faringe pode ser dividida em três partes anatômicas: A primeira, destacada em verde, exerce função exclusivamente respiratória e é chamada de nasofaringe. A segunda, destacada em azul, é chamada orofaringe. A terceira, destacada em roxa, é chamada hipofaringe ou laringofaringe. A orofaringe e a hipofaringe exercem tanto função respiratória como digestória, por compartilharem passagem comum para o ar e alimento.",
      },
      {
        id: 9,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "O refluxo é um problema digestivo que se caracteriza pelo retorno do conteúdo gástrico para o esôfago e adjacências. Esse problema é ocasionado, sobretudo, devido ao mau fechamento dos esfíncteres esofágicos. Assim, as secreções refluem do estômago para o esôfago (refluxo gastresofágico) e do esôfago para estruturas como nariz, seios da face, garganta e ouvidos (refluxo laringofaríngeo). Até chegar à faringe, o conteúdo refluído passa pelas estruturas I, II e III, respectivamente, apresentadas na figura. Determine quais são tais estruturas, formando pares com as alternativas propostas.",
        imagem: "img10m1sd",
        legendaImagem:
          "Imagem: Adaptada de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponível aqui.",
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
            descricao: "Esfíncter esofágico inferior.",
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
            descricao: "Corpo do esôfago.",
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
            descricao: "Esfíncter esofágico superior.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img10m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "O refluxo é um problema digestivo onde as secreções retornam do estômago para o esôfago (refluxo gastresofágico) e do esôfago para estruturas como nariz, seios da face, garganta e ouvidos (refluxo laringofaríngeo), ocasionado por um mau funcionamento dos esfíncteres esofágicos. Até chegar à faringe, o conteúdo refluído que sai do estômago passa pelo esfíncter esofágico inferior (estrutura I), corpo do esôfago (estrutura II) e esfíncter esofágico superior (estrutura III).",
      },
      {
        id: 10,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Após consultar um médico e receber o diagnóstico, um paciente é informado que possui gastrite autoimune, doença que provoca a destruição das células gástricas presentes nas regiões do fundo e corpo do estômago, poupando apenas a região do antro. Com base nas indicações I, II e III da figura e em seus conhecimentos sobre o assunto, determine as três regiões presentes no estômago, selecionando os pares nas alternativas propostas.",
        imagem: "img11m1sd",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
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
            descricao: "Fundo.",
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
            descricao: "Corpo.",
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
            descricao: "Antro.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img11m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "A gastrite autoimune é um tipo de doença que provoca a destruição das células gástricas presentes nas regiões do fundo (parte I) e corpo (parte II) do estômago, poupando apenas a região do antro (parte III).",
      },
      {
        id: 11,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Na porção inicial e final do estômago, são encontradas duas estruturas denominadas esfíncteres. O esfíncter é geralmente formado por um músculo de fibras circulares concêntricas, que controla o grau de amplitude de um determinado orifício. Com base nestas informações e em seus conhecimentos, determine as estruturas I, II e III selecionando os pares nas alternativas propostas.",
        imagem: "img12m1sd",
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
            descricao: "Esfíncter esofágico inferior.",
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
            descricao: "Estômago.",
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
            descricao: "Esfíncter pilórico.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img12m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os esfíncteres são estruturas geralmente formado por um músculo de fibras circulares concêntricas, que controla o grau de amplitude de um determinado orifício. Na porção inicial do estômago é encontrado o esfíncter esofágico inferior (representado por I), abertura por onde o bolo alimentar entra no estômago (representado por II). Ao ser digerido, o bolo alimentar passa a se chamar quimo e é conduzido ao duodeno pela abertura denominada esfíncter pilórico (representado por III).",
      },
      {
        id: 12,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "O intestino delgado é um longo tubo encontrado no sistema digestório, sendo responsável pela maior parte da digestão e absorção de nutrientes da nossa alimentação. Sobre essa parte do sistema digestório, selecione os pares nas alternativas que indicam corretamente o nome das três porções do intestino delgado.",
        imagem: "img13m1sd",
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
            descricao: "Duodeno.",
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
            descricao: "Jejuno.",
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
            descricao: "Íleo.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img13m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O intestino delgado é um longo tubo encontrado no sistema digestório, dividido em três partes. A porção inicial corresponde aos primeiros 25 centímetros do intestino e é chamada de duodeno (representado por I); a segunda porção do intestino corresponde de três a cinco metros de comprimento e é denominada jejuno (representada por II) e a terceira e última porção é denominada íleo (representada por III) e mede cerca de 1 a 1,5 metro.",
      },
      {
        id: 13,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "O intestino grosso consiste na parte final do tubo digestivo e tem como função principal a absorção de água e sais minerais determinando, assim, a consistência do bolo fecal. O intestino grosso é dividido anatômica e funcionalmente em três partes: ceco, cólon e reto. Na figura abaixo, as indicações I, II e III consistem nas subdivisões do colón, além da porção sigmóide, que não se encontra identificada. Com base na figura e em seus conhecimentos, determine tais estruturas por meio da formação de pares com as alternativas propostas.",
        imagem: "img14m1sd",
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
            descricao: "Cólon ascendente.",
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
            descricao: "Cólon transverso.",
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
            descricao: "Cólon descendente.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img14m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O intestino grosso é dividido anatômica e funcionalmente em três partes: ceco, cólon e reto. O cólon, por sua vez, é segmentado em quatro frações:  O cólon ascendente (representado por I), o cólon transverso (representado por II), o cólon descendente (representado por III) e o cólon sigmóide (não indicado, mas localizado entre o cólon descendente e o reto).",
      },
      {
        id: 14,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "O intestino grosso consiste na parte final do tubo digestivo e tem como função principal a absorção de água e sais minerais. Na figura abaixo, estão representadas estruturas do intestino grosso sendo I um tubo vermiforme que parte da primeira parte do intestino grosso, II a porção que recebe o quilo do intestino delgado e III a porção final do cólon. Baseando-se na imagem e em seus conhecimentos, determine a nomenclatura das estruturas indicadas, formando pares com as alternativas propostas.",
        imagem: "img15m1sd",
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
            descricao: "Apêndice.",
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
            descricao: "Ceco.",
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
            descricao: "Cólon sigmóide.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img15m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Na figura, estão representadas estruturas do intestino grosso, sendo que o apêndice (representado por I) consiste em um tubo vermiforme que parte da primeira parte do intestino grosso. O ceco (representado por II) é a porção que recebe o quilo do intestino delgado e o cólon sigmóide (representado por III) a porção final do cólon.",
      },
      {
        id: 15,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Na figura abaixo, encontram-se indicadas estruturas presentes no intestino grosso, de modo que I corresponde à sua última porção, responsável pela eliminação das fezes pelo esfíncter anal, II indica a segunda porção do cólon e III se refere à última porção do cólon.  Com base nas informações e em seus conhecimentos, determine a nomenclatura das estruturas indicadas, formando pares com as alternativas propostas.",
        imagem: "img16m1sd",
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
            descricao: "Reto.",
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
            descricao: "Cólon transverso.",
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
            descricao: "Cólon sigmóide.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img16m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O intestino grosso é dividido anatômica e funcionalmente em três partes: ceco, cólon e reto. O reto (representado em I) corresponde à sua última porção do intestino grosso, responsável pela eliminação das fezes pelo esfíncter anal. O cólon é dividido anatomicamente em cólon ascendente, transverso, descendente e sigmóide, de modo que a estrutura II consiste no cólon transverso, que indica a segunda porção do cólon, e III se refere ao cólon descendente, que é a última porção do cólon.",
      },
      {
        id: 16,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "A figura abaixo apresenta uma estrutura diretamente relacionada à bile, secreção produzida pelo fígado. Em I a secreção é recebida e direcionada à II, que então poderá seguir dois caminhos: a estrutura III onde será armazenada, ou diretamente ao duodeno para auxiliar a digestão de lipídios. Com base nas informações e em seus conhecimentos, determine as partes I, II e III da estrutura representada, formando pares com as alternativas propostas.",
        imagem: "img17m1sd",
        legendaImagem:
          "Imagem: Adaptada de LukesAnatomy, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponível aqui.",
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
            descricao: "Ductos hepáticos.",
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
            descricao: "Colédoco.",
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
            descricao: "Vesícula.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img17m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de LukesAnatomy, Creative Commons BY-SA 3.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A estrutura representada na imagem refere-se à vesícula biliar e seus ductos. Nos ductos hepáticos (representados por I), a secreção (bile) é recebida do fígado, onde é produzida, e direcionada ao colédoco (representado por II), que então poderá seguir dois caminhos: a vesícula (representada por III) onde será armazenada, ou diretamente ao duodeno para auxiliar a digestão de lipídios.",
      },
      {
        id: 17,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "O suco pancreático é uma substância de grande importância na digestão de proteínas, carboidratos, triglicerídeos e ácidos nucléicos e é produzido pela estrutura I indicada na figura. A estrutura II é conectada ao ducto colédoco da vesícula biliar e tem como função conduzir a secreção à estrutura III, onde ocorre, de fato, a digestão dos macronutrientes citados. Com base nas informações e em seus conhecimentos, determine as estruturas I, II e III por meio da formação de pares com as alternativas propostas.",
        imagem: "img18m1sd",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui e aqui.",
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
            descricao: "Pâncreas.",
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
            descricao: "Ductos pancreáticos.",
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
            descricao: "Duodeno.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img18m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui e aqui.",
        feedBackTexto:
          "O suco pancreático é uma substância de grande importância na digestão de proteínas, carboidratos, triglicerídeos e ácidos nucléicos e é produzido pelo pâncreas (estrutura I). Os ductos pancreáticos (representados por II) se conectam ao ducto colédoco da vesícula biliar e tem como função conduzir a secreção ao duodeno (estrutura III), onde ocorre, de fato, a digestão dos macronutrientes citados.",
      },
      {
        id: 18,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "O paladar permite-nos reconhecer o gosto dos alimentos, bem como a sua textura. As estruturas que desempenham essas funções, encontradas principalmente na língua, são as saliências representadas em I na figura. Nessas saliências, situam-se as estruturas representadas por II, constituídas principalmente por células sensoriais quimiorreceptoras, que partem da abertura representada por III. Com base no enunciado e em seus conhecimentos, determine quais são as estruturas I, II e III, formando pares com as alternativas propostas.",
        imagem: "img19m1sd",
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
            descricao: "Papila gustativa.",
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
            descricao: "Botão gustativo.",
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
            descricao: "Poro gustativo.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img19m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O paladar permite-nos reconhecer o gosto dos alimentos, bem como a sua textura. As estruturas que desempenham essas funções, encontradas principalmente na língua, são as papilas gustativas (representadas em I). Nessas saliências, situam-se os botões gustativos (representados por II), constituídas principalmente por células sensoriais quimiorreceptoras, que partem de aberturas denominadas poros gustativos (representados por III).",
      },
      {
        id: 19,
        escolhida: "não",
        grupo: "1",
        modelo: "1",
        enunciado:
          "Durante a digestão do quimo na primeira porção do intestino delgado, secreções são lançadas nesta região a fim de promover a digestão química. Na figura, encontram-se indicadas as estruturas que produzem estas substâncias. Assim, a secreção produzida em I tem como função a emulsificação de lipídeos, em II a digestão de proteínas, carboidratos, triglicerídeos e ácidos nucleicos e a secreção produzida em III completa a digestão de carboidratos, proteínas e lipídeos. Com base nas informações e em seus conhecimentos, determine as substâncias produzidas nas estruturas I, II e III por meio da seleção de pares nas alternativas propostas.",
        imagem: "img20m1sd",
        legendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
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
            descricao: "Bile.",
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
            descricao: "Suco pancreático.",
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
            descricao: "Suco entérico.",
            imagem: "",
            idPar: 5,
          },
        ],
        feedBackImagem: "img20m1sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de LadyofHats, Domínio público, via Wikimedia Commons.  Disponível aqui.",
        feedBackTexto:
          "A secreção produzida no fígado (estrutura I) é denominada bile tem como função, sobretudo, a emulsificação de lipídeos. No pâncreas (estrutura II), o suco pancreático é produzido, sendo responsável pela digestão de proteínas, carboidratos, triglicerídeos e ácidos nucleicos. A secreção produzida pelo duodeno (estrutura III) trata-se do suco entérico, que completa a digestão de carboidratos, proteínas e lipídeos.",
      },
        {
          id: 25,
          escolhida: "não",
          grupo: "1",
          modelo: "3",
          enunciado:
            "Durante a alimentação, as três estruturas representadas e/ou destacadas por cores nas imagens abaixo realizam funções importantes no sistema digestório humano. Relacione-as com as alternativas propostas, por meio da formação de pares.",
          legendaImagem:
            "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
          pares: [
            {
              id: 1,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img21am3sd",
              idPar: 2,
            },
            {
              id: 2,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Produção e secreção de saliva, que desemboca na cavidade oral.",
              idPar: 1,
            },
            {
              id: 3,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img21bm3sd",
              idPar: 4,
            },
            {
              id: 4,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Trituração do alimento, início da digestão por amilase salivar e deglutição.",
              idPar: 3,
            },
            {
              id: 5,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img21cm3sd",
              idPar: 6,
            },
            {
              id: 6,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Fechamento da laringe permitindo a passagem do alimento para o esôfago.",
              idPar: 5,
            },
          ],
          feedBackImagem: "imgfeedback21",
          feedBackLegendaImagem:
            "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
          feedBackTexto:
            "As glândulas salivares são responsáveis pela produção e secreção de saliva, que desemboca na cavidade oral. Na boca, ocorre a trituração do alimento, início da digestão por amilase salivar e deglutição. A epiglote tem como função o fechamento da laringe permitindo a passagem do alimento para o esôfago (impedindo que o alimento entre no sistema respiratório).",
        },
        {
          id: 26,
          escolhida: "não",
          grupo: "1",
          modelo: "3",
          enunciado:
            "Durante o processo de digestão, em condições normais, o alimento segue uma sequência anatômica definida: boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, reto e ânus. Nas imagens, estão indicadas a faringe, esôfago e estômago. Sob esse aspecto, com base em seus conhecimentos, relacione em pares as estruturas representadas nas figuras com as informações que condizem à função de cada uma delas.",
          legendaImagem:
            "Imagens: Adaptadas de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponíveis aqui e aqui.",
          pares: [
            {
              id: 1,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img22am3sd",
              idPar: 2,
            },
            {
              id: 2,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Peristaltismo e secreção de muco permitindo o transporte do alimento até o estômago.",
              idPar: 1,
            },
            {
              id: 3,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img22bm3sd",
              idPar: 4,
            },
            {
              id: 4,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Produção de suco gástrico, digestão química e mecânica dos alimentos e conversão de bolo alimentar em quimo.",
              idPar: 3,
            },
            {
              id: 5,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img22cm3sd",
              idPar: 6,
            },
            {
              id: 6,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Passagem de ar e alimentos, se comunicando com boca, cavidade nasal, esôfago e laringe.",
              idPar: 5,
            },
          ],
          feedBackImagem: "imgfeedback22",
          feedBackLegendaImagem:
            "Imagem: Adaptada de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponível aqui.",
          feedBackTexto:
            "Na faringe, ocorre a passagem de ar e alimentos, se comunicando com boca, cavidade nasal, esôfago e laringe. No esôfago, ocorre peristaltismo e secreção de muco permitindo o transporte do alimento até o estômago. No estômago, ocorre produção de suco gástrico, digestão química e mecânica dos alimentos e conversão de bolo alimentar em quimo.",
        },
        {
          id: 27,
          escolhida: "não",
          grupo: "1",
          modelo: "3",
          enunciado:
            "Durante o processo de digestão, em condições normais, o alimento segue uma sequência anatômica definida: boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, reto e ânus.  Nas imagens, estão indicados o intestino delgado, intestino grosso e ânus. Sob esse aspecto, com base em seus conhecimentos, relacione em pares as estruturas representadas nas figuras com as informações que condizem à função de cada uma delas.",
          legendaImagem:
            "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
          pares: [
            {
              id: 1,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img23am3sd",
              idPar: 2,
            },
            {
              id: 2,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Eliminação de fezes.",
              idPar: 1,
            },
            {
              id: 3,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img23bm3sd",
              idPar: 4,
            },
            {
              id: 4,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Produção e secreção de suco entérico, digestão do quimo e absorção de nutrientes.",
              idPar: 3,
            },
            {
              id: 5,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img23cm3sd",
              idPar: 6,
            },
            {
              id: 6,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao:
                "Armazenamento de resíduos não aproveitados, absorção de água e sais minerais.",
              idPar: 5,
            },
          ],
          feedBackImagem: "imgfeedback23",
          feedBackLegendaImagem:
            "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
          feedBackTexto:
            "O intestino delgado é responsável pela produção e secreção de suco entérico, digestão do quimo e absorção de nutrientes. O intestino grosso realiza o armazenamento de resíduos não aproveitados, absorção de água e sais minerais. O ânus tem função de eliminação de fezes.",
        },
        {
          id: 28,
          escolhida: "não",
          grupo: "1",
          modelo: "3",
          enunciado:
            "As glândulas salivares, a língua, os dentes, o fígado, o pâncreas e a vesícula biliar são considerados órgãos/estruturas acessórios ou anexos ao sistema digestório e desempenham importantes funções em nosso organismo. Nesse sentido, relacione em pares as figuras referentes às estruturas anexas com as informações que julgar mais adequadas, em relação à função de cada uma delas.",
          legendaImagem:
            "Imagens: Adaptadas de Macrovector, via Freepik.com. Disponíveis aqui.",
          pares: [
            {
              id: 1,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img24am3sd",
              idPar: 2,
            },
            {
              id: 2,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Produção de bile.",
              idPar: 1,
            },
            {
              id: 3,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img24bm3sd",
              idPar: 4,
            },
            {
              id: 4,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Produção de suco pancreático.",
              idPar: 3,
            },
            {
              id: 5,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img24cm3sd",
              idPar: 6,
            },
            {
              id: 6,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Armazenamento de bile.",
              idPar: 5,
            },
          ],
          feedBackImagem: "imgfeedback24",
          feedBackLegendaImagem:
            "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
          feedBackTexto:
            "O fígado é um importante órgão no corpo humano que desempenha variadas funções e, no processo de digestão, atua mediante à produção de bile, responsável pela emulsificação de lipídios. A vesícula biliar tem como função o armazenamento da bile, produzida pelo fígado. O pâncreas tem como função no sistema digestório a produção de suco pancreático, responsável pela digestão de proteínas, carboidratos, triglicerídeos e ácidos nucleicos.",
        },
        {
          id: 29,
          escolhida: "não",
          grupo: "1",
          modelo: "3",
          enunciado:
            "Durante os processos digestivos, o alimento inicialmente digerido na boca e deglutido passa do esôfago ao estômago pelo esfíncter esofágico inferior. Após a digestão química inicial no estômago (proteínas), o conteúdo estomacal é conduzido ao duodeno, através da abertura do esfíncter pilórico. No duodeno, ocorre a digestão química de proteínas, carboidratos e lipídios, por meio da secreção de bile, suco pancreático e suco entérico. Com base nas informações, relacione cada imagem com a informação mais adequada, formando pares com as alternativas propostas.",
          legendaImagem:
            "Imagens: Adaptadas de Servier Medical Art, (Creative Commons 3.0).  Disponíveis aqui.",
          pares: [
            {
              id: 1,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img25am3sd",
              idPar: 2,
            },
            {
              id: 2,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Passagem de bolo alimentar.",
              idPar: 1,
            },
            {
              id: 3,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img25bm3sd",
              idPar: 4,
            },
            {
              id: 4,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Passagem do quimo.",
              idPar: 3,
            },
            {
              id: 5,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "img25cm3sd",
              idPar: 6,
            },
            {
              id: 6,
              corBorda: "#F0E68C",
              desabilitar: false,
              descricao: "Digestão química.",
              idPar: 5,
            },
          ],
          feedBackImagem: "imgfeedback25",
          feedBackLegendaImagem:
            "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
          feedBackTexto:
            "No esfíncter esofágico inferior, ocorre a passagem de bolo alimentar. No esfíncter pilórico, ocorre a passagem do quimo. No duodeno, ocorre a digestão química duodenal.",
        },
    ];
  }
}