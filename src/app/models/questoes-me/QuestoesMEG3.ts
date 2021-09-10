import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG3 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 122,
        escolhida: "não",
        grupo: "3",
        modelo: "2",
        enunciado:
          "No processo de respiração, destacam-se três momentos básicos: a ventilação pulmonar, a respiração interna (tecidual) e a respiração externa (pulmonar). Com base em seus conhecimentos sobre esses momentos, assinale todas as alternativas que considerar verdadeiras.",
        alternativa1:
          "Ventilação pulmonar: consiste na inspiração e expiração e envolve a troca de ar entre a atmosfera e os alvéolos pulmonares.",
        alternativa2:
          "Respiração externa: troca de gases entre os alvéolos pulmonares e o sangue nos capilares pulmonares através da membrana respiratória. O sangue dos capilares ganha oxigênio (O2) e perde gás carbônico (CO2).",
        alternativa3:
          "Respiração interna: troca de gases entre o sangue nos capilares sistêmicos com as células teciduais. O sangue dos capilares perde oxigênio (O2) e ganha gás carbônico (CO2).",
        alternativa4:
          "Ventilação pulmonar: troca de gases entre os alvéolos pulmonares e o sangue nos capilares pulmonares através da membrana respiratória. O sangue dos capilares ganha oxigênio (O2) e perde gás carbônico (CO2).",
        alternativa5:
          "Respiração externa: troca de gases entre o sangue nos capilares sistêmicos com as células teciduais. O sangue dos capilares perde oxigênio (O2) e ganha gás carbônico (CO2).",
        alternativa6:
          "Respiração interna: consiste na inspiração e expiração e envolve a troca de ar entre a atmosfera e os alvéolos pulmonares.",
        alternativaCorreta: "1,2,3",
        feedBackImagem: "img4m1res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A ventilação pulmonar consiste na inspiração (inalação do ar) e expiração (exalação do ar) e envolve a troca de ar entre a atmosfera e os alvéolos pulmonares. A respiração externa consiste na troca de gases entre os alvéolos pulmonares e o sangue nos capilares pulmonares através da membrana respiratória. O sangue dos capilares ganha oxigênio (O2) e perde gás carbônico (CO2). A respiração interna consiste na troca de gases entre o sangue nos capilares sistêmicos com as células teciduais. O sangue dos capilares perde oxigênio (O2) e ganha gás carbônico (CO2).",
      },
      {
        id: 123,
        escolhida: "não",
        grupo: "3",
        modelo: "2",
        enunciado:
          "A ventilação pulmonar consiste na inspiração (inalação do ar) e expiração (exalação do ar), possibilitando a troca de ar entre a atmosfera e os alvéolos pulmonares, possibilitando a entrada de ar rico em oxigênio no organismo e a saída de ar rico em gás carbônico. Com base nas informações e em seus conhecimentos sobre esse processo, assinale todas as alternativas que considerar verdadeiras.",
        alternativa1:
          "Durante a inspiração, o diafragma e os músculos intercostais contraem acarretando o aumento do volume da caixa torácica e a entrada de ar nos pulmões.",
        alternativa2:
          "Durante a expiração, o diafragma e os músculos intercostais relaxam resultando na diminuição do volume da caixa torácica e a saída de ar dos pulmões.",
        alternativa3:
          "O aumento do volume da caixa torácica torna a pressão interna menor que a externa, favorecendo a entrada de ar proveniente do ambiente.",
        alternativa4:
          "A diminuição do volume da caixa torácica torna a pressão interna maior que a externa, favorecendo a saída de ar dos pulmões.",
        alternativa5:
          "A contração do diafragma e dos músculos intercostais diminuem o volume da caixa torácica e a pressão interna, favorecendo a expulsão do ar dos pulmões ao ambiente.",
        alternativa6:
          "O relaxamento do diafragma e dos músculos intercostais aumentam o volume da caixa torácica e a pressão interna, favorecendo a entrada de ar proveniente do ambiente nos pulmões.",
        alternativaCorreta: "1,2,3,4",
        feedBackImagem: "img5m1res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "Durante a inspiração, o diafragma e os músculos intercostais contraem acarretando o aumento do volume da caixa torácica e a entrada de ar nos pulmões. O aumento do volume da caixa torácica torna a pressão interna menor que a externa, favorecendo a entrada de ar proveniente do ambiente.<br/>Durante a expiração, o diafragma e os músculos intercostais relaxam resultando na diminuição do volume da caixa torácica e a saída de ar dos pulmões. A diminuição do volume da caixa torácica torna a pressão interna maior que a externa, favorecendo a saída de ar dos pulmões.",
      },
      {
        id: 124,
        escolhida: "não",
        grupo: "3",
        modelo: "2",
        enunciado:
          "O sistema respiratório é responsável pelos processos de trocas gasosas entre o ar atmosférico e o sangue, fornecendo oxigênio proveniente da atmosfera e retirando gás carbônico produzido pelas células do corpo. Sobre algumas características do processo de respiração, assinale todas as alternativas corretas.",
        alternativa1:
          "O número de movimentos respiratórios (inspiração e expiração) executados por minuto caracterizam a frequência respiratória, que em condições normais, situa-se entre 12 a 15 vezes por minuto.",
        alternativa2:
          "Os reforços de cartilagem presentes na traqueia e nos brônquios tem como função manter essas estruturas sempre abertas, permitindo que o ar possa fluir durante a inspiração e expiração.",
        alternativa3:
          "A cavidade nasal possui projeções denominadas conchas nasais, que formam canais para a passagem de ar, denominados meatos.",
        alternativa4:
          "A faringe é um órgão exclusivamente respiratório, uma vez que consiste em uma estrutura tubular responsável pela passagem de ar da laringe para os brônquios.",
        alternativa5:
          "A hematose consiste nas trocas gasosas onde o gás oxigênio difunde-se para os alvéolos pulmonares, sendo eliminado pelos pulmões no processo denominado expiração.",
        alternativa6:
          "O sistema respiratório humano envolve gases como o oxigênio e o gás carbônico, que transitam pelo corpo por meio de tubos respiratórios até chegarem às células, de modo que estes gases não interagem diretamente com o sistema circulatório.",
        alternativaCorreta: "1,2,3",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "O número de movimentos respiratórios (inspiração e expiração) executados por minuto caracterizam a frequência respiratória, que em condições normais, situa-se entre 12 a 15 vezes por minuto.<br/>Os reforços de cartilagem presentes na traqueia e nos brônquios tem como função manter essas estruturas sempre abertas, permitindo que o ar possa fluir durante a inspiração e expiração.<br/>A cavidade nasal possui projeções denominadas conchas nasais, que formam canais para a passagem de ar, denominados meatos.<br/>A faringe é um órgão que abrange tanto o sistema respiratório como o digestório, uma vez que permite tanto a passagem de ar em direção aos pulmões, como de alimento em direção ao esôfago.<br/>A hematose consiste nas trocas gasosas onde o gás oxigênio presente no ar dos alvéolos difunde-se para os capilares sanguíneos e penetra nas hemácias, onde se combina com a hemoglobina.<br/>Portanto, o sistema respiratório humano se relaciona com o sistema circulatório, pois é por meio deste que os gases são transportados pelo organismo.",
      },
      {
        id: 128,
        escolhida: "não",
        grupo: "3",
        modelo: "4",
        enunciado:
          "Cada pulmão possui milhões de alvéolos, cada um com cerca de 0,2 mm de diâmetro. As paredes dos alvéolos são extremamente finas e revestidas internamente por um líquido e envolvidas externamente por capilares sanguíneos. O GIF abaixo representa, de forma simplificada, o processo ocorrido nos alvéolos, durante a respiração. Sob esse aspecto, com base no GIF e em seus conhecimentos, determine a alternativa correta.",
        imagem: "gif1res",
        legendaImagem: "Imagem: GIFER, disponível aqui.",
        alternativa1:
          "O ar proveniente da inspiração está representado em amarelo e é rico em gás oxigênio (O2), que ao chegar aos alvéolos se difunde aos capilares sanguíneos, entra nas hemácias e se combina com a hemoglobina viajando pelo corpo, chegando aos capilares de todos os tecidos.",
        alternativa2:
          "O ar proveniente da inspiração está representado em rosa e é rico em gás oxigênio (O2), que ao chegar aos capilares sanguíneos se difunde aos brônquios, entra na linfa e se combina com os macrófagos que viajam pelo corpo, chegando aos capilares de todos os tecidos.",
        alternativa3:
          "O sangue que retorna dos tecidos do corpo aos pulmões está representado por rosa e é rico em gás oxigênio (O2), que é eliminado no processo de expiração.",
        alternativa4:
          "O sangue que retorna dos tecidos do corpo aos pulmões está representado por amarelo e é rico em gás carbônico (CO2), que se difunde para os capilares e penetra nas hemácias, sendo levado aos tecidos do corpo.",
        alternativaCorreta: "1",
        feedBackImagem: "gif1res",
        feedBackLegendaImagem: "Imagem: GIFER, disponível aqui.",
        feedBackTexto:
          "A animação representa de forma simplificada o processo de respiração, demonstrando à esquerda, o processo de ventilação pulmonar (inspiração e expiração) e à direita a respiração externa (trocas gasosas entre alvéolos e capilares sanguíneos pulmonares).<br/>O ar proveniente da inspiração está representado em amarelo e é rico em gás oxigênio (O2), que ao chegar aos alvéolos se difunde aos capilares sanguíneos, entra nas hemácias e se combina com a hemoglobina viajando pelo corpo, chegando aos capilares de todos os tecidos.<br/>Nos tecidos, ocorre a respiração celular, consumindo oxigênio e liberando gás carbônico, de modo que, após esse processo (respiração interna), o sangue proveniente dos tecidos do corpo chega aos pulmões rico em gás carbônico (CO2). Esse gás se difunde para os alvéolos pulmonares, sendo eliminado na expiração, conforme representado em rosa.",
      },
      {
        id: 129,
        escolhida: "não",
        grupo: "3",
        modelo: "4",
        enunciado:
          "O ar dos pulmões é constantemente renovado por meio da inspiração e expiração. Essa renovação de ar nos pulmões é chamada ventilação pulmonar, sendo auxiliada por músculos intercostais e pelo diafragma. Com base na animação e em seus conhecimentos, determine a alternativa correta.",
        imagem: "gif2res",
        legendaImagem: "Imagem: Makeagif. Disponível aqui.",
        alternativa1:
          "Durante a inspiração, o diafragma se contrai e desce, aumentando o volume da caixa torácica, forçando o ar a entrar nos pulmões. Durante a expiração, o diafragma relaxa e sobe, diminuindo o volume da caixa torácica, liberando o ar dos pulmões ao ambiente.",
        alternativa2:
          "Durante a inspiração, o diafragma se contrai e sobe, diminuindo o volume da caixa torácica, liberando o ar dos pulmões. Durante a expiração, o diafragma relaxa e desce, aumentando o volume da caixa torácica, forçando o ar a entrar nos pulmões.",
        alternativa3:
          "O diafragma é uma membrana musculosa que não influencia no processo de ventilação pulmonar, uma vez que sua função é apenas separar a cavidade torácica da cavidade abdominal.",
        alternativa4:
          "Durante a expiração forçada, eliminamos todo o ar presente nos pulmões devido à contração do diafragma, não deixando nenhum ar residual, podendo acarretar na morte, pois a respiração é um processo totalmente voluntário.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Na expiração (saída de ar dos pulmões), o processo é o oposto: diafragma relaxa e sobe, os músculos intercostais externos relaxam e abaixam as costelas, proporcionando uma diminuição do volume da caixa torácica e forçando o ar a sair dos pulmões.",
      },
      {
        id: 130,
        escolhida: "não",
        grupo: "3",
        modelo: "4",
        enunciado:
          "As paredes dos alvéolos pulmonares são extremamente finas e recobertas por capilares sanguíneos, nos quais o sangue circula muito perto do ar, que penetra nos alvéolos. A proximidade entre os capilares e a parede fina dos alvéolos permite a difusão de gases entre o sangue e o ar, representada pelo GIF abaixo. Sobre este processo, com base na figura e em seus conhecimentos, determine a alternativa correta.",
        imagem: "gif3res",
        legendaImagem: "Imagem: Makeagif. Disponível aqui.",
        alternativa1:
          "O intercâmbio de gases respiratórios entre o sangue e o ar é denominado hematose e consiste na difusão de O2 do ar dos alvéolos para o sangue dos capilares, simultaneamente à difusão de CO2 dos capilares para os alvéolos.",
        alternativa2:
          "O intercâmbio de gases respiratórios entre o sangue e o ar é denominado hemodiálise e consiste na difusão de CO2 do ar dos alvéolos para o sangue dos capilares, simultaneamente à difusão de O2 dos capilares para os alvéolos.",
        alternativa3:
          "As hemácias e a hemoglobina não participam do processo de transporte de oxigênio pelo corpo, de modo que o O2 é carregado apenas pelo plasma sanguíneo.",
        alternativa4:
          "A difusão de gases entre os alvéolos pulmonares ocorre por osmose, ou seja, pelo transporte do líquido do ambiente de menor concentração para o de maior concentração.",
        alternativaCorreta: "1",
        feedBackImagem: "gif3res",
        feedBackLegendaImagem: "Imagem: Makeagif. Disponível aqui.",
        feedBackTexto:
          "O intercâmbio de gases respiratórios entre o sangue e o ar é denominado hematose e consiste na difusão de O2 do ar dos alvéolos para o sangue dos capilares, simultaneamente à difusão de CO2 dos capilares para os alvéolos. O gás carbônico é eliminado para o ar atmosférico por meio da expiração, enquanto o gás oxigênio se combina com a hemoglobina, no sangue, sendo transportado chegando aos capilares sanguíneos de todos os tecidos do corpo.",
      },
      {
        id: 131,
        escolhida: "não",
        grupo: "3",
        modelo: "5",
        enunciado:
          "As vias respiratórias possuem epitélio de revestimento muco-ciliar, isto é, com cílios dispostos sobre as células epiteliais da mucosa que empurram o muco na mesma direção. A figura abaixo demonstra a presença de muco e de cílios, que se estendem das cavidades nasais aos brônquios. Com base em seus conhecimentos sobre o assunto, assinale a alternativa que corresponda à função muco-ciliar nas vias respiratórias.",
        imagem: "img1m5res",
        legendaImagem:
          "Imagem: Adaptada de Equipe da Blausen.com, Creative Commons BY 3.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "O muco produzido ajuda na retenção de microrganismos e partículas que são posteriormente “varridos” para fora graças aos movimentos dos cílios, sendo engolidos ou expelidos.",
        alternativa2:
          "O muco produzido destrói as partículas estranhas ao organismo e os cílios as englobam, mantendo-as no trato respiratório.",
        alternativa3:
          "O muco produzido tem função de umedecer as vias respiratórias e os cílios retém a umidade, não possuindo nenhuma função de proteção do organismo.",
        alternativa4:
          "O muco produzido ajuda no acúmulo de microrganismos e partículas que são posteriormente “varridos” para os alvéolos pulmonares graças aos movimentos dos cílios.",
        alternativaCorreta: "1",
        feedBackImagem: "img1m5res",
        feedBackLegendaImagem: "",
        feedBackTexto: "",
      },
      {
        id: 132,
        escolhida: "não",
        grupo: "3",
        modelo: "5",
        enunciado:
          "A cavidade nasal tem um papel importante na preparação do ar, para que este chegue aos pulmões em boas condições. No nariz interno, encontramos estruturas denominadas conchas nasais, subdivididas em superior, média e inferior, formando canais denominados meatos, conforme representado na figura abaixo. Com base na figura e em seus conhecimentos, assinale a alternativa que corresponda as funções das conchas nasais no sistema respiratório.",
        imagem: "img2m5res",
        legendaImagem:
          "Imagem: Adaptada de Rage against, Creative Commons - CC0 1.0, Domínio Público, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "As conchas nasais existem para aumentar a superfície mucosa e rotacionar o ar, para que ele seja devidamente filtrado, umedecido e aquecido.",
        alternativa2:
          "As conchas nasais existem para diminuir a superfície mucosa e rotacionar o ar, para que ele possa ser devidamente filtrado, ressecado e resfriado.",
        alternativa3:
          "As conchas nasais existem para transferir o ar da traqueia aos brônquios através de movimentos muco-ciliares.",
        alternativa4:
          "As conchas nasais existem para reter moléculas de CO2 e direcioná-las aos pulmões no instante da inspiração.",
        alternativaCorreta: "1",
        feedBackImagem: "img2m5res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Rage against, Creative Commons - CC0 1.0, Domínio Público, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A cavidade nasal tem um papel importante na preparação do ar, para que este chegue aos pulmões em boas condições. No nariz interno, encontramos estruturas denominadas conchas nasais, subdivididas em superior, média e inferior, formando canais denominados meatos. As conchas nasais existem para aumentar a superfície mucosa e rotacionar o ar, para que ele seja devidamente filtrado, umedecido e aquecido.",
      },
      {
        id: 133,
        escolhida: "não",
        grupo: "3",
        modelo: "5",
        enunciado:
          "A figura abaixo representa o processo de hematose, isto é, trocas gasosas entre os alvéolos pulmonares e o sangue, envolvendo o gás oxigênio (O2) e gás carbônico (CO2). Sob esse aspecto, analise a figura e, com base em seus conhecimentos, assinale a alternativa mais adequada a respeito do gás oxigênio (O2).",
        imagem: "img3m5res",
        legendaImagem:
          "Imagem: Adaptada de Domdomegg, Creative Commons BY 4.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "O O2 chega aos alvéolos por meio dos bronquíolos e, devido à proximidade dos capilares à parede fina dos alvéolos, o O2 difunde-se para o sangue e penetra nas hemácias, combinando-se com a hemoglobina e sendo levado aos tecidos do corpo.",
        alternativa2:
          "O O2 chega aos bronquíolos por meio dos alvéolos e, devido à proximidade dos capilares à parede grossa dos alvéolos, o O2 difunde-se para o saco alveolar e penetra nos anticorpos, combinando-se com a hemocianina, sendo levado aos tecidos do corpo.",
        alternativa3:
          "O O2 chega aos alvéolos por meio dos capilares sanguíneos como produto da respiração celular e difunde-se para o ar alveolar e é encaminhado para as vias respiratórias, sendo eliminado na expiração.",
        alternativa4:
          "O O2 chega aos bronquíolos por meio dos alvéolos como produto da respiração celular, difunde-se para o sangue e penetra no ar alveolar, sendo expelido pelas hemácias no processo de inspiração.",
        alternativaCorreta: "1",
        feedBackImagem: "img3m5res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Domdomegg, Creative Commons BY 4.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "O O2 chega aos alvéolos por meio dos bronquíolos (processo de inspiração) e, devido à proximidade dos capilares à parede fina dos alvéolos, o O2 difunde-se para o sangue e penetra nas hemácias, combinando-se com a hemoglobina e sendo levado aos tecidos do corpo. Ao mesmo tempo, o CO2 presente no sangue difunde-se para os alvéolos, sendo eliminado na expiração.",
      },
      {
        id: 134,
        escolhida: "não",
        grupo: "3",
        modelo: "5",
        enunciado:
          "A figura abaixo representa o processo de hematose, isto é, trocas gasosas entre os alvéolos pulmonares e o sangue, envolvendo o gás oxigênio (O2) e gás carbônico (CO2). Sob esse aspecto, analise a figura e, com base em seus conhecimentos, assinale a alternativa mais adequada a respeito do gás carbônico (CO2).",
        imagem: "img4m5res",
        legendaImagem:
          "Adaptada de Domdomegg, Creative Commons BY 4.0, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "O CO2 chega aos alvéolos por meio dos capilares sanguíneos como produto da respiração celular e, devido à proximidade dos capilares à parede fina dos alvéolos, difunde-se para o ar alveolar e é encaminhado para as vias respiratórias, sendo eliminado na expiração.",
        alternativa2:
          "O CO2 chega aos alvéolos por meio dos bronquíolos e, devido à proximidade dos capilares à parede fina dos alvéolos, o O2 difunde-se para o sangue e penetra nas hemácias, combinando-se com a hemoglobina e sendo levado aos tecidos do corpo.",
        alternativa3:
          "O CO2 chega às vias respiratórias por meio da inspiração e é levado aos tecidos do corpo para ser utilizado na respiração celular.",
        alternativa4:
          "O CO2 combina-se com a hemoglobina formando um complexo chamado oxiemoglobina e, dessa forma, viaja pelo corpo chegando aos capilares de todos os tecidos.",
        alternativaCorreta: "1",
        feedBackImagem: "img4m5res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Domdomegg, Creative Commons BY 4.0, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "O CO2 chega aos alvéolos por meio dos capilares sanguíneos como produto da respiração celular e, devido à proximidade dos capilares à parede fina dos alvéolos, difunde-se para o ar alveolar e é encaminhado para as vias respiratórias, sendo eliminado na expiração. Ao mesmo tempo, o oxigênio proveniente da inspiração é difundido dos alvéolos ao sangue capilares, penetrando nas hemácias e combinando-se com a hemoglobina, sendo levado para os tecidos do corpo, onde estes são oxigenados.",
      },
      {
        id: 135,
        escolhida: "não",
        grupo: "3",
        modelo: "5",
        enunciado:
          "Os pulmões humanos são dois órgãos esponjosos com aproximadamente 25 cm de altura e cerca de 700 gramas, localizados no interior da caixa torácica. Em seu interior, encontram-se cerca de 150 milhões de alvéolos pulmonares, onde ocorrem as trocas gasosas entre o sangue e o ar. A respeito dos pulmões, com base em seus conhecimentos e na figura abaixo, determine a alternativa correta.",
        imagem: "img5m5res",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "O pulmão direito possui três lobos enquanto o pulmão esquerdo possui apenas dois. Ambos são envoltos por duas membranas, a pleura interna (aderida à superfície pulmonar) e a pleura externa (aderida à caixa torácica).",
        alternativa2:
          "O pulmão direito possui dois lobos enquanto o pulmão esquerdo possui três. Apenas o pulmão direito é envolto por duas membranas, a pleura interna (aderida à superfície pulmonar) e a pleura externa (aderida à caixa torácica).",
        alternativa3:
          "O pulmão direito possui três lobos enquanto o pulmão esquerdo possui apenas dois. Apenas o pulmão esquerdo é envolto por duas membranas, a pleura interna (aderida à superfície pulmonar) e a pleura externa (aderida à caixa torácica).",
        alternativa4:
          "O pulmão direito possui dois lobos enquanto o pulmão esquerdo possui três. Ambos são envoltos por duas membranas, a pleura interna (aderida à caixa torácica) e a pleura externa (aderida à superfície pulmonar).",
        alternativaCorreta: "1",
        feedBackImagem: "feedback5m5res",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0) e de Gtaf, Creative Commons BY-SA 4.0, via Wikimedia Commons. Disponível aqui e aqui.",
        feedBackTexto:
          "O pulmão direito possui três lobos enquanto o pulmão esquerdo possui apenas dois. Ambos são envoltos por duas membranas, a pleura interna (aderida à superfície pulmonar) e a pleura externa (aderida à caixa torácica).",
      },
      {
        id: 136,
        escolhida: "não",
        grupo: "3",
        modelo: "6",
        enunciado:
          "Nas trocas gasosas do processo de hematose, o sangue recebe gás oxigênio dos alvéolos, que se combina à hemoglobina do sangue, sendo direcionado à corrente sanguínea para os tecidos de todo o corpo. Com base em seus conhecimentos, determine a alternativa que corresponda corretamente ao processo de transporte de oxigênio dos pulmões para os tecidos do corpo humano.",
        alternativa1:
          "Moléculas de O2 se ligam a molécula de hemoglobina, cada uma delas em um grupo heme, formando um complexo instável chamado oxiemoglobina, onde o O2 viaja pelo corpo, chegando aos capilares dos tecidos.",
        alternativa2:
          "Moléculas de O2 se ligam a molécula de hemocianina, cada uma delas em um grupo heme, formando um complexo estável chamado carbaminoemoglobina, onde o O2 viaja pelo corpo, chegando aos alvéolos.",
        alternativa3:
          "A hemoglobina não possui relação com o sistema respiratório, ela tem como única função a pigmentação vermelha do sangue.",
        alternativa4:
          "A hemoglobina é responsável pelo transporte de CO2, que se ligam a um grupo heme por meio do ferro. O CO2 então é levado aos tecidos de todo o corpo para ser utilizado na produção de ATP.",
        alternativaCorreta: "1",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "Moléculas de O2 se ligam a molécula de hemoglobina, cada uma delas em um grupo heme, formando um complexo instável chamado oxiemoglobina, onde o O2 viaja pelo corpo, chegando aos capilares dos tecidos.",
      },
      {
        id: 137,
        escolhida: "não",
        grupo: "3",
        modelo: "6",
        enunciado:
          "Ao deixarmos um estado de repouso para realizar uma atividade física intensa, os centros nervosos que controlam a respiração (localizados no bulbo encefálico e medula espinhal) identificam as condições em que o corpo se encontra, determinando maior ou menor ventilação pulmonar por meio de impulsos nervosos. Sob esse aspecto, determine e assinale a alternativa que corresponda a processos desencadeados pelo corpo durante atividade física intensa.",
        alternativa1:
          "A taxa de CO2 aumenta devido à respiração celular, provocando redução no pH sanguíneo. A acidez do sangue é detectada pelo sistema nervoso, que promove a contração dos músculos respiratórios, aumentando a ventilação pulmonar.",
        alternativa2:
          "A taxa de O2 aumenta devido à respiração celular, provocando aumento no pH sanguíneo. O pH básico do sangue é detectado pelo sistema nervoso, que promove o relaxamento dos músculos respiratórios, diminuindo a ventilação pulmonar.",
        alternativa3:
          "A taxa de CO2 diminui devido à hematose, provocando diminuição do pH sanguíneo. O pH básico do sangue é detectado pelo sistema nervoso, que promove a contração dos músculos abdominais, diminuindo a ventilação pulmonar.",
        alternativa4:
          "A taxa de O2 diminui devido à hematose, provocando aumento do pH sanguíneo. O pH ácido do sangue é detectado pelo sistema nervoso, que promove a contração dos músculos abdominais, aumentando a ventilação pulmonar.",
        alternativaCorreta: "1",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "Ao deixarmos um estado de repouso para realizar uma atividade física intensa, os centros nervosos que controlam a respiração (localizados no bulbo encefálico e medula espinhal) identificam as condições em que o corpo se encontra, determinando maior ou menor ventilação pulmonar por meio de impulsos nervosos.<br/>Assim, durante uma atividade física intensa, a taxa de CO2 aumenta devido à respiração celular, provocando redução no pH sanguíneo. A acidez do sangue é detectada pelo sistema nervoso, que promove a contração dos músculos respiratórios, aumentando a ventilação pulmonar.",
      },
      {
        id: 138,
        escolhida: "não",
        grupo: "3",
        modelo: "6",
        enunciado:
          "As trocas gasosas entre os alvéolos e sangue (hematose) ocorrem por difusão, isto é, transporte passivo de moléculas, onde estas se movimentam do meio de maior concentração (maior pressão parcial) para o meio de menor concentração (menor pressão parcial). Sobre este processo, com base em seus conhecimentos sobre a respiração, determine e assinale a alternativa correta.",
        alternativa1:
          "A pressão parcial de O2 é maior no ar que entra nos alvéolos do que no sangue dos capilares. A pressão parcial do CO2 é maior no sangue dos capilares do que no ar que entra nos alvéolos.",
        alternativa2:
          "A pressão parcial de O2 é menor no ar que entra nos alvéolos do que no sangue dos capilares. A pressão parcial do CO2 é menor no sangue dos capilares do que no ar que entra nos alvéolos.",
        alternativa3:
          "A pressão parcial do O2 é maior no sangue dos capilares do que no ar que entra nos alvéolos. A pressão parcial de CO2 é maior nos alvéolos do que no sangue dos capilares.",
        alternativa4:
          "A pressão parcial de O2 é menor no ar que entra nos alvéolos do que no sangue dos capilares. A pressão parcial do CO2 é maior no ar que entra nos alvéolos do que no sangue dos capilares.",
        alternativaCorreta: "1",
        feedBackImagem: "Sem",
        feedBackLegendaImagem: "Sem",
        feedBackTexto:
          "As trocas gasosas entre os alvéolos e sangue (hematose) ocorrem por difusão, isto é, transporte passivo de moléculas, onde estas se movimentam do meio de maior concentração (maior pressão parcial) para o meio de menor concentração (menor pressão parcial). Assim, a pressão parcial de O2 é maior no ar que entra nos alvéolos do que no sangue dos capilares, enquanto a pressão parcial do CO2 é maior no sangue dos capilares do que no ar que entra nos alvéolos.",
      },
    ];
  }
}
