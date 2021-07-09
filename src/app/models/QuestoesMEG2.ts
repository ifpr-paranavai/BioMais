import { Component, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { QuestaoParPage } from '../questao-par/questao-par.page';
import { IonicModule } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
  })

export class QuestoesMEG2 {
    public questoesMultiplaEscolha;

    getQuestoes(){
        return this.questoesMultiplaEscolha;
    }

    constructor() {
        this.questoesMultiplaEscolha = [

            {
                id: 46,
                escolhida: "não",
                enunciado: "Em relação à circulação sanguínea, toque nas alternativas corretas:",
                grupo: 2,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback46.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Os elementos figurados do sangue estão imersos no plasma",
                alternativa2: "O sangue leva oxigênio e nutrientes para os tecidos do corpo",
                alternativa3: "A pequena circulação transporta sangue entre os pulmões e coração",
                alternativa4: "A grande circulação transporta sangue entre tecidos e coração",
                alternativa5: "Todas as veias carregam sangue pobre em oxigênio",
                alternativa6: "As artérias possuem quatro camadas de tecidos"
            }, {
                id: 47,
                escolhida: "não",
                enunciado: "Em relação ao coração, toque nas alternativas corretas:",
                grupo: 2,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback47.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Possui quatro cavidades internas",
                alternativa2: "A parede dos ventrículos é mais espessa que dos átrios",
                alternativa3: "Os átrios bombeiam sangue para os ventrículos",
                alternativa4: "Os ventrículos bombeiam sangue para a grande e pequena circulação ",
                alternativa5: "Possui duas cavidades internas",
                alternativa6: "O sangue carrega a linfa nos vasos sanguíneos"
            }, {
                id: 48,
                escolhida: "não",
                enunciado: "Em relação a circulação linfática, toque nas alternativas corretas:",
                grupo: 2,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback48.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3],
                alternativa1: "Realizam a coleta de liquido tissular retornando-o para o sangue",
                alternativa2: "Os capilares linfáticos convergem para o ducto torácico e ducto linfático direito",
                alternativa3: "Os linfonodos funcionam como filtros da linfa",
                alternativa4: "Os linfonodos estão presentes nos vasos sanguíneos",
                alternativa5: "Os capilares linfáticos convergem na artéria aorta",
                alternativa6: "Realizam a coleta de sangue venoso que retorna aos pulmões"
            }, {
                id: 49,
                escolhida: "não",
                enunciado: "Dentre as funções imunológicas do baço, toque nas alternativas corretas:",
                grupo: 2,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback49.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3],
                alternativa1: "Ativação e proliferação de linfócitos B e T",
                alternativa2: "Produção de anticorpos",
                alternativa3: "Remoção de antígenos macromoleculares do sangue",
                alternativa4: "Produção de insulina e glucagon",
                alternativa5: "Destruição de anticorpos ativos",
                alternativa6: "Ativação e proliferação de antígenos"
            }, {
                id: 50,
                escolhida: "não",
                enunciado: "Em relação a frequência cardíaca, toque nas alternativas corretas:",
                grupo: 2,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback50.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "É controlada por impulsos elétricos emitidos pelo nó sinoatrial ",
                alternativa2: "A frequência normal é de cerca de 70 a 80 bat/min",
                alternativa3: "A frequência durante o sono é cerca de 35 a 50 bat/min",
                alternativa4: "A frequência durante exercícios intensos é cerca de 180 bat/min",
                alternativa5: "É controlada por hormônios cardiovasculares",
                alternativa6: "Quanto maior a frequência, menos sangue é circulado pelo corpo"
            }, {
                id: 56,
                escolhida: "não",
                enunciado: "De acordo com o gif, o que promove diretamente a sístole dos ventrículos? Assinale UMA alternativa",
                grupo: 2,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif56m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback56.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "A diástole dos átrios estimulada pelos linfonodos",
                alternativa2: "A condução de impulsos elétricos pelo feixe de His e suas ramificações",
                alternativa3: "A condução de impulsos elétricos pelos vasos linfáticos",
                alternativa4: "O retardamento dos impulsos elétricos pelo nó atrioventricular"

            }, {
                id: 57,
                escolhida: "não",
                enunciado: "De acordo com o gif, assinale a única alternativa correta correspondente ao trajeto do sangue rico em oxigênio",
                grupo: 2,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif57m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback57.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Pulmões, átrio direito, ventrículo direito, aorta, vênulas, capilares e tecidos",
                alternativa2: "Pulmões, artéria pulmonar, átrio esquerdo, ventrículo esquerdo, artéria pulmonar, arteríolas ",
                alternativa3: "Pulmões, veias pulmonares, átrio esquerdo, ventrículo esquerdo, aorta, arteríolas, capilares e tecidos",
                alternativa4: "Pulmões, veias pulmonares, átrio direito, ventrículo direito, veias cavas, vênulas, capilares e tecidos"

            }, {
                id: 58,
                escolhida: "não",
                enunciado: "Que estruturas impedem o refluxo sanguíneo para os átrios e ventrículos, respectivamente? Assinale UMA alternativa",
                grupo: 2,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif58m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback58.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Nó sinoatrial, atrioventricular e feixe de His",
                alternativa2: "Valvas atrioventriculares (bicúspide e tricúspide) e valvas semilunares",
                alternativa3: "Valvas semilunares e valvas atrioventriculares (bicúspide e tricúspide)",
                alternativa4: "Hemácias, plaquetas e glóbulos brancos"

            }, {
                id: 59,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta",
                grupo: 2,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif59m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback59.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Átrios e ventrículos entram em sístole simultaneamente",
                alternativa2: "As valvas atrioventriculares permanecem fechadas quando os átrios estão em sístole",
                alternativa3: "O sangue dos ventrículos direito e esquerdo se comunicam, entrando em contato",
                alternativa4: "As valvas atrioventriculares permanecem fechadas quando os ventrículos estão em sístole"

            }, {
                id: 60,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta em relação aos processos que se seguem no corpo após um ferimento ou corte",
                grupo: 2,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif60m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback60.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "A vasoconstrição diminui o fluxo sanguíneo e as plaquetas se aderem ao ferimento formando um “tampão” inicial sobre a lesão",
                alternativa2: "A vasoconstrição aumenta o fluxo sanguíneo e as plaquetas promovem sua vasodilatação",
                alternativa3: "A vasoconstrição diminui o fluxo sanguíneo e as plaquetas estimulam a formação de anticorpos na lesão",
                alternativa4: "A vasoconstrição aumenta o fluxo sanguíneo e as plaquetas formam um tampão inicial sobre a lesão"

            }, {
                id: 71,
                escolhida: "não",
                enunciado: "A figura a seguir representa o processo de ativação dos linfócitos B. Sendo assim, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img71m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback71.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "O macrófago fagocita bactérias e apresenta seu antígeno ao linfócito T auxiliar, através da membrana plasmática",
                alternativa2: "O linfócito B fagocita bactérias e apresenta anticorpos ao linfócito T",
                alternativa3: "O macrófago é ativado por antígenos e realiza a liberação de anticorpos",
                alternativa4: "Os anticorpos são liberados pelo linfócito T auxiliar inativo a fim de destruir os macrófagos"

            }, {
                id: 72,
                escolhida: "não",
                enunciado: "A figura a seguir representa o processo de ativação dos linfócitos B. Sendo assim, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img72m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback72.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "O linfócito B não possui estruturas de reconhecimento de antígenos e só são ativados pelos linfócitos T",
                alternativa2: "Os antígenos são liberados pelo macrófago a fim de destruir os anticorpos",
                alternativa3: "Os linfócitos B se diferenciam em plasmócitos e liberam anticorpos que destroem os antígenos",
                alternativa4: "As células memória são responsáveis pela fagocitose de micro-organismos estranhos e sua destruição"

            }, {
                id: 73,
                escolhida: "não",
                enunciado: "A charge simula divertidamente a apresentação entre células do sistema imunitário. Assinale a alternativa correspondente",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img73m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback73.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "I. Macrófago; II. Linfócito T; III. Antígeno",
                alternativa2: "I. Macrófago; II. Antígeno; III. Linfócito T",
                alternativa3: "I. Antígeno; II. Linfócito T; III. Macrófago",
                alternativa4: "I. Linfócito T; II. Macrófago; III. Antígeno"

            }, {
                id: 74,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta em relação ao processo de ativação e multiplicação dos linfócitos T",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img74m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback74.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Os linfócitos T originados correspondem aos citotóxicos, auxiliadores e de memória",
                alternativa2: "Os linfócitos T originados liberarão antígenos",
                alternativa3: "O macrófago não apresenta antígenos ao linfócito T auxiliar",
                alternativa4: "Os linfócitos produzidos são chamados plasmócitos e provém dos linfócitos C"

            }, {
                id: 75,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta em relação ao processo de ativação e multiplicação dos linfócitos T",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img75m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback75.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Os receptores de membrana do linfócito T identificam os antígenos",
                alternativa2: "Os receptores de membrana do linfócito T não identificam os antígenos",
                alternativa3: "O macrófago é uma bactéria invasora no organismo humano",
                alternativa4: "Os linfócitos T são bactérias invasoras no organismo humano"

            }, {
                id: 76,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que representa apenas órgãos linfóides primários",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img76m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback76.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Medula óssea vermelha e vasos linfáticos",
                alternativa2: "Timo e vasos linfáticos",
                alternativa3: "Apenas timo",
                alternativa4: "Medula óssea vermelha e timo"

            }, {
                id: 77,
                escolhida: "não",
                enunciado: "O esquema a seguir representa a produção de soro imune. Assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img77m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback77.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "A injeção do soro no paciente constitui a imunização passiva, pois não estimula a produção de novos anticorpos",
                alternativa2: "A injeção do soro no paciente constitui a imunização ativa, pois estimula a produção de novos anticorpos",
                alternativa3: "A injeção do soro no paciente estimula a memória imunitária, imunizando permanentemente",
                alternativa4: "A injeção do soro no paciente desencadeia a produção de anticorpos, assim como na vacina"

            }, {
                id: 78,
                escolhida: "não",
                enunciado: "Em relação à produção e utilização de vacinas, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img78m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback78.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "A vacina é inoculada em pessoas já doentes e contém anticorpos que eliminam os antígenos, sem ativar células de memória",
                alternativa2: "A vacina é inoculada em pessoas saudáveis e contém antígenos mortos ou inativos que estimulam a produção de células de memória",
                alternativa3: "A vacina não estimula células de memória, devendo ser aplicada sempre que for preciso destruir anticorpos",
                alternativa4: "A vacina contém anticorpos vivos e ativos que destroem os anticorpos do paciente"

            }, {
                id: 79,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponde corretamente a estrutura da imagem",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img79m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback79.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Válvulas presentes nas artérias que evitam que o sangue chegue aos tecidos",
                alternativa2: "Válvulas venosas que permitem que o sangue oxigenado chegue aos tecidos",
                alternativa3: "Válvulas venosas que impedem o refluxo sanguíneo para as porções inferiores, facilitando sua chegada ao coração",
                alternativa4: "Válvulas arteriais que promovem o refluxo sanguíneo para as porções inferiores, impedindo sua chegada ao coração"

            }, {
                id: 80,
                escolhida: "não",
                enunciado: "De acordo com a imagem, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img80m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback80.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "I. Pequena circulação, transporta sangue entre coração e pulmões; II. Grande circulação transporta, sangue entre coração e tecidos",
                alternativa2: "I. Pequena circulação, transporta sangue entre coração e tecidos. II. Grande circulação, transporta sangue entre coração e pulmões",
                alternativa3: "I. transporta apenas sangue venoso",
                alternativa4: "II. Transporta apenas sangue arterial"

            }, {
                id: 81,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta em relação ao trajeto do sangue oxigenado até chegar aos tecidos",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img81m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback81.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Pulmões, veias pulmonares, átrio direito, ventrículo direito, artéria pulmonar, capilares e tecidos",
                alternativa2: "Pulmões, veias pulmonares, átrio esquerdo, ventrículo esquerdo, aorta, arteríolas, capilares e tecidos",
                alternativa3: "Pulmões, artéria pulmonar, átrio esquerdo, ventrículo esquerdo, veia cava, vênulas e tecidos",
                alternativa4: "Pulmões, artéria pulmonar, átrio direito, ventrículo direito, aorta, veias e tecidos"

            }, {
                id: 82,
                escolhida: "não",
                enunciado: "Assinale a uníca alternativa correta em relação ao trajeto do sangue pobre em oxigênio até chegar aos pulmões",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img82m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback82.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Tecidos, capilares, vênulas, veias cavas, átrio direito, ventrículo direito, artéria pulmonar e pulmões",
                alternativa2: "Tecidos, capilares, arteríolas, aorta, átrio direito, ventrículo direito, veias cavas e pulmões",
                alternativa3: "Tecidos, vênulas, arteríolas, capilares, aorta, artéria pulmonar e pulmões",
                alternativa4: "Tecidos, capilares, vênulas, aorta, átrio esquerdo, ventrículo esquerdo, veias pulmonares e pulmões"

            }, {
                id: 83,
                escolhida: "não",
                enunciado: "De acordo com a imagem, assinale a única alternativa correta em relação as estruturas indicadas",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img83m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback83.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "I. Nó sinoatrial; II. Nó atrioventricular; III. Feixe de His",
                alternativa2: "I. Nó atrioventricular; II. Feixe de His; III. Nó sinoatrial",
                alternativa3: "I. Nó sinoatrial; II. Feixe de His; III. Nó atrioventricular",
                alternativa4: "I. Feixe de His; II. Nó sinoatrial; III. Nó atrioventricular"

            }, {
                id: 84,
                escolhida: "não",
                enunciado: "Assinale a única alternativa em relação aos processos desencadeados pelos impulsos elétricos em cada estrutura indicada",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img84m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback84.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "I estimula a sístole dos átrios; II retarda e conduz os impulsos ao feixe de His; III conduz os impulsos aos ventrículos acarretando suas sístoles",
                alternativa2: "I estimula a sístole dos ventrículos; II conduz os impulsos aos ventrículos; III promove sístole dos átrios",
                alternativa3: "I estimula hematose; II. estimula diástole dos átrios; III estimula sístole dos átrios",
                alternativa4: "I estimula diástole dos átrios, II estimula sístole dos ventrículos e III estimula hematose"

            }, {
                id: 85,
                escolhida: "não",
                enunciado: "De acordo com as estruturas indicadas, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img85m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback85.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "As valvas indicadas conduzem o sangue dos ventrículos aos átrios",
                alternativa2: "As valvas indicadas conduzem o sangue dos átrios aos ventrículos e se fecham quando os ventrículos entram em sístole",
                alternativa3: "As valvas indicadas se abrem apenas para a passagem de sangue rico em oxigênio",
                alternativa4: "As valvas indicadas conduzem sangue dos ventrículos aos átrios e se fecham quando os átrios entram em sístole"

            }, {
                id: 86,
                escolhida: "não",
                enunciado: "De acordo com as estruturas indicadas, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img86m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback86.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "As valvas semilunares evitam o refluxo de sangue dos ventrículos para os átrios",
                alternativa2: "As valvas semilunares evitam o refluxo de sangue da aorta e da artéria pulmonar para os ventrículos",
                alternativa3: "As valvas semilunares evitam o refluxo de sangue da aorta e da artéria pulmonar para os átrios",
                alternativa4: "As valvas semilunares evitam o refluxo de sangue dos átrios para os ventrículos"

            }, {
                id: 87,
                escolhida: "não",
                enunciado: "De acordo com as estruturas indicadas, assinale a única alternativa correta",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img87m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback87.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "I. endocárdio, II. miocárdio, III. pericárdio",
                alternativa2: "I. miocárdio, II. endocárdio, III. pericárdio ",
                alternativa3: "I. pericárdio, II. endocárdio, III. pericárdio",
                alternativa4: "I. pericárdio, II. miocárdio, III. endocárdio"

            }, {
                id: 88,
                escolhida: "não",
                enunciado: "De acordo com a estrutura indicada a seguir, assinale a única alternativa correta:",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img88m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback88.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "I. transporta sangue da porção superior do corpo ao coração; II. transporta sangue da porção inferior do corpo ao coração",
                alternativa2: "I. transporta sangue da porção inferior do corpo ao coração; II. transporta sangue da porção superior do corpo ao coração",
                alternativa3: "I. transporta sangue do coração aos pulmões; II. transporta sangue dos pulmões ao coração",
                alternativa4: "I. transporta sangue dos átrios aos ventrículos; II. transporta sangue dos ventrículos para os átrios"

            }, {
                id: 89,
                escolhida: "não",
                enunciado: "Qual a principal estrutura responsável pelo processo de coagulação sanguínea? Assinale UMA alternativa:",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img89m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback89.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Glóbulos brancos",
                alternativa2: "Eritrócitos",
                alternativa3: "Plaquetas",
                alternativa4: "Células Epiteliais"

            }, {
                id: 90,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda a função do distrito do sistema cardiovascular representado a seguir:",
                grupo: 2,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img90m5sc.png',
                feedBackImagem: "assets/imagens/feedback/feedback90.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Drenar o excesso de sangue a fim de devolvê-lo a linfa e assim manter o equilíbrio dos fluidos do corpo",
                alternativa2: "Produzir hormônios capazes de sintetizar eritrócitos",
                alternativa3: "Promover a circulação do sangue e o transporte de gases e nutrientes",
                alternativa4: "Drenar o excesso de líquido intersticial afim de devolvê-lo ao sangue e assim manter o equilíbrio dos fluidos no corpo"

            }, {
                id: 96,
                escolhida: "não",
                enunciado: "Qual a diferença entre órgãos imunitários primários e secundários?",
                grupo: 2,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback96.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Primários: onde se origina e se diferenciam linfócitos. Secundários: onde os linfócitos se multiplicam e exercem importantes funções",
                alternativa2: "Primários: onde os linfócitos se multiplicam e exercem importantes funções. Secundários: onde os linfócitos se originam",
                alternativa3: "Primários: onde há produção de anticorpos. Secundários: onde há destruição de anticorpos",
                alternativa4: "Primários: onde há destruição de macrófagos. Secundários: onde há produção de antígenos"

            }, {
                id: 97,
                escolhida: "não",
                enunciado: "O que são linfonodos e onde estão localizados?",
                grupo: 2,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback97.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Pequenos órgãos encapsulados e esponjosos localizados ao longo das artérias",
                alternativa2: "Grandes órgãos encapsulados e esponjosos localizados ao longo das veias",
                alternativa3: "Pequenos órgãos encapsulados e esponjosos localizados ao longo dos vasos linfáticos",
                alternativa4: "Grandes órgãos encapsulados e esponjosos localizados nas valvas semilunares"

            }, {
                id: 98,
                escolhida: "não",
                enunciado: "Qual a diferença entre imunidade humoral e celular?",
                grupo: 2,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback98.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Humoral: realizada por anticorpos. Celular: realizada diretamente por linfócitos T citotóxicos",
                alternativa2: "Humoral: realizada diretamente por linfócitos T citotóxicos. Celular: realizada por anticorpos",
                alternativa3: "Humoral: realizada por alterações de humor. Celular: realizada por anticorpos",
                alternativa4: "Humoral: realizada por anticorpos. Celular: realizada diretamente por linfócitos B"

            }];

    }
}