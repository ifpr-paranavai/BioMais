import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG10 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 263,
        escolhida: "não",
        grupo: "10",
        modelo: "2",
        enunciado:
          "O tato é o órgão dos sentidos que permite a percepção do mundo ao nosso redor por meio do toque. Sob este enfoque, analise as alternativas abaixo e selecione todas as que julgar como verdadeiras acerca deste sentido do corpo humano.",
        alternativa1:
          "O sentido do tato, diferentemente de outros sentidos, como o olfato e paladar, não se localiza em uma região especifica, mas em praticamente todas as regiões da pele.",
        alternativa2:
          "A percepção do tato é efetivada, em maior parte, por meio de células sensoriais especializadas denominadas quimiorreceptores, capazes de detectar variações no movimento dos pelos.",
        alternativa3:
          "Certas regiões do corpo abrigam uma quantidade maior de mecanorreceptores do tato, como é o caso dos anexos epidérmicos.",
        alternativa4:
          "A percepção do tato é efetivada por meio de células sensoriais especializadas denominadas mecanorreceptores, capazes de detectar variações de pressão.",
        alternativa5:
          "Além dos diversos receptores responsáveis pelo tato, a pele também possui células sensoriais especializadas na detecção de dor, aumento e diminuição da temperatura.",
        alternativa6:
          "Todos os receptores sensoriais do sentido do tato estão localizados na epiderme, região que permite maior proximidade do corpo com o objeto tocado.",
        alternativaCorreta: "1,4,5",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "O sentido do tato, diferentemente de outros sentidos, como o olfato e paladar, não se localiza em uma região especifica, mas em praticamente todas as regiões da pele.<br/>A percepção do tato é efetivada por meio de células sensoriais especializadas denominadas mecanorreceptores, capazes de detectar variações de pressão.<br/>Além dos diversos receptores responsáveis pelo tato, a pele também possui células sensoriais especializadas na detecção de dor, aumento e diminuição da temperatura.",
      },
      {
        id: 264,
        escolhida: "não",
        grupo: "10",
        modelo: "2",
        enunciado:
          "O tato é o órgão dos sentidos que permite a percepção do mundo ao nosso redor por meio do toque. Sob este enfoque, analise as alternativas abaixo e selecione todas as proposições que apresentarem exclusivamente receptores envolvidos no sentido do tato.",
        alternativa1: "Corpúsculo de Krause e bastonetes.",
        alternativa2: "Terminações livres e corpúsculo de Meissner.",
        alternativa3: "Discos de Merkel e terminações de Ruffini.",
        alternativa4: "Órgão terminal do pelo e corpúsculo de Paccini.",
        alternativa5: "Corpúsculo de Meissner e células mitrais.",
        alternativa6: "Células cone e terminações de Paccini.",
        alternativaCorreta: "2,3,4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Dentre os principais receptores do tato, encontram-se:<br/>Terminações nervosas livres: São terminações nervosas formadas por um axônio ramificado, capazes de detectar sensações de tato (pressão), térmicas (calor e frio) e dolorosas. Estão distribuídas por toda a nossa pele e também em outros tecidos.<br/>Corpúsculo de Meissner: São receptores pequenos formados por um axônio mielínico. Apresenta uma grande sensibilidade e é encontrado em áreas de pele sem pelos (lábios e pontas dos dedos). São sensíveis a vibrações de baixa frequência e a movimentos de objetos na superfície da pele (estímulos passageiros).<br/>Discos de Merkel: São receptores formados por ramificações axonais com vários discos terminais. São encontrados principalmente em áreas que apresentam grandes quantidades de corpúsculos de Meissner, como nas pontas dos dedos. Esses receptores percebem o toque contínuo de objetos sobre a pele.<br/>Órgão terminal do pelo: Na base do pelo, encontra-se uma fibra nervosa que envolve o folículo piloso, e é estimulada por qualquer movimento do pelo. Esses receptores atuam percebendo, principalmente, movimentos de objetos e o contato inicial de um objeto sobre a pele.<br/>Terminações de Ruffini: São receptores pequenos e pouco abundantes. Estão localizados em camadas mais profundas da pele e em tecidos mais profundos bem como em cápsulas articulares. Estão relacionados com a percepção de sinais de tato e pressão prolongados e intensos, bem como sensações térmicas de calor.<br/>Corpúsculos de Pacini: Receptores com terminação nervosa envolvida por camadas concêntricas de tecido conjuntivo, adquirindo o aspecto de uma cebola. Estão localizados abaixo da pele e nos tecidos das fáscias. O estímulo de receptor tátil ocorre apenas pela compressão local e rápida dos tecidos, captando sensações de toque e vibração.<br/>Corpúsculos de Krause: São estruturas formadas por uma fibra nervosa, cuja terminação tem a forma de bastão com uma das extremidades mais grossa. Estão localizados em regiões de limite da epiderme com a mucosa, como ao redor dos lábios e dos genitais. Captam sensações térmicas de frio.",
      },
      {
        id: 265,
        escolhida: "não",
        grupo: "10",
        modelo: "2",
        enunciado:
          "Nos órgãos dos sentidos, os receptores são constituídos por terminações de nervos sensoriais com capacidade de receber determinado estimulo e transformá-lo em impulso nervoso, enviando as informações obtidas para o SNC, ajudando a manter a homeostasia do organismo. Analise as alternativas abaixo e selecione todas as proposições corretas acerca dos tipos de receptores sensoriais.",
        alternativa1:
          "Um tipo de receptores sensoriais são os interoceptores, responsáveis por captar estímulos do meio externo, como receptores do tato, audição, olfato, paladar e visão.",
        alternativa2:
          "Um tipo de receptores sensoriais são os exteroceptores, responsáveis por captar estímulos do meio externo, como receptores do tato, audição, olfato, paladar e visão.",
        alternativa3:
          "Um tipo de receptores sensoriais são os exteroceptores, responsáveis por captar estímulos internos (músculos, tendões, articulações e órgãos internos), informando o SNC sobre a posição dos braços, pernas e cabeça em relação ao corpo.",
        alternativa4:
          "Um tipo de receptores sensoriais são os proprioceptores, responsáveis por captar estímulos internos (músculos, tendões, articulações e órgãos internos), informando o SNC sobre a posição dos braços, pernas e cabeça em relação ao corpo.",
        alternativa5:
          "Um tipo de receptores sensoriais são os proprioceptores, responsáveis por captar estímulos internos como a composição do sangue, Ph, pressão osmótica, temperatura, etc., permitindo sentir sede, fome, frio e dor.",
        alternativa6:
          "Um tipo de receptores sensoriais são os interoceptores, responsáveis por captar estímulos internos como a composição do sangue, Ph, pressão osmótica, temperatura, etc., permitindo sentir sede, fome, frio e dor.",
        alternativaCorreta: "2,4,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "As células sensoriais especializadas em captar estímulos podem ser classificadas em: exteroceptores, proprioceptores e interoceptores.<br/>São considerados exteroceptores quando captam estímulos do meio externo, como receptores do tato, audição, olfato, paladar e visão. Certos tipos de exteroceptores são os quimioceptores, que são estimulados por moléculas de substancias químicas que se encaixam em proteínas da membrana celular, como no caso do paladar e olfato.<br/>São proprioceptores quando captam estímulos internos (músculos, tendões, articulações e órgãos internos), informando o SNC sobre a posição dos braços, pernas e cabeça em relação ao corpo; e interoceptores, quando captam estímulos internos como a composição do sangue, Ph, pressão osmótica, temperatura, etc., permitindo sentir sede, fome, frio e dor.",
      },
      {
        id: 267,
        escolhida: "não",
        grupo: "10",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra o processo sensitivo do olfato. Analise a imagem e as alternativas e, com base em seus conhecimentos, determine a proposição que melhor corresponda ao mecanismo funcional do na percepção do cheiro.",
        imagem: "gif1m4sen",
        legendaImagem: 
        "Imagem: SER, via Pinterest. <a href='https://br.pinterest.com/pin/364087951130582048/'>Disponível aqui</a>.",
        alternativa1:
          "As moléculas dispersas chegam ao teto da cavidade nasal, onde se dispersam e atingem quimiorreceptores que se comunicam com o bulbo olfatório. Do bulbo, os impulsos são direcionados para o cérebro.",
        alternativa2:
          "As moléculas dispersas chegam ao teto da faringe, onde se dispersam e atingem mecanorreceptores que se comunicam com o bulbo olfatório. Do bulbo, os impulsos são direcionados para o cérebro.",
        alternativa3:
          "As moléculas dispersas no ar estimulam os quimiorreceptores na cavidade nasal a produzirem substâncias que são enviadas para a hipófise, onde o olfato é processado e interpretado.",
        alternativa4:
          "As moléculas dispersas no ar estimulam os mecanorreceptores na faringe a produzirem substâncias que são enviadas para o córtex cerebral, onde o olfato é processado e interpretado.",
        alternativaCorreta: "1",
        feedBackImagem: "gif1m4sen",
        feedBackLegendaImagem: 
        "Imagem: SER, via Pinterest. <a href='https://br.pinterest.com/pin/364087951130582048/'>Disponível aqui</a>.",
        feedBackTexto:
          "As moléculas dispersas entram pelas narinas, passam pelas conchas nasais e chegam ao teto da cavidade nasal, onde está localizado o muco, que umedece a superfície da cavidade nasal. As substâncias odoríferas se dispersam e atingem quimiorreceptores que se comunicam com neurônios do bulbo olfatório. Do bulbo, os impulsos são direcionados para o cérebro.",
      },
      {
        id: 268,
        escolhida: "não",
        grupo: "10",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra o interior da orelho (porção média e interna), ilustrando o processo e, que essas estruturas recebem os sons e desencadeiam sua percepção, possibilitando efetivar o sentido da audição. Analise a animação e as alternativas e, acerca da audição, assinale a alternativa que julgar como verdadeira.",
        imagem: "gif2m4sen",
        legendaImagem: 
        "Imagem: Blog by Biosom. <a href='https://biosom.com.br/blog/curiosidades/processamento-auditivo/'>Disponível aqui</a>.",
        alternativa1:
          "As células sensoriais localizadas no tímpano enviam estímulo nervoso que passa por toda a orelha média e interna, chegando à cóclea. Na cóclea, neurônios associativos transmitem a informação ao nervo auditivo que a levará ao cérebro.",
        alternativa2:
          "As células sensoriais identificam o estimulo sonoro por intermédio do liquido coclear, a partir das vibrações do tímpano, ossículos e janela oval, gerando impulsos que são conduzidos pelo nervo auditivo ao cérebro.",
        alternativa3:
          "As células sensoriais presentes na orelha interna identificam o estímulo sonoro por meio de vibrações que adentram a tuba auditiva, onde os impulsos nervosos são encaminhados para neurônios sensitivos.",
        alternativa4:
          "As células sensoriais auditivas se localizam no pavilhão auditivo, onde há presença de líquido coclear. Esse líquido umedece as células nervosas do meato acústico, onde a frequência sonora é identificada e enviada para o cérebro.",
        alternativaCorreta: "2",
        feedBackImagem: "gif2m4sen",
        feedBackLegendaImagem: 
        "Imagem: Blog by Biosom. <a href='https://biosom.com.br/blog/curiosidades/processamento-auditivo/'>Disponível aqui</a>.",
        feedBackTexto:
          "As ondas sonoras atingem a membrana do tímpano e a faz vibrar movimentando o martelo bigorna e estribo, que atuam como amplificadores e transmissores das vibrações para a orelha interna.<br/>As ondas sonoras, ao passarem pela orelha média chegam a orelha interna, de modo que a movimentação do estribo faz a janela oval vibrar comunicando a vibração ao líquido coclear. Por intermédio deste líquido, as vibrações fazem com que as células sensoriais identifiquem o estímulo sonoro, gerando impulsos nervosos que são conduzidos ao nervo auditivo e ao centro de audição do córtex cerebral",
      },
      {
        id: 269,
        escolhida: "não",
        grupo: "10",
        modelo: "4",
        enunciado:
          "A pupila consiste em um orifício de tamanho regulável, localizado no centro da íris. A figura demonstra a pupila dilatando e se contraindo, o que visualmente acarreta em um aumento ou diminuição de seu tamanho. Analise a figura e as alternativas e assinale a proposição que julgar como verdadeira, no que concerne à pupila.",
        imagem: "gif3m4sen",
        legendaImagem:
          "Imagem: Greyson Orlando, <a href='https://creativecommons.org/publicdomain/mark/1.0/deed.pt_BR'>Domínio Público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Eye_dilate.gif'>Disponível aqui</a>.",
        alternativa1:
          "O diâmetro da pupila varia de acordo com a luminosidade do ambiente, no intuito de captar a quantidade adequada de luz para a formação da imagem. Assim, na luz, as pupilas se dilatam e na penumbra elas se contraem.",
        alternativa2:
          "O diâmetro da pupila é regulável exclusivamente de acordo com a capacidade de concentração, atenção e pensamento. Assim, quando estamos concentrados as pupilas se contraem e quando não há atividade de concentração as pupilas se dilatam.",
        alternativa3:
          "O diâmetro da pupila varia de acordo com a luminosidade do ambiente, no intuito de captar a quantidade adequada de luz para a formação da imagem. Assim, na luz, as pupilas se contraem e na penumbra elas se dilatam.",
        alternativa4:
          "O diâmetro da pupila é regulável exclusivamente de acordo com a capacidade de concentração, atenção e pensamento. Assim, quando estamos concentrados as pupilas se dilatam e quando não há atividade de concentração as pupilas se contraem.",
        alternativaCorreta: "3",
        feedBackImagem: "gif3m4sen",
        feedBackLegendaImagem:
        "Imagem: Greyson Orlando, <a href='https://creativecommons.org/publicdomain/mark/1.0/deed.pt_BR'>Domínio Público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Eye_dilate.gif'>Disponível aqui</a>.",
        feedBackTexto:
          "O diâmetro da pupila varia de acordo com a luminosidade do ambiente, no intuito de captar a quantidade adequada de luz para a formação da imagem. Assim, na luz, as pupilas se contraem e na penumbra elas se dilatam.",
      },
      {
        id: 270,
        escolhida: "não",
        grupo: "10",
        modelo: "4",
        enunciado:
          "A animação abaixo ilustra uma estrutura presente no processo de percepção de sabor, envolvida, portanto, com o sentido do paladar. Analise a animação e as alternativas e selecione a proposição que julgar verdadeira acerca desta estrutura.",
        imagem: "gif4m4sen",
        legendaImagem: 
        "Imagem: Toppr. <a href='https://concept-stories.s3.ap-south-1.amazonaws.com/test/Stories%20-%20Images_story_73222/image_2019-07-11%2013%3A42%3A58.027734%2B00%3A00'>Disponível aqui</a>.",
        alternativa1:
          "A animação indica uma papila gustativa do tipo filiforme, onde há agrupamento de botões gustativos que interagem com as substâncias alimentares, gerando impulsos que desencadeiam a sensação do paladar.",
        alternativa2:
          "A animação indica um poro gustativo, onde neurônios motores identificam moléculas das substâncias alimentares, gerando impulsos elétricos que são levados ao cérebro por meio de quimiorreceptores.",
        alternativa3:
          "A animação indica uma célula mitral, onde células olfatórias se conectam e transmitem impulsos nervosos ao cérebro, gerados em decorrência da identificação de proteínas presentes nos alimentos.",
        alternativa4:
          "A animação indica um botão gustativo, onde as substâncias alimentares interagem com proteínas receptoras nas células sensoriais, gerando impulsos que são levados ao cérebro.",
        alternativaCorreta: "4",
        feedBackImagem: "gif4m4sen",
        feedBackLegendaImagem: 
        "Imagem: Toppr. <a href='https://concept-stories.s3.ap-south-1.amazonaws.com/test/Stories%20-%20Images_story_73222/image_2019-07-11%2013%3A42%3A58.027734%2B00%3A00'>Disponível aqui</a>.",
        feedBackTexto:
          "A animação indica um botão gustativo.<br/>Na língua, encontram-se as papilas gustativas, que são saliências onde situam-se os botões gustativos, constituídos principalmente por células sensoriais quimiorreceptoras, que partem de aberturas denominadas poros gustativos (representado na imagem).<br/>Durante a mastigação, substâncias componentes dos alimentos dissolvem-se na saliva e entram em contato com os agrupamentos de quimiorreceptores (botões gustativos). Nessa região, as substâncias alimentares interagem com proteínas receptoras nas células sensoriais, causando mudança elétrica na membrana plasmática.<br/>Os impulsos elétricos são transmitidos às terminações nervosas que estão em contato com os botões gustativos e levados a regiões especificas do cérebro, onde são interpretados produzindo a sensação de paladar.",
      },
      {
        id: 271,
        escolhida: "não",
        grupo: "10",
        modelo: "5",
        enunciado:
          "A cóclea é um longo tubo em forma de concha com o interior dividido em três compartimentos cheios de líquido. A figura abaixo demonstra o órgão de Corti, região que contém as células sensoriais fonoceptoras, localizada no compartimento intermediário da cóclea. Sobre a fisiologia desta região no sentido da audição, analise as alternativas e selecione a proposição que julgar como correta.",
        imagem: "img1m5sen",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        alternativa1:
          "Por intermédio do líquido coclear, as vibrações das ondas sonoras fazem os cílios das células sensoriais roçarem a membrana tectórica, gerando impulsos nervosos que são conduzidos ao nervo auditivo.",
        alternativa2:
          "Por intermédio do líquido coclear, as vibrações das ondas sonoras fazem os cílios das células mitrais roçarem a janela oval, gerando impulsos nervosos que são conduzidos à tuba auditivo.",
        alternativa3:
          "A membrana tectórica está localizada nos canais semicirculares e, juntamente com estruturas denominadas ampolas, são responsáveis pelo equilíbrio e pela percepção se estamos para cima ou de cabeça para baixo.",
        alternativa4:
          "A membrana tectórica está localizada na orelha média, sobre a membrana timpânica, onde as ondas sonoras movimentam o ar no interior da orelha e movimentam essas membranas, que desencadeiam a percepção da audição.",
        alternativaCorreta: "1",
        feedBackImagem: "img1m5sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A cóclea é um longo tubo em forma de concha com o interior dividido em três compartimentos cheios de líquido. O órgão de Corti, localizado no compartimento intermediário da cóclea, é uma região que contém as células sensoriais fonoceptoras. Essas células entram em contato com uma estrutura membranosa chamada membrana tectórica, que se apoia sobre os cílios das células sensoriais.<br/>Por intermédio do líquido coclear, as vibrações das ondas sonoras fazem os cílios das células sensoriais roçarem a membrana tectórica, gerando impulsos nervosos que são conduzidos ao nervo auditivo.",
      },
      {
        id: 272,
        escolhida: "não",
        grupo: "10",
        modelo: "5",
        enunciado:
          "O daltonismo é uma alteração visual de origem genética caracterizada pela incapacidade de distinguir cores, sobretudo a vermelho do verde. A figura abaixo ilustra uma imagem com um teste desse tipo de daltonismo. Sobre o daltonismo, analise as alternativas e selecione a que julgar como correta.",
        imagem: "img2m5sen",
        legendaImagem:
          "Imagem: Adaptada de Wellcome images, <a href='https://creativecommons.org/licenses/by/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Eight_Ishihara_charts_for_testing_colour_blindness,_Europe_Wellcome_L0059161.jpg'>Disponível aqui</a>.",
        alternativa1:
          "A principal causa do daltonismo consiste na deficiência ou ausência de células bastonetes, responsáveis pela percepção das cores.",
        alternativa2:
          "A principal causa do daltonismo consiste na deficiência ou ausência de neurônios peseudounipolares, responsáveis por conduzir as informações sensoriais ao SNC.",
        alternativa3:
          "A principal causa do daltonismo consiste na deficiência ou ausência de neurônios motores, responsáveis pela efetivação de respostas reflexas.",
        alternativa4:
          "A principal causa do daltonismo consiste na deficiência ou ausência de células cones, responsáveis pela percepção das cores.",
        alternativaCorreta: "4",
        feedBackImagem: "img2m5sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Wellcome images, <a href='https://creativecommons.org/licenses/by/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Eight_Ishihara_charts_for_testing_colour_blindness,_Europe_Wellcome_L0059161.jpg'>Disponível aqui</a>.",
        feedBackTexto:
          "O daltonismo é uma alteração visual de origem genética caracterizada pela incapacidade de distinguir cores, sobretudo a vermelho do verde. A principal causa do daltonismo consiste na deficiência ou ausência de células cones, responsáveis pela percepção das cores.<br/>A figura demonstra um número 3, formado por pontos verdes, e ao seu redor, integrando o círculo, encontram-se pontos vermelhos. Essa diferenciação não é identificada por portadores de daltonismo.",
      },
      {
        id: 273,
        escolhida: "não",
        grupo: "10",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra de forma simplificada o processo de formação de imagens, na efetivação do sentido da visão. Analise as alternativas e, com base em seus conhecimentos sobre este sentido, assinale a alternativa que julgar como verdadeira.",
        imagem: "img3m5sen",
        legendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        alternativa1:
          "A imagem formada é virtual e direita, a qual fica localizada sobre a esclera, onde por meio de uma reação química as ondas luminosas são transformadas em impulsos elétricos e enviados para interpretação ao cérebro.",
        alternativa2:
          "A imagem formada é virtual e invertida, a qual fica localizada sobre a retina, onde por meio de uma reação física os impulsos elétricos são transformados em ondas luminosas e enviados para interpretação ao cérebro.",
        alternativa3:
          "A imagem formada é real e invertida, a qual fica localizada sobre a retina, onde por meio de uma reação química as ondas luminosas são transformadas em impulsos elétricos e enviados para interpretação ao cérebro.",
        alternativa4:
          "A imagem formada é real e invertida, a qual fica localizada sobre a esclera, onde por meio de uma reação química as ondas sonoras são transformadas em impulsos elétricos e enviados para interpretação ao cérebro.",
        alternativaCorreta: "3",
        feedBackImagem: "img3m5sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A luz atravessa a córnea e chega a íris, onde a pupila controla a intensidade de luz a ser recebida pelo olho. Ao chegar na lente, esta forma uma imagem real e invertida do objeto, a qual fica localizada exatamente sobre a retina, onde existem diversas células fotorreceptoras que através de uma reação química transformam as ondas luminosas em impulsos elétricos. Esses impulsos são conduzidos pelo nervo óptico até o cérebro, que interpreta a imagem (que a fazem ficar na posição correta e enxergamos o objeto nitidamente)",
      },
      {
        id: 274,
        escolhida: "não",
        grupo: "10",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra os principais receptores sensoriais do sentido do tato. Analise a figura e as alternativas e, com base em seus conhecimentos acerca dos receptores do tato, determine a alternativa que corresponder, respectivamente, às indicações da figura.",
        imagem: "img4m5sen",
        legendaImagem:
          "Imagem: Adaptada de CNX OpenStax, <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Figure_36_02_02_esp.png'>Disponível aqui</a>.",
        alternativa1:
          "I. Corpúsculo de Merkel. II. Terminal de Ruffini. III. Disco de Paccini. IV. Corpúsculo de Krause. e V. Corpúsculo de Meissner.",
        alternativa2:
          "I. Corpúsculo de Paccini. II. Terminal de Ruffini. III. Disco de Merkel. IV. Corpúsculo de Meissner. e V. Corpúsculo de Krause.",
        alternativa3:
          "I. Corpúsculo de Krause. II. Disco de Merkel. III. Terminal de Ruffini. IV. Corpúsculo de Meissner. e V. Corpúsculo de Krause.",
        alternativa4:
          "I. Disco de Merkel. II. Corpúsculo de Meissner. III. Terminal de Ruffini. IV. Corpúsculo de Krause. e V.Corpúsculo de Paccini.",
        alternativaCorreta: "2",
        feedBackImagem: "imgfeed4m5sen",
        feedBackLegendaImagem:
        "Imagem: Adaptada de CNX OpenStax, <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Figure_36_02_02_esp.png'>Disponível aqui</a>.",
        feedBackTexto:
          "Os receptores indicados na imagem consistem em:<br/>Corpúsculos de Pacini: Receptores com terminação nervosa envolvida por camadas concêntricas de tecido conjuntivo, adquirindo o aspecto de uma cebola. Estão localizados abaixo da pele e nos tecidos das fáscias. O estímulo de receptor tátil ocorre apenas pela compressão local e rápida dos tecidos, captando sensações de toque e vibração.<br/>Terminações de Ruffini: São receptores pequenos e pouco abundantes. Estão localizados em camadas mais profundas da pele e em tecidos mais profundos bem como em cápsulas articulares. Estão relacionados com a percepção de sinais de tato e pressão prolongados e intensos, bem como sensações térmicas de calor.<br/>Discos de Merkel: São receptores formados por ramificações axonais com vários discos terminais. São encontrados principalmente em áreas que apresentam grandes quantidades de corpúsculos de Meissner, como nas pontas dos dedos. Esses receptores percebem o toque contínuo de objetos sobre a pele.<br/>Corpúsculo de Meissner: São receptores pequenos formados por um axônio mielínico. Apresenta uma grande sensibilidade e é encontrado em áreas de pele sem pelos (lábios e pontas dos dedos). São sensíveis a vibrações de baixa frequência e a movimentos de objetos na superfície da pele (estímulos passageiros).<br/>Corpúsculo de Krause: São estruturas formadas por uma fibra nervosa, cuja terminação tem a forma de bastão com uma das extremidades mais grossa. Estão localizados em regiões de limite da epiderme com a mucosa, como ao redor dos lábios e dos genitais. Captam sensações térmicas de frio.",
      },
      {
        id: 275,
        escolhida: "não",
        grupo: "10",
        modelo: "6",
        enunciado:
          "No sentido da audição, as ondas sonoras adentram a orelha, promovendo vibrações nas estruturas componentes da orelha, transformando-as em impulsos nervosos para serem processadas como som. No que concerne à função dos ossículos da orelha média, analise as alternativas e assinale a que julgar como correta.",
        alternativa1: "Transmitir as vibrações da janela oval para o tímpano",
        alternativa2:
          "Transmitir as vibrações da janela oval para o nervo auditivo",
        alternativa3: "Transmitir as vibrações do tímpano para a janela oval",
        alternativa4:
          "Transmitir as vibrações do tímpano para o nervo auditivo",
        alternativaCorreta: "3",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A função dos ossículos da orelha média é a de transmitir as vibrações do tímpano para a janela oval.",
      },
      {
        id: 276,
        escolhida: "não",
        grupo: "10",
        modelo: "6",
        enunciado:
          "No sentido da visão, o estímulo luminoso atinge partes do olho e formam a imagem que é interpretada e processada pelo cérebro. Quando um raio de luz penetra o olho, qual a sequência de estruturas pelas quais ele passa até formar a imagem na retina? Analise as alternativas abaixo e selecione a proposição que julgar como correta.",
        alternativa1: "Córnea → humor aquoso → pupila → lente → corpo vítreo",
        alternativa2: "Córnea → pupila → humor aquoso → íris → corpo vítreo",
        alternativa3: "Pupila → córnea → humor aquoso → corpo vítreo → lente",
        alternativa4: "Pupila → córnea → corpo vítreo → lente → humor aquoso",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Quando um raio de luz penetra o olho, a sequência de estruturas pelas quais ele passa até formar a imagem na retina consiste em:<br/>Córnea → humor aquoso → pupila → lente → corpo vítreo",
      },
      {
        id: 277,
        escolhida: "não",
        grupo: "10",
        modelo: "6",
        enunciado:
          "Diferentes tipos de estruturas sensoriais especializadas são capazes de identificar o mundo que nos cerca por meio dos sentidos. No que se refere às estruturas capazes de perceber estímulos de pressão, analise as alternativas abaixo e selecione a que julgar como correta.",
        alternativa1:
          "As estruturas capazes de perceber estímulos de pressão são chamadas quimiorreceptores",
        alternativa2:
          "As estruturas capazes de perceber estímulos de pressão são chamadas fotorreceptores",
        alternativa3:
          "As estruturas capazes de perceber estímulos de pressão são chamadas termorreceptores",
        alternativa4:
          "As estruturas capazes de perceber estímulos de pressão são chamadas mecanorreceptores",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "As estruturas capazes de perceber estímulos de pressão são chamadas mecanorreceptores",
      },
    ];
  }
}
