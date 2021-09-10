import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG9 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 243,
        escolhida: "não",
        grupo: "9",
        modelo: "2",
        enunciado:
          "O sistema nervoso humano desempenha funções importantes na manutenção da homeostase, e suas funções podem ser consideradas sensitivas, integradoras e motoras. Sob este enfoque, analise as alternativas abaixo e determine todas as proposições que julgar como verdadeiras sobre as funções do sistema nervoso.",
        alternativa1:
          "Na função sensitiva, o sistema nervoso processa e interpreta as informações sensitivas, culminando na tomada de decisão adequada para cada resposta.",
        alternativa2:
          "Na função sensitiva, os receptores sensitivos detectam informações do meio interno e externo, levando-as ao encéfalo e medula espinhal por meio dos nervos cranianos e raquidianos.",
        alternativa3:
          "Na função integradora, o sistema nervoso processa e interpreta as informações sensitivas, culminando na tomada de decisão adequada para cada resposta.",
        alternativa4:
          "Na função integradora, que ocorre após o processamento das informações sensitivas, os nervos motores conduzem impulsos do SNC para as estruturas efetoras, desencadeando uma resposta motora específica.",
        alternativa5:
          "Na função motora, os receptores sensitivos detectam informações do meio interno e externo, levando-as ao encéfalo e medula espinhal por meio dos nervos cranianos e raquidianos.",
        alternativa6:
          "Na função motora, que ocorre após o processamento das informações sensitivas, os nervos motores conduzem impulsos do SNC para as estruturas efetoras, desencadeando uma resposta motora específica.",
        alternativaCorreta: "2,3,6",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "O sistema nervoso humano desempenha funções importantes na manutenção da homeostase, e suas funções podem ser consideradas sensitivas, integradoras e motoras.<br/>Na função sensitiva, os receptores sensitivos detectam informações do meio interno e externo, levando-as ao encéfalo e medula espinhal por meio dos nervos cranianos e raquidianos.<br/>Na função integradora, o sistema nervoso processa e interpreta as informações sensitivas, culminando na tomada de decisão adequada para cada resposta.<br/>Na função motora, que ocorre após o processamento das informações sensitivas, os nervos motores conduzem impulsos do SNC para as estruturas efetoras, desencadeando uma resposta motora específica.",
      },
      {
        id: 244,
        escolhida: "não",
        grupo: "9",
        modelo: "2",
        enunciado:
          "Certas situações do cotidiano exigem respostas rápidas dos sistemas do corpo humano, como no caso de quando tocamos um objeto muito quente e retiramos a mão rapidamente para não causar uma queimadura mais grave. Sobre essa situação, analise as alternativas e abaixo e determine as proposições que julgar como corretas acerca das ações efetivadas pelo sistema nervoso.",
        alternativa1:
          "Quando tocamos um objeto quente, o neurônio sensitivo (aferente) responde ao calor, transmitindo impulsos nervosos a um neurônio associativo, localizado na medula espinhal.",
        alternativa2:
          "Quando tocamos um objeto quente, o neurônio associativo (eferente) responde ao calor, transmitindo impulsos nervosos a um neurônio motor, que fica inteiramente localizado na medula espinhal.",
        alternativa3:
          "Quando tocamos um objeto quente, o neurônio sensitivo localizado entre a musculatura e medula espinhal, transmite a informação diretamente para o encéfalo, permitindo a tomada de consciência para posterior reação motora.",
        alternativa4:
          "Quando tocamos um objeto quente, o neurônio associativo localizado na medula espinhal retransmite a informação proveniente do neurônio sensitivo para um nervo motor.",
        alternativa5:
          "Quando tocamos um objeto quente, o estímulo gera impulsos nervosos que passam por neurônios sensitivos e associativos, retransmitindo-os para nervos motores, que estimulam os músculos a reagirem com o movimento de afastamento.",
        alternativa6:
          "Quando tocamos um objeto quente, o estímulo gera impulsos nervosos que passam por neurônios associativos e motores, retransmitindo-os para nervos sensitivos, que estimula as células sensitivas a se tornarem mais resistentes, evitando queimaduras.",
        alternativaCorreta: "1,4,5",
        feedBackImagem: "imgfeedback1m2ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Helixitta, Creative Commons BY-SA 4.0, via Wikimedia Commons, disponível aqui.",
        feedBackTexto:
          "Quando tocamos um objeto quente, o neurônio sensitivo (aferente) responde ao calor, transmitindo impulsos nervosos a um neurônio associativo, localizado na medula espinhal.<br/>O neurônio associativo localizado na medula espinhal retransmite a informação proveniente do neurônio sensitivo para um nervo motor.<br/>Os impulsos nervosos, após passarem por neurônios sensitivos e associativos, são retransmitidos para nervos motores, que estimulam os músculos a reagirem com o movimento de afastamento.<br/>Além disso de estimular os neurônios motores responsáveis pela ação, os neurônios associativos também estimulam neurônios que conduzem impulsos ao encéfalo, permitindo a tomada de consciência sobre o ocorrido.",
      },
      {
        id: 245,
        escolhida: "não",
        grupo: "9",
        modelo: "2",
        enunciado:
          "Pesquisadores da Universidade Federal do Rio de Janeiro (UFRJ), por meio de experimentos científicos, derrubaram o mito de que o sistema nervoso contém dez vezes mais gliócitos que neurônios, demonstrando que o número dessas células é relativamente equivalente. Sobre os gliócitos, analise as alternativas abaixo e selecione todas que julgar como corretas.",
        alternativa1:
          "Os gliócitos são componentes do sistema nervoso cuja função é envolver, proteger e nutrir os neurônios.",
        alternativa2:
          "Os gliócitos podem ser considerados de quatro tipos: neurônios, células de Schwann, bainhas de mielina e micróglias.",
        alternativa3:
          "Os astrócitos são tipos de gliócitos que estabelecem uma ponte nutritiva entre o sangue e os neurônios, além de promoverem sustentação física e recuperação de lesões do tecido nervoso.",
        alternativa4:
          "Oligodendrócitos e células de Schwan são tipos de gliócitos que se enrolam sobre neofibras, formando as bainhas de mielina.",
        alternativa5:
          "As micróglias são tipos de gliócitos e consistem em macrófagos especializados que fagocitam detritos e restos celulares presentes no tecido nervoso.",
        alternativa6:
          "As bainhas de mielina consistem em prolongamentos especiais de membrana plasmática de células gliócitas do tipo astrócitos e micróglias.",
        alternativaCorreta: "1,3,4,5",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "Os gliócitos são componentes do sistema nervoso cuja função é envolver, proteger e nutrir os neurônios.<br/>Podem ser considerados de quatro tipos: astrócitos, oligodendrócitos, células de Schwann e micróglias.<br/>Os astrócitos são tipos de gliócitos que estabelecem uma ponte nutritiva entre o sangue e os neurônios, além de promoverem sustentação física e recuperação de lesões do tecido nervoso.<br/>Oligodendrócitos e células de Schwan são tipos de gliócitos que se enrolam sobre neofibras, formando as bainhas de mielina.<br/>As micróglias são tipos de gliócitos e consistem em macrófagos especializados que fagocitam detritos e restos celulares presentes no tecido nervoso.",
      },
      {
        id: 247,
        escolhida: "não",
        grupo: "9",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra dois neurônios, apresentando entre si uma diferença estrutural: um deles, à direita, apresenta neurofibra mielinizada, enquanto o outro, à esquerda, apresenta neurofibra não mielinizada. No que se refere a este aspecto, analise as alternativas abaixo e selecione a proposição que julgar como verdadeira acerca das bainhas de mielina.",
        imagem: "img1m4ner",
        legendaImagem: "Imagem: Brain Support. Disponível aqui.",
        alternativa1:
          "As neurofibras mielinizadas conduzem os impulsos de forma mais rápida, pois tem característica saltatória, passando de um nó neurofibroso para o seguinte, diferente das não mielinizadas.",
        alternativa2:
          "As neurofibras não mielinizadas conduzem os impulsos de forma mais rápida, pois tem característica saltatoria, passando de um nó fibroso para o seguinte, diferente das mielinizadas.",
        alternativa3:
          "Nas neurofibras mielinizadas o impulso se propaga continuamente ao longo da membrana do neurônio, não possuindo nós neurofibrosos e, por isso, a propagação do impulso é mais veloz.",
        alternativa4:
          "Nas neurofibras não mielinizadas o impulso de propaga ao longo do axônio por meio de sinapses elétricas interneurônios,",
        alternativaCorreta: "1",
        feedBackImagem: "img1m4ner",
        feedBackLegendaImagem: "Imagem: Brain Support. Disponível aqui.",
        feedBackTexto:
          "As neurofibras mielinizadas conduzem os impulsos de forma mais rápida, pois tem característica saltatória, de modo que os impulsos passam de um nó neurofibroso para o seguinte, diferente das não mielinizadas, em que o impulso se propaga continuamente ao longo da membrana do neurônio.",
      },
      {
        id: 248,
        escolhida: "não",
        grupo: "9",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra a condução de impulsos nervosos após o contato com um objeto quente. Os impulsos gerados são responsáveis pelos atos reflexos. Sob este aspecto, analise a animação e as alternativas abaixo e selecione a alternativa que julgar como verdadeira.",
        imagem: "img2m4ner",
        legendaImagem: "Imagem: Carpe Noctum, via Gfycat. Disponível aqui.",
        alternativa1:
          "O estímulo é detectado por um neurônio sensitivo que transmite o impulso para o encéfalo, que por meio de neurônios pseudounilaterias estimula a musculatura a se contrair.",
        alternativa2:
          "O estimulo é detectado pelas céulas glias que transmitem o impulso para a medula espinhal, que por meio de neurônios sensitivos estimulam a musculatura a realizar a ação reflexa.",
        alternativa3:
          "O estímulo é detectado por gliócitos que transmitem o impulso a um neurônio associativo que, ao se localizar na medula, promove a liberação de hormônios que estimulam a contração muscular.",
        alternativa4:
          "O estímulo é detectado por um neurônio sensitivo que transmite o impulso a um neurônio associativo, que transmite o impulso a um neurônio motor, estimulando a musculatura a realizar a ação reflexa.",
        alternativaCorreta: "4",
        feedBackImagem: "img2m4ner",
        feedBackLegendaImagem:
          "Imagem: Carpe Noctum, via Gfycat. Disponível aqui.",
        feedBackTexto:
          "O estímulo é detectado por um neurônio sensitivo que transmite o impulso a um neurônio associativo, que transmite o impulso a um neurônio motor, estimulando a musculatura a realizar a ação reflexa.",
      },
      {
        id: 249,
        escolhida: "não",
        grupo: "9",
        modelo: "4",
        enunciado:
          "A animação abaixo ilustra de forma simplificada a condução de impulsos nervosos entre neurônios. Sobre esse processo, analise a animação e as alternativas e assinale a proposição que julgar como verdadeira.",
        imagem: "img3m4ner",
        legendaImagem: "Imagem: Crash Course, via Makeagif. Disponível aqui.",
        alternativa1:
          "As sinapses entre neurônios são exclusivamente do tipo elétricas.",
        alternativa2:
          "Nas sinapses químicas, as sinapses ocorrem de por meio de potenciais de ação e as células se comunicam diretamente.",
        alternativa3:
          "Há dois tipos de sinapses nervosas: a sinapse elétrica e a sinapse química.",
        alternativa4:
          "Nas sinapses químicas são mediadas por neurotransmissores, como, por exemplo, a insulina e o glucagon.",
        alternativaCorreta: "3",
        feedBackImagem: "img3m4ner",
        feedBackLegendaImagem:
          "Imagem: Crash Course, via Makeagif. Disponível aqui.",
        feedBackTexto:
          "Há dois tipos de sinapses nervosas: a sinapse elétrica e a sinapse química.<br/>Nas sinapses elétricas, as membranas das células unem-se por meio de junções do tipo gap, que permitem a transmissão de potencial de ação diretamente de uma célula para outra.<br/>Nas sinapses químicas (tipo mais comum), não há contato entre os neurônios, havendo um espaço estreito, o espaço sináptico, onde são liberados neurotransmissores (mediadores químicos) originando um novo impulso nervoso (se for entre neurônios) ou uma ação do órgão-alvo (contração da musculatura, por exemplo).",
      },
      {
        id: 250,
        escolhida: "não",
        grupo: "9",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra o sistema nervoso periférico autônomo simpático. Analise a figura e as alternativas e, com base em seus conhecimentos sobre este ramo do SNPA, assinale a alternativa que julgar como correta.",
        imagem: "img7m5ner",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "De modo geral, estimula principalmente atividades relaxantes e digestórias, geralmente liberando acetilcolina.",
        alternativa2:
          "De modo geral, estimula ações que mobilizam energia, geralmente liberando adrenalina, permitindo o organismo responder a situações de estresse.",
        alternativa3:
          "É constituído por nervos cranianos que partem do encéfalo e nervos raquidianos que partem da região sacral, sendo que os gânglios são mais próximos do órgão controlado.",
        alternativa4:
          "É constituído por nervos cranianos que partem do encéfalo e nervos raquidianos que partem da região sacral, sendo que os gânglios são mais próximos da medula.",
        alternativaCorreta: "2",
        feedBackImagem: "img7feedm5ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O SNPA simpático é constituído por nervos raquidianos que partem da região torácica e lombar, com gânglios próximos da medula. De modo geral, estimula ações que mobilizam energia, geralmente liberando adrenalina, permitindo o organismo responder a situações de estresse, como por exemplo: acelerar os batimentos cardíacos, aumentar a pressão arterial, aumentar a concentração de açúcar no sangue e ativar o metabolismo geral do corpo.",
      },
      {
        id: 251,
        escolhida: "não",
        grupo: "9",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra o sistema nervoso periférico autônomo parassimpático. Analise a figura e as alternativas e, com base em seus conhecimentos sobre este ramo do SNPA, assinale a alternativa que julgar como correta.",
        imagem: "img8m5ner",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "De modo geral, estimula principalmente atividades relaxantes e digestórias, geralmente liberando acetilcolina.",
        alternativa2:
          "De modo geral, estimula ações que mobilizam energia, geralmente liberando adrenalina, permitindo o organismo responder a situações de estresse.",
        alternativa3:
          "É constituído por nervos raquidianos que partem da região torácica e lombar, com gânglios próximos da medula",
        alternativa4:
          "É constituído por nervos raquidianos que partem da região cervical e torácica, com gânglios próximos dos órgãos controlados.",
        alternativaCorreta: "1",
        feedBackImagem: "img8feedm5ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O SNPA parassimpático, é constituído por nervos cranianos que partem do encéfalo e nervos raquidianos que partem da região sacral, sendo que os gânglios são mais próximos do órgão controlado. De modo geral, estimula principalmente atividades relaxantes e digestórias, geralmente liberando acetilcolina, como a redução do ritmo cardíaco e da pressão sanguínea, aumento das secreções estomacais e intestinais, etc.",
      },
      {
        id: 252,
        escolhida: "não",
        grupo: "9",
        modelo: "5",
        enunciado:
          "A figura abaixo demonstra uma sinapse química neuromuscular, onde as extremidades axônicas dos neurônios são dilatadas e seu citoplasma apresenta vesículas membranosas repletas de neurotransmissores, que são lançados sobre a musculatura esquelética. Sobre esse processo, analise a figura e as alternativas propostas e selecione a proposição que julgar como verdadeira.",
        imagem: "img9m5ner",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Os neurotransmissores ligam-se a proteínas receptoras de membrana da célula pós-sinaptica (fibra muscular), gerando um potencial de ação que desencadeia o processo de contração.",
        alternativa2:
          "Os neurotransmissores ligam-se a hormônios receptores de membrana da célula pré-sináptica (fibra muscular), gerando um potencial de ação que desencadeia um novo impulso nervoso.",
        alternativa3:
          "Os neurotransmissores liberados pelos neurônios permanecem por horas estimulando a célula pós-sináptica, até serem produzidos novos neurotransmissores.",
        alternativa4:
          "Os neurotransmissores liberados pelos neurônios em sinapses neuromusculares consistem em enzimas, tais como a adrenalina, peptina e gastrina.",
        alternativaCorreta: "1",
        feedBackImagem: "img9m5ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A figura demonstra uma sinapse química neuromuscular, onde as extremidades axônicas dos neurônios são dilatadas e seu citoplasma apresenta vesículas membranosas repletas de neurotransmissores, que são lançados sobre a musculatura esquelética.<br/>Os neurotransmissores ligam-se a proteínas receptoras de membrana da célula pós-sinaptica (fibra muscular), gerando um potencial de ação que desencadeia o processo de contração. O neurotransmissor mediador das sinapses químicas neuromusculares consiste na acetilcolina.",
      },
      {
        id: 253,
        escolhida: "não",
        grupo: "9",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra o encéfalo e a medula espinhal em corte, demonstrando que ambos possuem uma camada de cor acinzentada e outra esbranquiçada. Contudo, enquanto a camada cinzenta é mais externa no cérebro, ela encontra-se localizada mais internamente na medula. Sobre a substância cinzenta e branca, analise a figura e as alternativas e assinale a alternativa que julgar como verdadeira.",
        imagem: "img10m5ner",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Na substância branca estão localizados os gliócitos do tipo astrócitos, ologodendrócitos, células de Schwann e micróglias, enquanto na substância cinzenta estão localizados as neurofibras.",
        alternativa2:
          "Na substância cinzenta estão localizados os gliócitos do tipo astrócitos, ologodendrócitos, células de Schwann e micróglias, enquanto na substância cinzenta estão localizados os dendrócitos.",
        alternativa3:
          "Na substância branca, localizam-se os corpos celulares dos neurônios e certos tipos de gliócitos, enquanto na substância cinzenta, localizam-se principalmente as neurofibras revestidas por mielina.",
        alternativa4:
          "Na substância cinzenta, localizam-se os corpos celulares dos neurônios e certos tipos de gliócitos, enquanto na substância branca, localizam-se principalmente as neurofibras revestidas por mielina.",
        alternativaCorreta: "4",
        feedBackImagem: "img10m5ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Na substância cinzenta, localizam-se os corpos celulares dos neurônios e certos tipos de gliócitos, enquanto na substância branca, localizam-se principalmente as neurofibras revestidas por mielina.",
      },
      {
        id: 254,
        escolhida: "não",
        grupo: "9",
        modelo: "5",
        enunciado:
          "A figura abaixo demonstra, em I, o maior nervo do corpo humano e que em determinadas condições pode causar dor, formigamento no membro e pontadas, por exemplo. Analise a figura e as alternativas propostas e, com base em seus conhecimentos, selecione a proposição que julgar como correta.",
        imagem: "img11m5ner",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "A figura indica o nervo plexo braquial, formado pelos ramos ventrais das raízes dos nervos cervicais inferiores e do primeiro torácico. Quando a imunidade está baixa, o nervo inflama, causando a dor plexo braquial.",
        alternativa2:
          "A figura indica o nervo musculocutâneo que surge do fascículo no nervo plexo braquial, sendo formado por fibras oriundas da região cervical. Quando o nervo comprime, causa a dor muscular.",
        alternativa3:
          "A figura indica o nervo ciático, formado por raízes nervosas provenientes da coluna vertebral. Caso haja compressão do nervo, este inflama, causando a conhecida dor ciática.",
        alternativa4:
          "A figura indica o nervo plexo lombar, formado por ramos ventrais dos nervos espinhais. Quando a imunidade está baixa, o nervo inflama, causando dor na região torácica e nos músculos do quadril.",
        alternativaCorreta: "3",
        feedBackImagem: "img11feedm5ner",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto: "",
      },
      {
        id: 255,
        escolhida: "não",
        grupo: "9",
        modelo: "6",
        enunciado:
          "O tálamo e hipotálamo são duas regiões encefálicas localizada na porção posterior do cérebro, fazendo parte da região chamada diencéfalo. Sobre a função dessas duas estruturas, analise as alternativas e selecione a que julgar como correta.",
        alternativa1:
          "O tálamo é responsável pelo cruzamento de vias motoras entre encéfalo e medula e o hipotálamo controla os movimentos respiratórios e cardíacos, além de atos reflexos.",
        alternativa2:
          "O tálamo é responsável pelo movimento, pensamento e fala e o hipotálamo é responsável pela respiração, batimentos cardíacos e pelos sentidos.",
        alternativa3:
          "O tálamo é responsável pelos sentidos e equilíbrio e o hipotálamo é responsável por produzir e secretar melatonina, que atua como relógio biológico nos períodos de sono e vigília.",
        alternativa4:
          "O tálamo atua retransmitindo informações sensoriais para o cérebro e o hipotálamo está envolvido no controle da temperatura, balanço hídrico e produção e liberação de alguns hormônios.",
        alternativaCorreta: "4",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "O tálamo atua retransmitindo informações sensoriais para o cérebro e o hipotálamo está envolvido no controle da temperatura, balanço hídrico e produção e liberação de alguns hormônios.",
      },
      {
        id: 256,
        escolhida: "não",
        grupo: "9",
        modelo: "6",
        enunciado:
          "O bom funcionamento do sistema nervoso depende de inúmeros fatores, de modo que muitos distúrbios podem afetar esse sistema. Sob este aspecto, analise as alternativas abaixo e selecione apenas a alternativa que constar distúrbios do sistema nervoso.",
        alternativa1:
          "São exemplos de distúrbios do sistema nervoso: acidente vascular cerebral, Parkinson, glomerulonefrite, diverticulite.",
        alternativa2:
          "São exemplos de distúrbios do sistema nervoso: acidente vascular cerebral, cefaleia, Alzheimer e Parkinson.",
        alternativa3:
          "São exemplos de distúrbios do sistema nervoso: cefaleia, labirintite, otite média e infarto do miocárdio.",
        alternativa4:
          "São exemplos de distúrbios do sistema nervoso: cefaleia, acidente vascular cerebral, hérnia de disco e psoríase.",
        alternativaCorreta: "2",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "São exemplos de distúrbios do sistema nervoso: acidente vascular cerebral, cefaleia, Alzheimer e Parkinson.<br/>O Acidente Vascular Cerebral (AVC) é causado geralmente pela obstrução de uma artéria e consequente falta de irrigação de uma área do cérebro, ou pela ruptura arterial com derrame de sangue.<br/>A cefaleia consiste em dores de cabeça que podem se propagar pela face e atingir os dentes e pescoço. Geralmente está associada à tensão emocional, distúrbios visuais e hormonais, hipertensão arterial, entre outros.<br/>A doença de Alzheimer é a forma mais comum de demência, que se inicia com a perda de memória temporária e geralmente progride e o paciente se torna incapaz de reter novas informações e manter relações interpessoais.<br/>A doença de Parkinson se caracteriza por tremores corporais incontroláveis, rigidez corporal, lentidão e dificuldade de locomoção.",
      },
      {
        id: 257,
        escolhida: "não",
        grupo: "9",
        modelo: "6",
        enunciado:
          "O cerebelo consiste em uma estrutura que se encaixa entre a parte posterior do cérebro e a ponte do tronco encefálico. Está conectado ao tálamo, tronco encefálico e medula espinhal por inúmeras fibras nervosas. Sobre esta estrutura, analise as alternativas abaixo e selecione a que corresponda corretamente à sua função.",
        alternativa1:
          "O cerebelo é responsável pela comunicação de fibras nervosas entre o encéfalo e medula, e controla os atos reflexos.",
        alternativa2:
          "O cerebelo possui células envolvidas no pensamento, fala, respiração e controle dos batimentos cardíacos.",
        alternativa3:
          "O cerebelo possui células envolvidas na coordenação motora e na percepção da localização no espaço e postura (equilíbrio).",
        alternativa4:
          "O cerebelo é responsável por produzir e armazenar hormônios, sobretudo melatonina, que atua como relógio biológico do organismo.",
        alternativaCorreta: "3",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "O cerebelo consiste em uma estrutura que se encaixa entre a parte posterior do cérebro e a ponte do tronco encefálico. Está conectado ao tálamo, tronco encefálico e medula espinhal por inúmeras fibras nervosas. No que concerne a suas funções, o cerebelo possui células envolvidas na coordenação motora e na percepção da localização no espaço e postura (equilíbrio).",
      },
    ];
  }
}
