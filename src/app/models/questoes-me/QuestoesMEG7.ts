import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG7 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 204,
        escolhida: "não",
        grupo: "7",
        modelo: "2",
        enunciado:
          "Os músculos (liso, estriado esquelético ou cardíaco), atrelados a outros sistemas e estruturas do corpo humano, são de suma importância para a homeostase do ser humano, no desempenho de variadas funções. Sobre estas funções, analise as alternativas abaixo e selecione todas que julgar como verdadeiras.",
        alternativa1:
          "Efetuação de movimentos corporais resultantes de contrações musculares, a partir do funcionamento integrado entre músculos esqueléticos, ossos e articulações.",
        alternativa2:
          "Efetivar a comunicação entre as células por meio de mensageiros químicos que viajam pelo sangue, conhecidos como hormônios, os quais são responsáveis por coordenar as atividades de diferentes áreas do corpo, conhecidas como locais-alvo.",
        alternativa3:
          "Estabilização das posições do corpo, como ficar em pé ou sentado, por exemplo, de modo que os músculos posturais se contraem de forma contínua quando estamos acordados, o que chamamos de tônus muscular.",
        alternativa4:
          "Armazenamento e movimentação de substâncias no corpo, como por exemplo: manutenção de alimento no estômago pelos esfíncteres, bombeamento de sangue pelo músculo cardíaco e ajuda no retorno do sangue venoso para o coração pela contração de músculos esqueléticos.",
        alternativa5:
          "Controlar e promover a condução de impulsos nervosos voluntários e involuntários do corpo em direção ao cérebro, interpretando as informações obtidas e elaborando respostas adequadas, enviando aos órgãos e músculos do corpo.",
        alternativa6:
          "Geração de calor, de modo que, com a contração muscular o músculo produz calor por meio de um processo denominado termogênese, que é utilizado para manter a temperatura normal do corpo.",
        alternativaCorreta: "1,3,4,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Dentre as principais funções dos músculos do corpo humano (tecido muscular liso, estriado esquelético e estriado cardíaco), destacam-se:<br/>Efetuação de movimentos corporais resultantes de contrações musculares, a partir do funcionamento integrado entre músculos esqueléticos, ossos e articulações.<br/>Estabilização das posições do corpo, como ficar em pé ou sentado, por exemplo, de modo que os músculos posturais se contraem de forma contínua quando estamos acordados, o que chamamos de tônus muscular.<br/>Armazenamento e movimentação de substâncias no corpo, como por exemplo: manutenção de alimento no estômago pelos esfíncteres, bombeamento de sangue pelo músculo cardíaco e ajuda no retorno do sangue venoso para o coração pela contração de músculos esqueléticos.<br/>Geração de calor, de modo que, com a contração muscular o músculo produz calor por meio de um processo denominado termogênese, que é utilizado para manter a temperatura normal do corpo.",
      },
      {
        id: 205,
        escolhida: "não",
        grupo: "7",
        modelo: "2",
        enunciado:
          "Os músculos estriados esqueléticos consistem em músculos aderidos aos ossos que permitem os movimentos e a postura corporal, por meio de uma dinâmica de contração muscular. Sobre o processo de contração muscular, analise as alternativas abaixo e selecione todas as proposições que julgar como verdadeiras.",
        alternativa1:
          "A contração muscular ocorre quando os fascículos encurtam pelo deslizamento dos filamentos de biotina sobre os filamentos de fibra muscular. Esse processo necessita de energia (ATP) e íons de Cobre.",
        alternativa2:
          "A contração muscular é um processo que demanda energia, que é obtida pela quebra da molécula de ADP. As células podem produzir ADP realizando respiração anaeróbia nas mitocôndrias.",
        alternativa3:
          "A contração muscular ocorre quando os sarcômeros encurtam pelo deslizamento dos filamentos de actina sobre os filamentos de miosina. Esse processo necessita de energia (ATP) e íons de Cálcio.",
        alternativa4:
          "A contração muscular é um processo que demanda energia, que é obtida pela quebra da molécula de ATP. As células podem produzir ATP realizando respiração aeróbia nas mitocôndrias.",
        alternativa5:
          "Durante um exercício físico muito intenso, as células podem produzir ATP (de forma alternativa) por meio da fermentação láctica, em situações em que o organismo não realiza respiração aeróbia em decorrência da quantidade insuficiente de oxigênio que chega aos músculos.",
        alternativa6:
          "Durante um exercício físico muito intenso, as células produzem ATP por meio da fermentação láctica, sendo esta a primeira alternativa de produção de energia, passando a realizar a respiração aeróbia apenas em situações em que há quantidade insuficiente de oxigênio chegando aos músculos.",
        alternativaCorreta: "3,4,5",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A contração muscular ocorre quando os sarcômeros encurtam pelo deslizamento dos filamentos de actina sobre os filamentos de miosina. Esse processo necessita de energia (ATP) e íons de Cálcio.<br/>A contração muscular é um processo que demanda energia, que é obtida pela quebra da molécula de ATP. As células podem produzir ATP realizando respiração aeróbia nas mitocôndrias. (De forma simplificada, a respiração aeróbia é um processo no qual as células utilizam da glicose e oxigênio para produzir energia).<br/>Durante um exercício físico muito intenso, as células podem produzir ATP (de forma alternativa) por meio da fermentação láctica, em situações em que o organismo não realiza respiração aeróbia em decorrência da quantidade insuficiente de oxigênio que chega aos músculos.",
      },
      {
        id: 206,
        escolhida: "não",
        grupo: "7",
        modelo: "2",
        enunciado:
          "O sistema muscular humano e os movimentos desempenhados pelos músculos apresentam muitas propriedades que caracterizam este sistema e, dentre elas, é possível citar o antagonismo muscular, o grau de contração e as contrações isotônicas e isométricas. No que se refere às características da fisiologia muscular, analise as alternativas abaixo e assinale todas as que julgar como verdadeiras.",
        alternativa1:
          "Os músculos esqueléticos atuam geralmente em duplas, com movimentos antagônicos: o músculo principal que realiza um movimento específico é chamado de agonista, enquanto o músculo que se opõe à ação do agonista, realizando movimento contrário, é denominado músculo antagonista.",
        alternativa2:
          "Os músculos esqueléticos atuam geralmente sozinhos, com movimentos duplicados: quando se contrai e realiza um movimento específico é chamado de agonista, já quando relaxa e empurra o osso, realizando movimento contrário, passa a ser chamado de músculo antagonista.",
        alternativa3:
          "O grau de contração de um músculo depende da quantidade de fibras submetidas a estímulos nervosos. Quando o estímulo é fraco, só algumas fibras são estimuladas acarretando uma contração fraca, se o estímulo for forte, muitas fibras são estimuladas resultando uma contração intensa.",
        alternativa4:
          "O grau de contração de um músculo independe da quantidade de fibras submetidas a estímulos nervosos. Toda a musculatura se contrai integralmente, independentemente do estímulo, seguindo a “lei de tudo ou nada”, onde todas as fibras se contraem, ou nenhuma.",
        alternativa5:
          "A contração muscular pode ser isométrica, quando o músculo encurta durante a contração, como no caso dos músculos dos membros inferiores, ou isotônica, quando o músculo não sofre encurtamento durante a contração, como no caso dos músculos que mantém a postura.",
        alternativa6:
          "A contração muscular pode ser isotônica, quando o músculo encurta durante a contração, como no caso dos músculos dos membros inferiores, ou isométrica, quando o músculo não sofre encurtamento durante a contração, como no caso dos músculos que mantém a postura.",
        alternativaCorreta: "1,3,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Os músculos esqueléticos atuam geralmente em duplas, com movimentos antagônicos: o músculo principal que realiza um movimento específico é chamado de agonista, enquanto o músculo que se opõe à ação do agonista, realizando movimento contrário, é denominado músculo antagonista. Assim, quando um músculo agonista se contrai e sofre encurtamento, seu antagonista se alonga, resultando um movimento coordenado. Um exemplo é a flexão do antebraço, onde o bíceps atua como agonista enquanto o tríceps como antagonista.<br/>Vale lembrar que a contração muscular segue a “lei do tudo ou nada”, em que a fibra se contrai totalmente, ou não se contrai. No entanto, o grau de contração de um músculo depende da quantidade de fibras submetidas a estímulos nervosos. Quando o estímulo é fraco, só algumas fibras são estimuladas acarretando uma contração fraca, se o estímulo for forte, muitas fibras são estimuladas resultando uma contração intensa.<br/>A contração muscular pode ser isotônica, quando o músculo encurta durante a contração, como no caso dos músculos dos membros inferiores, ou isométrica, quando o músculo não sofre encurtamento durante a contração, como no caso dos músculos que mantém a postura.",
      },
      {
        id: 208,
        escolhida: "não",
        grupo: "7",
        modelo: "4",
        enunciado:
          "A animação abaixo ilustra um músculo do pescoço que se estende por sua face anterolateral, com duas porções inferiores, uma presa à clavícula e outra ao osso esterno, e uma porção superior ligada ao crânio. Analise a animação e as alternativas e, com base em seus conhecimentos, selecione a alternativa que julgar como correta.",
        imagem: "imggif8mus",
        legendaImagem:
          "Imagem: Anatomografia, Creative Commons BY-SA 2.1 JP, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "O músculo representado consiste no latíssimo do dorso, que apresenta ação de auxiliar na inspiração, inclinação lateral e rotação (virando pescoço para lado oposto) e flexão da cabeça.",
        alternativa2:
          "O músculo representado consiste no esternocleidomastóideo, que apresenta ação de auxiliar na inspiração, inclinação lateral e rotação (virando pescoço para lado oposto) e flexão da cabeça.",
        alternativa3:
          "O músculo representado consiste no escaleno anterior, que apresenta ação de elevar a primeira costela durante a inspiração e flexão lateral da coluna vertebral torácica.",
        alternativa4:
          "O músculo representado consiste no músculo deltoide, que apresenta ação de adução, abdução até 90º, rotação medial e rotação lateral dos membros superiores e do pescoço.",
        alternativaCorreta: "2",
        feedBackImagem: "imggif8mus",
        feedBackLegendaImagem:
          "Imagem: Anatomografia, Creative Commons BY-SA 2.1 JP, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A animação ilustra um músculo do pescoço que se estende por sua face anterolateral, com duas porções inferiores, uma presa à clavícula e outra ao osso esterno, e uma porção superior ligada ao crânio. O músculo representado consiste no esternocleidomastóideo, que apresenta ação de auxiliar na inspiração, inclinação lateral e rotação (virando pescoço para lado oposto) e flexão da cabeça.",
      },
      {
        id: 209,
        escolhida: "não",
        grupo: "7",
        modelo: "4",
        enunciado:
          "Os músculos podem ser classificados por distintos fatores, dentre eles de acordo com a ação que desempenham no movimento, podendo ser flexores, extensores, adutores, abdutores, rotadores, supinadores e/ou pronadores. A animação abaixo demonstra dois movimentos, realizados por dois músculos principais do braço. Analise a animação e as alternativas, selecionando a proposição que julgar como verdadeira.",
        imagem: "imggif9mus",
        legendaImagem:
          "Imagem: Niwadare, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "O bíceps é responsável pelo movimento de adução (aproximar do plano medial) e o tríceps pelo movimento de abdução (distanciar do plano medial). Ambos consistem em músculos antagônicos: quando o bíceps relaxa e encurta, o tríceps contrai e se alonga, e vice-versa.",
        alternativa2:
          "O bíceps é responsável pelo movimento de flexão (dobrar) e o tríceps pelo movimento de extensão (esticar). Ambos consistem em músculos antagônicos: quando o bíceps se contrai e encurta, o tríceps se alonga, e vice-versa.",
        alternativa3:
          "O bíceps é responsável pelo movimento de adução (aproximar do plano medial) e o tríceps pelo movimento de abdução (distanciar do plano medial). Ambos consistem em músculos de contração isotônica, em que a contração não demanda gasto de energia.",
        alternativa4:
          "O bíceps é responsável pelo movimento de extensão (esticar) e o tríceps pelo movimento de flexão (dobrar). Ambos consistem em músculos de contração isométrica, assim como os músculos posturais.",
        alternativaCorreta: "2",
        feedBackImagem: "imggif9mus",
        feedBackLegendaImagem:
          "Imagem: Niwadare, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "O bíceps é responsável pelo movimento de flexão (dobrar) e o tríceps pelo movimento de extensão (esticar). Ambos consistem em músculos antagônicos: quando o bíceps se contrai e encurta, o tríceps se alonga, e vice-versa.",
      },
      {
        id: 210,
        escolhida: "não",
        grupo: "7",
        modelo: "4",
        enunciado:
          "A animação abaixo ilustra um músculo disposto em pares na face posterior de cada perna, importantes na flexão e supinação dos pés e dos joelhos (quando a perna não estiver suportando o peso). Sob este enfoque, analise a animação e as alternativas e selecione a proposição que julgar como verdadeira.",
        imagem: "imggif10mus",
        legendaImagem:
          "Imagem: Database Center for Life Science, Creative Commons BY-SA 2.1 JP, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "Os músculos em destaque na animação consistem nos fibulares longos que, juntos com os músculos sóleo e plantar, formam os músculos da panturrilha.",
        alternativa2:
          "Os músculos em destaque na animação consistem nos músculos tibial anterior que, juntos com os músculos sóleo e plantar, formam os músculos da panturrilha.",
        alternativa3:
          "Os músculos em destaque na animação consistem nos músculos grácil que, juntos com os músculos sóleo e plantar, formam os músculos da panturrilha.",
        alternativa4:
          "Os músculos em destaque na animação consistem nos gastroctnêmios que, juntos com os músculos sóleo e plantar, formam os músculos da panturrilha.",
        alternativaCorreta: "4",
        feedBackImagem: "imggif10mus",
        feedBackLegendaImagem:
          "Imagem: Database Center for Life Science, Creative Commons BY-SA 2.1 JP, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "Os músculos em destaque na animação consistem nos gastroctnêmios que, juntos com os músculos sóleo e plantar, formam os músculos da panturrilha.",
      },
      {
        id: 211,
        escolhida: "não",
        grupo: "7",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra de forma simplificada a dinâmica da contração muscular, a partir da visualização dos filamentos de actina e miosina. Analise a animação e as alternativas e, com base em seus conhecimentos, selecione a proposição que julgar como verdadeira.",
        imagem: "imggif11mus",
        legendaImagem:
          "Imagem: Mcgraw animations, via Make a Gif. Disponível aqui.",
        alternativa1:
          "O estímulo endócrino provoca a liberação de cálcio no citosol e, a partir de reações sem gasto de ATP, os filamentos de miosina deslizam-se sobre os filamentos de actina, encurtando os sarcômeros e possibilitando a contração muscular.",
        alternativa2:
          "O estímulo nervoso provoca a liberação de sódio no citosol e, a partir de reações envolvendo gasto de ATP, os filamentos de actina deslizam-se sobre os filamentos de miosina, encurtando os sarcômeros e possibilitando o relaxamento muscular.",
        alternativa3:
          "O estímulo nervoso provoca a liberação de cálcio no citosol e, a partir de reações envolvendo gasto de ATP, os filamentos de actina deslizam-se sobre os filamentos de miosina, encurtando os sarcômeros e possibilitando a contração muscular.",
        alternativa4:
          "O estímulo endócrino provoca a liberação de hormônios no citosol e, a partir de reações sem gasto de ATP, os filamentos de miosina deslizam-se sobre os filamentos de actina, alongando os sarcômeros e possibilitando a contração muscular.",
        alternativaCorreta: "3",
        feedBackImagem: "imggif11mus",
        feedBackLegendaImagem:
          "Imagem: Mcgraw animations, via Make a Gif. Disponível aqui.",
        feedBackTexto:
          "A contração muscular ocorre quando os sarcômeros encurtam pelo deslizamento dos filamentos de actina sobre os filamentos de miosina. Esse processo necessita de energia e de íons de cálcio, que ficam armazenados em uma organela da fibra muscular chamada retículo sarcoplasmático.<br/>Resumidamente, por meio de estimulação nervosa, os íons de cálcio espalham-se pelo citosol e entram em contato direto com as miofibrilas, acarretando o deslizamento dos filamentos de actina sobre as extremidades da miosina e possibilitando a contração muscular.",
      },
      {
        id: 212,
        escolhida: "não",
        grupo: "7",
        modelo: "5",
        enunciado:
          "A musculação consiste em um tipo de atividade física que possibilita o crescimento dos músculos estriados esqueléticos a partir de treinamento de resistência. Sobre o crescimento muscular a partir de atividades de musculação, analise as alternativas abaixo e determine a que julgar como verdadeira.",
        imagem: "img12m5mus",
        legendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        alternativa1:
          "Esse tipo de crescimento muscular é denominado hipertrofia muscular e consiste na produção mais intensa de miofibrilas, mitocôndrias, retículo sarcoplasmático e outras organelas em resposta à atividade muscular repetitiva e bastante forçada.",
        alternativa2:
          "Esse tipo de crescimento muscular é denominado atrofia muscular e consiste na produção mais intensa de miofibrilas, mitocôndrias, retículo sarcoplasmático e outras organelas em resposta à atividade muscular repetitiva e bastante forçada.",
        alternativa3:
          "Esse tipo de crescimento muscular é denominado hipertrofia muscular e consiste na diminuição de tamanho das fibras musculares individuais consequente à perda progressiva de miofibrilas, em resposta à atividade muscular repetitiva e bastante forçada.",
        alternativa4:
          "Esse tipo de crescimento muscular é denominado atrofia muscular e consiste na diminuição de tamanho das fibras musculares individuais consequente à perda progressiva de miofibrilas, em resposta à atividade muscular repetitiva e bastante forçada.",
        alternativaCorreta: "1",
        feedBackImagem: "img12m5mus",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Macrovector, via Freepik.com. Disponível aqui.",
        feedBackTexto:
          "A musculação consiste em um tipo de atividade física que possibilita o crescimento dos músculos estriados esqueléticos a partir de treinamento de resistência. Esse tipo de crescimento muscular é denominado hipertrofia muscular e consiste na produção mais intensa de miofibrilas, mitocôndrias, retículo sarcoplasmático e outras organelas em resposta à atividade muscular repetitiva e bastante forçada. Uma vez que músculos hipertrofiados contêm mais miofibrilas, eles são capazes de contrações mais vigorosas.",
      },
      {
        id: 213,
        escolhida: "não",
        grupo: "7",
        modelo: "5",
        enunciado:
          "A figura abaixo demonstra um músculo em condições normais (à esquerda) e outro em estado de atrofia (à direita). Analise a imagem e as alternativas e, com base em seus conhecimentos, selecione a alternativa que julgar como verdadeira acerca do processo de atrofia muscular.",
        imagem: "img13m5mus",
        legendaImagem:
          "Imagem: Adaptada de OpenStax, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "A atrofia muscular é o aumento de tamanho das fibras musculares individuais consequente do ganho progressivo de miofibrilas, e pode acontecer por uso excessivo (musculação, por exemplo) ou devido à desnervação (interrupção da inervação muscular).",
        alternativa2:
          "A atrofia muscular é a diminuição de tamanho das fibras musculares individuais consequente à perda progressiva de tendões, e pode acontecer por lesões (acidentes, por exemplo) ou devido à degeneração (doenças genéticas).",
        alternativa3:
          "A atrofia muscular é a diminuição de tamanho das fibras musculares individuais consequente à perda progressiva de miofibrilas, e pode acontecer por desuso (sedentarismo, por exemplo) ou devido à desnervação (interrupção da inervação muscular).",
        alternativa4:
          "A atrofia muscular é o aumento de tamanho das fibras musculares individuais consequente ao ganho progressivo de tecido esponjoso, e pode acontecer por desuso (sedentarismo, por exemplo) ou devido ao uso contínuo (atividades físicas).",
        alternativaCorreta: "3",
        feedBackImagem: "img13m5mus",
        feedBackLegendaImagem:
          "Imagem: Adaptada de OpenStax, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A atrofia muscular é a diminuição de tamanho das fibras musculares individuais consequente à perda progressiva de miofibrilas. A atrofia pode acontecer por duas causas principais:<br/>Desuso (sedentarismo, por exemplo) quando os músculos não são usados suficientemente. A atrofia por desuso ocorre geralmente em indivíduos acamados ou engessados, porque o fluxo de impulsos nervosos para o músculo esquelético inativo é bastante reduzido, porém a condição é reversível.<br/>Desnervação, quando a inervação do músculo é interrompida. Nesses casos, ao longo de um período de 6 meses a 2 anos, o músculo diminui para cerca de ¼ do seu tamanho original e suas fibras são irreversivelmente substituídas por tecido conjuntivo fibroso.",
      },
      {
        id: 214,
        escolhida: "não",
        grupo: "7",
        modelo: "5",
        enunciado:
          "A dinâmica da contração muscular ocorre, basicamente, por meio do deslizamento dos filamentos de actina sobre os filamentos de miosina, encurtando os sarcômeros, o que demanda uso de energia e a presença de cálcio no citosol. Contudo, após os estímulos nervosos que desencadeiam a contração muscular, o músculo volta ao seu estado de relaxamento. Com base nas informações e na figura abaixo, analise as alternativas e selecione a que julgar como verdadeira.",
        imagem: "img14m5mus",
        legendaImagem:
          "Imagem: Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Ao cessar a estimulação nervosa, também é estimulada a saída de íons de Cálcio das bolsas do retículo endoplasmático e os íons livres mantém a musculatura relaxada até se deteriorarem e serem absorvidos pelo organismo.",
        alternativa2:
          "Ao cessar a estimulação nervosa, também cessa a liberação de íons de Cálcio. Na ausência de íons Cálcio, a miosina se separa da actina e os sarcômeros distendem-se, relaxando a musculatura novamente.",
        alternativa3:
          "Ao cessar a estimulação nervosa, também cessa a saída de íons de Sódio das bolsas do retículo endoplasmático e os íons livres retornam para o interior das bolsas, acarretando a contração isométrica e relaxando a musculatura.",
        alternativa4:
          "Ao cessar a estimulação nervosa, os íons de Sódio são liberados. Na presença de íons Sódio, a miosina se liga fortemente com a actina e os sarcômeros contraem-se, relaxando a musculatura novamente.",
        alternativaCorreta: "2",
        feedBackImagem: "img14m5mus",
        feedBackLegendaImagem:
          "Imagem: Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Ao cessar a estimulação nervosa, também cessa a saída de íons de Cálcio das bolsas do retículo endoplasmático e os íons livres retornam para o interior das bolsas. Na ausência de íons Cálcio, a miosina se separa da actina e os sarcômeros distendem-se, relaxando a musculatura novamente.",
      },
      {
        id: 215,
        escolhida: "não",
        grupo: "7",
        modelo: "6",
        enunciado:
          "Durante a flexão do antebraço, por exemplo, a musculatura não se contrai sozinha, ela necessita ser estimulada por um sinal eletroquímico proveniente do sistema nervoso. Acerca desse processo, analise as alternativas abaixo e selecione a proposição que julgar como verdadeira.",
        alternativa1:
          "A contração muscular ocorre por meio da liberação de íons de Cálcio no citosol, que ao serem processados, induzem a efetivação de estímulo nervoso na musculatura. Para que haja o relaxamento muscular, os nervos liberam acetilcolina.",
        alternativa2:
          "A contração muscular ocorre quando as terminações axônicas de um nervo motor, que chegam ao cérebro e lançam uma substância neurotransmissora no encéfalo, a metilalanina, que desencadeia o processo de contração.",
        alternativa3:
          "A contração muscular ocorre por meio da liberação de hormônios como o glucagon no citosol das células musculares, que por meio de mecanismo de feedback induzem a liberação de acetilcolina que realiza, diretamente, a contração muscular.",
        alternativa4:
          "A contração muscular ocorre quando as terminações axônicas de um nervo motor, que chegam às fibras musculares e lançam uma substância neurotransmissora, a acetilcolina, que desencadeia o processo de contração.",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A contração muscular ocorre quando as terminações axônicas de um nervo motor, que chegam às fibras musculares e lançam uma substância neurotransmissora, a acetilcolina, em espaços estreitos entre as terminações axônicas do nervo motor e as membranas celulares das fibras musculares.<br/>Essa substância promove alteração no interior das fibras musculares, gerando um potencial de ação envolvendo a liberação de íons de Cálcio e gasto de energia, que acarreta o processo de contração muscular.",
      },
      {
        id: 216,
        escolhida: "não",
        grupo: "7",
        modelo: "6",
        enunciado:
          "Durante um esforço muscular intenso, os músculos geralmente ficam doloridos e enrijecidos por alguns dias. Esse processo se dá pelo fato de que a produção de energia ocorreu de forma alternativa e não mediante à respiração aeróbia, em decorrência da quantidade insuficiente de oxigênio que chega ao músculo. Sob este aspecto, analise as informações e as alternativas abaixo e selecione a alternativa que julgar verdadeira.",
        alternativa1:
          "Durante um exercício físico intenso, a produção de energia pode ser realizada de forma alternativa por fermentação láctica, na carência de oxigênio. Contudo, esse processo libera ácido lático, cujo acúmulo causa dor e intoxicação das fibras musculares.",
        alternativa2:
          "Durante um exercício físico intenso, a produção de energia pode ser realizada de forma alternativa por respiração aeróbia, na carência de oxigênio. Contudo, esse processo libera ácido lático, cujo acúmulo causa dor e intoxicação das fibras musculares.",
        alternativa3:
          "Durante um exercício físico intenso, a produção de energia não pode ser realizada de forma alternativa, necessitando da abundância de oxigênio. Esse processo acarreta dor e enrijecimento da musculatura, a fim de que o indivíduo cesse a atividade.",
        alternativa4:
          "Durante um exercício físico intenso, a produção de energia não pode ser realizada de forma alternativa por fermentação láctica, que é exclusivo de microrganismos. Contudo, a produção de energia via respiração aeróbia causa dor e intoxicação das fibras musculares.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Durante um exercício físico intenso, a produção de energia pode ser realizada de forma alternativa por fermentação láctica, na carência de oxigênio. Contudo, esse processo libera ácido lático, cujo acúmulo causa dor e intoxicação das fibras musculares.",
      },
      {
        id: 217,
        escolhida: "não",
        grupo: "7",
        modelo: "6",
        enunciado:
          "Durante a contração muscular, uma fibra muscular estriada consegue se manter contraída por milésimos de segundos. Contudo, sabe-se que um músculo pode se manter contraído por um longo período de tempo, como quando seguramos um objeto pesado, por exemplo. Como isso pode ser explicado? Analise as alternativas abaixo e determine a que julgar como verdadeira.",
        alternativa1:
          "A musculatura se mantém contraída porque quando há necessidade de manutenção de contração por um longo período, os íons de Cálcio estimulam todas as fibras do músculo, que se contraem de uma única vez, porém com menor intensidade.",
        alternativa2:
          "Em casos que demandam um longo período de contração ou um grande esforço físico, a fermentação láctica possibilita que todas as fibras musculares se contraiam em intensidade máxima, gastando maior energia e mantendo um estado permanente de tensão muscular.",
        alternativa3:
          "Enquanto houver estimulação nervosa, haverá alternância entre as fibras contraídas e relaxadas. Assim, quando as fibras se relaxam, outras se contraem em seu lugar, mantendo um estado permanente de atividade ou tensão muscular.",
        alternativa4:
          "Quando os músculos se contraem por um longo período de tempo, todas as fibras são estimuladas por ácido lático, o que enrijece a musculatura possibilitando que fique contraída por um longo período de tempo.",
        alternativaCorreta: "3",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Durante a contração muscular, uma fibra muscular estriada consegue se manter contraída por milésimos de segundos. Contudo, sabe-se que um músculo pode se manter contraído por um longo período de tempo, como quando seguramos um objeto pesado, por exemplo.<br/>Isso ocorre porque: enquanto houver estimulação nervosa, haverá alternância entre as fibras contraídas e relaxadas. Assim, quando as fibras se relaxam, outras se contraem em seu lugar, mantendo um estado permanente de atividade ou tensão muscular.",
      },
    ];
  }
}
