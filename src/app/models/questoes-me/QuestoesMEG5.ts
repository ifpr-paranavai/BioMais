import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG5 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 161,
        escolhida: "não",
        grupo: "5",
        modelo: "2",
        enunciado:
          "Os ovários são estruturas ovoides localizados na cavidade abdominal, na região das virilhas. Nos ovários, ocorre o processo de formação dos óvulos, a ovulogênese, e sua liberação, chamada ovulação. Sob este aspecto, analise as alternativas e, com base em seus conhecimentos, assinale todas as proposições que julgar como corretas.",
        alternativa1:
          "A ovulogênese tem início antes do nascimento da mulher, em sua vida intrauterina, quando as células precursoras dos gametas, as ovogônias, se transformam em ovócitos primários, que permanecem estacionados até a puberdade.",
        alternativa2:
          "Ao nascer, em cada um de seus ovários, a mulher possui cerca de 500 mil folículos ovarianos, contudo a maioria deles degenera antes mesmo da puberdade.",
        alternativa3:
          "A ovulogênese tem início na puberdade, quando as ovogônias sofrem meiose e liberam o ovócito secundário nas tubas uterinas, onde serão fecundados ou degeneração.",
        alternativa4:
          "Após a menarca, na puberdade, em média a cada 28 dias um dos ovócitos primários sofre maturação, produzindo duas células de tamanho diferente: uma grande, o ovócito secundário, e outra pequena, o glóbulo polar, que se degenera.",
        alternativa5:
          "Após a menarca, no final da fase adulta, os ovócitos primários cessam sua maturação, de modo que os óvulos passam a ser produzidos pelas ovogônias e sendo liberados no útero pelos folículos ovarianos.",
        alternativa6:
          "Ao ser formado, o ovócito secundário inicia a segunda divisão da meiose, mas estaciona. O acúmulo de líquido no interior do folículo causa sua ruptura e libertação do ovócito secundário, processo denominado ovulação.",
        alternativaCorreta: "1,2,4,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A ovulogênese tem início antes do nascimento da mulher, em sua vida intrauterina, quando as células precursoras dos gametas, as ovogônias, se transformam em ovócitos primários, que permanecem estacionados até a puberdade.<br/>Ao nascer, em cada um de seus ovários, a mulher possui cerca de 500 mil folículos ovarianos, contudo a maioria deles degenera antes mesmo da puberdade.<br/>Após a menarca (primeira menstruação) na puberdade, em média a cada 28 dias um dos ovócitos primários sofre maturação, produzindo duas células de tamanho diferente: uma grande, o ovócito secundário, e outra pequena, o glóbulo polar, que se degenera.<br/>Ao ser formado, o ovócito secundário inicia a segunda divisão da meiose, mas estaciona. O acúmulo de líquido no interior do folículo causa sua ruptura e libertação do ovócito secundário, processo denominado ovulação.",
      },
      {
        id: 162,
        escolhida: "não",
        grupo: "5",
        modelo: "2",
        enunciado:
          "A espermatogênese é o processo de formação de gametas masculinos, os espermatozoides. Nos homens, esse processo ocorre da puberdade até o fim da vida do indivíduo. Sob este aspecto, com base em seus conhecimentos, analise as alternativas abaixo e assinale todas as proposições que julgar como corretas.",
        alternativa1:
          "A espermatogênese ocorre a partir de células precursoras denominadas espermátides, que se multiplicam ativamente, por meiose, até a puberdade, quando então desaceleram sua multiplicação.",
        alternativa2:
          "A espermatogênese ocorre a partir de células precursoras denominadas espermatogônias, que se multiplicam lentamente, por mitose, até a puberdade, quando passam a se multiplicar com intensidade, até o fim da vida do homem.",
        alternativa3:
          "Após a puberdade, enquanto algumas espermatogônias se multiplicam, outras se transformam em espermatócitos primários, que passam pela primeira divisão meiótica e origina dois espermatócitos secundários.",
        alternativa4:
          "Após a puberdade, enquanto alguns espermatozoides se multiplicam, outros se transformam em espermatogônias, que passam por diversas mitoses, formando um liquido viscoso secretado pelas glândulas bulbouretrais.",
        alternativa5:
          "Cada espermatócito secundário se divide por meiose, formando duas espermátides, que passam por um processo chamado espermiogênese, transformando-se em espermatozoides.",
        alternativa6:
          "Os gametas masculinos são formados por um processo denominado espermatogênese e sua liberação é chamada ovulação.",
        alternativaCorreta: "2,3,5",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A espermatogênese ocorre a partir de células precursoras denominadas espermatogônias, que se multiplicam lentamente, por mitose, até a puberdade, quando passam a se multiplicar com intensidade, até o fim da vida do homem.<br/>Após a puberdade, enquanto algumas espermatogônias se multiplicam, outras se transformam em espermatócitos primários, que passam pela primeira divisão meiótica e origina dois espermatócitos secundários.<br/>Cada espermatócito secundário se divide por meiose, formando duas espermátides, que passam por um processo chamado espermiogênese, transformando-se em espermatozoides.",
      },
      {
        id: 163,
        escolhida: "não",
        grupo: "5",
        modelo: "2",
        enunciado:
          "No ciclo ovariano, após a ovulação, as células que constituem a “cicatriz” do folículo rompido se desenvolvem, formando uma estrutura amarelada denominada corpo-lúteo. Com base em seus conhecimentos sobre o corpo-lúteo, analise as alternativas propostas e assinale todas as proposições que julgar verdadeiras.",
        alternativa1:
          "O corpo-lúteo atua na produção de hormônios sexuais (pouco estrógeno e bastante progesterona), que atuam sobre o endométrio na preparação para uma eventual gravidez.",
        alternativa2:
          "O corpo lúteo atua no desenvolvimento do folículo, que se torna rico em nutrientes, tendo em vista armazenar o ovócito secundário novamente, variadas vezes após a ovulação.",
        alternativa3:
          "A presença de hormônios sexuais produzidos pelo corpo-lúteo estimula a produção de FSH e LH. Caso não haja fecundação, o LH é responsável por manter o corpo-lúteo em atividade, o que desencadeia a menstruação.",
        alternativa4:
          "Caso haja fecundação, é liberado o hormônio FSH, que inibe o desenvolvimento do folículo, regredindo as quantidades de estrogênio e progesterona, impedindo a menstruação e possibilitando uma nova ovulação.",
        alternativa5:
          "A presença de hormônios sexuais produzidos pelo corpo-lúteo inibe a produção de FSH e LH. Caso não haja fecundação, a queda do LH faz com que o corpo-lúteo degenere, o que desencadeia a menstruação.",
        alternativa6:
          "Caso haja fecundação, é liberado o hormônio HCG, que estimula o corpo-lúteo a continuar em atividade, mantendo elevadas as taxas hormonais, impedindo a menstruação e mantendo o endométrio durante a gravidez.",
        alternativaCorreta: "1,5,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "O corpo-lúteo atua na produção de hormônios sexuais (pouco estrógeno e bastante progesterona), que atuam sobre o endométrio na preparação para uma eventual gravidez.<br/>A presença de hormônios sexuais produzidos pelo corpo-lúteo inibe a produção de FSH e LH. Caso não haja fecundação, a queda do LH faz com que o corpo-lúteo degenere, deixando de produzir hormônios estrógeno e progesterona, o que faz com que a mucosa uterina se desprenda e seja eliminada na menstruação.<br/>Caso haja fecundação, é liberado o hormônio HCG (gonadotrofina coriônica), que estimula o corpo-lúteo a continuar em atividade, mantendo elevadas as taxas hormonais de estrogênio e progesterona, impedindo a menstruação e mantendo o endométrio durante os primeiros quatro meses de gravidez. A partir de então, o corpo-lúteo degenera e a placenta se torna responsável pela manutenção dos níveis hormonais, que mantém a proliferação da mucosa uterina até o final da gravidez.",
      },
      {
        id: 164,
        escolhida: "não",
        grupo: "5",
        modelo: "2",
        enunciado:
          "Os métodos contraceptivos consistem em formas de se evitar uma gravidez indesejada, podendo variar entre métodos comportamentais, de barreira, dispositivos intrauterinos, hormonais, de emergência ou cirúrgicos. Os métodos de barreira, por exemplo, são aqueles que impedem que os espermatozoides cheguem até o útero. Com base em seus conhecimentos, analise as alternativas propostas abaixo e assinale todas as alternativas que consistirem em somente métodos contraceptivos de barreira.",
        alternativa1: "Preservativo (camisinha feminina e masculina).",
        alternativa2: "Tabelinha.",
        alternativa3: "Diafragma.",
        alternativa4: "Anel vaginal.",
        alternativa5: "Espermicida.",
        alternativa6: "Pílula de emergência.",
        alternativaCorreta: "1,3,5",
        feedBackImagem: "imgfeedback1m2repro",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Pikisuperstar, via <a href='https://www.freepikcompany.com/legal'>Freepik.com</a>. <a href='https://www.freepik.com/free-vector/contraception-methods-illustration_9892287.htm#position=0'>Disponível aqui</a>.",
        feedBackTexto:
          "O preservativo (camisinha) masculino e feminino, o diafragma e os espermicidas podem ser considerados métodos contraceptivos de barreira, pois, ao formarem uma barreira física durante o ato sexual, impedem que os espermatozoides cheguem até o útero.",
      },
      {
        id: 167,
        escolhida: "não",
        grupo: "5",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra um importante processo para a reprodução humana, nos órgãos internos do sistema genital feminino. Analise a animação e as alternativas abaixo e, com base em seus conhecimentos, determine a alternativa que julgar como correta, acerca do processo demonstrado.",
        imagem: "imggif1m4repro",
        legendaImagem: 
        "Imagem: Via GIFER. <a href='https://gifer.com/en/UTA2'>Disponível aqui</a>.",
        alternativa1:
          "O ovócito secundário é liberado do folículo ovariano (ovulação) e recolhido pelas fimbrias, para ser encaminhado para as tubas uterinas.",
        alternativa2:
          "O espermatozoide é produzido no testículo (espermatogênese) e resgatado pelo epidídimo, para ser encaminhado para as tubas uterinas.",
        alternativa3:
          "O óvocito primária é liberado do óvulo (ovulação) e capturado pelos alvéolos, para ser encaminhado para as tubas uterinas.",
        alternativa4:
          "O zigoto é liberado do folículo ovariano (ovulação) e capturado pelo epidídimo, para ser encaminhado para as tubas uterinas.",
        alternativaCorreta: "1",
        feedBackImagem: "imggif1m4repro",
        feedBackLegendaImagem: 
        "Imagem: Via GIFER. <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A animação demonstra a liberação do ovócito secundário do folículo ovariano, processo denominado ovulação. Ao ser liberado, o ovócito é “recolhido” pelas fimbrias, que são finas terminações das tubas uterinas, que direcionam o ovócito para o interior de uma das tubas, onde os espermatozoides o encontram para uma possível fecundação.",
      },
      {
        id: 168,
        escolhida: "não",
        grupo: "5",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra o calendário do ciclo menstrual, durante o período médio de 28 dias. As fases do ciclo uterino consistem em: menstruação (1º ao 5º dia), fase proliferativa (5º ao 13º dia), ovulação (13º ao 16º dia) e a fase luteínica (16º ao 28º dia). Com base na animação, nas informações e em seus conhecimentos, determine os processos ocorridos na fase de 1. menstruação, 2. fase proliferativa, 3. ovulação e 4. fase luteínica, respectivamente.",
        imagem: "imggif2m4repro",
        legendaImagem: 
        "Imagem: Malucia1003, via Tenor. <a href='https://tenor.com/view/menstruation-calendar-how-gif-11952811'>Disponível aqui</a>.",
        alternativa1:
          "1. manutenção e crescimento do revestimento do endométrio; 2. Eliminação do revestimento uterino; 3. formação do corpo lúteo; 4. liberação do ovócito secundário.",
        alternativa2:
          "1. liberação do ovócito secundário; 2. formação do corpo lúteo e manutenção do endométrio; 3. eliminação do revestimento do endométrio; 4. Crescimento do revestimento uterino.",
        alternativa3:
          "1. eliminação do revestimento do endométrio; 2. crescimento do revestimento uterino; 3. liberação do ovócito secundário; 4. formação do corpo lúteo e manutenção do endométrio.",
        alternativa4:
          "1. crescimento do revestimento uterino; 2. liberação do ovócito secundário; 3. eliminação do revestimento do endométrio; 4. formação do corpo lúteo e manutenção do endométrio.",
        alternativaCorreta: "3",
        feedBackImagem: "imggif2m4repro",
        feedBackLegendaImagem:
        "Imagem: Malucia1003, via Tenor. <a href='https://tenor.com/view/menstruation-calendar-how-gif-11952811'>Disponível aqui</a>.",
        feedBackTexto:
          "A primeira fase do ciclo menstrual, a menstruação, ocorre entre os dias 1 e 5, e consiste na eliminação do revestimento do endométrio. A segunda fase, a fase proliferativa, ocorre entre os dias 5 e 13, e consiste no crescimento do revestimento uterino. Durante essas duas fases, ocorre o desenvolvimento e maturação do folículo ovariano, que passa a abrigar o ovócito secundário.<br/>A terceira fase, a ovulação, ocorre geralmente no 14º dia do ciclo, podendo variar, conforme mostrado no GIF, entre os dias 13 e 16, aproximadamente. Essa fase consiste na liberação do ovócito secundário, que é direcionado para o interior das tubas uterinas.<br/>A quarta fase, denominada fase luteínica, ocorre após a ovulação, por volta dos dias 16 a 28, conforme demonstrado no GIF. Nessa fase, ocorre formação do corpo lúteo no ovário, produção de progesterona e a manutenção e preparação do endométrio uterino para uma possível nidação.<br/>Se não houver fecundação, o ciclo se reinicia com uma nova menstruação. Se houver, inicia-se a gravidez.",
      },
      {
        id: 169,
        escolhida: "não",
        grupo: "5",
        modelo: "4",
        enunciado:
          "Os conhecimentos científicos sobre a reprodução humana têm possibilitado a solução para algumas dificuldades para procriar. A animação abaixo demonstra uma técnica de reprodução denominada fecundação ou fertilização in vitro. Analise a animação e as alternativas e, com base em seus conhecimentos, determine a alternativa correta sobre essa técnica.",
        imagem: "imggif3m4repro",
        legendaImagem: 
        "Imagem: Via Gfycat. <a href='https://gfycat.com/popularvigilantgermanspaniel'>Disponível aqui</a>.",
        alternativa1:
          "Neste tipo de fertilização, hormônios são sintetizados em laboratório e indicados para uso oral ou injetável para a mulher, que passa a ovular com maior frequência, aumentando as chances de uma possível gravidez.",
        alternativa2:
          "São coletados e escolhidos os melhores espermatozoides do progenitor paterno e, após análise em laboratório, esses gametas são inseridos diretamente no útero da mulher, próximo do dia da ovulação.",
        alternativa3:
          "Neste tipo de fertilização, o casal ou a mulher interessada na gravidez que não possa gerar um embrião próprio, recorrem a materiais biológicos (gametas) doados por doadores anônimos para prosseguir com um processo de gravidez.",
        alternativa4:
          "São coletados os gametas femininos e masculinos dos progenitores e, em laboratório, o óvulo é fecundado pelo espermatozoide. Após a formação do embrião em meio nutritivo em incubadora, ocorre sua implantação no útero materno.",
        alternativaCorreta: "4",
        feedBackImagem: "imggif3m4repro",
        feedBackLegendaImagem: 
        "Imagem: Via Gfycat. <a href='https://gfycat.com/popularvigilantgermanspaniel'>Disponível aqui</a>.",
        feedBackTexto:
          "Há variados métodos para auxiliar pessoas que tem o intuito de procriar, mas que, possuem dificuldade de gerar, naturalmente, o próprio embrião. Dentre eles, destaca-se a fecundação in vitro.<br/>Nesse processo, primeiramente a mulher será estimulada hormonalmente para o desenvolvimento dos próprios folículo ovarianos. A partir de então, são coletados os gametas femininos e masculinos dos progenitores e, em laboratório, o óvulo é fecundado pelo espermatozoide. Após a formação do embrião em meio nutritivo em incubadora, ocorre sua implantação no útero materno.",
      },
      {
        id: 170,
        escolhida: "não",
        grupo: "5",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra um método contraceptivo cirúrgico (definitivo) realizado em homens, a partir do secionamento dos ductos deferentes. Esse procedimento gera receio em alguns homens acerca da possibilidade de perderem a libido ou deixarem de ejacular normalmente. Sobre essa afirmação, analise a figura e as alternativas, selecionando a proposição que julgar como correta.",
        imagem: "img6m5repro",
        legendaImagem:
          "Imagem: Adaptada de Timdwilliamson, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Open_Vasectomy_.jpeg'>Disponível aqui</a>.",
        alternativa1:
          "A laqueadura tubária não diminui o desejo sexual, apesar de alterar a secreção de testosterona pelos testículos. Porém, ao atingir o orgasmo, o homem com laqueadura nas tubas uterinas ejacula com déficit significativo de secreções.",
        alternativa2:
          "A vasectomia não diminui o desejo sexual, pois não altera a secreção de testosterona pelos testículos, hormônio responsável pela libido. Ao atingir o orgasmo, o homem vasectomizado ejacula normalmente, com a diferença que seu esperma não contém espermatozoides.",
        alternativa3:
          "A laqueadura tubária diminui o desejo sexual, pois inibe hormônios como o LH, FSH e, consequentemente, a testosterona, hormônio responsável pela libido em homens e mulheres. Ao atingir o orgasmo, o homem esterilizado ejacula normalmente, com a diferença que seu esperma não contém espermatozoides.",
        alternativa4:
          "A vasectomia diminui consideravelmente o desejo sexual, pois impede a produção de testosterona pelos testículos. Ao atingir o orgasmo, o homem vasectomizado ejacula normalmente, com a diferença que seu esperma não contém secreção prostática.",
        alternativaCorreta: "2",
        feedBackImagem: "img6m5repro",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Timdwilliamson, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en'>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Open_Vasectomy_.jpeg'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura demonstra o método contraceptivo cirúrgico (definitivo) em homens, denominado vasectomia. Esse procedimento não diminui o desejo sexual, pois não altera a secreção de testosterona pelos testículos, hormônio responsável pela libido. Ao atingir o orgasmo, o homem vasectomizado ejacula normalmente, com a diferença que seu esperma não contém espermatozoides produzidos nos testículos, sendo constituído apenas por secreções das glândulas acessórias.<br/>Nas mulheres, o procedimento contraceptivo cirúrgico (definitivo) é denominado laqueadura tubária, que consiste no secionamento das tubas uterinas, impedindo que os espermatozoides, no ato sexual desprotegido, cheguem até os ovócitos.",
      },
      {
        id: 171,
        escolhida: "não",
        grupo: "5",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra os processos ocorridos ao longo do ciclo menstrual, nos ovários (ciclo ovariano) e no útero (ciclo uterino) da mulher. Analise a figura e as alternativas e, com base em seus conhecimentos, determina a proposição que julgar como INCORRETA, no que se refere às fases do ciclo.",
        imagem: "img7m5repro",
        legendaImagem:
          "Imagem: Own work, <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en'>Domínio público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:MenstrualCycle_pt.svg'>Disponível aqui</a>.",
        alternativa1:
          "Entre os dias 1-13, aproximadamente, ocorre estímulos hormonais que levam ao crescimento do folículo ovariano e o aumento contínuo do endométrio, devido à menstruação, caracterizando a fase luteínica.",
        alternativa2:
          "Entre os dias 5-13, aproximadamente, ocorre estímulos hormonais que levam ao crescimento do folículo ovariano e da espessura do endométrio, no útero, caracterizando a fase proliferativa.",
        alternativa3:
          "Entre os dias 13-16, aproximadamente, ocorre a expulsão do ovócito secundário do folículo ovariano e o endométrio atinge cerca de 4 milímetros de espessura e apresenta filamentos de muco, caracterizando a fase de ovulação.",
        alternativa4:
          "Entre os dias 16-28, aproximadamente, há formação do corpo lúteo, que secreta estrógeno e progesterona. No útero, esses hormônios promovem aumento adicional do endométrio, tornando-o ideal para a implantação de um possível embrião, caracterizando a fase luteínica.",
        alternativaCorreta: "1",
        feedBackImagem: "img7m5repro",
        feedBackLegendaImagem:
        "Imagem: Own work, <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en'>Domínio público</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:MenstrualCycle_pt.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Entre os dias 1-5, aproximadamente, ocorre a descamação do endométrio, devido a redução das taxas hormonais, caracterizando a fase de menstruação.<br/>Entre os dias 5-13, aproximadamente, ocorre estímulos hormonais que levam ao crescimento do folículo ovariano e da espessura do endométrio, no útero, caracterizando a fase proliferativa.<br/>Entre os dias 13-16, aproximadamente, ocorre a expulsão do ovócito secundário do folículo ovariano e o endométrio atinge cerca de 4 milímetros de espessura e apresenta filamentos de muco, caracterizando a fase de ovulação.<br/>Entre os dias 16-28, aproximadamente, há formação do corpo lúteo, que secreta estrógeno e progesterona. No útero, esses hormônios promovem aumento adicional do endométrio, tornando-o ideal para a implantação de um possível embrião, caracterizando a fase luteínica.<br/>Portanto, afirmar que “entre os dias 1-13, aproximadamente, ocorre estímulos hormonais que levam ao crescimento do folículo ovariano e o aumento contínuo do endométrio, devido à menstruação, caracterizando a fase luteínica”, consiste em uma afirmação incorreta.",
      },
      {
        id: 172,
        escolhida: "não",
        grupo: "5",
        modelo: "5",
        enunciado:
          "Após o ato sexual com ejaculação desprotegida, centenas de espermatozoides são atraídos para o ovócito secundário e, ao chegarem nele, os espermatozoides inserem-se pelos espaços entre as células foliculares. Por meio de ações enzimáticas, abre-se um canal na zona pelúcida por onde um espermatozoide bem-sucedido penetra e atinge a membrana plasmática. Sobre esse processo, analise e figura e as alternativas abaixo e seleciona uma proposição que julgar como verdadeira.",
        imagem: "img8m5repro",
        legendaImagem:
          "Imagem: Adaptada de OpenStax College, <a href='https://creativecommons.org/licenses/by/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:2901_Sperm_Fertilization.jpg'>Disponível aqui</a>.",
        alternativa1:
          "Ao entrar em contato, a corona radiata e a região intermediária do espermatozoide se fundem, impedindo a fecundação. Inicia-se a primeira divisão da meiose e núcleos masculino e feminino se desenvolvem, formando o feto.",
        alternativa2:
          "Ao entrar em contato, a corona radiata e o acrossoma do espermatozoide se fundem, secretando enzimas digestivas que rompem a membrana plasmática do ovócito. Inicia-se a primeira divisão da mitose, que impede a fecundação e inicia o desenvolvimento do folículo ovariano.",
        alternativa3:
          "Ao entrar em contato, membranas plasmáticas do ovócito e do espermatozoide se fundem, desencadeando reações que impedem a entrada de outro espermatozoide no citoplasma. Inicia-se a segunda divisão da meiose e núcleos masculino e feminino se unem, formando o zigoto.",
        alternativa4:
          "Ao entrar em contato, membranas plasmáticas do ovócito e do espermatozoide se fundem, desencadeando reações que permitem a entrada de outros espermatozoides no citoplasma. Inicia-se a primeira divisão da mitose e núcleos masculino e feminino se unem, formando o ovócito secundário.",
        alternativaCorreta: "3",
        feedBackImagem: "img8m5repro",
        feedBackLegendaImagem:
        "Imagem: Adaptada de OpenStax College, <a href='https://creativecommons.org/licenses/by/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:2901_Sperm_Fertilization.jpg'>Disponível aqui</a>.",
        feedBackTexto:
          "O gameta feminino exerce forte atração química sobre os espermatozoides, que nadam em direção a ele. Ao chegar ao ovócito, os espermatozoides inserem-se pelos espaços entre as células foliculares. Por meio de ações enzimáticas, abre-se um canal na zona pelúcida por onde o espermatozoide penetra e atinge a membrana plasmática.<br/>Ao entrar em contato, membrana plasmática do ovócito e do espermatozoide se fundem por meio da ação de proteínas, o que impede a entrada de outro espermatozoide. A cabeça e a cauda do espermatozoide penetram no citoplasma do ovócito, induzindo-o a completar a segunda divisão da meiose, formando o segundo corpúsculo polar e o pronúcleo do óvulo, que está pronto para encontrar o núcleo do espermatozoide, que aumenta de tamanho e passa a ser chamado pronúcleo masculino. Ao se unirem, os pronúcleos formam o zigoto, iniciando assim o desenvolvimento embrionário.",
      },
      {
        id: 173,
        escolhida: "não",
        grupo: "5",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra a ovulogênese, processo de formação dos gametas femininos, que tem início antes do nascimento da mulher, e perdura ao longo de sua vida adulta, até a menopausa, que marca o encerramento da atividade reprodutiva da mulher. Analise a figura abaixo e as informações das alternativas e, com base em seus conhecimentos, determine a proposição que julgar como correta para a fase proliferativa (1), fase de crescimento (2) e fase de maturação (3), respectivamente.",
        imagem: "img9m5repro",
        legendaImagem:
        "Imagem: Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        alternativa1:
          "1. as ovogônias se desenvolvem originando o ovócito I.  2. as células precursoras dos gametas aumentam em quantidade por mitose e originam as ovogônias. 3. na puberdade, os ovócitos II amadurecem mensalmente, finalizando a meiose e originando os ovócitos I.",
        alternativa2:
          "1. na puberdade, os ovócitos I amadurecem mensalmente, finalizando a meiose e originando os ovócitos II.  . 2. as células precursoras dos gametas aumentam em quantidade por mitose e originam as ovogônias 3. as ovogônias se desenvolvem originando o ovócito I.",
        alternativa3:
          "1. as células precursoras dos gametas aumentam em quantidade por mitose e originam as ovogônias. 2. na menopausa, os ovócitos I amadurecem mensalmente, finalizando a meiose e originando os ovócitos II.  3. as ovogônias se desenvolvem originando o ovócito I.",
        alternativa4:
          "1. as células precursoras dos gametas aumentam em quantidade por mitose e originam as ovogônias. 2. as ovogônias se desenvolvem originando o ovócito I. 3. na puberdade, os ovócitos I amadurecem mensalmente, finalizando a meiose e originando os ovócitos II.",
        alternativaCorreta: "4",
        feedBackImagem: "img9m5repro",
        feedBackLegendaImagem:
        "Imagem: Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/' target='_blank'>Creative Commons 3.0</a>).  <a href='https://smart.servier.com/image-set-download/'>Disponível aqui</a>.",
        feedBackTexto:
          "A ovulogênese pode ser dividida em três etapas básicas:<br/>- Fase proliferativa: esta fase ocorre no início da fase fetal, onde as células precursoras dos gametas femininos aumentam em quantidade e originam as ovogônias. Essas divisões, que acontecem no epitélio germinativo do ovário.<br/>- Fase de crescimento: ainda durante o desenvolvimento fetal, as ovogônias crescem, com aumento do citoplasma e acúmulo de substâncias nutritivas e entram em meiose, passando a ser chamadas de ovócitos primários, que permanecem estacionados na prófase I da meiose até a puberdade.<br/>- Fase de maturação: essa fase se inicia quando a menina atinge sua maturidade sexual (11 a 15 anos), quando a cada 28 dias (ciclo menstrual) um folículo (conjunto de ovócito primário e células foliculares) amadurece, terminando a meiose I e passando a ser chamado de ovócito secundário.<br/>O ovócito secundário ovulado é impulsionado para dentro da tuba uterina e, se não for fecundado, ele degenera em cerca de 24 horas após ser liberado e não conclui a meiose II. Se houver espermatozoides na tuba uterina e um deles penetrar o ovócito secundário, no entanto, a meiose II é retomada e libera o segundo corpúsculo polar, que assim como o primeiro, degenera. Os núcleos de espermatozoide e óvulo então se unem, formando o zigoto.",
      },
      {
        id: 174,
        escolhida: "não",
        grupo: "5",
        modelo: "5",
        enunciado:
          "O sistema reprodutor masculino é formado por órgãos e estruturas internas (pênis e escroto) e externas (ductos e glândulas), conforme ilustrado na figura abaixo. Analise a figura e as alternativas e, com base em seus conhecimentos sobre a fisiologia do sistema genital masculino, determine a alternativa que julgar como correta.",
        imagem: "img10m5repro",
        legendaImagem:
          "Imagem: Adaptada de Tsaitgaist, <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Male_anatomy_pt.svg'>Disponível aqui</a>.",
        alternativa1:
          "Os espermatozoides são produzidos no interior da próstata, armazenados nas glândulas seminais e passam pelos ductos deferentes. Durante a ejaculação, os testículos e a glândula bulbouretral lançam secreções no epididimo, que juntamente dos espermatozoides, constituem o sêmen.",
        alternativa2:
          "Os espermatozoides são produzidos no interior dos testículos, armazenados no epidídimo e passam pelos ductos deferentes. Durante a ejaculação, as glândulas seminais e a próstata lançam secreções no ducto ejaculatório, que juntamente dos espermatozoides, constituem o sêmen.",
        alternativa3:
          "Os espermatozoides são produzidos na glândula bulbouretral, armazenados nas glândulas seminais e passam pelo ducto ejaculatório. Durante a ejaculação, os testículos e a próstata lançam secreções no ovário, que juntamente dos espermatozoides, constituem o líquido intersticial.",
        alternativa4:
          "Os espermatozoides são produzidos no interior dos testículos, armazenados na próstata e passam pela glândula bulbouretral. Durante a ejaculação, a próstata e o epididimo lançam secreções nos testículos, que juntamente dos espermatozoides, constituem o sêmen.",
        alternativaCorreta: "2",
        feedBackImagem: "img10m5repro",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Tsaitgaist, <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Male_anatomy_pt.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "Os espermatozoides são produzidos no interior dos testículos, em regiões denominadas túbulos seminíferos. Em um primeiro momento, os espermatozoides vão dos testículos e dos epidídimos para os ductos deferentes, que transporta os espermatozoides, durante a excitação sexual, do epidídimo em direção à uretra por contrações peristálticas.<br/>Anteriormente à ejaculação, as glândulas bulbouretrais liberam um líquido que contribui para a limpeza da uretra, antes da passagem do esperma.<br/>Em um segundo momento, as glândulas seminais e a próstata lançam secreções no ducto ejaculatório, em direção à uretra, que constituem a maior parte do esperma. Durante a ejaculação, o esperma (espermatozoides e secreções das glândulas) é direcionado até a extremidade da uretra e é eliminado por meio de contrações espasmódicas dos músculos do corpo esponjoso do pênis.",
      },
      {
        id: 175,
        escolhida: "não",
        grupo: "5",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra o interior da região pélvica feminina, onde se encontram os órgãos do sistema reprodutor. Sob este aspecto, analise a figura e as alternativas e, com base em seus conhecimentos, determine a alternativa que julgar correta sobre o sistema genital feminino.",
        imagem: "img11m5repro",
        legendaImagem:
        "Imagem: Adaptada de Tsaitgaist, <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Male_anatomy_pt.svg'>Disponível aqui</a>.",
        alternativa1:
          "O pudendo consiste nas estruturas internas do sistema genital feminino, sendo composto por lábios maiores, lábios menores, clitóris, vestíbulo vaginal e vagina.",
        alternativa2:
          "A vagina é a parte externa do sistema genital feminino, sendo composta por lábios maiores, lábios menores, clitóris e vestíbulo vaginal.",
        alternativa3:
          "O útero é um órgão interno oco e consiste no local de implantação de um óvulo fertilizado, desenvolvimento do feto durante a gestação e trabalho de parto.",
        alternativa4:
          "Os ovários consistem em um tecido rico em glândulas, vasos sanguíneos e vasos linfáticos, que se torna mais espesso periodicamente, descamando na menstruação.",
        alternativaCorreta: "3",
        feedBackImagem: "img11m5repro",
        feedBackLegendaImagem:
        "Imagem: Adaptada de Tsaitgaist, <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en'>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. <a href='https://commons.wikimedia.org/wiki/File:Male_anatomy_pt.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O pudendo feminino consiste no sistema genital externo da mulher, sendo constituído de estruturas principais como: monte de púbis, lábios maiores, lábios menores, clitóris e vestíbulo vaginal. Na região do pudendo, também se encontram próximas outras estruturas, tais como: a abertura da uretra, o ânus e o períneo.<br/>A vagina é um tubo de paredes fibromusculares que vai do pudendo até o cérvix uterino (base do útero). A vagina é o receptáculo do pênis durante o ato sexual, bem como a saída para o fluxo menstrual e da passagem do bebê no parto normal.<br/>O útero é um órgão interno, muscular e oco, cuja porção central consiste na cavidade uterina, com paredes são revestidas pelo endométrio, um tecido rico em glândulas, vasos sanguíneos e vasos linfáticos, que descama durante a menstruação. O útero consiste no local de implantação de um óvulo fertilizado, desenvolvimento do feto durante a gestação e trabalho de parto.<br/>As tubas uterinas são tubos que partem lateralmente do útero, e em suas extremidades encontram-se uma região alargada e com franjas (as fímbrias), situadas próximas aos ovários. As tubas uterinas fornecem uma via para os espermatozoides chegarem até o óvulo e transportam os oócitos secundários e óvulos fecundados dos ovários até o útero.<br/>Os ovários são as gônadas femininas, ou seja, são responsáveis pela produção de gametas (ovócitos secundários) e hormônios femininos.",
      },
      {
        id: 176,
        escolhida: "não",
        grupo: "5",
        modelo: "6",
        enunciado:
          "Os métodos contraceptivos atuam para evitar uma gravidez indesejada, podendo atuar de diversas formas e em diferentes etapas do processo reprodutivo. Contudo, são poucos os métodos que, além de evitar a concepção, previnem de Doenças Sexualmente Transmissíveis (DSTs). Sob este aspecto, analise as alternativas abaixo e determine a única proposição cujos métodos previnam contra as DSTs.",
        alternativa1:
          "A camisinha feminina ou masculina previne das DSTs por consistirem em métodos de barreira que impedem o contato direto e a troca de fluidos entre as regiões íntimas.",
        alternativa2:
          "O espermicida, por consistir em um método de barreira que evita que os espermatozoides cheguem ao óvulo, também protege contra DSTs.",
        alternativa3:
          "A pílula anticoncepcional, por atual mantendo os níveis de hormônios em taxas que impedem a ovulação, também protegem contra a transmissão de DSTs.",
        alternativa4:
          "O DIU, ao criar um processo inflamatório no útero impedindo a implantação de embriões no útero, impede a transmissão de DSTs.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A camisinha feminina ou masculina, ou preservativo, é um protetor de látex que previne das DSTs por consistirem em métodos de barreira que impedem o contato direto e a troca de fluidos entre as regiões íntimas durante o ato sexual.",
      },
      {
        id: 177,
        escolhida: "não",
        grupo: "5",
        modelo: "6",
        enunciado:
          "A camisinha (masculina e feminina) é um dos métodos contraceptivos mais indicados durante o ato sexual, uma vez que, além de evitar a gravidez, protege de possíveis contaminações por Doenças Sexualmente Transmissíveis (DST). Sob este aspecto, no que se refere à camisinha masculina, assinale a alternativa correta.",
        alternativa1:
          "A camisinha deve ser colocada no pênis anteriormente de que o órgão esteja ereto, preferencialmente após a penetração.",
        alternativa2:
          "A camisinha permite o contato entre fluidos genitais de parceiros durante o ato sexual, por isso, ela não protege contra DSTs.",
        alternativa3:
          "Ao retirar a camisinha masculina do pênis, é necessário que o órgão não esteja mais ereto.",
        alternativa4:
          "Ao inserir a camisinha no pênis, é necessário segurar sua ponta para retirar o ar, evitando que estoure durante a ejaculação.",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Ao inserir a camisinha no pênis, é necessário segurar sua ponta para retirar o ar, evitando que estoure durante a ejaculação.",
      },
    ];
  }
}
