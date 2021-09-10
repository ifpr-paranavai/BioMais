import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG4 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 142,
        escolhida: "não",
        grupo: "4",
        modelo: "2",
        enunciado:
          "O conjunto de órgãos e estruturas responsáveis pela filtração do sangue, produção, armazenamento e eliminação de substâncias potencialmente tóxicas do organismo por meio da urina, constitui o sistema urinário. Analise as alternativas a seguir e assinale todas aquelas que correspondam aos órgãos e estruturas básicos deste sistema.",
        alternativa1: "Rins, ureteres, bexiga e uretra",
        alternativa2: "Rins, uretra, pâncreas e bexiga",
        alternativa3: "Rins, apêndice, útero e uretra",
        alternativa4: "Rins, ureteres, bexiga e útero",
        alternativa5: "",
        alternativa6: "ALTERNATIVAS CORRETAS",
        alternativaCorreta: "FEEDBACK IMAGEM",
        feedBackImagem: "LEGENDA DA IMAGEM DE FEEDBACK",
        feedBackLegendaImagem: "FEEDBACK TEXTO",
        feedBackTexto:
          "GRUPO<br/>4<br/><br/>MODELO<br/>2<br/><br/>ENUNCIADO<br/>Dentre as principais funções do sistema urinário, encontra-se a produção, armazenamento e eliminação de urina. Sobre a fisiologia do sistema urinário, com base em seus conhecimentos, assinale todas as alternativas que julgar corretas.<br/><br/>ALTERNATIVAS<br/>O sangue a ser filtrado nos rins percorre os capilares do glomérulo sob alta pressão, forçando a saída de líquido sanguíneo para a cápsula renal.<br/>Ao passar pelo túbulo néfrico, o filtrado glomerular passa por um processo de reabsorção e secreção de substâncias, e ao final do túbulo transforma-se em urina.<br/>A urina produzida nos rins é encaminhada para os ureteres que desembocam na bexiga, onde é armazenada até ser eliminada pela uretra.<br/>A urina é armazenada na bexiga graças ao esfíncter uretral, localizado na união entre a bexiga e a uretra, e de músculos na parede da uretra que se mantém contraídos impedindo sua saída.<br/>O sangue chega aos néfrons por meio das arteríolas eferentes, proveniente da veia renal, passando pelo túbulo néfrico, onde é filtrado.<br/>Ao passar pelo glomérulo, o filtrado glomerular é reabsorvido, de modo que a formação da urina se dá na porção proximal do túbulo néfrico, contendo glicose, ureia, proteínas e sais.<br/><br/>ALTERNATIVAS CORRETAS<br/>1,2,3,4<br/><br/>FEEDBACK IMAGEM<br/>Sem<br/><br/>LEGENDA DA IMAGEM DE FEEDBACK<br/>Sem<br/><br/>FEEDBACK TEXTO<br/>O sangue chega aos néfrons por meio das arteríolas aferentes, proveniente da artéria renal, passando pelos capilares do glomérulo, sob alta pressão, onde é filtrado, forçando a saída de líquido sanguíneo para a cápsula renal.<br/>Ao passar pelo túbulo néfrico, o filtrado glomerular passa por um processo de reabsorção e secreção de substâncias, e ao final do túbulo transforma-se em urina, que em condições normais é composta de água (cerca de 95 por cento), ureia, e menores quantidades de amônia, ácido úrico e sais.<br/>A urina produzida nos rins é encaminhada para os ureteres que desembocam na bexiga, onde é armazenada até ser eliminada pela uretra.<br/>A urina é armazenada na bexiga graças ao esfíncter uretral, localizado na união entre a bexiga e a uretra, e de músculos na parede da uretra que se mantém contraídos impedindo sua saída.",
      },
      {
        id: 143,
        escolhida: "não",
        grupo: "4",
        modelo: "2",
        enunciado:
          "Os rins exercem controle sobre o sangue, mantendo diferentes substâncias em suas quantidades normais, atuando como um “controle de qualidade” do sangue. A quantidade de água e outras substâncias são controladas a partir da necessidade do corpo em retê-las ou eliminá-las. Sob esse aspecto, analise as alternativas abaixo assinale todas as proposições que julgar corretas.",
        alternativa1:
          "O principal agente fisiológico regulador do equilíbrio hídrico (água) no corpo é o hormônio antidiurético (ADH), sintetizado no hipotálamo e armazenado na hipófise.",
        alternativa2:
          "O hormônio antidiurético atua sobre os túbulos contorcidos distais dos néfrons e ductos coletores, aumentando ou diminuindo a reabsorção de água.",
        alternativa3:
          "A quantidade de sódio no sangue é controlada pelo hormônio aldosterona, secretado pelo córtex da glândula adrenal, localizada acima dos rins.",
        alternativa4:
          "Quando a quantidade de sódio no sangue está baixa, a aldosterona é secretada e atua sobre os túbulos contorcidos distais e ductos coletores, aumentando a reabsorção do sódio no filtrado glomerular.",
        alternativa5:
          "O principal agente fisiológico regulador do equilíbrio de sódio no corpo é o hormônio aldosterona, produzido e armazenado na glândula tireoide.",
        alternativa6:
          "A quantidade de sódio no sangue é controlada pelo hormônio progesterona, sintetizado no hipotálamo e armazenado pela tireoide.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "O principal agente fisiológico regulador do equilíbrio hídrico (água) no corpo é o hormônio antidiurético (ADH), sintetizado no hipotálamo e armazenado na hipófise. Esse hormônio atua sobre os túbulos contorcidos distais dos néfrons e ductos coletores, aumentando ou diminuindo a reabsorção de água.<br/>A quantidade de sódio no sangue é controlada pelo hormônio aldosterona, secretado pelo córtex da glândula adrenal, localizada acima dos rins. Quando a quantidade de sódio no sangue está baixa, a aldosterona é secretada e atua sobre os túbulos contorcidos distais e ductos coletores, aumentando a reabsorção do sódio no filtrado glomerular.",
      },
      {
        id: 146,
        escolhida: "não",
        grupo: "4",
        modelo: "4",
        enunciado:
          "O GIF abaixo representa o processo de micção, ou seja, eliminação da urina da bexiga para o meio externo. Analise a animação e, com base em seus conhecimentos, assinale a alternativa correta acerca desse processo.",
        imagem: "gif1m4uri",
        legendaImagem: "",
        alternativa1:
          "Quando a bexiga está cheia, receptores nervosos dos rins transmitem a informação à bexiga, provocando vontade de urinar. Na micção, ocorre relaxamento dos músculos da bexiga e contração dos esfíncteres.",
        alternativa2:
          "A micção é um processo exclusivamente involuntário, controlado por hormônios como o ADH e aldosterona.",
        alternativa3:
          "A micção é um processo exclusivamente voluntário, controlado por hormônios como a angiotensina e o glucagon.",
        alternativa4: "",
        alternativaCorreta: "1",
        feedBackImagem: "",
        feedBackLegendaImagem: "",
        feedBackTexto: "",
      },
      {
        id: 147,
        escolhida: "não",
        grupo: "4",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra um ureter em corte, bem como movimentos realizados por sua camada intermediaria de tecido muscular liso, denominados de peristaltismo. Sobre essa característica fisiológica dos ureteres, analise a animação e as alternativas e, com base em seus conhecimentos, assinale a alternativa que julgar correta.",
        imagem: "gif2m4uri",
        legendaImagem: "Imagem: CrashCourse, via Makeagif. Disponível aqui.",
        alternativa1:
          "O peristaltismo da musculatura dos ureteres facilita a condução da urina proveniente dos rins em direção à bexiga.",
        alternativa2:
          "O peristaltismo da musculatura dos ureteres facilita a reabsorção de substâncias no túbulo, as quais voltam para o sangue.",
        alternativa3:
          "O peristaltismo da musculatura dos ureteres facilita o extravasamento de fluidos dos néfrons, auxiliando na formação da urina.",
        alternativa4:
          "O peristaltismo da musculatura dos ureteres facilita a contração da musculatura uterina durante o período menstrual.",
        alternativaCorreta: "1",
        feedBackImagem: "gif2m4uri",
        feedBackLegendaImagem:
          "Imagem: CrashCourse, via Makeagif. Disponível aqui.",
        feedBackTexto:
          "A animação abaixo demonstra um ureter em corte, bem como movimentos realizados por sua camada intermediaria de tecido muscular liso, denominados de peristaltismo. O peristaltismo da musculatura dos ureteres facilita a condução da urina proveniente dos rins em direção à bexiga.",
      },
      {
        id: 148,
        escolhida: "não",
        grupo: "4",
        modelo: "4",
        enunciado:
          "A animação abaixo representa o processo fisiológico que ocorre no interior dos néfrons, necessários para a formação da urina. Com base em seus conhecimentos sobre o tema, analise a animação e as alternativas propostas e assinale a proposição que julgar verdadeira.",
        imagem: "gif3m4uri",
        legendaImagem:
          "Imagem: Nehasethi – Design Mate, via Makeagif. Disponível aqui.",
        alternativa1:
          "A animação demonstra a água e resíduos sendo extravasados dos capilares do glomérulo e, em seguida, o processo de reabsorção de água e sais importantes do túbulo néfrico pelos capilares.",
        alternativa2:
          "A animação demonstra a água e resíduos sendo reabsorvidos pelos capilares do glomérulo e, em seguida, o processo de extravasamento de água e sais importantes do glomérulo para a cápsula renal.",
        alternativa3:
          "A animação demonstra o processo de eliminação ativa de excretas do ducto coletor para o túbulo contorcido distal, que serão reabsorvidas pelo sangue.",
        alternativa4:
          "A animação demonstra o processo de eliminação ativa de excretas da cápsula renal para o novelo de capilares glomerulares, que são direcionados às arteríolas aferentes e sendo reabsorvidos pelo sangue.",
        alternativaCorreta: "ALTERNATIVA CORRETA",
        feedBackImagem: "FEEDBACK IMAGEM",
        feedBackLegendaImagem: "LEGENDA DA IMAGEM DE FEEDBACK",
        feedBackTexto:
          "FEEDBACK TEXTO<br/>O processo fisiológico que ocorre no interior dos néfrons, necessários para a formação da urina é demonstrado na animação em dois momentos: no primeiro, ilustra-se a água e resíduos sendo extravasados dos capilares do glomérulo em direção à cápsula renal e, em seguida, para o túbulo néfrico. No segundo, é ilustrado o processo de reabsorção de água e sais importantes do túbulo néfrico pelos capilares, que voltam para o sangue. Assim, ao final do percurso pelo túbulo néfrico, o líquido denominado filtrado glomerular passa a ser chamado de urina, e está pronto para sair dos rins e ser eliminado por meio das vias uriníferas para o meio externo.",
      },
      {
        id: 149,
        escolhida: "não",
        grupo: "4",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra os órgãos e estruturas do sistema urinário masculino e o trajeto da urina, desde sua formação até sua eliminação pelo organismo. Sobre o sistema urinário, com base em seus conhecimentos, analise a figura e as alternativas e assinale a alternativa que julgar verdadeira.",
        imagem: "gif4m4uri",
        legendaImagem:
          "Imagem: Notselc – Voidaq, via Makeagif. Disponível aqui.",
        alternativa1:
          "A urina é formada nos rins, passa pela pelve renal, ureteres e chega à bexiga, onde fica armazenada até ser eliminada pela uretra.",
        alternativa2:
          "A urina é formada nos rins, passa pela uretra, pelve renal e chega à bexiga, onde fica armazenada até ser eliminada pelo ureter.",
        alternativa3:
          "A urina é formada na pelve renal, passa pelos rins, ureteres e chega à bexiga, onde fica armazenada até ser eliminada pela uretra.",
        alternativa4:
          "A urina é formada na pelve renal, passa pela uretra, rins e chega à bexiga, onde fica armazenada até ser eliminada pelo ureter.",
        alternativaCorreta: "1",
        feedBackImagem: "gif4m4uri",
        feedBackLegendaImagem:
          "Imagem: Notselc – Voidaq, via Makeagif. Disponível aqui.",
        feedBackTexto:
          "A urina é formada nos rins, em estruturas funcionais denominadas néfrons, passa pela pelve renal, uma estrutura em forma de funil que direciona a urina para os ureteres, vias uriníferas que desembocam na bexiga, órgão onde a urina fica armazenada até ser eliminada pela uretra.",
      },
      {
        id: 150,
        escolhida: "não",
        grupo: "4",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra um néfron, estrutura funcional dor rins, responsável pela filtração do sangue e produção de urina. Com base em seus conhecimentos sobre o tema, analise a figura e as alternativas propostas e assinale a alternativa que julgar verdadeira.",
        imagem: "img10m5uri",
        legendaImagem:
          "Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Ao redor dos néfrons há uma rede de capilares sanguíneos que se ramificam da arteríola eferente. A proximidade desses capilares com o túbulo néfrico possibilita a reabsorção de água e substâncias úteis do filtrado para o sangue, e da secreção de excretas dos capilares para a urina em formação.",
        alternativa2:
          "Ao redor dos néfrons há uma rede de capilares sanguíneos que se ramificam da arteríola aferente. A proximidade desses capilares com o túbulo néfrico possibilita a secreção de água e substâncias úteis do sangue para o filtrado, e da reabsorção de excretas do túbulo néfrico para o sangue.",
        alternativa3:
          "O túbulo néfrico é formado pelo túbulo contorcido distal, onde ocorre a filtração do sangue, pela alça néfrica, onde ocorre a eliminação ativa de excretas, e pelo túbulo contorcido distal, que coleta a urina formada direcionando-a ao ureter.",
        alternativa4:
          "O túbulo néfrico é formado pelo glomérulo, onde ocorre a reabsorção ativa de substâncias úteis, pelo túbulo contorcido distal, onde ocorre a eliminação ativa de excretas, e pela alça néfrica, que coleta a urina formada direcionando-a ao ureter.",
        alternativaCorreta: "1",
        feedBackImagem: "feedback1m5uri",
        feedBackLegendaImagem:
          "Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Ao redor dos néfrons há uma rede de capilares sanguíneos (denominados capilares peritubulares) que se ramificam da arteríola eferente. A proximidade desses capilares com o túbulo néfrico possibilita a reabsorção de água e substâncias úteis do filtrado para o sangue, e da secreção de excretas dos capilares para a urina em formação. Esses processos são ativos, o que significa que há dispêndio de energia por parte do túbulo renal.",
      },
      {
        id: 151,
        escolhida: "não",
        grupo: "4",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra o processo de hemodiálise. Neste procedimento, uma máquina recebe o sangue de um paciente e é impulsionado por uma bomba até o filtro de diálise, onde é exposto à uma solução através de uma membrana semipermeável que retira o líquido e as toxinas em excesso e devolve o sangue limpo para o paciente. Sobre esse procedimento, com base em seus conhecimentos, analise as alternativas abaixo e selecione a que julgar como correta.",
        imagem: "img11m5uri",
        legendaImagem:
          "Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "A hemodiálise é indicada para pacientes com insuficiência renal aguda ou crônica graves e tem como função limpar e filtrar o sangue, fazendo o trabalho que os rins doentes não podem fazer.",
        alternativa2:
          "A hemodiálise é indicada para pacientes com cálculos renais e tem como função eliminar os cristais formados nos rins, fazendo o trabalho que os rins afetados não podem fazer.",
        alternativa3:
          "A hemodiálise é indicada para pacientes com cistite e tem como função limpar o filtrado glomerular e urina para que os microrganismos não se manifestem nos rins.",
        alternativa4:
          "A hemodiálise é indicada para pacientes com problemas no metabolismo de lipídeos e tem como função limpar o sangue e estimular a emulsificação dos lipídeos nos rins.",
        alternativaCorreta: "1",
        feedBackImagem: "img11m5uri",
        feedBackLegendaImagem:
          "Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "FEEDBACK TEXTO<br/>A hemodiálise é indicada para pacientes com insuficiência renal aguda ou crônica graves e tem como função limpar e filtrar o sangue, fazendo o trabalho que os rins doentes não podem fazer. Neste procedimento, uma máquina recebe o sangue de um paciente e é impulsionado por uma bomba até o filtro de diálise, onde é exposto à uma solução através de uma membrana semipermeável que retira o líquido e as toxinas em excesso e devolve o sangue limpo para o paciente.",
      },
      {
        id: 152,
        escolhida: "não",
        grupo: "4",
        modelo: "5",
        enunciado:
          "Os cálculos renais, popularmente conhecidos como pedras nos rins, são considerados uma doença do sistema urinário muito comum e que normalmente causam muita dor em pessoas acometidas. Sobre esta anomalia do sistema urinário, analise a figura abaixo e as alternativas, selecionando a proposição que julgar como verdadeira.",
        imagem: "",
        legendaImagem: "ALTERNATIVAS",
        alternativa1:
          "Os cálculos renais consistem em lesões dos glomérulos dos néfrons, trazendo graves prejuízos à função renal. Devido a isso, os pacientes precisam passar por sessões de hemodiálise, que filtra o sangue e retira as excretas metabólicas do organismo.",
        alternativa2:
          "Os cálculos renais consistem em um tipo de infecção bacteriana que acomete o parênquima dos rins, que se prolifera causando muita dor, consistindo em uma doença crônica irreversível.",
        alternativa3: "",
        alternativa4: "ALTERNATIVA CORRETA",
        alternativaCorreta: "FEEDBACK IMAGEM",
        feedBackImagem: "LEGENDA DA IMAGEM DE FEEDBACK",
        feedBackLegendaImagem: "FEEDBACK TEXTO",
        feedBackTexto: "",
      },
      {
        id: 153,
        escolhida: "não",
        grupo: "4",
        modelo: "5",
        enunciado:
          "A figura abaixo consiste em uma tabela de coloração da urina, indicando o nível de hidratação do corpo de acordo com a cor apresentada. Quando estamos desidratados, a urina eliminada é mais escura, pois possui menor quantidade de água e, consequentemente, maior concentração de substâncias. De que forma isso ocorre? Analise a figura e as alternativas abaixo e assinale a alternativa que julgar verdadeira.",
        imagem: "img13m5uri",
        legendaImagem:
          "Imagem: Adaptada de Petar Milosevic, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "Quando bebemos pouca água, a concentração do sangue aumenta, o que acarreta na liberação do hormônio ADH. O ADH aumenta a reabsorção de água do filtrado glomerular pelos capilares peritubulares, que retorna para o sangue, o que torna a urina mais concentrada.",
        alternativa2:
          "Quando bebemos muita água, a concentração do sangue aumenta, o que é identificado pelo fígado, estimulando o pâncreas a liberar o hormônio FSH, que diminui a reabsorção de água pelos do glomérulo e do ducto coletor pelas artérias renais, tornando os glomérulos mais permeáveis.",
        alternativa3:
          "Quando bebemos pouca água, a concentração do sangue diminui, o que é identificado pela hipófise, estimulando o hipotálamo a liberar o hormônio aldosterona, que controla a reabsorção de água pelos rins, tornando os glomérulos mais permeáveis.",
        alternativa4:
          "Quando bebemos pouca água, a concentração do sangue diminui, o que é identificado pelo hipotálamo, estimulando os rins a liberarem o hormônio ADH, que controla a reabsorção de sódio e eletrólitos pela alça néfrica e túbulos coletores.",
        alternativaCorreta: "1",
        feedBackImagem: "img13m5uri",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Petar Milosevic, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "Quando bebemos pouca água, o corpo fica desidratado e a concentração (de solutos) do sangue aumenta. Com isso, a hipófise é estimulada a liberar hormônio ADH. Esse hormônio aumenta a reabsorção de água do filtrado glomerular (presente no túbulo néfrico) pelos capilares peritubulares, fazendo com que esta água retorne para o sangue, fazendo com que a quantidade de água a ser eliminada diminui, o que torna a urina mais concentrada.",
      },
      {
        id: 154,
        escolhida: "não",
        grupo: "4",
        modelo: "5",
        enunciado:
          "A figura abaixo demonstra o processo de filtração do sangue e formação de urina na unidade funcional dos rins: o néfron. Ambos os rins são compostos por cerca de néfrons, localizados no córtex renal. Para filtrar o sangue e formar a urina, os néfrons realizam três processos, representados na figura. Com base em seus conhecimentos, analise a figura e as alternativas e assinale a proposição correta.",
        imagem: "img14m5uri",
        legendaImagem:
          "Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Em I, o plasma sanguíneo e as substâncias dissolvidas são filtrados no glomérulo; Em II, a água, os íons e outras substâncias importantes são reabsorvidos pelos capilares peritubulares, retornando para o sangue; Em III, resíduos e excesso de íons são secretados pelos capilares para o túbulo renal, formando a urina.",
        alternativa2:
          "Em I, a água, os íons e outras substâncias importantes são reabsorvidos pelos capilares peritubulares, retornando para o sangue; Em II, o plasma sanguíneo e as substâncias dissolvidas são filtrados no glomérulo; Em III, resíduos e excesso de íons são absorvidos pelos capilares, retornando para o sangue.",
        alternativa3:
          "Em I, o plasma sanguíneo e as substâncias dissolvidas são excretados no ducto coletor; Em II, a água, os íons e outras substâncias importantes são reabsorvidos pelo glomérulo, retornando para o sangue; Em III, resíduos e excesso de íons são secretados pelo ducto coletor para os capilares peritubulares, formando a urina.",
        alternativa4:
          "Em I, resíduos e excesso de íons são secretados pelos capilares para o túbulo renal, formando a urina; Em II, o plasma sanguíneo e as substâncias dissolvidas são filtrados no glomérulo; Em III, a água, os íons e outras substâncias importantes são reabsorvidos pelos capilares peritubulares, retornando para o sangue.",
        alternativaCorreta: "1",
        feedBackImagem: "img14m5uri",
        feedBackLegendaImagem:
          "Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Em I, está representada a filtração glomerular, processo no qual o plasma sanguíneo e as substâncias dissolvidas são filtrados no glomérulo e passam para a cápsula renal.<br/>Em II, está representada a reabsorção tubular, processo no qual a água, os íons e outras substâncias importantes são reabsorvidos do túbulo renal e ducto coletor pelos capilares peritubulares, retornando para o sangue.<br/>Em III, está representada a secreção tubular, processo no qual resíduos metabólicos, fármacos e excesso de íons, por exemplo, são secretados pelos capilares para o túbulo renal, formando a urina.",
      },
      {
        id: 155,
        escolhida: "não",
        grupo: "4",
        modelo: "6",
        enunciado:
          "Em uma festa, Ana bebeu cinco copos de suco e Maria bebeu a mesma quantidade em cerveja. Contudo, Maria precisou urinar mais vezes que Ana, em um mesmo período de tempo. Sob este aspecto, com base em seus conhecimentos a respeito do controle da função renal, assinale a alternativa correspondente à possível causa desta situação.",
        alternativa1:
          "A presença de álcool no sangue inibe a secreção de ADH, impedindo a reabsorção de água nos túbulos néfricos, o que aumenta a quantidade de água presente na urina. Por isso a ingestão de bebidas alcoólicas estimula a diurese.",
        alternativa2:
          "A presença de álcool no sangue estimula a secreção de ADH, aumentando a reabsorção de água nos túbulos néfricos, o que diminui a quantidade de água presente na urina. Por isso, a ingestão de bebidas alcoólicas estimula a diurese.",
        alternativa3:
          "A presença de qualquer líquido no sangue inibe a secreção de ADH, aumentando a reabsorção de água pelos túbulos néfricos. Por isso, ao ingerirmos líquidos a coloração da urina é escura.",
        alternativa4:
          "A presença de qualquer líquido no sangue inibe a secreção de aldosterona, aumentando a reabsorção de sódio pelos túbulos coletores. Por isso, ocorre maior diurese ao ingerirmos líquidos.",
        alternativaCorreta: "1",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "A presença de álcool no sangue inibe a secreção de ADH, impedindo a reabsorção de água nos túbulos néfricos, o que aumenta a quantidade de água presente na urina. Por isso a ingestão de bebidas alcoólicas estimula a diurese.<br/>Vale lembrar que a água presente na urina, após a ingestão de bebidas alcoólicas, é proveniente do plasma sanguíneo, levando à desidratação do organismo.",
      },
      {
        id: 156,
        escolhida: "não",
        grupo: "4",
        modelo: "6",
        enunciado:
          "Durante uma viagem de campo, estudantes ficaram por horas sem água e debaixo de sol, passando a sentir cada vez mais sede. Em consequência deste fato, o sistema urinário destes indivíduos sofreu interferência em seus processos fisiológicos. Com base no contexto e em seus conhecimentos, analise as alternativas e assinale a alternativa que julgar correta.",
        alternativa1:
          "O sistema urinário produziu urina com maior concentração de solutos, uma vez que a falta de ingestão de água ocasionou maior reabsorção tubular e, consequentemente, menor quantidade de água na urina.",
        alternativa2:
          "O sistema urinário produziu urina com maior quantidade de água, uma vez que a falta de ingestão de água não interferiu os mecanismos de produção de urina, que apresentou baixa concentração de solutos.",
        alternativa3:
          "O sistema urinário reduziu a reabsorção de água pelos túbulos néfricos, uma vez que a falta de ingestão de água inibe a liberação do hormônio ADH, resultando em uma urina com menor concentração de solutos.",
        alternativa4:
          "O sistema urinário inibiu a filtração glomerular, tendo em vista que a grande ingestão de água estimula a parada do sistema urinário.",
        alternativaCorreta: "1",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "Durante uma viagem de campo, estudantes ficaram por horas sem água e debaixo de sol, passando a sentir cada vez mais sede. Em consequência deste fato, o sistema urinário produziu urina com maior concentração de solutos, uma vez que a falta de ingestão de água ocasionou maior reabsorção tubular e, consequentemente, menor quantidade de água na urina. A regulação da reabsorção de água, nestas condições, ocorre a partir da liberação do hormônio antidiurético (ADH).",
      },
      {
        id: 157,
        escolhida: "não",
        grupo: "4",
        modelo: "6",
        enunciado:
          "A infecção urinária consiste em uma doença do sistema urinário em que microrganismos (bactérias, vírus ou fungos) acometem um órgão ou estrutura do sistema urinário, sendo mais comum na uretra (uretrite) ou bexiga (cistite). Essa doença costuma ser mais comum em mulheres. Com base em seus conhecimentos anatômicos e fisiológicos do sistema urinário humano, analise as alternativas e assinale a proposição que julgar correta.",
        alternativa1:
          "A infecção urinária é mais comum em mulheres devido à anatomia do sistema urinário feminino: a uretra da mulher é bem mais curta que a do homem, além de ter uma proximidade maior com o ânus, o que significa que os microrganismos possuem maior facilidade de acesso à uretra feminina.",
        alternativa2:
          "A infecção urinária é mais comum em mulheres devido à anatomia do sistema urinário feminino: a uretra da mulher é bem mais longa que a do homem, além de ter um bom distanciamento do ânus, o que significa que os microrganismos possuem maior dificuldade de acesso à uretra feminina.",
        alternativa3:
          "A infecção urinária é mais comum em mulheres devido à, exclusivamente, aos hábitos de higiene. Os microrganismos somente acometem um organismo que vive em condições precárias de saneamento básico e estilo de vida anti-higiênico.",
        alternativa4:
          "A infecção urinária é mais comum em mulheres devido aos hormônios femininos que estimulam a proliferação de microrganismos na região íntima, que acabam infeccionando todo o sistema urinário.",
        alternativaCorreta: "1",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "A infecção urinária é mais comum em mulheres devido à anatomia do sistema urinário feminino: a uretra da mulher é bem mais curta que a do homem, além de ter uma proximidade maior com o ânus, o que significa que os microrganismos possuem maior facilidade de acesso à uretra feminina.",
      },
    ];
  }
}
