import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG2 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 69,
        escolhida: "não",
        grupo: "2",
        modelo: "2",
        enunciado:
          "O sistema circulatório humano é formado pelo coração e por uma rede de vasos nos quais circulam o sangue e a linfa, sendo assim, dividido em dois distritos: sanguíneo e linfático.  Em relação ao distrito sanguíneo, assinale todas as alternativas corretas.",
        alternativa1:
          "Os elementos figurados do sangue estão imersos no plasma.",
        alternativa2:
          "O sangue leva oxigênio e nutrientes para os tecidos do corpo.",
        alternativa3:
          "A pequena circulação transporta sangue entre os pulmões e coração.",
        alternativa4:
          "A grande circulação transporta sangue entre tecidos e coração.",
        alternativa5: "Todas as veias carregam sangue pobre em oxigênio.",
        alternativa6: "As artérias possuem apenas uma camada de tecido.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem:
          "Sobre o distrito sanguíneo da circulação humana, é correto afirmar que:",
        feedBackTexto:
          "- A pequena circulação transporta sangue entre os pulmões e coração: na circulação sanguínea, o sangue passa pelo coração duas vezes, caracterizando a circulação dupla, por meio de dois circuitos, que são chamados de circulação sistêmica (ou grande circulação) e circulação pulmonar (ou pequena circulação). A pequena circulação é caracterizada pelo trajeto do sangue do coração para os pulmões para ser oxigenado, bem como do seu retorno (oxigenado) dos pulmões para o coração.<br/>- A grande circulação transporta sangue entre tecidos e coração:  na circulação sanguínea, o sangue passa pelo coração duas vezes, caracterizando a circulação dupla, por meio de dois circuitos, que são chamados de circulação sistêmica (ou grande circulação) e circulação pulmonar (ou pequena circulação). A grande circulação é caracterizada pelo trajeto do sangue (oxigenado) do coração para os tecidos do corpo, bem como de seu retorno (pobre em oxigênio) dos tecidos para o coração.",
      },
      {
        id: 70,
        escolhida: "não",
        grupo: "2",
        modelo: "2",
        enunciado:
          "O coração é um músculo oco formado por células musculares estriadas cardíacas e garante o bombeamento do sangue para todas as partes do corpo. Sobre as características do coração, assinale todas as alternativas corretas.",
        alternativa1: "Possui quatro cavidades internas.",
        alternativa2: "A parede dos ventrículos é mais espessa que dos átrios.",
        alternativa3: "Os átrios bombeiam sangue para os ventrículos.",
        alternativa4: "Os ventrículos bombeiam sangue para as artérias.",
        alternativa5: "Possui duas cavidades internas.",
        alternativa6: "O sangue carrega a linfa nos vasos sanguíneos.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "feedback1m2sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Sobre o coração, é correto afirmar que:<br/>- Possui quatro cavidades internas, das quais são dois átrios (direito e esquerdo) e dois ventrículos (direito e esquerdo).<br/>- A parede dos ventrículos é mais espessa que dos átrios, pois os átrios bombeiam sangue para os ventrículos, que estão localizados logo abaixo deles, mas os ventrículos bombeiam sangue para regiões mais distantes, o que exige uma maior resistência.<br/>- Os átrios bombeiam sangue para os ventrículos, que se localizam logo abaixo deles, de modo que o átrio direito bombeia sangue para o ventrículo direito, enquanto o átrio esquerdo bombeia sangue para o ventrículo direito.<br/>- Os ventrículos bombeiam sangue para as artérias, sendo que o ventrículo direito impulsiona o sangue para as artérias pulmonares (que levarão sangue aos pulmões) e o ventrículo esquerdo impulsiona o sangue para a artéria aorta (que levará sangue para os tecidos do corpo).",
      },
      {
        id: 71,
        escolhida: "não",
        grupo: "2",
        modelo: "2",
        enunciado:
          "O sistema cardiovascular humano é formado pelo coração e por uma rede de vasos nos quais circulam o sangue e a linfa, sendo assim, dividido em dois distritos: sanguíneo e linfático.  Em relação ao distrito linfático, assinale todas as alternativas corretas.",
        alternativa1:
          "Realizam a coleta de liquido tissular retornando-o para o sangue.",
        alternativa2:
          "Os capilares linfáticos convergem para o ducto torácico e ducto linfático direito.",
        alternativa3: "Os linfonodos funcionam como filtros da linfa.",
        alternativa4: "Os linfonodos estão presentes nos vasos sanguíneos.",
        alternativa5: "Os capilares linfáticos convergem na artéria aorta.",
        alternativa6:
          "Realizam a coleta de sangue venoso que retorna aos pulmões.",
        alternativaCorreta: "1,2,3",
        feedBackImagem: "feedback2m2sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O distrito linfático é composto por quatro componentes principais: a linfa, os vasos linfáticos, os linfonodos e os órgãos linfoides. Sobre esse distrito, é correto afirmar que:<br/>- Realizam a coleta de liquido tissular retornando-o para o sangue: o líquido tissular consiste basicamente no plasma sanguíneo que extravasa dos capilares aos tecidos para nutri-los e oxigená-los, sendo que uma das funções do distrito linfático é coletar/drenar o excesso desse líquido, redirecionando-o novamente para a circulação sanguínea.<br/>- Os capilares linfáticos convergem para o ducto torácico e ducto linfático direito: os capilares linfáticos são vasos de calibre finíssimo (microscópico) localizados entre as células dos tecidos. Esses capilares convergem-se em vasos linfáticos maiores, que desembocam nos ductos linfáticos (torácico e direito), que conduzem a linfa para veias de grande calibre da corrente sanguínea.<br/>- Os linfonodos funcionam como filtros da linfa: Os linfonodos são nódulos linfáticos cuja função é filtrar a linfa que vem das extremidades corporais, que circula por canais onde há leucócitos nos linfonodos, que identificam e destroem corpos estranhos e demais substâncias, possivelmente nocivos ao organismo.",
      },
      {
        id: 72,
        escolhida: "não",
        grupo: "2",
        modelo: "2",
        enunciado:
          "O baço é um órgão linfóide secundário localizado do lado esquerdo do abdome, sob as últimas costelas. A respeito das funções do baço, com base em seus conhecimentos, assinale todas as alternativas corretas.",
        alternativa1: "Armazenamento de linfócitos e monócitos.",
        alternativa2: "Filtragem do sangue para remoção de microrganismos.",
        alternativa3: "Destruição de hemácias envelhecidas.",
        alternativa4: "Armazenamento de sangue.",
        alternativa5: "Produção de insulina.",
        alternativa6: "Armazenamento de hormônios.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "feedback3m2sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O baço é um órgão linfóide secundário localizado do lado esquerdo do abdome, sob as últimas costelas. Dentre as importantes funções desempenhadas por ele, destacam-se:<br/>- Armazenamento de linfócitos e monócitos, que são dois tipos de leucócitos (glóbulos brancos) presentes no sangue.<br/>- Filtragem do sangue para remoção de microrganismos, substâncias estranhos e resíduos, de modo que quando o sangue passa pelo baço, sofre uma “limpeza” pelos linfócitos presentes nesse órgão.<br/>- Destruição de hemácias envelhecidas, já que estas já perderam sua função de captação de oxigênio<br/>- Armazenamento de sangue, tendo a capacidade de acumular cerca de 250ml para uma eventual situação de emergência.",
      },
      {
        id: 73,
        escolhida: "não",
        grupo: "2",
        modelo: "2",
        enunciado:
          "Os órgãos imunitários podem ser divididos em dois grupos: órgãos linfoides primários e órgãos linfoides secundários. Os órgãos linfoides primários são os principais locais de formação e amadurecimento dos linfócitos, e são constituídos pela medula óssea e pelo timo. Os órgãos linfoides secundários são aqueles nos quais os linfócitos são capazes de se multiplicar. Sob este aspecto, assinale todas as alternativas em que as estruturas apresentadas consistam em órgãos linfoides secundários.",
        alternativa1: "Adenoides e tonsilas.",
        alternativa2: "Linfonodos.",
        alternativa3: "Baço.",
        alternativa4: "Apêndice vermiforme e Placas de Peyer.",
        alternativa5: "Ovários.",
        alternativa6: "Alvéolos.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "feedback4m2sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de D. Ilyin , (Domínio público – CC0 1.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os órgãos linfoides secundários são aqueles nos quais os linfócitos são capazes de se multiplicar, sendo constituídos pelos linfonodos, adenoides, tonsilas, placas de Peyer, apêndice vermiforme e baço.",
      },
      {
        id: 79,
        escolhida: "não",
        grupo: "2",
        modelo: "4",
        enunciado:
          "A frequência dos batimentos cardíacos é controlada por regiões especiais do coração, responsáveis por ativar impulsos elétricos que acarretam as contrações das câmaras cardíacas, e o GIF abaixo representa esse processo. Sob este aspecto, assinale a única alternativa correta a respeito do sistema de condução cardíaco.",
        imagem: "gif56m4sc",
        legendaImagem: "Imagem: Blog Caderno Educação Física. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "O nodo sinoatrial se localiza na junção entre átrio direito e veia cava superior e é responsável por emitir sinal elétrico que se propaga na musculatura dos átrios, contraindo-os.",
        alternativa2:
          "O nodo sinoatrial se localiza na parte posterior do septo interatrial e é responsável por emitir sinal elétrico que se propaga na musculatura dos ventrículos, contraindo-os.",
        alternativa3:
          "O nodo atrioventricular se localiza na junção entre o átrio direito e a veia cava superior e é responsável por emitir um sinal elétrico que se propaga na musculatura dos átrios, contraindo-os.",
        alternativa4:
          "O nodo atrioventricular se localiza na parte posterior do septo interatrial e é responsável por emitir sinal elétrico que se propaga na musculatura dos átrios, contraindo-os.",
        alternativaCorreta: "1",
        feedBackImagem: "gif56m4sc",
        feedBackLegendaImagem:
          "Imagem: Blog Caderno Educação Física. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A frequência dos batimentos cardíacos é controlada por regiões especiais do coração, responsáveis por ativar impulsos elétricos que acarretam as contrações das câmaras cardíacas. O nodo sinoatrial é um aglomerado de células especializadas e se localiza na junção entre o átrio direito e a veia cava superior, sendo responsável por emitir um sinal elétrico que se propaga na musculatura dos átrios, contraindo-os (sístole atrial). O nodo atrioventricular é outra região especializada do coração, localizada na porção inferior do septo interatrial, que retarda o sinal, possibilitando tempo adequado para que o sangue dos átrios passe para os ventrículos. Do nodo atrioventricular, o sinal elétrico chega ao feixe de His, que consiste na conexão elétrica entre átrios e ventrículos, que se divide nos ramos direito e esquerdo, que cruzam o septo e se ramificam em feixes terminais denominados fibras de Purkinje, que conduzem o potencial de ação para as paredes dos ventrículos, estimulando que estes entrem em sístole (após o término da sístole dos átrios).",
      },
      {
        id: 80,
        escolhida: "não",
        grupo: "2",
        modelo: "4",
        enunciado:
          "O sistema circulatório sanguíneo é responsável por transportar o sangue para todas as partes do nosso corpo. A circulação completa permite que o sangue rico em oxigênio não se misture com o sangue pobre em oxigênio, de modo que estes percorrem caminhos distintos através do sistema cardiovascular. Com base na figura e em seus conhecimentos, assinale a alternativa que corresponda ao trajeto percorrido pelo sangue oxigenado, desde a oxigenação até a sua distribuição às células.",
        imagem: "gif57m4sc",
        legendaImagem: "Imagem: Pinterest. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Pulmões, átrio direito, ventrículo direito, aorta, vênulas, capilares e tecidos.",
        alternativa2:
          "Pulmões, artéria pulmonar, átrio esquerdo, ventrículo esquerdo, artéria pulmonar, arteríolas",
        alternativa3:
          "Pulmões, veias pulmonares, átrio esquerdo, ventrículo esquerdo, aorta, arteríolas, capilares e tecidos.",
        alternativa4:
          "Pulmões, veias pulmonares, átrio direito, ventrículo direito, veias cavas, vênulas, capilares e tecidos.",
        alternativaCorreta: "3",
        feedBackImagem: "gif57m4sc",
        feedBackLegendaImagem: "Imagem: Pinterest. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Na circulação sanguínea, o trajeto do sangue rico em oxigênio (representado em vermelho no GIF) pelo corpo humano se inicia nos pulmões onde é oxigenado, em seguida passa pelas veias pulmonares chegando ao átrio esquerdo, onde é bombeado para o ventrículo esquerdo que, por sua vez, bombeia o sangue para a aorta. A aorta se ramifica em vasos de calibre cada vez menores, chamados arteríolas, que se ramificam em vasos de calibre microscópicos denominados capilares, que se comunicam com os tecidos, nutrindo-os e oxigenando-os.",
      },
      {
        id: 81,
        escolhida: "não",
        grupo: "2",
        modelo: "4",
        enunciado:
          "O GIF abaixo demonstra por meio de setas o trajeto do sangue no coração e a abertura e fechamento das valvas cardíacas que impedem o refluxo sanguíneo. Sob esse aspecto, analise o GIF e, com base em seus conhecimentos, assinale a alternativa que corresponda às valvas que impedem o refluxo de sangue para os átrios e as valvas que impedem o refluxo de sangue para os ventrículos, respectivamente.",
        imagem: "gif58m4sc",
        legendaImagem: "Imagem: Blog Kleber Trainer. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1: "Valvas venosas e valvas de Purkinje.",
        alternativa2: "Valvas atrioventriculares e valvas semilunares.",
        alternativa3: "Valvas semilunares e valvas atrioventriculares.",
        alternativa4: "Valvas sinoatriais e valvas de His.",
        alternativaCorreta: "2",
        feedBackImagem: "gif58m4sc",
        feedBackLegendaImagem: "Imagem: Blog Kleber Trainer. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "No coração, cada átrio se comunica com seu respectivo ventrículo por meio de um orifício contendo uma valva atrioventricular. Na porção direita do coração, esta valva denomina-se valva tricúspide, enquanto na porção direita é chamada de valva bicúspide. Assim, as valvas atrioventriculares impedem o refluxo de sangue para os átrios. Os ventrículos, por sua vez, se comunicam com artérias (aorta e artéria pulmonar) por meio de orifícios que contém as chamadas valvas semilunares, que tem como função impedir o refluxo de sangue para os ventrículos.",
      },
      {
        id: 82,
        escolhida: "não",
        grupo: "2",
        modelo: "4",
        enunciado:
          "O coração é um órgão formado por células musculares estriadas cardíacas e garante o bombeamento do sangue para todas as partes do corpo. Quando em bom funcionamento, o coração se contrai, relaxa, abre e fecha valvas de forma precisa, impulsionando um volume máximo de sangue com o menor gasto de energia possível. Em relação ao funcionamento do coração, analise o GIF e, com base em seus conhecimentos, assinale a única alternativa correta.",
        imagem: "gif59m4sc",
        legendaImagem: "Imagem: Anatomia papel e caneta. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Átrios e ventrículos entram em sístole (contração das câmaras cardíacas) simultaneamente.",
        alternativa2:
          "As valvas atrioventriculares permanecem fechadas quando os átrios estão em sístole.",
        alternativa3:
          "O sangue dos ventrículos direito e esquerdo se comunicam, havendo troca de gases no coração.",
        alternativa4:
          "As valvas atrioventriculares permanecem fechadas quando os ventrículos estão em sístole.",
        alternativaCorreta: "4",
        feedBackImagem: "gif59m4sc",
        feedBackLegendaImagem:
          "Imagem: Anatomia papel e caneta. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O sangue pobre em oxigênio chega nos átrios do coração, que se comunicam com os ventrículos logo abaixo deles por um orifício contendo as valvas atrioventriculares. Quando os átrios estão entram em sístole (contração), essas valvas se abrem para que a passagem do sangue dos átrios para os ventrículos ocorra. Quando os ventrículos estão em sístole, as valvas atrioventriculares permanecem fechadas, exercendo sua função ao impedir que o sangue dos ventrículos retorne para os átrios.",
      },
      {
        id: 83,
        escolhida: "não",
        grupo: "2",
        modelo: "4",
        enunciado:
          "Quando sofremos ferimentos onde há extravasamento sanguíneo, nosso corpo reage na tentativa de evitar a perda excessiva de sangue. Este processo é denominado coagulação sanguínea e ocorre graças a uma série de reações. O GIF abaixo demonstra brevemente esse processo. Sob esse aspecto, assinale a alternativa mais adequada sobre a formação de coágulos sanguíneos.",
        imagem: "gif60m4sc",
        legendaImagem: "Imagem: Boomac2 via Makeagif. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "As plaquetas aderem no ferimento, a fibrina forma uma rede de filamentos e as hemácias se acumulam no local, levando à formação do coágulo.",
        alternativa2:
          "As plaquetas produzem anticorpos que se aderem ao ferimento e os monócitos se acumulam no local levando à formação do coágulo.",
        alternativa3:
          "Os leucócitos aderem no ferimento, as hemácias formam uma rede de filamentos e o plasma se acumula no local, cicatrizando o ferimento.",
        alternativa4:
          "As hemácias produzem plaquetas que se aderem no ferimento, a fibrina forma uma rede de filamentos e os leucócitos se acumulam no local, cicatrizando o ferimento.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback60m4sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "No caso de um ferimento, as plaquetas são ativadas, vão se atraindo e aderem no local, formando um “tampão” inicial na lesão. Após uma sequência de reações químicas envolvendo fatores de coagulação (sobretudo enzimas), o resultado é o surgimento da fibrina (uma proteína fibrosa), que forma uma rede de filamentos que se entrelaçam com as plaquetas, formando um “tampão” mais compacto. As hemácias, incapazes de atravessar, acumulam-se no local juntamente com o plasma, originando o coágulo.",
      },
      {
        id: 84,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A figura abaixo representa por meio de um esquema, a resposta imune denominada específica ou adaptativa, isto é, que é adquirida pelo ser humano ao longo da vida. Nesse sentido, analise a figura, identifique a etapa sinalizada por I e assinale a alternativa correta.",
        imagem: "img71m5sc",
        legendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os macrófagos fagocitam e digerem o patógeno e apresentam os antígenos dele em sua membrana plasmática, que é reconhecido pelo linfócito T auxiliar.",
        alternativa2:
          "Os macrófagos ativam o patógeno e transmitem os antígenos aos linfócitos T auxiliares, infectando-os.",
        alternativa3:
          "Os macrófagos destroem o patógeno e células infectadas e originam plasmócitos que produzem anticorpos.",
        alternativa4:
          "Os macrófagos fagocitam e destroem o patógeno e guardam informações de reconhecimento do patógeno, protegendo o organismo de uma nova infecção.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback71m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Na resposta imune adquirida, o processo representado em I é denominado “apresentação dos antígenos pelo macrófago”. Nesta etapa, os macrófagos fagocitam e digerem o patógeno e apresentam os antígenos dele em sua membrana plasmática. Ao ser apresentado na membrana plasmática do macrófago, o antígeno do patógeno é reconhecido pelo linfócito T auxiliar. Posteriormente, os linfócitos T auxiliares estimulam linfócitos B e T citotóxicos a combater os invasores. Linfócitos do tipo T e B podem se diferenciar em células de memória.",
      },
      {
        id: 85,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "Os linfócitos B são um tipo de glóbulo branco que desempenha um importante papel na imunidade humoral. A indicação I na imagem representa a etapa de ativação, multiplicação e diferenciação dos linfócitos B. Sob esse aspecto, assinale a alternativa correta a respeito dos linfócitos B.",
        imagem: "img72m5sc",
        legendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os linfócitos B podem se diferenciar em plasmócitos (que produzem anticorpos que favorecem a destruição dos patógenos) ou em células de memória (que guardam informações de reconhecimento do patógeno).",
        alternativa2:
          "Os linfócitos B reconhecem os antígenos apresentados pelos macrófagos e ativam os linfócitos T citotóxicos, induzindo a multiplicação e diferenciação em linfócitos T auxiliares.",
        alternativa3:
          "Os linfócitos B guardam por anos a capacidade de reconhecer antígenos dos patógenos que o organismo teve contato, reagindo com maior facilidade em uma futura infecção.",
        alternativa4:
          "Os linfócitos B são especializados em reconhecer e matar células corporais alteradas, agindo na chamada imunização celular, podendo também se diferenciar em plasmócitos, que ativam os linfócitos T.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback72m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Após o processo de apresentação dos antígenos pelo macrófago, os linfócitos T auxiliares se multiplicam, ativam os linfócitos B e T citotóxicos, havendo também a diferenciação de alguns linfócitos em células de memória. Os linfócitos B, ao serem ativados durante o processo de resposta imune, se multiplicam e podem se diferenciar em plasmócitos (que produzem anticorpos que favorecem a destruição dos patógenos) ou em células de memória (que guardam informações de reconhecimento do patógeno) e são ativadas e respondem rapidamente a um novo contato com o antígeno (resposta secundária).",
      },
      {
        id: 86,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "Os linfócitos T citotóxicos são um grupo de glóbulos brancos que desempenham um importante papel na imunidade celular. A indicação I na imagem representa a etapa de ativação, multiplicação, diferenciação e ação dessas células. Nesse sentido, analise a figura e, com base em seus conhecimentos, assinale a alternativa correta a respeito da etapa sinalizada por I, acerca dos linfócitos T citotóxicos.",
        imagem: "img73m5sc",
        legendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os linfócitos T citotóxicos reconhecem e destroem as células infectadas e podem se diferenciar em células de memória, que guardam informações de reconhecimento do patógeno.",
        alternativa2:
          "Os linfócitos T citotóxicos podem se diferenciar em plasmócitos, que produzem anticorpos que favorecem a destruição dos patógenos.",
        alternativa3:
          "Os linfócitos T citotóxicos reconhecem os antígenos apresentados pelos macrófagos e ativam os linfócitos B, que se multiplicam e se diferenciam em linfócitos T auxiliares.",
        alternativa4:
          "Os linfócitos T citotóxicos guardam por anos a capacidade de reconhecer antígenos dos patógenos que o organismo teve contato, reagindo com maior facilidade em uma futura infecção.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback73m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Após o processo de apresentação dos antígenos pelo macrófago, os linfócitos T auxiliares se multiplicam, ativam os linfócitos B e T citotóxicos, havendo também a diferenciação de alguns linfócitos em células de memória. Os linfócitos T citotóxicos, ao serem ativados durante o processo de resposta imune, se multiplicam, reconhecem e destroem as células infectadas e podem se diferenciar em células de memória, que guardam informações de reconhecimento do patógeno e respondem rapidamente a um novo contato com o antígeno (resposta secundária).",
      },
      {
        id: 87,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A resposta imune adaptativa ou específica, consiste na imunidade adquirida pelo ser humano ao longo da vida, por meio do contato com antígenos. Na figura abaixo, as indicações I, II e III representam células de defesa envolvidas no processo de defesa imunitária. A célula I é responsável por combater diretamente células infectadas, II tem o papel de se diferenciar em células que produzem anticorpos e III tem a função de guardar informações de reconhecimento do patógeno/antígeno, atuando rapidamente no reconhecimento no caso de um novo ataque. Sob este aspecto, assinale a alternativa que corresponda às células I, II e III.",
        imagem: "img74m5sc",
        legendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Em I encontra-se representado um linfócito T citotóxico, em II encontra-se representado um linfócito B e em III encontra-se representada uma célula de memória.",
        alternativa2:
          "Em I encontra-se representado um linfócito T auxiliar, em II encontra-se representado um linfócito T citotóxico e em III encontra-se representada uma célula de memória.",
        alternativa3:
          "Em I encontra-se representado um linfócito B, em II encontra-se representado um linfócito T citotóxico e em III encontra-se representado um linfócito T auxiliar.",
        alternativa4:
          "Em I encontra-se representado uma célula de memória, em II encontra-se representado um linfócito B e em III encontra-se representado um linfócito T auxiliar.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback74m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Após o processo de apresentação dos antígenos pelo macrófago, os linfócitos T auxiliares se multiplicam, ativam os linfócitos B e T citotóxicos, havendo também a diferenciação de alguns linfócitos em células de memória. Os linfócitos T citotóxicos (representados por I), ao serem ativados durante o processo de resposta imune, se multiplicam, reconhecem e destroem as células infectadas. Os linfócitos B (representados por II), ao serem ativados durante o processo de resposta imune, se multiplicam e podem se diferenciar em plasmócitos, que produzem anticorpos que favorecem a destruição dos patógenos. As células de memória (representados por III), surgem da diferenciação de linfócitos T (auxiliares e citotóxicos) e B, e são responsáveis por guardar informações de reconhecimento do patógeno/antígeno, respondendo rapidamente a um novo contato (resposta secundária).",
      },
      {
        id: 88,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "O anticorpo é uma proteína que lembra a letra Y, composta por quatro cadeias polipeptídicas, duas de maior tamanho (idênticas) denominadas cadeias pesadas, e duas de menor tamanho (também idênticas) denominadas cadeias leves. Além disso, cada uma dessas cadeias do anticorpo pode ser estruturada em duas porções, representadas por I e II na figura abaixo, as quais determinam a característica do anticorpo. Sob esse aspecto, analise a figura e assinale a alternativa que corresponda às porções indicadas.",
        imagem: "img75m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A indicação I representa a porção variável, que se liga ao antígeno e muda de um anticorpo para outro; e a indicação II representa a porção constante, que apresenta uma sequência de aminoácidos muitas vezes comuns a diferentes anticorpos.",
        alternativa2:
          "A indicação I representa a porção constante, que se liga ao antígeno e muda de um anticorpo para outro; e a indicação II representa a porção variável, que apresenta uma sequência de aminoácidos muitas vezes comuns a diferentes anticorpos.",
        alternativa3:
          "A indicação I representa a cadeia leve, que possui menor tamanho na estrutura do anticorpo; e a indicação II representa a cadeia pesada, que possui maior tamanho na estrutura do anticorpo.",
        alternativa4:
          "A indicação I representa a cadeia pesada, que possui menor tamanho na estrutura do anticorpo; e a indicação II representa a cadeia leve, que possui maior tamanho na estrutura do anticorpo.",
        alternativaCorreta: "1",
        feedBackImagem: "img75m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os anticorpos são proteínas formadas por quatro cadeias polipeptídicas, sendo duas de maior tamanho (idênticas entre si) denominadas cadeias pesadas, e outras duas de menor tamanho (também idênticas entre si) denominadas cadeias leves. Cada uma dessas cadeias, ainda pode ser dividida em duas porções: a porção variável (representada por I e ilustrada na cor roxa) e a porção constante (representada por II e ilustrada na cor rosa). A porção variável é a parte do anticorpo que se liga ao antígeno e varia de um anticorpo para outro. A porção constante apresenta uma sequência de aminoácidos que, geralmente, é comum a diferentes anticorpos, variando pouco em sua estrutura de um anticorpo para outro.",
      },
      {
        id: 89,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A figura abaixo esquematiza de forma simplificada o processo de hematopoiese, isto é, a formação de elementos figurados do sangue. Esse processo ocorre na medula óssea, que consiste em uma rede de tecido conjuntivo frouxo localizada na cavidade da parte esponjosa de alguns ossos. No que se refere ao processo de hematopoiese, assinale a alternativa que considerar correta.",
        imagem: "img76m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Na medula óssea estão presentes células-tronco hematopoiéticas pluripotentes que podem se diferenciar em células de linhagem mielóide ou de linhagem linfoide.",
        alternativa2:
          "Na medula óssea estão presentes células-tronco pluripotentes que podem se diferenciar em células de linhagem embrionária ou de linhagem totipotente.",
        alternativa3:
          "Na medula óssea os linfócitos B e T são originados a partir da diferenciação direta dos glóbulos brancos granulócitos.",
        alternativa4:
          "Na medula óssea os glóbulos brancos granulócitos (neutrófilo, eosinófilo e basófilo) são originados a partir de células-tronco linfoides.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback76m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O processo de hematopoiese, isto é, a formação dos elementos figurados do sangue (hemácias, glóbulos brancos e plaquetas) ocorre na medula óssea, que consiste em uma rede de tecido conjuntivo frouxo localizada na cavidade da parte esponjosa de alguns ossos. Na medula óssea estão presentes células-tronco hematopoiéticas pluripotentes que podem se diferenciar em células de linhagem mielóide, que originam as hemácias, glóbulos brancos granulócitos, monócitos e plaquetas, ou de linhagem linfoide, que originam os linfócitos dos tipos B e T.",
      },
      {
        id: 90,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "Certas substâncias ou patógenos têm efeitos severos no organismo podendo matar a pessoa antes mesmo da ação imune. Nessas situações, o tratamento pode ser realizado por meio da injeção de uma substância chamada soro imune. A imagem abaixo representa o processo de produção deste soro. Analise a figura e, com base em seus conhecimentos, assinale a alternativa mais adequada a respeito deste processo.",
        imagem: "img77m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>) e de Pikisuperstar, via Freepik.com.  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a> e aqui.",
        alternativa1:
          "O soro é produzido a partir da inoculação do antígeno/patógeno (doses controladas) no animal, que produz anticorpos. Esses anticorpos são extraídos posteriormente juntamente com o plasma sanguíneo do animal, caracterizando o soro imune.",
        alternativa2:
          "O soro é produzido a partir da inoculação dos anticorpos do patógeno no animal, que produz antígenos. Esses antígenos são extraídos posteriormente juntamente com os elementos figurados do animal, caracterizando o soro imune.",
        alternativa3:
          "O soro é produzido naturalmente pelos cavalos, sem que haja nenhum contato com antígenos ou patógenos, e por isso o sangue desses animais consistem em um tipo de soro imune.",
        alternativa4:
          "O soro é produzido de forma passiva por animais de grande porte que recebem a inoculação de antígeno e, após tratamento do sangue, o soro pode ser utilizado em humanos, promovendo a imunização ativa.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback77m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>) e de Pikisuperstar, via Freepik.com.  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a> e aqui.",
        feedBackTexto:
          "Certas substâncias ou patógenos têm efeitos severos no organismo podendo matar a pessoa antes mesmo da ação imune. Nessas situações, o tratamento pode ser realizado por meio da injeção de uma substância chamada soro imune. Este soro é produzido a partir da inoculação do antígeno/patógeno (em doses controladas) no animal, que induz a produção de anticorpos. Algumas semanas depois, com o animal já imune, ocorre a retirada de sangue, que passa por um processo de separação (elementos figurados e plasma), de modo que esses anticorpos são extraídos posteriormente juntamente com o plasma sanguíneo do animal, caracterizando o soro imune. Esse soro, tem função de ser utilizado na cura de uma doença já adquirida (picadas de animais peçonhentos ou outras doenças, como a Covid-19), se caracterizando como uma imunização passiva, pois não estimula a memória imunitária de quem o recebe, o que, consequentemente, não previne da doença (ao contrário do que ocorre com as vacinas).",
      },
      {
        id: 91,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "Certas substâncias ou patógenos têm efeitos severos no organismo podendo matar a pessoa antes mesmo da ação imune. Nessas situações, o tratamento pode ser realizado por meio do uso de uma substância chamada soro imune. A imagem abaixo representa o processo de produção deste soro. Com base nas informações e em seus conhecimentos, assinale a alternativa mais adequada a respeito da ação do soro imune no organismo de um paciente.",
        imagem: "img78m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>) e de Pikisuperstar, via Freepik.com.  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a> e aqui.",
        alternativa1:
          "O soro imune, ao ser utilizado como tratamento do paciente, é considerado um tipo de imunização passiva, pois não estimula a memória imunitária, tendo eficiência temporária no combate da doença.",
        alternativa2:
          "O soro imune, ao ser utilizado como tratamento do paciente, é considerado um tipo de imunização ativa, pois induz resposta imune e memória imunitária, tendo eficiência por anos no combate e reconhecimento da doença.",
        alternativa3:
          "O soro imune, ao ser utilizado como tratamento pelo paciente, consiste na aplicação de antígenos isolados que atuam no organismo impedindo que o paciente adquira a doença.",
        alternativa4:
          "O soro imune, ao ser utilizado como tratamento pelo paciente, promove a produção desenfreada de células de memória, que combatem diretamente os antígenos e impedem que o paciente adquira a doença novamente.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback78m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>) e de Pikisuperstar, via Freepik.com.  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a> e aqui.",
        feedBackTexto:
          "O soro imune é considerado um tipo de imunização passiva, que é muito utilizado em casos de intoxicação, picadas de animais peçonhentos e, mais recentemente, em casos de doenças como a Covid-19, por exemplo, que exigem procedimentos de urgência. Assim, esse tipo de imunização é utilizado como tratamento do paciente, não estimulando a memória imunitária e tendo eficiência temporária no combate da doença, ou seja, os anticorpos injetados desaparecem da circulação do paciente em poucos dias, tornando-o passível de uma nova aquisição da doença.",
      },
      {
        id: 92,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A vacina foi um grande avanço médico do século XX e tem grande importância na prevenção de inúmeras doenças. No que se refere ao mecanismo de ação da vacina no processo de imunização, assinale a alternativa que julgar correta.",
        imagem: "img79m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A vacina consiste em um tipo de imunização ativa, caracterizada pela injeção de antígenos no paciente, que desencadeiam uma resposta imunitária primária com produção de células de memória.",
        alternativa2:
          "A vacina consiste em um tipo de imunização passiva, caracterizada pela injeção de anticorpos no paciente que combatem os patógenos, conferindo imunidade temporária.",
        alternativa3:
          "A vacina consiste em um tipo de imunização ativa, caracterizada pela injeção de elementos figurados do sangue de um animal de grande porte no paciente, que desencadeiam a produção de células de memória.",
        alternativa4:
          "A vacina consiste em um tipo de imunização passiva, caracterizada pela injeção de antígenos no paciente, que conferem imunização temporária, já que não induzem resposta imunitária.",
        alternativaCorreta: "1",
        feedBackImagem: "img79m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A vacina consiste em um tipo de imunização ativa, caracterizada pela injeção de antígenos previamente inativados, atenuados ou fragmentados no paciente, que desencadeiam uma resposta imunitária primária, havendo a produção de células de memória, que guardam informações dos antígenos. No caso de uma nova infecção, as células de memória são estimuladas e ocorre uma resposta imune secundária, na qual o sistema imune age de forma mais rápida e intensa no combate aos invasores, impedindo que a doença se manifeste, sobretudo de forma grave.",
      },
      {
        id: 93,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A vacina consiste em um tipo de imunização ativa, caracterizada pela injeção de antígenos previamente inativados, atenuados ou fragmentados no paciente, cuja função é preparar o sistema imunitário do organismo, prevenindo-o do ataque de variadas doenças. O processo de produção de vacinas encontra-se ilustrado de forma simplificada na figura abaixo. Analise a figura e, com base em seus conhecimentos sobre as fases desse processo, assinale a alternativa correta.",
        imagem: "img80m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A fase 1 consiste na obtenção do antígeno (microrganismo ou fragmentos), a fase 2 consiste no isolamento e purificação do antígeno (que é morto ou atenuado) e a fase 3 consiste na adição do adjuvante (substância que possibilita o aumento da resposta imunológica).",
        alternativa2:
          "A fase 1 consiste na obtenção do anticorpo (glicoproteína), a fase 2 consiste no fortalecimento de vírus e bactérias (fortificação) e a fase 3 consiste na adição de plasma sanguíneo ou elementos figurados (meio ideal para a multiplicação dos patógenos).",
        alternativa3:
          "A fase 1 consiste na obtenção do antígeno (necessariamente vivo e inteiro), a fase 2 consiste no isolamento do antígeno (passa por dias isolado até se decompor) e a fase 3 consiste na adição do adjuvante (substância que facilita a inoculação dos antígenos no paciente).",
        alternativa4:
          "A fase 1 consiste na obtenção do anticorpo (microrganismo ou fragmentos), a fase 2 consiste na obtenção do antígeno (que é morto ou atenuado) e a fase 3 consiste no isolamento e purificação do anticorpo (glicoproteína que guarda informações de reconhecimento do patógeno).",
        alternativaCorreta: "1",
        feedBackImagem: "feedback80m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A fase 1 consiste na obtenção do antígeno, ou seja, a parte do patógeno que as células de defesa reconhecem, que pode ser um microrganismo inteiro ou fragmentos. A fase 2 consiste no isolamento e purificação do antígeno, na qual o antígeno é isolado do meio e de outros componentes e purificado (por meio de técnicas laboratoriais), momento no qual também é morto ou atenuado (enfraquecido). A fase 3 consiste na adição do adjuvante, que consiste em uma substância que dificulta o antígeno ser processado pelas células apresentadoras de antígeno (macrófago, por exemplo) e possibilita o aumento da resposta imunológica. A partir de então, a vacina está pronta para ser aplicada no paciente e prevenir o desenvolvimento da doença para a qual foi produzida.",
      },
      {
        id: 94,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra a anatomia das veias que, por não apresentarem movimentos de pulsação, contam com o movimento dos músculos esqueléticos próximos a elas que as espremem, fazendo o sangue fluir. Além desse fato, existem estruturas que desempenham uma importante função para o fluxo sanguíneo nas veias, ilustradas abaixo. Sob esse aspecto, analise a figura, identifique quais são essas estruturas e, com base em seus conhecimentos, assinale a alternativa correspondente.",
        imagem: "img81m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A figura demonstra as válvulas venosas, cuja função é impedir o refluxo de sangue e garantir a circulação em um único sentido: em direção ao coração.",
        alternativa2:
          "A figura demonstra as válvulas arteriais, cuja função é impedir o fluxo de sangue e garantir a circulação em um único sentido: em direção aos pulmões.",
        alternativa3:
          "A figura demonstra as túnicas venosas, cuja função é manter o sangue durante o maior período possível em um mesmo segmento das veias.",
        alternativa4:
          "A figura demonstra as túnicas arteriais, cuja função é promover uma maior pressão nos vasos garantindo o fluxo do sangue venoso das artérias em direção ao coração.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback81m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "As veias do sistema circulatório são responsáveis por transportar o sangue que parte dos tecidos e órgãos em direção ao coração. Diferentemente das artérias, as veias não apresentam movimentos de pulsação, apesar de se contraírem e relaxarem com lentidão. Assim, as veias contam com o movimento dos músculos esqueléticos próximos a elas que as comprimem, fazendo o sangue fluir. No interior das veias, ainda há válvulas venosas, cuja função é impedir o refluxo de sangue e garantir a circulação em um único sentido: em direção ao coração.",
      },
      {
        id: 95,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A figura abaixo representa as varizes, que são muito conhecidas pelo efeito estético que apresentam, geralmente nas pernas, mas que consistem em um problema de saúde que indica uma veia doente, cujas causas podem ser genéticas ou comportamentais. Sobre esse tipo de doença que afeta o sistema circulatório humano, assinale a alternativa correta.",
        imagem: "img82m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "As varizes são veias dilatadas, deformadas e insuficientes em decorrência de uma falha nas válvulas venosas, que causa refluxo e acúmulo de sangue em trechos das veias.",
        alternativa2:
          "As varizes são edemas próximos às veias e vênulas das extremidades do corpo, que incham devido ao excesso de líquido intersticial.",
        alternativa3:
          "As varizes são arteríolas que foram lesadas externamente e se tornam insuficientes em decorrência de coágulos formados em suas paredes internas.",
        alternativa4:
          "As varizes são edemas que deformam e dilatam as vênulas das extremidades corporais, em decorrência de aterosclerose coronária.",
        alternativaCorreta: "1",
        feedBackImagem: "img82m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "As varizes são muito conhecidas pelo efeito estético que apresentam, geralmente nas pernas, mas que consistem em um problema de saúde que indica uma veia doente, cujas causas podem ser genéticas ou comportamentais. Essas veias doentes apresentam uma falha nas válvulas venosas, que causa refluxo e acúmulo de sangue, tornando-as dilatadas, deformadas e insuficientes. As varizes, muitas vezes, não apresentam sintomas além da insatisfação estética, mas podem causar dor, inchaço, desconfortos ou dormência.",
      },
      {
        id: 96,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A circulação sanguínea humana é dupla, isto é, o sangue passa duas vezes pelo coração por meio de dois circuitos separados anatomicamente e com funções diferentes, representados na figura por I (pequena circulação) e II (grande circulação). Sob esse aspecto, assinale a alternativa que corresponda às características de I e II, respectivamente.",
        imagem: "img83m5sc",
        legendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Na pequena circulação, o sangue pobre em oxigênio é bombeado do coração aos pulmões, onde é oxigenado, e retorna ao coração. Na grande circulação, o sangue oxigenado é bombeado do coração em direção aos tecidos, retornando pobre em oxigênio ao coração.",
        alternativa2:
          "Na pequena circulação, o sangue pobre em oxigênio é bombeado do coração em direção aos tecidos, retornando rico em oxigênio ao coração. Na grande circulação, o sangue rico em oxigênio é bombeado do coração aos pulmões, onde o oxigênio é consumido, e retorna ao coração.",
        alternativa3:
          "A pequena circulação é fechada, ou seja, o sangue venoso não se mistura com o sangue arterial no trajeto entre o coração e os pulmões. A grande circulação é aberta, ou seja, sangue venoso e arterial se misturam nos grandes vasos, no trajeto do coração aos tecidos.",
        alternativa4:
          "A pequena circulação é caracterizada pelo transporte de linfa, rica em glóbulos brancos e líquido intersticial proveniente do plasma sanguíneo. A grande circulação é responsável por transportar elementos figurados do sangue dos pulmões aos tecidos.",
        alternativaCorreta: "1",
        feedBackImagem: "img83m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Na pequena circulação (representada por I), o sangue pobre em oxigênio é bombeado do ventrículo direito do coração para a artéria pulmonar que leva o sangue aos pulmões, onde é oxigenado e retorna ao coração, chegando ao átrio esquerdo pelas veias pulmonares. Na grande circulação, o sangue oxigenado é bombeado do ventrículo esquerdo do coração para a artéria aorta em direção aos tecidos, oxigenando-os, de modo que, em seguida, o sangue retorna pobre em oxigênio ao coração, chegando pelas veias cavas (superior e inferior) no átrio direito.",
      },
      {
        id: 97,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "O sistema circulatório sanguíneo é responsável por transportar o sangue para todas as partes do nosso corpo. A circulação completa permite que o sangue rico em oxigênio não se misture com o sangue pobre em oxigênio, de modo que estes percorrem caminhos distintos por meio dos vasos sanguíneos. Sob esse aspecto, com base na figura e em seus conhecimentos, assinale a alternativa que corresponda ao trajeto do sangue oxigenado no organismo.",
        imagem: "img84m5sc",
        legendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "O sangue é oxigenado nos pulmões, retorna ao coração pelas veias pulmonares, passa pelo átrio esquerdo e ventrículo esquerdo, onde é bombeado para a artéria aorta, que se ramifica em arteríolas e capilares, chegando até os tecidos.",
        alternativa2:
          "O sangue é oxigenado nos pulmões, retorna ao coração pelas artérias pulmonares, passa pelo átrio direito e ventrículo esquerdo, onde é bombeado para a veia cava, que se ramifica em vênulas e capilares, chegando até os tecidos.",
        alternativa3:
          "O sangue é oxigenado nos pulmões, retorna ao coração pelas veias pulmonares, passa pelo átrio direito e ventrículo direito, onde é bombeado para a artéria pulmonar, que se ramifica em arteríolas e capilares, chegando até os tecidos.",
        alternativa4:
          "O sangue é oxigenado nos pulmões, retorna ao coração pelas artérias pulmonares, passa pelo átrio esquerdo e ventrículo direito, onde é bombeado para a artéria coronária, que se ramifica em vênulas e capilares, chegando até os tecidos.",
        alternativaCorreta: "1",
        feedBackImagem: "img84m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O sangue é oxigenado nos pulmões, retorna ao coração pelas veias pulmonares, passa pelo átrio esquerdo e ventrículo esquerdo, onde é bombeado para a artéria aorta, que se ramifica em arteríolas e capilares, chegando até os tecidos.",
      },
      {
        id: 98,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "O sistema circulatório sanguíneo é responsável por transportar o sangue para todas as partes do nosso corpo. A circulação completa permite que o sangue rico em oxigênio não se misture com o sangue pobre em oxigênio, de modo que estes percorrem caminhos distintos por meio dos vasos sanguíneos. Sob esse aspecto, com base na figura e em seus conhecimentos, assinale a alternativa que corresponda ao trajeto do sangue pobre em oxigênio no organismo.",
        imagem: "img85m5sc",
        legendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Dos capilares próximos aos tecidos, o sangue pobre em oxigênio conflui para vênulas e veias de maior calibre que desembocam nas veias cavas, chegando ao átrio direito e ventrículo direito, que bombeia o sangue para os pulmões por meio das artérias pulmonares.",
        alternativa2:
          "Dos capilares próximos aos tecidos, o sangue pobre em oxigênio conflui para arteríolas e artérias de maior calibre que desembocam na aorta, chegando ao átrio direito e ventrículo direito, que bombeia o sangue para os pulmões por meio das veias pulmonares.",
        alternativa3:
          "O sangue pobre em oxigênio chega ao coração pelas veias pulmonares, passa pelo átrio esquerdo e ventrículo esquerdo, onde é bombeado para a artéria aorta, que se ramifica em arteríolas e capilares, chegando até os tecidos.",
        alternativa4:
          "O sangue pobre em oxigênio chega ao coração pelas artérias pulmonares, passa pelo átrio direito e ventrículo esquerdo, onde é bombeado para os pulmões pela artéria aorta, que se ramifica em arteríolas e vênulas, chegando até os tecidos.",
        alternativaCorreta: "1",
        feedBackImagem: "img85m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via Freepik.com. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Dos capilares próximos aos tecidos, o sangue pobre em oxigênio conflui para vênulas e veias de maior calibre que desembocam nas veias cavas, chegando ao átrio direito e ventrículo direito, que bombeia o sangue para os pulmões por meio das artérias pulmonares.",
      },
      {
        id: 99,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A frequência dos batimentos cardíacos é controlada por regiões especiais do coração, responsáveis por ativar e distribuir impulsos elétricos que acarretam as contrações das câmaras cardíacas. A imagem abaixo indica quatro estruturas envolvidas no controle da frequência cardíaca. Com base na imagem e em seus conhecimentos, assinale a alternativa que corresponda às estruturas I, II, III e IV, respectivamente.",
        imagem: "img86m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A estrutura I corresponde ao nodo sinoatrial, II ao nodo atrioventricular, III ao feixe de His e IV às fibras de Purkinje.",
        alternativa2:
          "A estrutura I corresponde ao nodo atrioventricular, II ao nodo sinoatrial, III ao feixe de His e IV às fibras de Purkinje.",
        alternativa3:
          "A estrutura I corresponde às fibras de Purkinje, II ao Feixe de His, III ao nodo sinoatrial e IV ao nodo atrioventricular.",
        alternativa4:
          "A estrutura I corresponde ao feixe de His, II ao nodo atrioventricular, III às fibras de Purkinje e IV ao nodo sinoatrial.",
        alternativaCorreta: "1",
        feedBackImagem: "img86m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O nodo sinoatrial (representado por I) é um aglomerado de células especializadas e se localiza na junção entre o átrio direito e a veia cava superior, sendo responsável por emitir um sinal elétrico que se propaga na musculatura dos átrios, contraindo-os (sístole atrial). O nodo atrioventricular (representado por II) é outra região especializada do coração, localizada na porção inferior do septo interatrial, que retarda o sinal, possibilitando tempo adequado para que o sangue dos átrios passe para os ventrículos. Do nodo atrioventricular, o sinal elétrico chega ao feixe de His (representado por III), que consiste em na conexão elétrica entre átrios e ventrículos, que se divide nos ramos direito e esquerdo, que cruzam o septo e se ramificam em feixes terminais denominados fibras de Purkinje (representadas por IV), que conduzem o potencial de ação para as paredes dos ventrículos, estimulando que estes entrem em sístole (após o término da sístole dos átrios).",
      },
      {
        id: 100,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "No coração existem quatro valvas que permitem o fluxo sanguíneo adequado através das câmaras cardíacas, em consonância com o ciclo cardíaco de sístoles e diástoles. Analise a figura e as estruturas indicadas e, com base em seus conhecimentos, assinale a alternativa correta.",
        imagem: "img87m5sc",
        legendaImagem:
          "Imagem: Adaptada de Zoofari, (Creative Commons BY-SA 3.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A indicação na figura representa as valvas atrioventriculares, localizadas entre os átrios e ventrículos, cuja função é garantir a passagem do sangue no sentido do átrio para o ventrículo durante a sístole atrial e evitar o refluxo de sangue durante a sístole ventricular.",
        alternativa2:
          "A indicação na figura representa as valvas semilunares, localizadas entre os ventrículos e as artérias, cuja função é garantir a passagem do sangue dos ventrículos para a aorta e artéria pulmonar durante a diástole atrial e evitar o refluxo de sangue na sístole atrial.",
        alternativa3:
          "A indicação na figura representa as valvas aórticas, localizadas entre os átrios e a artéria aorta, cuja função é garantir a passagem do sangue do átrio para a artéria aorta durante a diástole pulmonar e evitar o refluxo de sangue durante a sístole ventricular.",
        alternativa4:
          "A indicação na figura representa as valvas venosas, localizadas no interior das veias e vênulas, cuja função é garantir a passagem do sangue em direção ao coração durante a sístole atrial e evitar o refluxo de sangue durante a sístole ventricular.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback87m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Zoofari, (Creative Commons BY-SA 3.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A indicação na figura representa as valvas atrioventriculares, localizadas entre os átrios e ventrículos, em ambos os lados do coração. Na porção direita do coração (à esquerda, na imagem) a valva atrioventricular é denominada tricúspide, enquanto na porção esquerda do coração (à direita, na imagem) é denominada bicúspide. A função das valvas atrioventriculares é garantir a passagem do sangue do átrio para o ventrículo durante a sístole atrial e evitar o refluxo de sangue (para os átrios) durante a sístole ventricular.",
      },
      {
        id: 101,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "No coração existem quatro valvas que permitem o fluxo sanguíneo adequado através das câmaras cardíacas, em consonância com o ciclo cardíaco de sístoles e diástoles. Analise a figura e as estruturas indicadas e, com base em seus conhecimentos, assinale a alternativa correta.",
        imagem: "img88m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A indicação na figura representa as valvas semilunares, localizadas junto aos orifícios de abertura da aorta e artéria pulmonar, logo após os ventrículos, cuja função é garantir a passagem do sangue dos ventrículos para as artérias durante a sístole ventricular e evitar o refluxo de sangue durante a diástole ventricular.",
        alternativa2:
          "A indicação na figura representa as valvas atrioventriculares, localizadas junto aos orifícios de abertura dos átrios, logo após os ventrículos, cuja função é garantir a passagem do sangue dos átrios para os ventrículos durante a sístole ventricular e evitar o refluxo de sangue durante a diástole atrial.",
        alternativa3:
          "A indicação na figura representa as valvas venosas, localizadas junto aos orifícios de abertura das veias cavas, logo após a aorta, cuja função é garantir a passagem do sangue dos ventrículos para as artérias durante a sístole atrial e evitar o refluxo de sangue durante a diástole atrial.",
        alternativa4:
          "A indicação na figura representa as valvas aórticas, localizadas junto aos orifícios de abertura do miocárdio, logo após o septo interatrial, cuja função é garantir a passagem do sangue do miocárdio para o pericárdio durante a sístole ventricular e evitar o refluxo de sangue durante a diástole ventricular.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback88m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A indicação na figura representa as valvas semilunares, localizadas junto aos orifícios de abertura da aorta e artéria pulmonar, logo após os ventrículos. Na porção direita do coração (à esquerda, na imagem) a valva localizada na abertura da artéria pulmonar é denominada valva pulmonar, enquanto na porção esquerda (à direita, na imagem) a valva localizada na abertura da artéria aorta é denominada valva aórtica.  A função das valvas semilunares é garantir a passagem do sangue dos ventrículos para as artérias durante a sístole ventricular e evitar o refluxo de sangue (das artérias para os ventrículos) durante a diástole ventricular.",
      },
      {
        id: 102,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "O coração é um órgão oco com quatro cavidades, constituído predominantemente por tecido muscular estriado cardíaco, bem como de tecido conjuntivo e células endoteliais, que constituem as camadas do coração, representadas na figura abaixo. Sobre as camadas do coração, com base na figura e em seus conhecimentos, assinale a alternativa correta.",
        imagem: "img89m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A estrutura I corresponde ao pericárdio fibroso, II ao pericárdio seroso, III ao epicárdio, IV ao miocárdio e V ao endocárdio.",
        alternativa2:
          "A estrutura I corresponde ao pericárdio seroso, II ao pericárdio fibroso, III ao miocárdio, IV ao epicárdio e V ao endocárdio.",
        alternativa3:
          "A estrutura I corresponde ao miocárdio, II ao pericárdio seroso, III ao endocárdio, IV ao pericárdio fibroso e V ao epicárdio.",
        alternativa4:
          "A estrutura I corresponde ao pericárdio fibroso, II ao pericárdio seroso, III ao endocárdio, IV ao epicárdio e V ao miocárdio.",
        alternativaCorreta: "1",
        feedBackImagem: "img89m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Na camada mais externa do coração, encontra-se o pericárdio, constituído por tecido conjuntivo e que pode ser estruturado em três camadas: uma mais externa, o pericárdio fibroso (representado por I), que está ligado intimamente com outra mais interna, o pericárdio seroso (representado por II), e, adiante, o epicárdio (representado por III), que se separa das outras camadas de pericárdio por uma breve camada líquida. O epicárdio encontra-se aderido ao miocárdio (representado por (IV), que consiste na camada intermediária e mais espessa do coração, constituída por tecido muscular estriado cardíaco. Por fim, a camada mais interna consiste no endocárdio (representada por V), composta por uma camada de células endoteliais que reveste as câmaras cardíacas.",
      },
      {
        id: 103,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "Quando sofremos uma lesão onde há extravasamento sanguíneo, nosso corpo reage na tentativa de evitar a perda excessiva de sangue. Este processo é denominado coagulação sanguínea e ocorre graças a uma série de reações. Sob esse aspecto, com base na figura e em seus conhecimentos, assinale a alternativa que corresponda às estruturas/fatores envolvidos nesse processo.",
        imagem: "img90m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Na formação do coágulo estão envolvidas as plaquetas, fatores de coagulação (principalmente enzimas), a fibrina e hemácias.",
        alternativa2:
          "Na formação do coágulo estão envolvidos os leucócitos, fatores de coagulação (principalmente hemácias), a fibrina e neutrófilos.",
        alternativa3:
          "Na formação do coágulo estão envolvidas as plaquetas, fatores de coagulação (principalmente células endoteliais), o colágeno e hemácias.",
        alternativa4:
          "Na formação do coágulo estão envolvidas as plaquetas, fatores de coagulação (principalmente colágeno), os monócitos e macrófagos.",
        alternativaCorreta: "1",
        feedBackImagem: "img90m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "No caso de um ferimento, as plaquetas são ativadas, vão se atraindo e aderem no local, formando um “tampão” inicial na lesão. Após uma sequência de reações químicas envolvendo fatores de coagulação (sobretudo enzimas), o resultado é o surgimento da fibrina (uma proteína fibrosa), que forma uma rede de filamentos que se entrelaçam com as plaquetas, formando um “tampão” mais compacto. As hemácias, incapazes de atravessar, acumulam-se no local juntamente com o plasma, originando o coágulo.",
      },
      {
        id: 104,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra um capilar linfático, localizado entre as células dos tecidos do corpo humano e possuindo calibre um pouco maior que os capilares sanguíneos. No que se refere aos capilares linfáticos, com base na figura e em seus conhecimentos, assinale a alternativa correta.",
        imagem: "extra6m5sc",
        legendaImagem:
          "Imagem: Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os capilares linfáticos são vasos microscópicos de fundo cego, cuja função é retirar o excesso de líquido tissular que extravasa dos capilares sanguíneos e banha as células (nutrindo-as e oxigenando-as), reconduzindo este líquido à circulação sanguínea.",
        alternativa2:
          "Os capilares linfáticos são vasos de calibre intermediário e de circulação contínua, cuja função é irrigar de líquido tissular as células (nutrindo-as e oxigenando-as), conduzindo este líquido à circulação linfática para ser novamente oxigenado nos pulmões.",
        alternativa3:
          "Os capilares linfáticos são vasos microscópicos e abertos, cuja função é retirar o excesso de elementos figurados que sobrecarrega os capilares sanguíneos e passa pelas células (nutrindo-as e oxigenando-as), conduzindo estes elementos ao intestino, onde serão digeridos.",
        alternativa4:
          "Os capilares linfáticos são vasos microscópicos de fundo cego, cuja função é irrigar as células dos tecidos e órgãos do corpo humano, promovendo a produção de linfócitos B e T que atuam na defesa do organismo, reconduzindo-os à circulação sanguínea.",
        alternativaCorreta: "1",
        feedBackImagem: "extra6m5sc",
        feedBackLegendaImagem:
          "Imagem: Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os capilares linfáticos são vasos microscópicos de fundo cego, cuja função é retirar o excesso de líquido tissular que extravasa dos capilares sanguíneos e banha as células (nutrindo-as e oxigenando-as), reconduzindo este líquido à circulação sanguínea. Contudo, a maior parte do líquido tissular que banha as células é reabsorvido pelos próprios capilares sanguíneos. Assim, o líquido tissular pode ter dois destinos: ser recolhido pelos capilares sanguíneos ou pelos capilares linfáticos. Quando o líquido é recolhido pelos capilares linfáticos, forma a linfa.",
      },
      {
        id: 105,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A figura abaixo demonstra a estrutura de linfonodos, que consistem em nódulos linfáticos de estrutura esponjosa e ricos em leucócitos, localizados no percurso dos vasos linfáticos, sobretudo em regiões estratégicas como pescoço, virilha e axilas. Sobre essas estruturas, assinale a alternativa que considerar correta.",
        imagem: "extra7m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os linfonodos têm como principal função filtrar a linfa que vem das extremidades corporais, de modo que os leucócitos presentes nessas estruturas identificam e destroem corpos estranhos e demais substâncias, possivelmente nocivos ao organismo.",
        alternativa2:
          "Os linfonodos têm como principal função filtrar o sangue que vem das extremidades corporais, de modo que os eritrócitos presentes nessas estruturas identificam e destroem corpos estranhos e demais substâncias, possivelmente nocivos ao organismo.",
        alternativa3:
          "Os linfonodos têm como principal função armazenar a linfa que vem das extremidades corporais, de modo que os canais presentes nessas estruturas são capazes de armazenar até 250 mL de linfa, que pode ser utilizado como reserva de emergência.",
        alternativa4:
          "Os linfonodos têm como principal função produzir a linfa que vem das extremidades corporais, de modo que em suas estruturas internas existem segmentos hematopoiéticos capazes de originar, a partir de células totipotentes, todos os tipos de células sanguíneas, inclusive o plasma.",
        alternativaCorreta: "1",
        feedBackImagem: "extra7m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A função dos linfonodos é de filtrar a linfa que vem das extremidades corporais, de modo que, ao passar pelos linfonodos, a linfa circula por canais onde há leucócitos, que identificam e destroem corpos estranhos e demais substâncias, possivelmente nocivos ao organismo.",
      },
      {
        id: 106,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "Os capilares sanguíneos são vasos finíssimos que estabelecem comunicação com uma arteríola e uma vênula, estando presentes em todas as regiões do corpo. São responsáveis por banhar as células com líquido tissular, nutrindo-as e oxigenando-as, bem como coletar por meio desse mesmo líquido, o gás carbônico e as excretas produzidas pelo seu metabolismo. Nos capilares sanguíneos, encontram-se estruturas como a representada por I na figura abaixo, localizadas em torno da entrada do capilar. No que se refere a essas estruturas e sua função, assinale a alternativa que considerar correta.",
        imagem: "extra8m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A estrutura indicada por I é um esfíncter pré-capilar, cuja função é regular o suprimento de sangue que flui para os tecidos, por meio de sua contração ou relaxamento.",
        alternativa2:
          "A estrutura indicada por I é uma válvula venosa, cuja função é impedir o refluxo de sangue para as arteríolas e vênulas, por meio de sua contração ou relexamento.",
        alternativa3:
          "A estrutura indicada por I é um linfonodo, cuja função é filtrar o plasma sanguíneo e, consequentemente, a linfa, ao passaram por canais ricos em leucócitos.",
        alternativa4:
          "A estrutura indicada por I é um nódulo linfático, cuja função é produzir glóbulos brancos que constituirão a defesa do organismo, os quais são denominados leucócitos.",
        alternativaCorreta: "1",
        feedBackImagem: "extra8m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A estrutura indicada por I na figura é um esfíncter pré-capilar, que consiste em uma célula muscular lisa, localizada em torno da entrada do capilar sanguíneo. A função desse esfíncter consiste em regular o suprimento de sangue que flui para os tecidos, por meio de sua contração (que diminui ou bloqueia o fluxo) ou relaxamento (que permite a passagem e distribuição do sangue no trajeto do capilar, para as células próximas).",
      },
      {
        id: 107,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "O sangue leva oxigênio e nutrientes para as células dos tecidos de todo o corpo, retirando gás carbônico e excretas resultantes do metabolismo celular. Contudo, não podemos esquecer que o coração, assim como todos os tecidos do corpo, também precisa ser nutrido e oxigenado e também produz substâncias em seu metabolismo celular que precisam ser retiradas. Por isso, o coração é vascularizado pelas estruturas representadas em I e II. Sobre essas indicações na figura abaixo, com base em seus conhecimentos, assinale a alternativa que considerar correta.",
        imagem: "extra9m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A irrigação sanguínea da musculatura cardíaca é realizada pelas artérias coronárias (representadas por I) que partem da aorta, enquanto as veias coronárias (representadas por II) levam sangue pobre em oxigênio do músculo cardíaco para o átrio direito do coração.",
        alternativa2:
          "A irrigação sanguínea da musculatura cardíaca é realizada pelas artérias carótidas (representadas por I) que partem da artéria pulmonar, enquanto as veias carótidas (representadas por II) levam sangue pobre em oxigênio do músculo cardíaco para o átrio esquerdo do coração.",
        alternativa3:
          "A irrigação sanguínea da musculatura cardíaca é realizada pelas veias cavas (representadas por I) que partem da veia cava superior, enquanto as artérias pulmonares (representadas por II) levam sangue rico em oxigênio do músculo cardíaco para o átrio direito do coração.",
        alternativa4:
          "A irrigação sanguínea da musculatura cardíaca é realizada pelas artérias coronárias (representadas por I) que partem da veia cava superior, enquanto as veias coronárias (representadas por II) levam sangue rico em oxigênio do músculo cardíaco para o ventrículo esquerdo do coração.",
        alternativaCorreta: "1",
        feedBackImagem: "extra9m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A irrigação sanguínea da musculatura cardíaca, com sangue rico em oxigênio e nutrientes, é realizada pelas artérias coronárias (representadas por I) que partem da aorta, enquanto as veias coronárias (representadas por II) levam o sangue pobre em oxigênio proveniente do músculo cardíaco para o átrio direito do coração, que será posteriormente conduzido aos pulmões para ser oxigenado.",
      },
      {
        id: 108,
        escolhida: "não",
        grupo: "2",
        modelo: "5",
        enunciado:
          "A arritmia cardíaca é uma patologia que ocorre quando os impulsos elétricos do coração não funcionam da maneira correta, provocando batimentos acelerados, lentos ou irregulares. Como forma de tratamento, dispositivos implantáveis denominados marca-passos são inseridos cirurgicamente sob a pele do tórax ou abdome, ajudando na melhora do quadro. Sob esse aspecto, assinale a alternativa correspondente ao funcionamento de um marca-passo.",
        imagem: "extra10m5sc",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os eletrodos atuam como sensores e identificam o funcionamento do coração, enviando sinais elétricos do coração ao gerador. Se o batimento estiver anormal, o gerador emite impulsos elétricos e os envia ao coração, estimulando e controlando os batimentos cardíacos.",
        alternativa2:
          "O gerador atua como sensor e identifica o funcionamento do coração, enviando sinais elétricos do coração aos eletrodos. Se o batimento estiver anormal, o eletrodo envia impulsos elétricos ao gerador, que emite um relatório, possibilitando que medidas médicas sejam tomadas com agilidade.",
        alternativa3:
          "Os eletrodos e gerador, por emitirem e transportarem sinais elétricos entre os vasos sanguíneos e o coração, são considerados um bombeador artificial que substitui o coração, de modo que este não realiza por si só os batimentos cardíacos.",
        alternativa4:
          "Os eletrodos e gerador atuam como sensores que emitem e transportam sinais elétricos entre os vasos sanguíneos e o coração, enviando sinais elétricos ao cérebro, mesmo quando os batimentos cardíacos estão normais.",
        alternativaCorreta: "1",
        feedBackImagem: "extra10m5sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A função do marca-passo é basicamente monitorar a frequência cardíaca do paciente e estimular o coração, evitando um funcionamento anormal que possa pôr em risco a vida. O marca-passo é composto por três componentes: o gerador, que é implantado abaixo da pele do paciente, os eletrodos, que conectam o gerador às câmaras cardíacas, e o programador, que é responsável pela configuração do marca-passo. Os eletrodos atuam como sensores e identificam o funcionamento do coração, enviando sinais elétricos do coração ao gerador. Se o batimento estiver anormal, o gerador emite impulsos elétricos e os envia ao coração, estimulando e controlando os batimentos cardíacos.",
      },
      {
        id: 109,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "A imunidade do ser humano atua na defesa do organismo contra o ataque de invasores externos. Assim, os órgãos imunitários envolvidos nesse processo, podem ser de dois tipos: os órgãos linfoides/imunitários primários e os órgãos linfoides/imunitários secundários. Sob esse aspecto, assinale a alternativa que mais se adeque às características dos órgãos imunitários primários e secundários.",
        alternativa1:
          "Os órgãos imunitários primários são aqueles onde os linfócitos se originam e se diferenciam. Os órgãos imunitários secundários são aqueles onde os linfócitos se multiplicam e exercem importantes funções na defesa do organismo.",
        alternativa2:
          "Os órgãos imunitários primários são aqueles onde os linfócitos se multiplicam e exercem importantes funções. Os órgãos imunitários secundários são aqueles onde os linfócitos se originam.",
        alternativa3:
          "Os órgãos imunitários primários são aqueles onde há produção de anticorpos e eritrócitos. Os órgãos imunitários secundários são aqueles onde há destruição de anticorpos e de glóbulos brancos.",
        alternativa4:
          "Os órgãos imunitários primários são aqueles onde há destruição de macrófagos e monócitos. Os órgãos imunitários secundários são aqueles onde há produção de antígenos e outras substâncias patógenas.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback1m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de D. Ilyin , (Domínio público – CC0 1.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os órgãos imunitários primários são aqueles onde os linfócitos se originam e se diferenciam (amadurecem), sendo compostos pela medula óssea e pelo timo. Os órgãos imunitários secundários são aqueles onde os linfócitos se multiplicam e exercem importantes funções na defesa do organismo, sendo compostos pelos linfonodos, adenoides, tonsilas, baço, apêndice vermiforme e placas de Peyer.",
      },
      {
        id: 110,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "A aterosclerose consiste em uma doença que afeta o sistema circulatório sanguíneo e que, na maioria das vezes, pode ser prevenida por meio de hábitos saudáveis como alimentação equilibrada e exercícios físicos regulares. Sobre essa patologia, com base em seus conhecimentos, assinale a alternativa que considerar correta.",
        alternativa1:
          "A aterosclerose consiste na deposição de placas de gordura na superfície interior das artérias, ocasionando estreitamento e enrijecimento, comprometendo a elasticidade da artéria acometida e causando aumento da pressão arterial sistólica.",
        alternativa2:
          "A aterosclerose consiste na interrupção total do fornecimento sanguíneo ao músculo cardíaco, de modo que as células necessariamente passam a necrosar (morrer) devido à falta de oxigênio na região.",
        alternativa3:
          "A aterosclerose consiste no refluxo sanguíneo de um dos ventrículos do coração (direito ou esquerdo) para um dos seus respectivos átrios, decorrente de uma falha nas valvas atrioventriculares.",
        alternativa4:
          "A aterosclerose consiste na deficiência de células vermelhas do sangue (hemácias), tendo como consequência a redução de hemoglobina no sangue, que acarreta na dificuldade de abastecimento dos tecidos com oxigênio.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback2m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A aterosclerose consiste na deposição de placas de gordura na superfície interior das artérias, ocasionando estreitamento e enrijecimento, comprometendo a elasticidade da artéria acometida e causando aumento da pressão arterial sistólica. A prevenção ocorre por meio da adoção de hábitos saudáveis, como alimentação equilibrada e prática de exercícios físicos regulares, embora um dos fatores de risco também envolva o fator genético. Quando as placas de gordura interrompem totalmente o fluxo sanguíneo da artéria, a aterosclerose pode desencadear o infarto do miocárdio.",
      },
      {
        id: 111,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "O infarto do miocárdio é uma patologia do coração que acomete indivíduos de todas as faixas etárias, contudo, é predominante na terceira idade, sendo que a principal causa consiste na aterosclerose. Sobre o infarto do miocárdio, com base em seus conhecimentos, assinale a alternativa que considerar correta.",
        alternativa1:
          "O infarto do miocárdio é causado pela interrupção do fluxo sanguíneo ao músculo cardíaco, provocada pela obstrução de uma artéria coronária ou suas ramificações, levando à necrose (morte tecidual) da região sem irrigação, devido à falta de oxigênio.",
        alternativa2:
          "O infarto do miocárdio consiste na deposição de placas de gordura na superfície interior das artérias, ocasionando estreitamento e enrijecimento, comprometendo a elasticidade da artéria acometida e causando aumento da pressão arterial sistólica.",
        alternativa3:
          "O infarto do miocárdio consiste no refluxo sanguíneo das artérias (aorta e artéria pulmonar) para um dos seus respectivos ventrículos (esquerdo ou direito), decorrente de uma falha nas valvas semilunares.",
        alternativa4:
          "O infarto do miocárdio consiste na deficiência de células vermelhas do sangue (hemácias), tendo como consequência a redução de hemoglobina no sangue, que acarreta na dificuldade de abastecimento dos tecidos com oxigênio.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback3m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O infarto do miocárdio é causado pela interrupção do fluxo sanguíneo ao músculo cardíaco, provocada pela obstrução de uma artéria coronária ou suas ramificações, levando à necrose (morte tecidual) da região sem irrigação, devido à falta de oxigênio. A principal causa da obstrução dessas artérias é decorrente da aterosclerose, isto é, na deposição de placas de gordura na superfície interior das artérias que, ao obstruírem completamente os vasos, provocam o infarto.",
      },
      {
        id: 112,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "A hipertensão arterial, também conhecida como “pressão alta”, consiste em uma alteração no sistema circulatório sanguíneo, que aumenta o risco de derrames de sangue no tecido cerebral e ataques cardíacos. Sobre a hipertensão arterial, com base em seus conhecimentos, assinale a alternativa que considerar correta.",
        alternativa1:
          "A hipertensão arterial ocorre quando a força ou pressão que o sangue exerce sobre a parede interna das artérias encontra-se acima do normal.",
        alternativa2:
          "A hipertensão arterial ocorre quando a força ou pressão que o sangue exerce sobre a parede interna das veias encontra-se abaixo do normal.",
        alternativa3:
          "A hipertensão arterial ocorre quando a pessoa sente dores fortes no peito ao menor esforço cardíaco, causado pelo estreitamento das artérias coronárias.",
        alternativa4:
          "A hipertensão arterial ocorre quando a pessoa sente dores fortes no peito, em decorrência da necrose total ou parcial do músculo cardíaco, pela falta de oxigenação do tecido.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback4m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A hipertensão arterial, também conhecida como “pressão alta”, ocorre quando a força ou pressão que o sangue exerce sobre a parede interna das artérias encontra-se acima do normal. Essa alteração do sistema circulatório sanguíneo é geralmente causada pelo estresse emocional, hábitos alimentares inadequados (sobretudo alimentação rica em gorduras e sais) e sedentarismo, aumentando os riscos de derrames de sangue no tecido cerebral e de ataques cardíacos. A pressão arterial pode ser aferida pelo método auscultatório utilizando um estetoscópio e um esfigmomanômetro. Com esses equipamentos, o profissional da saúde identifica a pressão sistólica (pressão máxima), que ocorre durante a sístole ventricular e sua medição ideal varia entre 110 a 120 mm Hg, bem como a pressão diastólica (pressão mínima), que ocorre durante a sístole ventricular, e varia entre 70 a 80 mm Hg.",
      },
      {
        id: 113,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "Quando entramos em contato com um microrganismo ou substância estranha, nosso organismo desencadeia processos a fim de reconhecer e se defender dos agentes que lhe são estranhos e prejudicais. Este processo é denominado imunidade adquirida ou adaptativa e pode ser classificada em dois tipos, de acordo com os seus mecanismos de ação: a imunidade humoral e imunidade celular. Sob esse aspecto, com base em seus conhecimentos, assinale a alternativa que represente as principais características da imunidade humoral.",
        alternativa1:
          "A imunidade humoral consiste no processo de defesa do organismo realizado por proteínas especiais produzidas por linfócitos B maduros, ou plasmócitos, denominadas anticorpos. Esses anticorpos se ligam ao antígeno, tornando-o inativo e favorecendo a sua destruição.",
        alternativa2:
          "A imunidade humoral consiste no processo de defesa do organismo realizado diretamente por células denominadas linfócitos T citotóxicos, que reconhecem células anormais ou infectadas e, por meio de liberação de substâncias, perfuram a membrana plasmática dessas células, destruindo-as.",
        alternativa3:
          "A imunidade humoral consiste no processo de defesa do organismo realizado por proteínas especiais produzidas por linfócitos T citotóxicos, ou macrófagos, denominadas plasmócitos. Esses plasmócitos se ligam ao antígeno, tornando-o inativo e favorecendo sua destruição.",
        alternativa4:
          "A imunidade humoral consiste no processo de defesa do organismo realizado diretamente por células denominadas totipotentes, que por meio de liberação de substâncias digestivas, digerem o patógeno, eliminando-o do organismo.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback5m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A imunidade humoral consiste no processo de defesa do organismo realizado por proteínas especiais produzidas por linfócitos B maduros, ou plasmócitos, denominadas anticorpos. Esses anticorpos se ligam ao antígeno/patógeno, tornando-o inativo e favorecendo a sua destruição.",
      },
      {
        id: 114,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "Quando entramos em contato com um microrganismo ou substância estranha, nosso organismo desencadeia processos a fim de reconhecer e se defender dos agentes que lhe são estranhos e prejudicais. Este processo é denominado imunidade adquirida ou adaptativa e pode ser classificada em dois tipos, de acordo com os seus mecanismos de ação: a imunidade humoral e imunidade celular. Sob esse aspecto, com base em seus conhecimentos, assinale a alternativa que represente as principais características da imunidade celular.",
        alternativa1:
          "A imunidade celular consiste no processo de defesa do organismo realizado diretamente por células denominadas linfócitos T citotóxicos, que reconhecem células anormais ou infectadas e, por meio de liberação de substâncias, perfuram a membrana plasmática dessas células, destruindo-as.",
        alternativa2:
          "A imunidade celular consiste no processo de defesa do organismo realizado por proteínas especiais produzidas por linfócitos B maduros, ou plasmócitos, denominadas anticorpos. Esses anticorpos se ligam ao antígeno, tornando-o inativo e favorecendo a sua destruição.",
        alternativa3:
          "A imunidade celular consiste no processo de defesa do organismo realizado por proteínas especiais produzidas por linfócitos T citotóxicos, ou macrófagos, denominadas plasmócitos. Esses plasmócitos se ligam ao antígeno, tornando-o inativo e favorecendo sua destruição.",
        alternativa4:
          "A imunidade celular consiste no processo de defesa do organismo realizado diretamente por células denominadas totipotentes, que por meio de liberação de substâncias digestivas, digerem o patógeno, eliminando-o do organismo.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback6m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A imunidade celular consiste no processo de defesa do organismo realizado diretamente por células denominadas linfócitos T citotóxicos. Quando os invasores (microrganismos como vírus e bactérias, por exemplo) sobrevivem e se proliferam em células hospedeiras, impossibilitando a ação de anticorpos, os linfócitos T reconhecem células anormais ou infectadas e, por meio de liberação de substâncias, perfuram a membrana plasmática dessas células, destruindo-as.",
      },
      {
        id: 115,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "É comum dizer que as artérias carregam sangue arterial (rico em oxigênio) e as veias carregam sangue venoso (rico em gás carbônico). Entretanto existem duas exceções. Quais são elas e que tipo de sangue cada uma delas transporta? Assinale a alternativa que considerar correta.",
        alternativa1:
          "As exceções são as artérias pulmonares, que transportam sangue pobre em oxigênio do ventrículo direito aos pulmões; e as veias pulmonares, que transportam sangue rico em oxigênio dos pulmões ao átrio esquerdo.",
        alternativa2:
          "As exceções são as veias pulmonares, que transportam sangue pobre em oxigênio do ventrículo direito aos pulmões; e as artérias pulmonares, que transportam sangue rico em oxigênio dos pulmões ao átrio esquerdo.",
        alternativa3:
          "As exceções são as veias cavas, que transportam sangue rico em oxigênio dos tecidos ao átrio direito do coração; e as artérias coronárias, que transportam sangue pobre em oxigênio dos pulmões ao átrio direito.",
        alternativa4:
          "As exceções são as artérias coronárias, que transportam sangue pobre em oxigênio do ventrículo direito aos pulmões; e as veias coronárias, que transportam sangue rico em oxigênio dos tecidos ao átrio direito.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback7m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Zoofari, (Creative Commons BY-SA 3.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "É comum dizer que as artérias carregam sangue arterial (rico em oxigênio) e as veias carregam sangue venoso (rico em gás carbônico). Entretanto existem duas exceções, que são as artérias pulmonares, que transportam sangue pobre em oxigênio do ventrículo direito aos pulmões; e as veias pulmonares, que transportam sangue rico em oxigênio dos pulmões ao átrio esquerdo.",
      },
      {
        id: 116,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "Grande parte das mortes no mundo é causada por doenças cardiovasculares. Com base em seus conhecimentos, assinale a única alternativa abaixo que corresponda a três doenças que acometam o coração e/ou os vasos sanguíneos.",
        alternativa1:
          "Infarto do miocárdio, aterosclerose e hipertensão arterial.",
        alternativa2: "Aterosclerose, isquemia e apendicite.",
        alternativa3:
          "Hipertensão arterial, esclerose múltipla e diverticulite.",
        alternativa4:
          "Esclerose múltipla, derrame cerebral e síndrome do pânico.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "São exemplos de doenças cardiovasculares: 1. Infarto do miocárdio, que consiste na interrupção do fluxo sanguíneo ao músculo cardíaco, provocada pela obstrução de uma artéria coronária ou suas ramificações, levando à necrose (morte tecidual) da região sem irrigação, devido à falta de oxigênio; 2. Aterosclerose, que consiste na deposição de placas de gordura na superfície interior das artérias, ocasionando estreitamento e enrijecimento, comprometendo a elasticidade da artéria acometida e causando aumento da pressão arterial sistólica. A aterosclerose, ainda, pode ser considerada como uma das possíveis causas de um infarto do miocárdio; e 3. Hipertensão arterial, que ocorre quando a força ou pressão que o sangue exerce sobre a parede interna das artérias encontra-se acima do normal.",
      },
      {
        id: 117,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "No processo de resposta imune, os linfócitos T e B são ativados e se multiplicam, podendo se diferenciar em um tipo de célula denominado “células de memória”, que desempenham uma importante função na defesa do organismo. Sobre as células de memória, com base em seus conhecimentos, assinale a alternativa que considerar correta.",
        alternativa1:
          "As células de memória, surgem da diferenciação de linfócitos T (auxiliares e citotóxicos) e linfócitos B, e são responsáveis por guardar informações de reconhecimento do patógeno/antígeno, respondendo rapidamente no caso de um novo contato (resposta secundária).",
        alternativa2:
          "As células de memória, surgem da diferenciação de linfócitos T (plasmócitos e macrófagos) e linfócitos B, e são responsáveis por reconhecer células anormais ou infectadas e, por meio de liberação de substâncias, perfuram a membrana plasmática dessas células, destruindo-as.",
        alternativa3:
          "As células de memória, surgem da diferenciação de linfócitos T (auxiliares e citotóxicos) e linfócitos B, e são responsáveis por produzir proteínas especiais, denominadas anticorpos, que se ligam ao antígeno, tornando-o inativo e favorecendo a sua destruição.",
        alternativa4:
          "As células de memória, surgem da diferenciação de linfócitos T (plasmócitos e auxiliares) e linfócitos B, e são responsáveis por liberar substâncias denominadas interleucinas que ativam e estimulam a produção dos antígenos, aumentando sua capacidade de reconhecimento.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback9m6sc",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Sciencia58 e Domdomegg, (Creative Commons CC BY-AS 4.0), via Wikimedia Commons. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "As células de memória, surgem da diferenciação de linfócitos T (auxiliares e citotóxicos) e linfócitos B, e são responsáveis por guardar informações de reconhecimento do patógeno/antígeno, respondendo rapidamente no caso de um novo contato (resposta secundária). Essa resposta, é responsável pelo surgimento, em um curto intervalo de tempo, de um “exército” de células específicas envolvidas na defesa do organismo.",
      },
      {
        id: 118,
        escolhida: "não",
        grupo: "2",
        modelo: "6",
        enunciado:
          "A imunização consiste na aquisição de proteção imunológica contra agentes causadores de doenças, e pode categorizada em dois tipos: imunização ativa ou imunização passiva. No que se refere aos dois tipos de imunização, com base em seus conhecimentos, assinale a alternativa que considerar correta.",
        alternativa1:
          "Na imunização ativa, o próprio organismo é estimulado a produzir anticorpos protetores, como, por exemplo, na vacinação. Na imunização passiva, os anticorpos gerados em outro organismo são retirados, purificados e inoculados no ser que se deseja imunizar, a exemplo do soro imune.",
        alternativa2:
          "Na imunização ativa, os anticorpos gerados em outro organismo são retirados, purificados e inoculados no ser que se deseja imunizar, a exemplo do soro imune. Na imunização passiva, o próprio organismo é estimulado a produzir anticorpos protetores, como, por exemplo, na vacinação.",
        alternativa3:
          "Na imunização ativa, o organismo não desenvolve memória imunitária e, por isso, o processo de imunização é temporário. Na imunização passiva, o organismo desenvolve memória imunitária e, por isso, a imunização é permanente ou duradoura.",
        alternativa4:
          "Na imunização ativa, os linfócitos B não se diferenciam em plasmócitos e, dessa forma, não ocorre a produção de anticorpos. Na imunização passiva, os linfócitos T são ativados e se multiplicam, podendo se diferenciar em células de memória.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Na imunização ativa, o próprio organismo é estimulado a produzir anticorpos protetores, como, por exemplo, na vacinação. Assim, nesse tipo de imunização, os antígenos desencadeiam uma resposta imunitária primária, que promove a ativação e multiplicação de linfócitos e produção anticorpos, além do surgimento de células de memória. Caso haja uma nova infecção (novo contato com o patógeno), ocorrerá uma resposta imune secundária, desencadeada pelas células de memória, que guardam informações de reconhecimento do patógeno, sendo ativadas e respondendo rapidamente a um novo contato.<br/>Na imunização passiva, os anticorpos são gerados em outro organismo (de forma similar à imunização ativa), geralmente em mamíferos de grande porte, estimulando o sistema imunitário do animal a produzir anticorpos específicos. Esses anticorpos, posteriormente, são retirados, purificados e inoculados no ser que se deseja imunizar, caracterizando o que chamamos de inoculação de soro imune.",
      }
    ];
  }
}
