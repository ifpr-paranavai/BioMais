import { Component, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { QuestaoParPage } from '../questao-par/questao-par.page';
import { IonicModule } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
  })

export class QuestoesMEG1 {
    questoesMultiplaEscolha=[];

    getQuestoes(){
        return this.questoesMultiplaEscolha;
    }

    constructor() {
        this.questoesMultiplaEscolha = [
            {
                id: 41,
                escolhida: "não",
                enunciado: "O sistema digestório é formado por diversos órgãos e estruturas que atuam juntos para conseguir retirar dos alimentos os nutrientes necessários para o nosso corpo. Contudo, cada um desses órgãos e estruturas são responsáveis por realizar funções específicas no sistema digestório. A respeito das funções desempenhadas no sistema digestório, determine todas as alternativas que julgar verdadeiras.",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/imgfeedback41.png",
                feedBackTexto: "Dentre as funções desempenhadas pelo sistema digestório, destacam-se: Ingestão e trituração do alimento e liberação de substâncias no trato gastrointestinal; Digestão química e mecânica;  Absorção de nutrientes, água e sais minerais; Eliminação de restos não aproveitados.",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Ingestão e trituração do alimento e liberação de substâncias no trato gastrointestinal",
                alternativa2: "Digestão química e mecânica",
                alternativa3: "Absorção de nutrientes, água e sais minerais",
                alternativa4: "Eliminação de restos não aproveitados",
                alternativa5: "Realização de hematose",
                alternativa6: "Produção de anticorpos"
            },
            {
                id: 42,
                escolhida: "não",
                enunciado: "Os seres humanos possuem quatro tipos de dentes. Os dentes localizados na frente da boca possuem formato que facilita cortar o alimento. Nas laterais destes, temos dentes pontiagudos que permitem com que o alimento seja “rasgado”. Os dentes localizados mais ao fundo da boca exercem uma função trituradora de alimentos. Sob esse aspecto, determine todas as alternativas corretas que correspondam à dentição humana.",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/imgfeedback42.png",
                feedBackTexto: "Os dentes localizados na frente da boca possuem formato que facilita cortar o alimento e são denominados incisivos. Nas laterais destes, temos dentes pontiagudos que permitem com que o alimento seja “rasgado”, os quais são denominados caninos. Os dentes localizados mais ao fundo da boca exercem uma função trituradora de alimentos, sendo que os dois primeiros após os dentes caninos são chamados pré-molares, enquanto os três últimos são os molares.",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Incisivo",
                alternativa2: "Canino",
                alternativa3: "Pré-molar",
                alternativa4: "Molar",
                alternativa5: "Decisivo",
                alternativa6: "Pré-canino"
            },
            {
                id: 43,
                escolhida: "não",
                enunciado: "As glândulas salivares maiores são exócrinas e responsáveis pela produção e secreção da saliva. Com base em seus conhecimentos, determine todas as alternativas que correspondam a estas glândulas e sua respectiva localização.",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/imgfeedback43.png",
                feedBackTexto: "As glândulas salivares maiores são exócrinas e responsáveis pela produção e secreção da saliva. São encontradas em três pares, sendo elas: Parótida: localizada entre o ângulo da mandíbula e à base do crânio. Submandibular: localizada na parte inferior da mandíbula. Sublingual: localizada no assoalho da boca.",
                alternativaCorreta: [1, 2, 3],
                alternativa1: "Parótida: localizada entre o ângulo da mandíbula e à base do crânio.",
                alternativa2: "Submandibular: localizada na parte inferior da mandíbula.",
                alternativa3: "Sublingual: localizada no assoalho da boca.",
                alternativa4: "Subtraqueal: localizada na parte posterior da traqueia.",
                alternativa5: "Ptialina: localizada nos palatos da cavidade bucal.",
                alternativa6: "Epimandibular: localizada na parte superior da mandíbula."
            },
            {
                id: 44,
                escolhida: "não",
                enunciado: "A Síndrome de Sjögren é uma doença autoimune que pode afetar as glândulas salivares causando boca seca. Sabemos que a saliva desempenha funções específicas na cavidade oral, importantes para o processo digestivo. Sob esse aspecto, pacientes com esta doença poderão apresentar dificuldade na execução de que processos na cavidade oral? Assinale todas as alternativas que julgar verdadeiras.",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/imgfeedback44.png",
                feedBackTexto: "A Síndrome de Sjögren é uma doença autoimune que pode afetar as glândulas salivares causando boca seca, devido à baixa produção de saliva. Tendo em vista as importantes funções da saliva para o sistema digestório, pacientes com esta síndrome poderão apresentar dificuldades em processos como: Umedecimento da cavidade oral e facilitação da deglutição; Início da digestão do amido por meio da ptialina; Umedecimento de alimentos secos; Neutralização de substâncias ácidas.",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Umedecimento da cavidade oral e facilitação da deglutição.",
                alternativa2: "Início da digestão do amido por meio da ptialina.",
                alternativa3: "Umedecimento de alimentos secos.",
                alternativa4: "Neutralização de substâncias ácidas.",
                alternativa5: "Digerir proteínas e lipídeos.",
                alternativa6: "Produzir hormônios para o controle da digestão."
            },
            {
                id: 45,
                escolhida: "não",
                enunciado: "Os sucos digestivos são substâncias secretadas por glândulas de vários órgãos do sistema digestivo que permitem a transformação de complexas moléculas alimentares em moléculas mais simples. Sob esse aspecto, assinale todas as alternativas que correspondam a estas substâncias.",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Saliva",
                alternativa2: "Suco gástrico",
                alternativa3: "Suco pancreático",
                alternativa4: "Suco entérico",
                alternativa5: "Suco hematopoiético",
                alternativa6: "Suor"
            }, {
                id: 51,
                escolhida: "não",
                enunciado: "No sistema digestório, após a passagem do alimento pelo esôfago por movimentos peristálticos, o bolo alimentar entra no estômago, passa por processos digestivos e é conduzido ao duodeno. No GIF, são representadas etapas desde a entrada do bolo alimentar no estômago até sua saída. Determine os fatores representados no GIF, respectivamente, e assinale a alternativa correspondente.",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif51m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/imgfeedback51.png",
                feedBackTexto: "A animação demonstra, respectivamente, a abertura da cárdia, peristaltismo do estômago, secreção de suco gástrico, digestão e abertura do esfíncter pilórico.",
                alternativaCorreta: [2],
                alternativa1: "Abertura do esfíncter pilórico, abertura da cárdia, digestão no estômago e no duodeno",
                alternativa2: "Abertura da cárdia, peristaltismo do estômago, secreção de suco gástrico, digestão e abertura do esfíncter pilórico",
                alternativa3: "Digestão, liberação de suco entérico, peristaltismo no estômago, secreção de bile e abertura da cárdia",
                alternativa4: "Digestão, formação de fezes, movimentos peristálticos no esôfago e eliminação de bolo fecal"

            }, {
                id: 52,
                escolhida: "não",
                enunciado: "O GIF abaixo representa o bolo alimentar sendo conduzido através de um trecho no corpo do esôfago. Este tipo de condução, permite que o alimento chegue ao estômago mesmo que uma pessoa esteja de cabeça para baixo. Determine que mecanismo possibilita a condução do alimento nesta estrutura e assinale a alternativa correta. ",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif52m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/imgfeedback52.png",
                feedBackTexto: "A animação demonstra o peristaltismo do esôfago, que consiste em movimentos involuntários propulsivos no trato gastrointestinal, ou seja, que conduzem o alimento para adiante dentro do sistema digestório. ",
                alternativaCorreta: [3],
                alternativa1: "Lei da gravidade.",
                alternativa2: "Contrações voluntárias no esôfago.",
                alternativa3: "Peristaltismo do esôfago.",
                alternativa4: "Refluxo gastroesofágico."

            }, {
                id: 53,
                escolhida: "não",
                enunciado: "O GIF abaixo ilustra a secreção de três substâncias no duodeno, a partir de regiões específicas. Tais secreções estão representadas por “pontinhos” verdes, amarelos e vermelhos. Outro processo que se observa é a conversão de moléculas maiores em moléculas menores. Sob esse aspecto, determine a alternativa que corresponda aos fatores representados pelo GIF.",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif53m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/imgfeedback53.png",
                feedBackTexto: "A animação demonstra, por meio dos “pontinhos” verdes, amarelos e vermelhos, a secreção de bile, suco pancreático e suco entérico, e digestão no intestino delgado.",
                alternativaCorreta: [3],
                alternativa1: "Secreção de suco gástrico, bile, pepsina e digestão no estômago.",
                alternativa2: "Secreção de ptialina, suco entérico e suco pancreático e digestão no intestino grosso.",
                alternativa3: "Secreção de bile, suco pancreático e suco entérico, e digestão no intestino delgado.",
                alternativa4: "Secreção de bile, suco pancreático, suco gástrico e digestão no estômago."

            }, {
                id: 54,
                escolhida: "não",
                enunciado: "O GIF demonstra o processo de ingestão do bolo alimentar, que passa pela boca, faringe e é conduzido para o esôfago, facilitado por uma estrutura presente no início da laringe, acima da glote. Contudo, algumas vezes, essa estrutura falha por algum motivo ocasionando o engasgo, causado pela obstrução da traqueia. Sob esse aspecto, determine a estrutura mencionada e sua função, assinalando a alternativa mais adequada.",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif54m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/imgfeedback54.png",
                feedBackTexto: "A animação demonstra o processo de ingestão do bolo alimentar, que passa pela boca, faringe e é conduzido para o esôfago, facilitado pela epiglote, cuja função é o fechamento da glote, evitando a entrada do bolo alimentar no sistema respiratório.",
                alternativaCorreta: [4],
                alternativa1: "Faringe: abertura da glote, evitando entrada de ar no esôfago.",
                alternativa2: "Laringe: fechamento do esôfago, evitando a passagem do alimento no sistema respiratório.",
                alternativa3: "Esfíncter: fechamento da glote, proporcionando a passagem de ar no sistema respiratório.",
                alternativa4: "Epiglote: fechamento da glote, evitando a entrada do bolo alimentar no sistema respiratório."

            }, {
                id: 55,
                escolhida: "não",
                enunciado: "O GIF abaixo ilustra de forma animada a ingestão de uma rosquinha, caindo diretamente no estômago (o que não ocorre dessa forma devido ao processo de mastigação e digestão inicial na boca). Porém, ao chegar no estômago, a animação demonstra que a rosquinha é imersa em um líquido, onde é parcialmente digerida. Assim, podemos afirmar que o líquido simulado na animação é um suco digestivo. Determine qual a nomenclatura estabelecida para esta substância e assinale a alternativa correta.",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif55m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/imgfeedback55.png",
                feedBackTexto: "A animação ilustra de forma animada a ingestão de uma rosquinha, caindo diretamente no estômago (o que não ocorre dessa forma devido ao processo de mastigação e digestão inicial na boca). Porém, ao chegar no estômago, a animação demonstra que a rosquinha é imersa em um líquido, onde é parcialmente digerida. Esse líquido remete ao suco gástrico, secreção liberada no estômago com fins de digestão.",
                alternativaCorreta: [1],
                alternativa1: "Suco gástrico",
                alternativa2: "Suco entérico",
                alternativa3: "Suco pancreático",
                alternativa4: "Suco salivar"

            }, {
                id: 61,
                escolhida: "não",
                enunciado: "A imagem abaixo representa uma estrutura pequena com o formato de uma pera, situada abaixo do fígado e ao lado direito do estômago. Trata-se de um tipo de saco onde é armazenado uma substância de grande importância para o processo digestivo. A respeito desta substância, determina a alternativa correta.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img61m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img61m5sd.png",
                feedBackTexto: "A bile é a substância armazenada na vesícula biliar (estrutura representada na imagem), que é secretada no duodeno para a emulsificação de lipídios.",
                alternativaCorreta: [1],
                alternativa1: "Substância armazenada na vesícula biliar e secretada no duodeno para a emulsificação de lipídios.",
                alternativa2: "Substância armazenada na vesícula biliar e secretada no pâncreas para a produção de toxinas.",
                alternativa3: "Substância armazenada no fígado e secretada no duodeno para a digestão de carboidratos.",
                alternativa4: "Substância armazenada no estômago e secretada no fígado para a emulsificação de lipídios."

            }, {
                id: 62,
                escolhida: "não",
                enunciado: "A estrutura representada abaixo corresponde a uma glândula que atua tanto de forma exócrina (produzindo suco pancreático, que contém enzimas digestivas) como endócrina (produzindo hormônios, como a insulina e glucagon). Sob este aspecto, determine a alternativa correta. ",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img62m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img62m5sd.png",
                feedBackTexto: "A imagem representa o pâncreas. Pacientes com problemas de metabolismo da glicose podem apresentar disfunção de secreção endócrina desta estrutura, uma vez que o pâncreas é responsável pela produção de insulina e glucagon, que desempenham papéis importantes na regulação da taxa de glicose no sangue.",
                alternativaCorreta: [3],
                alternativa1: "Esta estrutura produz os hormônios FSH, estrógeno e progestina.",
                alternativa2: "A secreção de bile é realizada por meio desta estrutura.",
                alternativa3: "Pacientes com problemas de metabolismo da glicose podem apresentar disfunção de secreção endócrina desta estrutura.",
                alternativa4: "Pacientes com disfunção desta estrutura geralmente apresentam icterícia e hepatite."

            }, {
                id: 63,
                escolhida: "não",
                enunciado: "O órgão representado na imagem produz e secreta substâncias que compõem o suco gástrico, sendo fundamental no processo digestivo. Dentre estas substâncias, podemos encontrar enzimas (responsáveis pela digestão de proteínas) e uma secreção ácida capaz de amolecer e esterilizar o bolo alimentar e ativar as enzimas para que efetivem suas funções digestivas. No que se refere às substâncias digestivas produzidas e secretadas por este órgão, assinale a alternativa correta.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img63m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img63m5sd.png",
                feedBackTexto: "A figura representa o estômago. Esse órgão produz as substâncias digestivas: pepsina, renina e ácido clorídrico.",
                alternativaCorreta: [2],
                alternativa1: "Produz as substâncias digestivas: maltase, sacarase e ptialina",
                alternativa2: "Produz as substâncias digestivas: pepsina, renina e ácido clorídrico",
                alternativa3: "Produz as substâncias digestivas: ácido clorídrico, lipase e ptialina",
                alternativa4: "Produz as substâncias digestivas: amilase, protease e pepsina"

            }, {
                id: 64,
                escolhida: "não",
                enunciado: "A estrutura representada na imagem tem como função exócrina a produção de suco pancreático que é conduzido até o duodeno, onde atua na digestão. Esta secreção contém enzimas para a digestão de moléculas de carboidratos, proteínas, gorduras e ácidos nucleicos. Sabendo disso, assinale a alternativa que corresponda corretamente às enzimas digestivas responsáveis pela digestão destas moléculas, produzidas por esta estrutura. ",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img64m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img64m5sd.png",
                feedBackTexto: "A figura representa o pâncreas. Essa glândula produz as substâncias digestivas: amilase pancreática, lipase, proteases e nucleases.",
                alternativaCorreta: [4],
                alternativa1: "Produz as substâncias digestivas: maltase, sacarase e lactase",
                alternativa2: "Produz as substâncias digestivas: suco gástrico e ptialina",
                alternativa3: "Produz as substâncias digestivas: pepsina, renina, sacarase e peptidase",
                alternativa4: "Produz as substâncias digestivas: amilase pancreática, lipase, proteases e nucleases"

            }, {
                id: 65,
                escolhida: "não",
                enunciado: "Na primeira porção da estrutura ilustrada ocorre a secreção de substâncias que compõem o suco entérico, contendo enzimas que complementam a ação das enzimas pancreáticas.  No suco entérico, as enzimas digerem dissacarídeos em monossacarídeos, peptidases em aminoácidos isolados e nucleotídeos em bases nitrogenadas, fosfatos e pentoses. Com base nestas informações, assinale a alternativa que corresponda corretamente às enzimas produzidas pela estrutura representada na imagem. ",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img65m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img65m5sd.png",
                feedBackTexto: "A imagem representa o intestino delgado. Este órgão produz as substâncias digestivas: maltase, lactase, sacarase, peptidases e nucleotidases.",
                alternativaCorreta: [1],
                alternativa1: "Produz as substâncias digestivas: maltase, lactase, sacarase, peptidases e nucleotidases",
                alternativa2: "Produz as substâncias digestivas: amilase pancreática, tripsina e nucleases",
                alternativa3: "Produz as substâncias digestivas: maltase, amilase, renina e ácido clorídrico",
                alternativa4: "Produz as substâncias digestivas: ptialina, pepsina e sacarase"

            }, {
                id: 66,
                escolhida: "não",
                enunciado: "A estrutura representada na imagem possui cerca de 1,5 m de comprimento e 6 cm de diâmetro e faz parte das porções finais do sistema digestivo, desempenhando funções importantes e possuindo características específicas. Nesse sentido, assinale a alternativa que contemple as características e funções deste órgão.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img66m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img66m5sd.png",
                feedBackTexto: "A imagem representa o intestino grosso. São características deste órgão a função de absorção de água e sais minerais, produção de muco e presença de bactérias.",
                alternativaCorreta: [3],
                alternativa1: "Ausência de bactérias, produção de muco e digestão de proteínas",
                alternativa2: "Absorção de proteínas, produção de bile e suco entérico",
                alternativa3: "Absorção de água e sais minerais, produção de muco e presença de bactérias",
                alternativa4: "Armazenamento de fezes, ausência de bactérias e produção de ptialina"

            }, {
                id: 67,
                escolhida: "não",
                enunciado: "A parede intestinal é composta por projeções da mucosa que se aparentam com “rugas” ou “pregas”. As células destas projeções, por sua vez, apresentam projeções microscópicas. Essas projeções, macroscópicas e microscópicas, possuem uma nomenclatura específica e desempenham uma função importante no processo digestivo. Com base neste contexto e em seus conhecimentos, determine a alternativa correta.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img67m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img67m5sd.png",
                feedBackTexto: "Essas projeções são chamadas vilosidades e microvilosidades, e são capazes de aumentar a superfície de contato intestinal, ampliando a eficiência da absorção.",
                alternativaCorreta: [1],
                alternativa1: "Essas projeções são chamadas vilosidades e microvilosidades, e são capazes de aumentar a superfície de contato intestinal, ampliando a eficiência da absorção.",
                alternativa2: "Essas projeções são úlceras duodenais, que consistem em más formações das paredes intestinais e que requerem tratamento médico.",
                alternativa3: "Essas projeções são vilosidades e átomos capazes de diminuir a superfície de contato e a eficiência da absorção intestinal.",
                alternativa4: "Essas projeções são pregas estomacais macroscópicas e microscópicas responsáveis pela liberação amilase salivar, diminuindo a eficiência da digestão."

            }, {
                id: 68,
                escolhida: "não",
                enunciado: "A digestão depende de fatores químicos importantes como, por exemplo, o pH, que consiste na escala dos níveis de acidez e alcalinidade de uma solução. Existem três locais do sistema digestório que ocorrem os processos de digestão, e em cada um deles o pH ideal para que estes processos ocorram é diferente. Com base neste contexto e em seus conhecimentos, determine a classificação do pH ideal para a digestão nas estruturas destacadas por cores na figura, na ordem de passagem do alimento pelo sistema digestivo.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img68m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img68m5sd.png",
                feedBackTexto: "A digestão depende de fatores químicos importantes como, por exemplo, o pH, que consiste na escala dos níveis de acidez e alcalinidade de uma solução. O pH ideal na boca é neutro, o pH ideal para o estômago é ácido e o pH ideal no intestino é básico.",
                alternativaCorreta: [2],
                alternativa1: "Ácido, ácido e neutro",
                alternativa2: "Neutro, ácido e básico",
                alternativa3: "Básico, neutro e ácido",
                alternativa4: "Neutro, básico e ácido"

            }, {
                id: 69,
                escolhida: "não",
                enunciado: "O processo da digestão é controlado pelo sistema nervoso autônomo e também por hormônios. Dentre os quatro hormônios principais envolvidos, três são produzidos pela estrutura representada na imagem. Com base em seus conhecimentos do controle da digestão, assinale a alternativa que corresponda aos hormônios produzidos pela estrutura representada na imagem.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img69m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img69m5sd.png",
                feedBackTexto: "O processo da digestão é controlado pelo sistema nervoso autônomo e também por hormônios. Dentre os quatro hormônios envolvidos, três são produzidos pelo intestino delgado, sendo eles: secretina, colecistoquinina e inibidor gástrico. O quarto hormônio principal envolvido no controle da digestão é a gastrina, que é produzido por células do estômago.",
                alternativaCorreta: [3],
                alternativa1: "Produz os hormônios: gastrina, FSH e testosterona",
                alternativa2: "Produz os hormônios: insulina e glucagon",
                alternativa3: "Produz os hormônios: secretina, colecistoquinina e inibidor gástrico",
                alternativa4: "Produz os hormônios: gastrina, colecistoquinina e insulina"

            }, {
                id: 70,
                escolhida: "não",
                enunciado: "A estrutura representada na imagem produz através de secreção exócrina dois hormônios. A ação destes hormônios resulta no aumento ou diminuição de açúcar no sangue. Com base neste contexto e em seus conhecimentos sobre os hormônios produzidos nesta estrutura e a função de cada um deles, assinale a alternativa correta.",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img70m5sd.png',
                feedBackImagem: "assets/imagens/feedback/img70m5sd.png",
                feedBackTexto: "A estrutura representada na imagem é o pâncreas, que tem como uma de suas funções a produção de dois hormônios por meio de secreção exócrina: a insulina e o glucagon. A insulina realiza a glicogênese (síntese de glicogênio) e entrada de glicose nas células. O glucagon realiza a glicogenólise (degradação/quebra do glicogênio em glicoses).",
                alternativaCorreta: [1],
                alternativa1: "A insulina realiza a glicogênese e entrada de glicose nas células. O glucagon realiza a glicogenólise",
                alternativa2: "A insulina realiza a glicogenólise. O FSH realiza a produção de suco pancreático",
                alternativa3: "O glucagon realiza a entrada de glicose nas células. A insulina realiza a produção de glicose",
                alternativa4: "A testosterona realiza a formação de glicose. A insulina realiza a glicogenólise"

            }, {
                id: 91,
                escolhida: "não",
                enunciado: "O processo da digestão é controlado pelo sistema nervoso autônomo e também por hormônios. Os hormônios envolvidos desempenham funções como o estímulo ou inibição da produção e secreção de substâncias, abertura ou fechamento de esfíncteres, aumento ou redução da motilidade dos órgãos, etc. Sob este contexto e com base em seus conhecimentos, assinale a alternativa que corresponda aos hormônios envolvidos no controle da digestão.",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "",
                feedBackTexto: "A Gastrina, Secretina, Colecistoquinina e Inibidor Gástrico são hormônios envolvidos no controle da digestão. A gastrina é responsável pelo aumento da motilidade gástrica, estímulo da secreção de suco gástrico (enzimas e ácido clorídrico) no estômago, relaxamento do esfíncter pilórico e contração do esfíncter esofágico inferior. A secretina é responsável por inibir a secreção de suco gástrico quando não há mais necessidade, a diminuição da motilidade intestinal, estimular a produção de bile, a secreção de bicarbonato (aumentando o pH e o tornando ideal para a digestão no intestino) pelo pâncreas e a secreção de suco entérico pelo intestino. A colecistoquinina estimula a secreção de bile e de enzimas do suco pancreático, e também a produção de outro hormônio, o inibidor gástrico, que é responsável pela diminuição das contrações da parede estomacal (para que a transição do quimo seja mais lenta e permaneça mais tempo no duodeno para a digestão).",
                alternativaCorreta: [1],
                alternativa1: "Gastrina, Secretina, Colecistoquinina e Inibidor Gástrico",
                alternativa2: "Gastrina, Secretina, Estrógeno e Progestina",
                alternativa3: "Colecistoquinina, Inibidor Gástrico, FSH e Testosterona",
                alternativa4: "Gastrina, Inibidor Gástrico, Secretina e Estrógeno"

            }, {
                id: 92,
                escolhida: "não",
                enunciado: "A gastrina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de alimentos no interior do estômago.  Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "",
                feedBackTexto: "A gastrina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de alimentos no interior do estômago. É produzida no estômago, estimula a secreção de suco gástrico, contrai o esfíncter esofágico inferior e relaxa o esfíncter pilórico.",
                alternativaCorreta: [3],
                alternativa1: "É produzida no estômago, estimula a secreção de suco gástrico e a eliminação de fezes",
                alternativa2: "É produzida no intestino grosso, contrai a cárdia e relaxa o esôfago",
                alternativa3: "É produzida no estômago, estimula a secreção de suco gástrico, contrai o esfíncter esofágico inferior e relaxa o esfíncter pilórico.",
                alternativa4: "É produzida no pâncreas, estimula a secreção de ptialina e inibe a secreção de bile."

            }, {
                id: 93,
                escolhida: "não",
                enunciado: "A secretina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela acidez do quimo presente no interior do intestino delgado. Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "",
                feedBackTexto: "A secretina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela acidez do quimo presente no interior do intestino delgado. É produzida no intestino delgado, inibe a secreção de suco gástrico e estimula a produção de bile e a secreção de suco pancreático (composto por bicarbonato de sódio, reduzindo a acidez do quimo) e suco entérico.",
                alternativaCorreta: [1],
                alternativa1: "É produzida no intestino delgado, inibe a secreção de suco gástrico e estimula a produção de bile e a secreção de suco pancreático e suco entérico",
                alternativa2: "É produzida no esôfago, inibe a produção de suco gástrico e estimula a produção de suco pancreático",
                alternativa3: "É produzida no pâncreas, inibe a secreção de bile e estimula a produção do hormônio FSH",
                alternativa4: "É produzida no intestino grosso, estimula a secreção de suco gástrico e inibe a formação do quimo"

            }, {
                id: 94,
                escolhida: "não",
                enunciado: "A colecistoquinina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de peptonas e lipídios no intestino delgado. Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "",
                feedBackTexto: "A colecistoquinina é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de peptonas e lipídios no intestino delgado. É produzida no intestino delgado, estimula a secreção de bile e de enzimas do suco pancreático no duodeno. ",
                alternativaCorreta: [2],
                alternativa1: "É produzida no pâncreas, inibe os movimentos peristálticos no estômago e estimula o peristaltismo no esôfago",
                alternativa2: "É produzida no intestino delgado, estimula a secreção de bile e de enzimas do suco pancreático no duodeno",
                alternativa3: "É produzida no fígado, estimula a secreção de ptialina e promove a digestão de lipídeos de cadeia curta na boca",
                alternativa4: "É produzida no estômago, secretada pelas glândulas salivares e promove  digestão de amido"

            }, {
                id: 95,
                escolhida: "não",
                enunciado: "O inibidor gástrico é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de carboidratos e lipídios no intestino delgado. Com relação ao seu local de produção e seus efeitos, assinale a alternativa correta.",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback95.png",
                feedBackTexto: "O inibidor gástrico é um hormônio envolvido no controle da digestão e sua secreção é estimulada pela presença de carboidratos e lipídios no intestino delgado. É produzido no intestino delgado, sendo responsável por diminui as contrações estomacais (para que a transição do quimo seja mais lenta e permaneça mais tempo no duodeno para a digestão).",
                alternativaCorreta: [4],
                alternativa1: "Produzido no estômago, promove contrações intestinais",
                alternativa2: "Produzido no intestino grosso, promove secreção de suco gástrico",
                alternativa3: "Produzido no esôfago, promove a formação de quimo",
                alternativa4: "Produzido no intestino delgado, diminui as contrações estomacais"

            }, {
                id: 99,
                escolhida: "não",
                enunciado: "Qual a diferença entre sístole e diástole?",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback99.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Sístole: relaxamento de uma câmara cardíaca. Diástole: contração de uma câmara cardíaca",
                alternativa2: "Sístole: contração de uma câmara cardíaca. Diástole: relaxamento de uma câmara cardíaca",
                alternativa3: "Sístole: abertura das valvas atrioventriculares. Diástole: fechamento das valvas atrioventriculares",
                alternativa4: "Sístole: abertura das valvas semilunares. Diástole: fechamento das valvas semilunares"

            }, {
                id: 100,
                escolhida: "não",
                enunciado: "Qual é a cavidade com parede mais espessa do coração e qual o motivo desta característica?",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback100.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Ventrículo direito, pois precisa realizar contrações mais fortes para levar sangue aos pulmões",
                alternativa2: "Átrio direito, pois precisa realizar contrações mais fortes para levar sangue ao ventrículo direito",
                alternativa3: "Átrio esquerdo, pois precisa realizar contrações mais fortes para levar sangue ao ventrículo esquerdo",
                alternativa4: "Ventrículo esquerdo, pois precisa realizar contrações mais fortes para distribuir o sangue para os tecidos do corpo"

            }, {
                id: 101,
                escolhida: "não",
                enunciado: "O intestino delgado começa no esfíncter pilórico, que o comunica com o estômago, e termina na válvula íleocecal, que se comunica com o intestino grosso. Se esticássemos o intestino delgado de um ser humano em linha reta e o medíssemos, que medida teríamos, aproximadamente? Assinale a alternativa correta",
                grupo: 1,
                modelo: 6,
                imagem: 'assets/imagens/questoes/extra1m5sd.png',
                feedBackImagem: "assets/imagens/feedback/extra1m5sd.png",
                feedBackTexto: "O intestino delgado começa no esfíncter pilórico, que o comunica com o estômago, e termina na válvula íleocecal, que se comunica com o intestino grosso. Se esticássemos o intestino delgado de um ser humano em linha reta e o medíssemos, ele totalizaria cerca de sete metros.",
                alternativaCorreta: [2],
                alternativa1: "2 metros",
                alternativa2: "7 metros",
                alternativa3: "15 metros",
                alternativa4: "20 metros"

            }, {
                id: 102,
                escolhida: "não",
                enunciado: "Diariamente, em condições normais, produzimos entre 1000 a 2000 ml de saliva por dia. Essa secreção é muito importante no processo digestivo, e atua no pH neutro da boca. Sob esse aspecto, com base nas informações e em seus conhecimentos, assinale a alternativa que melhor defina a saliva.",
                grupo: 1,
                modelo: 6,
                imagem: 'assets/imagens/questoes/extra2m5sd.png',
                feedBackImagem: "assets/imagens/feedback/extra2m5sd.png",
                feedBackTexto: "A saliva é um fluido transparente e viscoso de pH entre 6,8 e 7,2 que é produzido pelas glândulas salivares, mantendo a boca e os lábios constantemente umedecidos. Contém ptialina, um tipo de enzima que inicia a digestão de amido e glicogênio.",
                alternativaCorreta: [1],
                alternativa1: "Fluido transparente e viscoso de pH entre 6,8 e 7,2 que é produzido pelas glândulas salivares, mantendo a boca e os lábios constantemente umedecidos. Contém ptialina, um tipo de enzima que inicia a digestão de amido e glicogênio.",
                alternativa2: "Fluido transparente e líquido de pH entre 3,2 e 4,2 que é produzido pelas glândulas pituitárias, mantendo a boca e os lábios constantemente umedecidos. Contém pepsina, um tipo de enzima que inicia a digestão de lipídios.",
                alternativa3: "Fluido esverdeado e viscoso de pH entre 10,0 a 12,2 que é produzido pelas glândulas salivares, mantendo o esôfago umedecido. Contém ptialina, um tipo de enzima que inicia a digestão de proteínas.",
                alternativa4: "Fluido aquoso e transparente de pH entre 1,0 e 2,4 que é produzido pela glândula suprarrenal, mantendo a boca umedecida. Contém ácido clorídrico, um tipo de enzima que inicia a digestão de carboidratos simples."

            }, {
                id: 103,
                escolhida: "não",
                enunciado: "O refluxo gastroesofágico é uma patologia caracterizada pelo retorno do conteúdo gástrico para o esôfago e, muitas vezes, para outras estruturas adjacentes. Com base em seus conhecimentos, assinale a alternativa que corresponda ao mecanismo patológico relacionado ao refluxo gastroesofágico.",
                grupo: 1,
                modelo: 6,
                imagem: 'assets/imagens/questoes/extra3m5sd.png',
                feedBackImagem: "assets/imagens/feedback/extra3m5sd.png",
                feedBackTexto: "O refluxo gastroesofágico é uma patologia caracterizada pelo retorno do conteúdo gástrico para o esôfago e, muitas vezes, para outras estruturas adjacentes. Isso ocorre quando o esfíncter esofágico inferior não se fecha corretamente, levando o conteúdo estomacal a retornar para o esôfago. ",
                alternativaCorreta: [1],
                alternativa1: "Quando o esfíncter esofágico inferior não se fecha corretamente, o conteúdo estomacal pode retornar para o esôfago.",
                alternativa2: "Quando o esfíncter pilórico não se fecha corretamente, o conteúdo estomacal pode retornar para o esôfago.",
                alternativa3: "Quando o esfíncter esofágico superior não se fecha corretamente, o conteúdo estomacal pode retornar para o estômago.",
                alternativa4: "Quando o esfíncter pilórico não se fecha corretamente, o conteúdo estomacal pode retornar para o estômago."

            }, {
                id: 104,
                escolhida: "não",
                enunciado: "O engasgo é uma manifestação do organismo quando um alimento ou objeto toma um caminho errado em nosso corpo. Sob esse aspecto, responda como ocorre o engasgo e por que tossimos quando engasgamos, assinalando a alternativa correspondente.",
                grupo: 1,
                modelo: 6,
                imagem: 'assets/imagens/questoes/extra4m5sd.png',
                feedBackImagem: "assets/imagens/feedback/extra4m5sd.png",
                feedBackTexto: "O engasgo é uma manifestação do organismo quando um alimento ou objeto toma um caminho errado em nosso corpo, ocorrendo quando o alimento entra nas vias respiratórias, de modo que a tosse é um reflexo para expulsar o alimento.",
                alternativaCorreta: [2],
                alternativa1: "Ocorre quando o alimento permanece no esôfago e tossimos para “empurrá-lo” para o estômago.",
                alternativa2: "Ocorre quando o alimento entra nas vias respiratórias e a tosse é um reflexo para expulsar o alimento.",
                alternativa3: "Ocorre quando o alimento entra na nasofaringe e tossimos voluntariamente para que o alimento retorne para a traqueia.",
                alternativa4: "Ocorre quando o esfíncter esofágico inferior não se abre e a tosse retorna o alimento ao esôfago."

            }, {
                id: 105,
                escolhida: "não",
                enunciado: "Os dentes são estruturas acessórias ao sistema digestório e tem como função cortar, perfurar, prender e triturar os alimentos. A estrutura dentária é composta por três camadas, conforme indicado na imagem. Sob esse aspecto, com base no contexto e em seus conhecimentos, analise a figura e assinale a alternativa correspondente às camadas I, II e III, respectivamente.",
                grupo: 1,
                modelo: 6,
                imagem: 'assets/imagens/questoes/extra5m5sd.png',
                feedBackImagem: "assets/imagens/feedback/extra5m5sd.png",
                feedBackTexto: "A estrutura dentária é composta por três camadas: esmalte (indicado em I), dentina (indicado em II) e polpa (indicado em III).",
                alternativaCorreta: [1],
                alternativa1: "Esmalte, dentina e polpa.",
                alternativa2: "Polpa, esmalte e dentina.",
                alternativa3: "Dentina, polpa e esmalte.",
                alternativa4: "Esmalte, polpa e dentina."

            }, {
                id: 116,
                escolhida: "não",
                enunciado: "Ao nos alimentarmos, os alimentos precisam da força da gravidade para serem conduzidos ao estômago ou isso é possível mesmo de cabeça para baixo? Com base em seus conhecimentos, assinale a alternativa correspondente.",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/imgfeedback116.png",
                feedBackTexto: "Ao nos alimentarmos, os alimentos não dependem da ação da gravidade, pois o peristaltismo do esôfago conduz a comida ao estômago. Por isso, se engolirmos um alimento de “ponta-cabeça”, ele sofrerá propulsão pelo esôfago até o estômago. ",
                alternativaCorreta: [2],
                alternativa1: "Precisam da gravidade, pois o estômago se localiza na porção inferior ao esôfago.",
                alternativa2: "Não precisam da gravidade, pois o peristaltismo do esôfago conduz a comida ao estômago.",
                alternativa3: "Precisam da gravidade, pois o esôfago não realiza nenhum movimento.",
                alternativa4: "Não precisam da gravidade, pois o peristaltismo do estômago “puxa” a comida do esôfago."

            }
        
        
        ];

    }
}