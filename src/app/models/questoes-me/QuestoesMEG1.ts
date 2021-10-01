import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG1 {
  questoesMultiplaEscolha = [];

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 20,
        escolhida: "não",
        grupo: "1",
        modelo: "2",
        enunciado:
          "O sistema digestório é formado por diversos órgãos e estruturas que atuam juntos para conseguir retirar dos alimentos os nutrientes necessários para o nosso corpo. Contudo, cada um desses órgãos e estruturas são responsáveis por realizar funções específicas no sistema digestório. A respeito das funções desempenhadas no sistema digestório, determine todas as alternativas que julgar verdadeiras.",
        alternativa1:
          "Ingestão e trituração do alimento e liberação de substâncias no trato gastrointestinal.",
        alternativa2: "Digestão química e mecânica.",
        alternativa3: "Absorção de nutrientes, água e sais minerais.",
        alternativa4: "Eliminação de restos não aproveitados.",
        alternativa5: "Realização de hematose.",
        alternativa6: "Produção de anticorpos.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "imgfeedback41",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "Dentre as funções desempenhadas pelo sistema digestório, destacam-se:<br/>- Ingestão e trituração do alimento e liberação de substâncias no trato gastrointestinal.<br/>- Digestão química e mecânica.<br/>- Absorção de nutrientes, água e sais minerais.<br/>- Eliminação de restos não aproveitados.",
      },
      {
        id: 21,
        escolhida: "não",
        grupo: "1",
        modelo: "2",
        enunciado:
          "Os seres humanos possuem quatro tipos de dentes. Os dentes localizados na frente da boca possuem formato que facilita cortar o alimento. Nas laterais destes, temos dentes pontiagudos que permitem com que o alimento seja “rasgado”. Os dentes localizados mais ao fundo da boca exercem uma função trituradora de alimentos. Sob esse aspecto, determine todas as alternativas corretas que correspondam à dentição humana.",
        alternativa1: "Dente Incisivo.",
        alternativa2: "Dente Canino.",
        alternativa3: "Dente Pré-molar.",
        alternativa4: "Dente Molar.",
        alternativa5: "Dente Decisivo.",
        alternativa6: "Dente Pré-canino.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "imgfeedback42",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Os dentes localizados na frente da boca possuem formato que facilita cortar o alimento e são denominados incisivos. Nas laterais destes, temos dentes pontiagudos que permitem com que o alimento seja “rasgado”, os quais são denominados caninos. Os dentes localizados mais ao fundo da boca exercem uma função trituradora de alimentos, sendo que os dois primeiros após os dentes caninos são chamados pré-molares, enquanto os três últimos são os molares.",
      },
      {
        id: 22,
        escolhida: "não",
        grupo: "1",
        modelo: "2",
        enunciado:
          "As glândulas salivares maiores são exócrinas e responsáveis pela produção e secreção da saliva. Com base em seus conhecimentos, determine todas as alternativas que correspondam a estas glândulas e sua respectiva localização.",
        alternativa1:
          "Parótida: localizada entre o ângulo da mandíbula e à base do crânio.",
        alternativa2:
          "Submandibular: localizada na parte inferior da mandíbula.",
        alternativa3: "Sublingual: localizada no assoalho da boca.",
        alternativa4: "Subtraqueal: localizada na parte posterior da traqueia.",
        alternativa5: "Ptialina: localizada nos palatos da cavidade bucal.",
        alternativa6:
          "Epimandibular: localizada na parte superior da mandíbula.",
        alternativaCorreta: "1,2,3",
        feedBackImagem: "imgfeedback43",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "As glândulas salivares maiores são exócrinas e responsáveis pela produção e secreção da saliva. São encontradas em três pares, sendo elas: Parótida: localizada entre o ângulo da mandíbula e à base do crânio. Submandibular: localizada na parte inferior da mandíbula. Sublingual: localizada no assoalho da boca.",
      },
      {
        id: 23,
        escolhida: "não",
        grupo: "1",
        modelo: "2",
        enunciado:
          "A Síndrome de Sjögren é uma doença autoimune que pode afetar as glândulas salivares causando boca seca. Sabemos que a saliva desempenha funções específicas na cavidade oral, importantes para o processo digestivo. Sob esse aspecto, pacientes com esta doença poderão apresentar dificuldade na execução de que processos na cavidade oral? Assinale todas as alternativas que julgar verdadeiras.",
        alternativa1:
          "Umedecimento da cavidade oral e facilitação da deglutição.",
        alternativa2: "Início da digestão do amido por meio da ptialina.",
        alternativa3: "Umedecimento de alimentos secos.",
        alternativa4: "Neutralização de substâncias ácidas.",
        alternativa5: "Digerir proteínas e lipídeos.",
        alternativa6: "Produzir hormônios para o controle da digestão.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "imgfeedback44",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A Síndrome de Sjögren é uma doença autoimune que pode afetar as glândulas salivares causando boca seca, devido à baixa produção de saliva. Tendo em vista as importantes funções da saliva para o sistema digestório, pacientes com esta síndrome poderão apresentar dificuldades em processos como:<br/>- Umedecimento da cavidade oral e facilitação da deglutição.<br/>- Início da digestão do amido por meio da ptialina.<br/>- Umedecimento de alimentos secos.<br/>- Neutralização de substâncias ácidas.",
      },
      {
        id: 24,
        escolhida: "não",
        grupo: "1",
        modelo: "2",
        enunciado:
          "Os sucos digestivos são substâncias secretadas por glândulas de vários órgãos do sistema digestivo que permitem a transformação de complexas moléculas alimentares em moléculas mais simples. Sob esse aspecto, assinale todas as alternativas que correspondam a estas substâncias.",
        alternativa1: "Saliva.",
        alternativa2: "Suco gástrico.",
        alternativa3: "Suco pancreático.",
        alternativa4: "Suco entérico.",
        alternativa5: "Suco hematopoiético.",
        alternativa6: "Suor.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Os sucos digestivos são substâncias secretadas por glândulas de vários órgãos do sistema digestivo que permitem a transformação de complexas moléculas alimentares em moléculas mais simples. São eles: a saliva, secretada pelas glândulas salivares; o suco gástrico, secretado pelas glândulas gástricas da parede estomacal; o suco pancreático, secretado pelo pâncreas; e o suco entérico, produzido e secretado pelas células do duodeno.",
      },
      {
        id: 30,
        escolhida: "não",
        grupo: "1",
        modelo: "4",
        enunciado:
          "No sistema digestório, após a passagem do alimento pelo esôfago por movimentos peristálticos, o bolo alimentar entra no estômago, passa por processos digestivos e é conduzido ao duodeno. No GIF, são representadas etapas desde a entrada do bolo alimentar no estômago até sua saída. Determine os fatores representados no GIF, respectivamente, e assinale a alternativa correspondente.",
        imagem: "gif51m4sd",
        legendaImagem: "Imagem: <http://cna.weebly.com/6-ano.html>",
        alternativa1:
          "Abertura do esfíncter pilórico, abertura da cárdia, digestão no estômago e no duodeno.",
        alternativa2:
          "Abertura da cárdia, peristaltismo do estômago, secreção de suco gástrico, digestão e abertura do esfíncter pilórico.",
        alternativa3:
          "Digestão, liberação de suco entérico, peristaltismo no estômago, secreção de bile e abertura da cárdia.",
        alternativa4:
          "Digestão, formação de fezes, movimentos peristálticos no esôfago e eliminação de bolo fecal.",
        alternativaCorreta: "2",
        feedBackImagem: "imgfeedback51",
        feedBackLegendaImagem: "Imagem: <http://cna.weebly.com/6-ano.html>",
        feedBackTexto:
          "A animação demonstra, respectivamente, a abertura da cárdia, que consiste na região onde se localiza o esfíncter esofágico inferior, responsável por regular a passagem de bolo alimentar do esôfago para o estômago; o peristaltismo do estômago, que consiste em movimentos involuntários que auxiliam a digestão mecânica e na mistura do bolo alimentar no estômago com as substâncias secretadas por este órgão; a  secreção de suco gástrico, substância que contém enzimas (responsáveis pela digestão de proteínas) e uma secreção ácida (ácido clorídrico) capaz de amolecer e esterilizar o bolo alimentar e ativar as enzimas para que efetivem suas funções digestivas; a digestão, convertendo o bolo alimentar em quimo; e a abertura do esfíncter pilórico, que possibilita a passagem do quimo do estômago ao intestino delgado.",
      },
      {
        id: 31,
        escolhida: "não",
        grupo: "1",
        modelo: "4",
        enunciado:
          "O GIF abaixo representa o bolo alimentar sendo conduzido através de um trecho no corpo do esôfago. Este tipo de condução, permite que o alimento chegue ao estômago mesmo que uma pessoa esteja de cabeça para baixo. Determine que mecanismo possibilita a condução do alimento nesta estrutura e assinale a alternativa correta.",
        imagem: "gif52m4sd",
        legendaImagem:
          "Imagem: <http://bioblogcuriosidades.blogspot.com/2010_09_03_archive.html>",
        alternativa1: "Lei da gravidade.",
        alternativa2: "Contrações voluntárias no esôfago.",
        alternativa3: "Peristaltismo do esôfago.",
        alternativa4: "Refluxo gastroesofágico.",
        alternativaCorreta: "3",
        feedBackImagem: "imgfeedback52",
        feedBackLegendaImagem:
          "Imagem: <http://bioblogcuriosidades.blogspot.com/2010_09_03_archive.html>",
        feedBackTexto:
          "A animação demonstra o peristaltismo do esôfago, que consiste em movimentos involuntários propulsivos no trato gastrointestinal, ou seja, que conduzem o alimento para adiante dentro do sistema digestório.",
      },
      {
        id: 32,
        escolhida: "não",
        grupo: "1",
        modelo: "4",
        enunciado:
          "O GIF abaixo ilustra a secreção de três substâncias no duodeno, que são produzidas regiões específicas do sistema digestório. Tais secreções estão representadas por “pontinhos” verdes, amarelos e vermelhos. Outro processo que se observa é a conversão de moléculas maiores em moléculas menores. Sob esse aspecto, determine a alternativa que corresponda aos fatores representados pelo GIF.",
        imagem: "gif53m4sd",
        legendaImagem: "Imagem: <http://cnesds.blogspot.com/2015/05/>",
        alternativa1:
          "Secreção de suco gástrico, bile, pepsina e digestão no estômago.",
        alternativa2:
          "Secreção de ptialina, suco entérico e suco pancreático e digestão no intestino grosso.",
        alternativa3:
          "Secreção de bile, suco pancreático e suco entérico, e digestão no intestino delgado.",
        alternativa4:
          "Secreção de bile, suco pancreático, suco gástrico e digestão no estômago.",
        alternativaCorreta: "3",
        feedBackImagem: "imgfeedback53",
        feedBackLegendaImagem: "Imagem: <http://cnesds.blogspot.com/2015/05/>",
        feedBackTexto:
          "A animação demonstra, por meio dos “pontinhos” verdes, amarelos e vermelhos, respectivamente, a secreção de bile (produzida pelo fígado), suco pancreático (produzido pelo pâncreas) e suco entérico (produzido por células da mucosa do intestino delgado). Além disso, se evidencia na animação a digestão no intestino delgado, por meio da representação da conversão de moléculas maiores em moléculas menores.",
      },
      {
        id: 33,
        escolhida: "não",
        grupo: "1",
        modelo: "4",
        enunciado:
          "O GIF demonstra o processo de ingestão do bolo alimentar, que passa pela boca, faringe e é conduzido para o esôfago, facilitado por uma estrutura presente no início da laringe, acima da glote. Contudo, algumas vezes, essa estrutura pode falhar por algum motivo ocasionando o engasgo, causado pela obstrução da traqueia. Sob esse aspecto, determine a estrutura mencionada e sua função, assinalando a alternativa mais adequada.",
        imagem: "gif54m4sd",
        legendaImagem: "Imagem: <https://biopesquisa.wordpress.com/2016/08/>",
        alternativa1:
          "Faringe: abertura da glote, evitando entrada de ar no esôfago.",
        alternativa2:
          "Laringe: fechamento do esôfago, evitando a passagem do alimento no sistema respiratório.",
        alternativa3:
          "Esfíncter: fechamento da glote, proporcionando a passagem de ar no sistema respiratório.",
        alternativa4:
          "Epiglote: fechamento da glote, evitando a entrada do bolo alimentar no sistema respiratório.",
        alternativaCorreta: "4",
        feedBackImagem: "imgfeedback54",
        feedBackLegendaImagem:
          "Imagem: <https://biopesquisa.wordpress.com/2016/08/>",
        feedBackTexto:
          "A animação demonstra o processo de ingestão do bolo alimentar, que passa pela boca, faringe e é conduzido para o esôfago, facilitado pela epiglote, cuja função é o fechamento da glote, evitando a entrada do bolo alimentar no sistema respiratório.",
      },
      {
        id: 34,
        escolhida: "não",
        grupo: "1",
        modelo: "4",
        enunciado:
          "O GIF abaixo ilustra de forma animada a ingestão de uma rosquinha, caindo diretamente no estômago (o que não ocorre dessa forma devido ao processo de mastigação e digestão inicial na boca). Porém, ao chegar no estômago, a animação demonstra que a rosquinha é imersa em um líquido, onde é parcialmente digerida. Assim, podemos afirmar que o líquido simulado na animação é um suco digestivo. Determine qual a nomenclatura estabelecida para esta substância e assinale a alternativa correta.",
        imagem: "gif55m4sd",
        legendaImagem:
          "Imagem: <https://wifflegif.com/gifs/477786-animation-domination-high-def-gif>",
        alternativa1: "Suco gástrico.",
        alternativa2: "Suco entérico.",
        alternativa3: "Suco pancreático.",
        alternativa4: "Suco salivar.",
        alternativaCorreta: "1",
        feedBackImagem: "imgfeedback55",
        feedBackLegendaImagem:
          "Imagem: <https://wifflegif.com/gifs/477786-animation-domination-high-def-gif>",
        feedBackTexto:
          "A animação ilustra a ingestão de uma rosquinha, caindo diretamente no estômago (o que não ocorre dessa forma devido ao processo de mastigação e digestão inicial na boca). Porém, ao chegar no estômago, a animação demonstra que a rosquinha é imersa em um líquido, onde é parcialmente digerida. Esse líquido remete ao suco gástrico, secreção liberada no estômago com fins de digestão, constituído por ácido clorídrico e enzimas.",
      },
      {
        id: 35,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A imagem abaixo representa uma estrutura pequena com o formato de uma pera, situada abaixo do fígado e ao lado direito do estômago. Trata-se de um tipo de saco onde é armazenado uma substância de grande importância para o processo digestivo. A respeito desta substância, determina a alternativa correta.",
        imagem: "img61m5sd",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        alternativa1:
          "Substância produzida pelo fígado, armazenada na vesícula biliar e secretada no duodeno para a emulsificação de lipídios.",
        alternativa2:
          "Substância produzida pelos rins, armazenada na vesícula biliar e secretada no pâncreas para a produção de toxinas.",
        alternativa3:
          "Substância produzida pelo pâncreas, armazenada no fígado e secretada no duodeno para a digestão de carboidratos.",
        alternativa4:
          "Substância produzida pelo duodeno, armazenada no estômago e secretada no fígado para a emulsificação de lipídios.",
        alternativaCorreta: "1",
        feedBackImagem: "img61m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "A bile é uma substância produzida pelo fígado, armazenada na vesícula biliar (estrutura representada na imagem) e é secretada no duodeno para a emulsificação de lipídios.",
      },
      {
        id: 36,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A estrutura representada abaixo corresponde a uma glândula que atua tanto de forma exócrina (produzindo suco pancreático, que contém enzimas digestivas) como endócrina (produzindo hormônios, como a insulina e glucagon). Sob este aspecto, com base em seus conhecimentos, determine a alternativa correta.",
        imagem: "img62m5sd",
        legendaImagem: "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        alternativa1: 
          "Esta estrutura produz os hormônios FSH, estrógeno e progestina, responsáveis pelas características sexuais secundárias femininas.",
        alternativa2:
          "A secreção de bile é realizada por meio desta estrutura, tendo como função a emulsificação de lipídios.",
        alternativa3:
          "A secreção exócrina desta estrutura tem como função a digestão de proteínas, carboidratos, triglicerídeos e ácidos nucléicos.",
        alternativa4:
          "Pacientes com disfunção desta estrutura geralmente apresentam icterícia e hepatite.",
        alternativaCorreta: "3",
        feedBackImagem: "img62m5sd",
        feedBackLegendaImagem: "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto: "A imagem representa o pâncreas. A secreção exócrina desta estrutura, o suco pancreático, é secretada no duodeno e atua no sistema digestório tendo como função a digestão de proteínas, carboidratos, triglicerídeos e ácidos nucléicos.",
      },
      {
        id: 37,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "O órgão representado na imagem produz e secreta substâncias que compõem o suco gástrico, sendo fundamental no processo digestivo. No suco gástrico, podemos encontrar enzimas (responsáveis pela digestão de proteínas) e uma secreção ácida capaz de amolecer e esterilizar o bolo alimentar e ativar as enzimas para que efetivem suas funções digestivas. No que se refere às substâncias digestivas produzidas e secretadas por este órgão, assinale a alternativa correta.",
        imagem: "img63m5sd",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        alternativa1:
          "Produz as substâncias digestivas: maltase, sacarase e ptialina.",
        alternativa2:
          "Produz as substâncias digestivas: pepsina, renina e ácido clorídrico.",
        alternativa3:
          "Produz as substâncias digestivas: ácido clorídrico, lipase e ptialina.",
        alternativa4:
          "Produz as substâncias digestivas: amilase, protease e pepsina.",
        alternativaCorreta: "2",
        feedBackImagem: "img63m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "A figura representa o estômago. Esse órgão produz as substâncias digestivas: pepsina, renina e ácido clorídrico. A pepsina e a renina são enzimas que digerem proteínas, e o ácido clorídrico tem como função amolecer e esterilizar o bolo alimentar e ativar as enzimas para que efetivem suas funções digestivas.",
      },
      {
        id: 38,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A estrutura representada na imagem tem como função exócrina a produção de suco pancreático que é conduzido até o duodeno, onde atua na digestão. Esta secreção contém enzimas para a digestão de moléculas de carboidratos, proteínas, gorduras e ácidos nucleicos. Sabendo disso, assinale a alternativa que corresponda corretamente às enzimas digestivas responsáveis pela digestão destas moléculas, produzidas por esta estrutura.",
        imagem: "img64m5sd",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        alternativa1:
          "Produz as substâncias digestivas: maltase, sacarase e lactase.",
        alternativa2:
          "Produz as substâncias digestivas: suco gástrico e ptialina.",
        alternativa3:
          "Produz as substâncias digestivas: pepsina, renina, sacarase e peptidase.",
        alternativa4:
          "Produz as substâncias digestivas: amilase pancreática, lipase, proteases e nucleases.",
        alternativaCorreta: "4",
        feedBackImagem: "img64m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "A figura representa o pâncreas. Essa glândula produz as substâncias digestivas: amilase pancreática, que quebra o amido que não foi digerido na boca; lipase pancreática, que digere as gorduras em ácidos graxos e glicerol; proteases, que digerem proteínas em polipeptídios e peptídios; e nucleases, que digerem DNA e RNA em nucleotídeos.",
      },
      {
        id: 39,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "Na primeira porção da estrutura ilustrada na figura abaixo, ocorre a secreção de substâncias que compõem o suco entérico, contendo enzimas que complementam a ação das enzimas pancreáticas.  No suco entérico, as enzimas digerem dissacarídeos em monossacarídeos, peptídeos em aminoácidos isolados e nucleotídeos em bases nitrogenadas, fosfatos e pentoses. Com base nestas informações, assinale a alternativa que corresponda corretamente às enzimas produzidas pela estrutura representada na imagem.",
        imagem: "img65m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Produz as substâncias digestivas: maltase, lactase, sacarase, peptidases e nucleotidases.",
        alternativa2:
          "Produz as substâncias digestivas: amilase pancreática, tripsina e nucleases.",
        alternativa3:
          "Produz as substâncias digestivas: maltase, amilase, renina e ácido clorídrico.",
        alternativa4:
          "Produz as substâncias digestivas: ptialina, pepsina e sacarase.",
        alternativaCorreta: "1",
        feedBackImagem: "img65m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A imagem representa o intestino delgado. Este órgão produz as substâncias digestivas: maltase, lactase e sacarase, que são tipos de carboidrases (digerem os dissacarídeos em monossacarídeos), peptidases, que digerem peptídeos em aminoácidos isolados, e as nucleotidases, que digerem nucleotídeos em bases nitrogenadas, fosfatos e pentoses.",
      },
      {
        id: 40,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A estrutura representada na imagem possui cerca de 1,5 m de comprimento e 6 cm de diâmetro e faz parte das porções finais do sistema digestivo, desempenhando funções importantes e possuindo características específicas. Nesse sentido, assinale a alternativa que contemple as características e funções deste órgão.",
        imagem: "img66m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Ausência de bactérias, produção de muco e digestão de proteínas.",
        alternativa2:
          "Absorção de proteínas, produção de bile e suco entérico.",
        alternativa3:
          "Absorção de água e sais minerais, produção de muco e presença de bactérias.",
        alternativa4:
          "Armazenamento de fezes, ausência de bactérias e produção de ptialina.",
        alternativaCorreta: "1",
        feedBackImagem: "img66m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A imagem representa o intestino grosso. Este órgão tem como função a absorção de água e sais minerais, e a produção de muco. Uma característica do intestino grosso é a presença de bactérias, muitas das quais mantém relações de mútuo benefício com os hospedeiros humanos: produzem substâncias úteis ao nosso organismo (como algumas vitaminas) em troca de um habitat favorável ao seu desenvolvimento.",
      },
      {
        id: 41,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A parede intestinal é composta por projeções da mucosa que se aparentam com “rugas” ou “pregas”. As células destas projeções, por sua vez, apresentam projeções microscópicas. Essas projeções, macroscópicas e microscópicas, possuem uma nomenclatura específica e desempenham uma função importante no processo digestivo. Com base neste contexto e em seus conhecimentos, determine a alternativa correta.",
        imagem: "img67m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Essas projeções são chamadas vilosidades e microvilosidades, e são capazes de aumentar a superfície de contato intestinal, ampliando a eficiência da absorção.",
        alternativa2:
          "Essas projeções são úlceras duodenais, que consistem em más formações das paredes intestinais e que requerem tratamento médico.",
        alternativa3:
          "Essas projeções são vilosidades e átomos capazes de diminuir a superfície de contato e a eficiência da absorção intestinal.",
        alternativa4:
          "Essas projeções são pregas estomacais macroscópicas e microscópicas responsáveis pela liberação amilase salivar, diminuindo a eficiência da digestão.",
        alternativaCorreta: "1",
        feedBackImagem: "img67m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Essas projeções são chamadas vilosidades e microvilosidades, e são capazes de aumentar a superfície de contato intestinal, ampliando a eficiência da absorção.",
      },
      {
        id: 42,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A digestão depende de fatores químicos importantes como, por exemplo, o pH, que consiste na escala dos níveis de acidez e alcalinidade de uma solução. Existem três locais do sistema digestório que ocorrem os processos de digestão, e em cada um deles o pH ideal para que estes processos ocorram é diferente. Com base neste contexto e em seus conhecimentos, determine a classificação do pH ideal para a digestão nas estruturas destacadas por cores na figura, na ordem de passagem do alimento pelo sistema digestivo.",
        imagem: "img68m5sd",
        legendaImagem:
          "Imagem: Adaptada de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponível aqui.",
        alternativa1: "Ácido, ácido e neutro.",
        alternativa2: "Neutro, ácido e básico.",
        alternativa3: "Básico, neutro e ácido.",
        alternativa4: "Neutro, básico e ácido.",
        alternativaCorreta: "2",
        feedBackImagem: "img68m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Olek Remesz, Creative Commons BY-SA 2.5, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A digestão depende de fatores químicos importantes como, por exemplo, o pH, que consiste na escala dos níveis de acidez e alcalinidade de uma solução. O pH ideal na boca (representada em rosa) é neutro, o pH ideal para o estômago (representado em laranja) é ácido e o pH ideal no intestino (representado em verde) é básico.",
      },
      {
        id: 43,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "O processo da digestão é controlado pelo sistema nervoso autônomo e também por hormônios. Dentre os quatro hormônios principais envolvidos, três são produzidos pela estrutura representada na imagem. Com base em seus conhecimentos sobre o controle da digestão, assinale a alternativa que corresponda aos hormônios produzidos pela estrutura representada na imagem.",
        imagem: "img69m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1: "Produz os hormônios: gastrina, FSH e testosterona.",
        alternativa2: "Produz os hormônios: insulina e glucagon.",
        alternativa3:
          "Produz os hormônios: secretina, colecistoquinina e inibidor gástrico.",
        alternativa4:
          "Produz os hormônios: gastrina, colecistoquinina e insulina.",
        alternativaCorreta: "3",
        feedBackImagem: "img69m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O processo da digestão é controlado pelo sistema nervoso autônomo e também por hormônios. Dentre os quatro hormônios envolvidos, três são produzidos pelo intestino delgado, sendo eles: secretina, colecistoquinina e inibidor gástrico. O quarto hormônio principal envolvido no controle da digestão é a gastrina, que é produzido por células do estômago.",
      },
      {
        id: 44,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "A estrutura representada na imagem produz e secreta de forma exócrina o suco pancreático, substância que contém enzimas digestivas. Em situações anormais, sobretudo desencadeadas por maus hábitos como o alcoolismo, o pâncreas pode sofrer de um distúrbio denominado pancreatite. Sobre esse distúrbio do sistema digestório, com base em seus conhecimentos, assinale a alternativa que julgar verdadeira.",
        imagem: "img70m5sd",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        alternativa1:
          "As enzimas digestivas pancreáticas são produzidas em uma forma inativa, sendo ativadas apenas no intestino. Contudo, em condições anormais, o pâncreas retém o suco pancreático, cujas enzimas podem lesionar e inflamar o órgão, causando a pancreatite.",
        alternativa2:
          "As enzimas digestivas pancreáticas são produzidas em uma forma ativa, desempenhando sua função no intestino. Contudo, em condições anormais, o excesso de álcool pode ocasionar a formação de nódulos que bloqueiam a circulação sanguínea, causando a pancreatite.",
        alternativa3:
          "Em condições anormais, como no caso do alcoolismo, o pâncreas pode sofrer com a queda de leucócitos em seu interior, o que acarreta na multiplicação de placas bacterianas em seu interior, infeccionando o órgão e causando a pancreatite.",
        alternativa4:
          "Em condições anormais, como no caso do alcoolismo, o pâncreas pode sofrer com a deposição de substâncias insolúveis e minerais que se depositam nos ductos pancreáticos, que formam cristais conhecidos como cálculos, causando a pancreatite.",
        alternativaCorreta: "1",
        feedBackImagem: "img70m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "A estrutura representada na imagem é o pâncreas, que tem como uma de suas funções produzir e secretar de forma exócrina o suco pancreático, que contém enzimas digestivas. As enzimas digestivas pancreáticas são produzidas em uma forma inativa, sendo ativadas apenas no intestino. Contudo, em condições anormais, o pâncreas retém o suco pancreático, cujas enzimas podem lesionar e inflamar o órgão, causando a pancreatite.",
      },
      {
        id: 45,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "O intestino delgado começa no esfíncter pilórico, que o comunica com o estômago, e termina na válvula íleocecal, que se comunica com o intestino grosso. Se esticássemos o intestino delgado de um ser humano em linha reta e o medíssemos, que medida teríamos, aproximadamente? Assinale a alternativa que considerar correta.",
        imagem: "extra1m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1: "2 metros",
        alternativa2: "7 metros",
        alternativa3: "15 metros",
        alternativa4: "20 metros",
        alternativaCorreta: "2",
        feedBackImagem: "extra1m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O intestino delgado começa no esfíncter pilórico, que o comunica com o estômago, e termina na válvula íleocecal, que se comunica com o intestino grosso. Se esticássemos o intestino delgado de um ser humano em linha reta e o medíssemos, ele totalizaria cerca de sete metros.",
      },
      {
        id: 46,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "Diariamente, em condições normais, produzimos entre 1000 a 2000 ml de saliva. Essa secreção é muito importante no processo digestivo, e atua no pH neutro da boca. Sob esse aspecto, com base nas informações e em seus conhecimentos, assinale a alternativa que melhor defina a saliva.",
        imagem: "extra2m5sd",
        legendaImagem:
          "Imagem: Adaptada de Pereru, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "Fluido transparente e viscoso de pH entre 6,8 e 7,2 que é produzido pelas glândulas salivares, mantendo a boca e os lábios constantemente umedecidos. Contém ptialina, um tipo de enzima que inicia a digestão de amido e glicogênio.",
        alternativa2:
          "Fluido transparente e líquido de pH entre 3,2 e 4,2 que é produzido pelas glândulas pituitárias, mantendo a boca e os lábios constantemente umedecidos. Contém pepsina, um tipo de enzima que inicia a digestão de lipídios.",
        alternativa3:
          "Fluido esverdeado e viscoso de pH entre 10,0 a 12,2 que é produzido pelas glândulas salivares, mantendo o esôfago umedecido. Contém ptialina, um tipo de enzima que inicia a digestão de proteínas.",
        alternativa4:
          "Fluido aquoso e transparente de pH entre 1,0 e 2,4 que é produzido pela glândula suprarrenal, mantendo a boca umedecida. Contém ácido clorídrico, um tipo de enzima que inicia a digestão de carboidratos simples.",
        alternativaCorreta: "1",
        feedBackImagem: "extra2m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Pereru, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A saliva é um fluido transparente e viscoso de pH entre 6,8 e 7,2 que é produzido pelas glândulas salivares, mantendo a boca e os lábios constantemente umedecidos. Contém ptialina, um tipo de enzima que inicia a digestão de amido e glicogênio.",
      },
      {
        id: 47,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "O refluxo gastroesofágico é uma patologia caracterizada pelo retorno do conteúdo gástrico para o esôfago e, muitas vezes, para outras estruturas adjacentes. Com base em seus conhecimentos, assinale a alternativa que corresponda ao mecanismo patológico relacionado ao refluxo gastroesofágico.",
        imagem: "extra3m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Quando o esfíncter esofágico inferior não se fecha corretamente, o conteúdo estomacal pode retornar para o esôfago.",
        alternativa2:
          "Quando o esfíncter pilórico não se fecha corretamente, o conteúdo estomacal pode retornar para o esôfago.",
        alternativa3:
          "Quando o esfíncter esofágico superior não se fecha corretamente, o conteúdo estomacal pode retornar para o estômago.",
        alternativa4:
          "Quando o esfíncter pilórico não se fecha corretamente, o conteúdo estomacal pode retornar para o estômago.",
        alternativaCorreta: "1",
        feedBackImagem: "extra3m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O refluxo gastroesofágico é uma patologia caracterizada pelo retorno do conteúdo gástrico para o esôfago e, muitas vezes, para outras estruturas adjacentes. Isso ocorre quando o esfíncter esofágico inferior não se fecha corretamente, levando o conteúdo estomacal a retornar para o esôfago.",
      },
      {
        id: 48,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "O engasgo é uma manifestação do organismo quando um alimento ou objeto toma um caminho errado em nosso corpo. Sob esse aspecto, responda como ocorre o engasgo e por que tossimos quando engasgamos, assinalando a alternativa correspondente.",
        imagem: "extra4m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Ocorre quando o alimento permanece no esôfago e tossimos para “empurrá-lo” para o estômago.",
        alternativa2:
          "Ocorre quando o alimento entra nas vias respiratórias e a tosse é um reflexo para expulsar o alimento.",
        alternativa3:
          "Ocorre quando o alimento entra na nasofaringe e tossimos voluntariamente para que o alimento retorne para a traqueia.",
        alternativa4:
          "Ocorre quando o esfíncter esofágico inferior não se abre e a tosse retorna o alimento ao esôfago.",
        alternativaCorreta: "2",
        feedBackImagem: "extra4m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O engasgo é uma manifestação do organismo quando um alimento ou objeto toma um caminho errado em nosso corpo, ocorrendo quando o alimento entra nas vias respiratórias, de modo que a tosse é um reflexo para expulsar o alimento.",
      },
      {
        id: 49,
        escolhida: "não",
        grupo: "1",
        modelo: "5",
        enunciado:
          "Os dentes são estruturas acessórias ao sistema digestório e tem como função cortar, perfurar, prender e triturar os alimentos. A estrutura dentária é composta por três camadas, conforme indicado na imagem. Sob esse aspecto, com base no contexto e em seus conhecimentos, analise a figura e assinale a alternativa correspondente às camadas I, II e III, respectivamente.",
        imagem: "extra5m5sd",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1: "Esmalte, dentina e polpa.",
        alternativa2: "Polpa, esmalte e dentina.",
        alternativa3: "Dentina, polpa e esmalte.",
        alternativa4: "Esmalte, polpa e dentina.",
        alternativaCorreta: "1",
        feedBackImagem: "extra5m5sd",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A estrutura dentária é composta por três camadas: esmalte (indicado em I), dentina (indicado em II) e polpa (indicado em III).",
      },
      {
        id: 50,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "O processo da digestão é controlado pelo sistema nervoso autônomo e também por hormônios. Os hormônios envolvidos desempenham funções como o estímulo ou inibição da produção e secreção de substâncias, abertura ou fechamento de esfíncteres, aumento ou redução da motilidade dos órgãos, etc. Sob este contexto e com base em seus conhecimentos, assinale a alternativa que corresponda aos hormônios envolvidos no controle da digestão.",
        alternativa1:
          "Gastrina, Secretina, Colecistoquinina e Inibidor Gástrico.",
        alternativa2: "Gastrina, Secretina, Estrógeno e Progestina.",
        alternativa3:
          "Colecistoquinina, Inibidor Gástrico, FSH e Testosterona.",
        alternativa4: "Gastrina, Inibidor Gástrico, Secretina e Estrógeno.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A Gastrina, Secretina, Colecistoquinina e Inibidor Gástrico são hormônios envolvidos no controle da digestão. A gastrina é responsável pelo aumento da motilidade gástrica, estímulo da secreção de suco gástrico (enzimas e ácido clorídrico) no estômago, relaxamento do esfíncter pilórico e contração do esfíncter esofágico inferior. A secretina é responsável por inibir a secreção de suco gástrico quando não há mais necessidade, a diminuição da motilidade intestinal, estimular a produção de bile, a secreção de bicarbonato (aumentando o pH e o tornando ideal para a digestão no intestino) pelo pâncreas e a secreção de suco entérico pelo intestino. A colecistoquinina estimula a secreção de bile e de enzimas do suco pancreático, e também a produção de outro hormônio, o inibidor gástrico, que é responsável pela diminuição das contrações da parede estomacal (para que a transição do quimo seja mais lenta e permaneça mais tempo no duodeno para a digestão).",
      },
      {
        id: 51,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "A gastrina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de alimentos no interior do estômago.  Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
        alternativa1:
          "É produzida no estômago, estimula a secreção de suco gástrico e a eliminação de fezes.",
        alternativa2:
          "É produzida no intestino grosso, contrai a cárdia e relaxa o esôfago.",
        alternativa3:
          "É produzida no estômago, estimula a secreção de suco gástrico, contrai o esfíncter esofágico inferior e relaxa o esfíncter pilórico.",
        alternativa4:
          "É produzida no pâncreas, estimula a secreção de ptialina e inibe a secreção de bile.",
        alternativaCorreta: "3",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A gastrina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de alimentos no interior do estômago. É produzida no estômago, estimula a secreção de suco gástrico, contrai o esfíncter esofágico inferior e relaxa o esfíncter pilórico.",
      },
      {
        id: 52,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "A secretina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela acidez do quimo presente no interior do intestino delgado. Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
        alternativa1:
          "É produzida no intestino delgado, inibe a secreção de suco gástrico e estimula a produção de bile e a secreção de suco pancreático e suco entérico.",
        alternativa2:
          "É produzida no esôfago, inibe a produção de suco gástrico e estimula a produção de suco pancreático.",
        alternativa3:
          "É produzida no pâncreas, inibe a secreção de bile e estimula a produção do hormônio FSH.",
        alternativa4:
          "É produzida no intestino grosso, estimula a secreção de suco gástrico e inibe a formação do quimo.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A secretina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela acidez do quimo presente no interior do intestino delgado. É produzida no intestino delgado, inibe a secreção de suco gástrico e estimula a produção de bile e a secreção de suco pancreático (composto por bicarbonato de sódio, reduzindo a acidez do quimo) e suco entérico.",
      },
      {
        id: 53,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "A colecistoquinina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de peptonas e lipídios no intestino delgado. Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
        alternativa1:
          "É produzida no pâncreas, inibe os movimentos peristálticos no estômago e estimula o peristaltismo no esôfago.",
        alternativa2:
          "É produzida no intestino delgado, estimula a secreção de bile e de enzimas do suco pancreático no duodeno.",
        alternativa3:
          "É produzida no fígado, estimula a secreção de ptialina e promove a digestão de lipídeos de cadeia curta na boca.",
        alternativa4:
          "É produzida no estômago, secretada pelas glândulas salivares e promove digestão de amido.",
        alternativaCorreta: "2",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A colecistoquinina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de peptonas e lipídios no intestino delgado. É produzida no intestino delgado, estimula a secreção de bile e de enzimas do suco pancreático no duodeno.",
      },
      {
        id: 54,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "O inibidor gástrico é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de glicídios e lipídios no intestino delgado. Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
        alternativa1: "Produzido no estômago, promove contrações intestinais.",
        alternativa2:
          "Produzido no intestino grosso, promove secreção de suco gástrico.",
        alternativa3: "Produzido no esôfago, promove a formação de quimo.",
        alternativa4:
          "Produzido no intestino delgado, diminui as contrações estomacais.",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "O inibidor gástrico é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de glicídios e lipídios no intestino delgado. É produzido no intestino delgado, sendo responsável por diminuir as contrações estomacais (para que a transição do quimo seja mais lenta e permaneça mais tempo no duodeno para a digestão).",
      },
      {
        id: 55,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "Ao nos alimentarmos, os alimentos precisam da força da gravidade para serem conduzidos ao estômago ou isso é possível mesmo de cabeça para baixo? Com base em seus conhecimentos, assinale a alternativa correspondente.",
        alternativa1:
          "Precisam da gravidade, pois o estômago se localiza na porção inferior ao esôfago.",
        alternativa2:
          "Não precisam da gravidade, pois o peristaltismo do esôfago conduz a comida ao estômago.",
        alternativa3:
          "Precisam da gravidade, pois o esôfago não realiza nenhum movimento.",
        alternativa4:
          "Não precisam da gravidade, pois o peristaltismo do estômago “puxa” a comida do esôfago.",
        alternativaCorreta: "2",
        feedBackImagem: "imgfeedback116",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Ao nos alimentarmos, os alimentos não dependem da ação da gravidade, pois o peristaltismo do esôfago conduz a comida ao estômago. Por isso, se engolirmos um alimento de “ponta-cabeça”, ele sofrerá propulsão pelo esôfago até o estômago.",
      },
      {
        id: 56,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "Sons abdominais são os ruídos produzidos no tubo digestivo: estômago, intestino delgado e intestino grosso. Esses barulhos são comuns e geralmente considerados desagradáveis por quem os sente. Sob esse aspecto, assinale a alternativa que corresponda ao principal motivo pelo qual estes sons, conhecidos como “roncos”, são emitidos.",
        alternativa1:
          "Ocorrem devido aos movimentos peristálticos enquanto alimentos, líquidos ou gases passam pelo trato gastrointestinal.",
        alternativa2:
          "Somente ocorrem quando estamos com fome, para sinalizar que o corpo precisa de alimento.",
        alternativa3:
          "Os “roncos” significam que o estômago está em repouso, não realizando nenhum movimento ou atividade.",
        alternativa4:
          "Os roncos ocorrem somente durante a passagem do bolo alimentar do esôfago ao estômago.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Os sons abdominais (roncos) são ruídos produzidos no tubo digestivo: estômago, intestino delgado e intestino grosso. Trata-se de uma condição normal do organismo que ocorre devido aos movimentos peristálticos enquanto alimentos, líquidos ou gases passam pelo trato gastrointestinal.",
      },
      {
        id: 57,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "Os distúrbios que afetam o sistema gastrintestinal são chamados distúrbios digestivos. Alguns distúrbios afetam simultaneamente várias partes do sistema digestivo, enquanto outros afetam apenas uma parte ou órgão. Sob este aspecto, assinale a alternativa que corresponda apenas a distúrbios relacionados ao sistema digestivo humano.",
        alternativa1: "Cálculos renais, apendicite, hepatite.",
        alternativa2: "Apendicite, pancreatite e cálculos vesiculares.",
        alternativa3: "Diabetes, aterosclerose, pancreatite.",
        alternativa4: "Enfisema, cálculos renais e cistos ovarianos.",
        alternativaCorreta: "2",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Apendicite, pancreatite e cálculos vesiculares são exemplos de distúrbios/doenças do sistema digestivo. A apendicite consiste na inflamação do apêndice, estrutura vermiforme localizada no início do intestino grosso. A pancreatite é a inflamação do pâncreas (glândula endócrina e exócrina), condição que pode ser aguda ou crônica, estando diretamente relacionada com maus hábitos, como o alcoolismo e tabagismo. Os cálculos vesiculares (ou biliares) consistem em formações de “pedras” na vesícula biliar, ocasionadas principalmente pela mudança na composição da bile, decorrente de maus hábitos alimentares ou fatores genéticos, por exemplo.",
      },
      {
        id: 58,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "Durante o processo de ingestão do alimento, ainda na boca ocorre a insalivação, processo importante na conversão do alimento em bolo alimentar. Com base neste contexto e em seus conhecimentos, assinale a alternativa que melhor defina o processo de insalivação.",
        alternativa1: "Produção e secreção de amilase salivar.",
        alternativa2:
          "Movimentos da língua que “empurram” o alimento e saliva para o fundo da faringe.",
        alternativa3: "Aumento da quantidade de saliva na cavidade oral.",
        alternativa4:
          "Movimentos realizados pela língua durante a mastigação, misturando o alimento com a saliva.",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A insalivação consiste em movimentos realizados pela língua durante a mastigação, misturando o alimento com a saliva.",
      },
      {
        id: 59,
        escolhida: "não",
        grupo: "1",
        modelo: "6",
        enunciado:
          "Durante a alimentação, ocorre um processo denominado deglutição, que consiste em uma função voluntária do organismo, constituindo-se de uma importante ação no sistema digestivo. Com base neste contexto e em seus conhecimentos, assinale a alternativa que melhor defina o processo de deglutição.",
        alternativa1: "Produção e secreção de amilase salivar.",
        alternativa2:
          "Movimentos da língua que “empurram” o alimento e saliva para o fundo da faringe.",
        alternativa3: "Aumento da quantidade de saliva na cavidade oral.",
        alternativa4:
          "Movimentos realizados pela língua durante a mastigação, misturando o alimento com a saliva.",
        alternativaCorreta: "2",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Durante a alimentação, ocorre um processo denominado deglutição, que consiste em uma função voluntária do organismo, na qual movimentos da língua “empurram” o alimento e saliva para o fundo da faringe, caracterizando o ato de “engolir” o alimento.",
      },
    ];
  }
}
