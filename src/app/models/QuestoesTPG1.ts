import { Component, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha.page';
import { QuestaoParPage } from '../questao-par/questao-par.page';
import { IonicModule } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
  })

export class QuestoesTPG1 {
    public questoesToquePares;
    
    getQuestoes(){
        return this.questoesToquePares;
    }

    constructor() {
        this.questoesToquePares = [{
            escolhida: "não",
            id: 1,
            enunciado: "As glândulas salivares são responsáveis por produzir a saliva, uma secreção que atua no processo de digestão e na garantia da saúde bucal. Dentre essas glândulas, algumas são maiores e outras menores. Os três principais pares de glândulas maiores estão representados na figura abaixo e sua nomenclatura remete à região em que elas se encontram na cavidade bucal. De acordo com os seus conhecimentos sobre o assunto e com base nas indicações da imagem, determine quais são estas glândulas por meio de toques nos pares.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img1m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img1m1sd.png",
            feedBackTexto: "As glândulas salivares são responsáveis por produzir a saliva, uma secreção que atua no processo de digestão e na garantia da saúde bucal. Na imagem, encontram-se representadas as glândulas salivares maiores, que ocorrem em pares no corpo humano e são responsáveis pela maior parte da produção de saliva. São elas, as glândulas parótidas (representada em I), glândulas submandibulares (representada em II) e glândulas sublinguais (representada em III). ",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glândula Parótida',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glândula Sublingual',
                    imagem: '',
                    idPar: 3
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glândula Submandibular',
                    imagem: '',
                    idPar: 2
                }
            ]
        }, {
            escolhida: "não",
            id: 2,
            enunciado: "Durante a alimentação, o processo de digestão envolve estruturas distintas presentes ao longo do trato digestório. A figura abaixo representa os primeiros momentos deste processo. Na estrutura I, ocorre a desintegração mecânica dos alimentos, o início da digestão química e a deglutição. Na estrutura II, ocorre a passagem do bolo alimentar para a estrutura III, que através de peristaltismo levará o alimento ao estômago. Baseado nessas informações, determine as estruturas indicadas na imagem, selecionando os respectivos pares.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img2m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img2m1sd.png",
            feedBackTexto: "Na boca (estrutura I), ocorre a desintegração mecânica dos alimentos (por meio da mastigação), o início da digestão química e a deglutição. Na faringe (estrutura II), ocorre a passagem do bolo alimentar para o esôfago (estrutura III), que através de peristaltismo (movimentos involuntários) levará o alimento ao estômago.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Boca',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Faringe',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esôfago',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 3,
            enunciado: "Na figura abaixo estão representadas estruturas consideradas anexas ao trato gastrointestinal, pois não entram em contato direto com o alimento ingerido. A estrutura I é a maior glândula do corpo humano, cuja principal função digestiva é a produção de bile, enquanto a estrutura II armazena esta substância. A estrutura III é responsável pela produção de substâncias como o suco pancreático, a insulina e o glucagon. Com base nas informações, determine quais são estas estruturas indicadas na imagem, selecionando os respectivos pares.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img3m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img3m1sd.png",
            feedBackTexto: "As estruturas representadas na imagem consistem em órgãos anexos ao sistema digestório. O fígado (estrutura I) é a maior glândula do corpo humano, cuja principal função digestiva é a produção de bile, enquanto a vesícula biliar (estrutura II) armazena esta substância. O pâncreas (estrutura III) é responsável pela produção de substâncias como o suco pancreático (auxiliador na digestão), a insulina e o glucagon (hormônios envolvidos na regulação da taxa de glicose no sangue).",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fígado',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Vesícula biliar',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Pâncreas',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 4,
            enunciado: "O trato digestório e os órgãos anexos constituem o sistema digestório, que é um tubo oco que se estende da cavidade bucal ao ânus. Durante a alimentação, o alimento sofre o processo de mastigação e início da digestão na boca, deglutição, passagem da faringe ao esôfago e, por meio do peristaltismo, o alimento é levado à estrutura I, onde o bolo alimentar se converte em quimo por meio da digestão. Em seguida, na estrutura II o quimo passa por outro processo digestivo e se torna quilo. Na estrutura III, após a absorção de água e nutrientes restantes, o quilo é convertido em bolo fecal que será eliminado pelo ânus. De acordo com as informações, determine as estruturas I, II e III, selecionando os respectivos pares propostos nas alternativas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img4m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img4m1sd.png",
            feedBackTexto: "Os órgãos representados na figura são locais fundamentais para o processo de digestão. No estômago (estrutura I), o bolo alimentar (alimento mastigado com saliva) se converte em quimo por meio da ação do suco gástrico no processo de digestão. Em seguida, o quimo é conduzido ao intestino delgado (estrutura II) o quimo passa por outro processo digestivo, pela ação do suco entérico, suco pancreático e bile, e torna-se quilo, onde se inicia o processo de absorção de nutrientes. No intestino grosso (estrutura III), após a absorção de água e nutrientes restantes, o quilo é convertido em bolo fecal que será eliminado pelo ânus.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Estômago',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Intestino Grosso',
                    imagem: '',
                    idPar: 3
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Intestino Delgado ',
                    imagem: '',
                    idPar: 2
                }
            ]
        }, {
            escolhida: "não",
            id: 5,
            enunciado: "As estruturas indicadas na imagem são importantes no trato gastrointestinal pois desempenham funções específicas, necessárias durante o processo digestivo. A estrutura I é responsável pela defecação. II produz através de uma secreção exócrina o suco pancreático que é liberado no duodeno e por secreção endócrina a insulina e glucagon, que entram no sangue. III realiza a quimificação do bolo alimentar, digerindo grande parte das proteínas e pequena quantidade de gordura. Sob esse aspecto, determine quais são essas estruturas, selecionando os pares propostos nas alternativas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img5m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img5m1sd.png",
            feedBackTexto: "O ânus (estrutura I) é responsável pela defecação, ou seja, eliminação das fezes. O pâncreas (estrutura II) produz através de uma secreção exócrina (ou seja, que é secretada em superfície livre no organismo por meio de ductos) o suco pancreático que é liberado no duodeno e por secreção endócrina a insulina e glucagon, que entram na corrente sanguínea. O estômago (estrutura III) realiza a quimificação do bolo alimentar, digerindo grande parte das proteínas e pequena quantidade de gordura.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ânus',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Pâncreas',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Estômago',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 6,
            enunciado: "A deglutição é o ato de engolir alimentos e ocorre em uma sequência de fatos, envolvendo estruturas presentes na cavidade oral. A figura abaixo representa algumas dessas estruturas. Neste processo, o bolo alimentar é colocado e pressionado entre a parte superior da língua com a estrutura I.  A estrutura II serve como sinalizador da passagem de alimento e a estrutura III se eleva, fechando a ligação com o nariz e facilitando sua passagem através da faringe para o esôfago. Com base nas informações e em seus conhecimentos, determine quais são as estruturas I, II e III, formando os respectivos pares com as alternativas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img6m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img6m1sd.png",
            feedBackTexto: "O alimento, ao ser mastigado e misturado com a saliva, se torna o bolo alimentar, que para a deglutição (ato de engolir) é colocado e pressionado entre a parte superior da língua e o palato duro (estrutura I).  A úvula (estrutura II) serve como sinalizador da passagem de alimento e o palato mole (estrutura III) se eleva, fechando a ligação com o nariz e facilitando sua passagem através da faringe para o esôfago.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Palato Duro',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Palato Mole',
                    imagem: '',
                    idPar: 3
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Úvula',
                    imagem: '',
                    idPar: 2
                }
            ]
        }, {
            escolhida: "não",
            id: 7,
            enunciado: "Na imagem abaixo estão identificadas algumas estruturas presentes na cavidade oral humana. I é uma estrutura que auxilia no processo de mastigação (guiando e moldando o alimento), deglutição (direcionando o alimento para ser engolido) e está relacionada ao paladar (percepção de sabores) e à fala. As estruturas representadas por II são ricas em linfócitos que auxiliam na defesa do organismo contra microrganismos causadores de doenças. A estrutura III é constituída por cartilagem e sua principal função é evitar a entrada de alimentos do sistema digestório no aparelho respiratório. A partir das informações e de seus conhecimentos, determine as estruturas I, II e III, formando pares com as alternativas. ",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img7m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img7m1sd.png",
            feedBackTexto: "A língua (estrutura I) é uma estrutura que auxilia no processo de mastigação (guiando e moldando o alimento), deglutição (direcionando o alimento para ser engolido) e está relacionada ao paladar (percepção de sabores) e à fala. As tonsilas, representadas por II são estruturas ricas em linfócitos que auxiliam na defesa do organismo contra microrganismos causadores de doenças. A epiglote (estrutura III) é constituída por cartilagem e sua principal função é evitar a entrada de alimentos do sistema digestório no aparelho respiratório, por meio de um mecanismo de “tampa” que “abre e fecha” a glote.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Língua',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Tonsilas',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Epiglote',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 8,
            enunciado: "Os mamíferos têm distintos tipos de dentes adaptados às diferentes formas de alimentação. Nos seres humanos, podemos encontrar dentes incisivos (cuja função é cortar alimentos), caninos (rasgar ou perfurar alimentos), pré-molares e molares (cortar, esmagar e triturar). Três deles estão indicados na figura abaixo. Como base nas informações e em seus conhecimentos, determine os tipos de dentes I, II e III representados na figura, selecionando os respectivos pares.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img8m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img8m1sd.png",
            feedBackTexto: "Nos seres humanos, podemos encontrar dentes incisivos (representados em I), cuja função é cortar alimentos; dentes caninos, que atuam ao rasgar ou perfurar alimentos (não indicados na figura, são as “presas” ao lado dos dentes incisivos); pré-molares (representados por III) e molares (representados por II), cujas funções são cortar, esmagar e triturar os alimentos.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Incisivos',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Molares',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Pré-Molares',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 9,
            enunciado: "A estrutura destacada em cores na figura se refere à faringe, estrutura localizada na parte posterior às cavidades do nariz e da boca, estendendo-se para baixo atrás da laringe. A faringe pode ser dividida em três partes anatômicas. A primeira exerce função exclusivamente respiratória, enquanto a segunda e a terceira exercem tanto função respiratória como digestória, por compartilharem passagem comum para o ar e alimento. Com base nas informações e em seus conhecimentos, determine as partes anatômicas indicadas na figura, formando pares com as alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img9m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img9m1sd.png",
            feedBackTexto: "A faringe pode ser dividida em três partes anatômicas: A primeira, destacada em verde, exerce função exclusivamente respiratória e é chamada de nasofaringe. A segunda, destacada em azul, é chamada orofaringe. A terceira, destacada em lilás, é chamada hipofaringe ou laringofaringe. A orofaringe e a hipofaringe exercem tanto função respiratória como digestória, por compartilharem passagem comum para o ar e alimento.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Nasofaringe',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Orofaringe',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Hipofaringe',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 10,
            enunciado: "O refluxo é um problema digestivo que se caracteriza pelo retorno do conteúdo gástrico para o esôfago e adjacências. Esse problema é ocasionado, sobretudo, devido ao mau fechamento dos esfíncteres esofágicos. Assim, as secreções refluem do estômago para o esôfago (refluxo gastresofágico) e do esôfago para estruturas como nariz, seios da face, garganta e ouvidos (refluxo laringofaríngeo). Até chegar à faringe, o conteúdo refluído passa pelas estruturas I, II e III, respectivamente, apresentadas na figura. Determine quais são tais estruturas, formando pares com as alternativas propostas.  ",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img10m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img10m1sd.png",
            feedBackTexto: "O refluxo é um problema digestivo onde as secreções retornam do estômago para o esôfago (refluxo gastresofágico) e do esôfago para estruturas como nariz, seios da face, garganta e ouvidos (refluxo laringofaríngeo), ocasionado por um mal funcionamento dos esfíncteres esofágicos. Até chegar à faringe, o conteúdo refluído que sai do estômago passa pelo esfíncter esofágico inferior (estrutura I), corpo do esôfago (estrutura II) e esfíncter esofágico superior (estrutura III).",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Corpo do Esôfago',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Esófágico Superior',
                    imagem: '',
                    idPar: 3
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Esofágico Inferior',
                    imagem: '',
                    idPar: 1
                }
            ]
        }, {
            escolhida: "não",
            id: 11,
            enunciado: "Após consultar um médico e receber o diagnóstico, um paciente é informado que possui gastrite autoimune, doença que provoca a destruição das células gástricas presentes nas regiões do fundo e corpo do estômago, poupando apenas a região do antro. Com base nas indicações I, II e III da figura e em seus conhecimentos sobre o assunto, determine as três regiões presentes no estômago, selecionando os pares nas alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img11m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img11m1sd.png",
            feedBackTexto: "A gastrite autoimune é um tipo de doença que provoca a destruição das células gástricas presentes nas regiões do fundo (parte I) e corpo (parte II) do estômago, poupando apenas a região do antro (parte III).",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fundo',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Corpo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Antro',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 12,
            enunciado: "Na porção inicial e final do estômago, são encontradas duas estruturas denominadas esfíncteres. O esfíncter é geralmente formado por um músculo de fibras circulares concêntricas, que controla o grau de amplitude de um determinado orifício. Com base nestas informações e em seus conhecimentos, determine as estruturas I, II e III selecionando os pares nas alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img12m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img12m1sd2.png",
            feedBackTexto: "Os esfíncteres são estruturas geralmente formado por um músculo de fibras circulares concêntricas, que controla o grau de amplitude de um determinado orifício. Na porção inicial do estômago é encontrado o esfíncter esofágico inferior (representado por I), abertura por onde o bolo alimentar entra no corpo do estômago (representado por II). Ao ser digerido, o bolo alimentar passa a se chamar quimo e é conduzido ao duodeno pela abertura denominada esfíncter pilórico (representado por III). ",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Esofágico Inferior',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Corpo do Estômago',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Pilórico',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 13,
            enunciado: "O intestino delgado é um longo tubo encontrado no sistema digestório, sendo responsável pela maior parte da digestão e absorção de nutrientes da nossa alimentação. Sobre essa parte do sistema digestório, selecione os pares nas alternativas que indicam corretamente o nome das três porções do intestino delgado.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img13m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img13m1sd.png",
            feedBackTexto: "O intestino delgado é um longo tubo encontrado no sistema digestório, dividido em três partes. A porção inicial corresponde aos primeiros 25 centímetros do intestino e é chamada de duodeno (representado por I); a segunda porção do intestino corresponde de três a cinco metros de comprimento e é denominada jejuno (representada por II) e a terceira e última porção é denominada íleo (representada por III) e mede cerca de um a 1,5 metros. ",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Duodeno',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Jejuno',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Íleo',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 14,
            enunciado: "O intestino grosso consiste na parte final do tubo digestivo e tem como função principal a absorção de água e sais minerais determinando, assim, a consistência do bolo fecal. O intestino grosso é dividido anatômica e funcionalmente em três partes: ceco, cólon e reto. Na figura abaixo, as indicações I, II e III consistem nas partes do colón, além da porção sigmóide, que não se encontra identificada. Com base na figura e em seus conhecimentos, determine tais estruturas através da formação de pares com as alternativas propostas.  ",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img14m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img14m1sd.png",
            feedBackTexto: "O intestino grosso é dividido anatômica e funcionalmente em três partes: ceco, cólon e reto. O cólon, por sua vez, é segmentado em quatro frações:  O cólon ascendente (representado por I), o cólon transverso (representado por II), o cólon descendente (representado por III) e o cólon sigmóide (não indicado, mas localizado entre o cólon descendente e o reto).",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Ascendente',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Transverso',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Descendente',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 15,
            enunciado: "O intestino grosso consiste na parte final do tubo digestivo e tem como função principal a absorção de água e sais minerais. Na figura abaixo, estão representadas estruturas do intestino grosso sendo I um tubo vermiforme que parte da primeira parte do intestino grosso, II a porção que recebe o quilo do intestino delgado e III a porção final do cólon. Baseado nas imagens e em seus conhecimentos, determine a nomenclatura das estruturas indicadas, formando pares com as alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img15m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img15m1sd.png",
            feedBackTexto: "Na figura, estão representadas estruturas do intestino grosso sendo que o apêndice (representado por I) consiste em um tubo vermiforme que parte da primeira parte do intestino grosso. O ceco (representado por II) é a porção que recebe o quilo do intestino delgado e o cólon sigmóide (representado por III) a porção final do cólon.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Apêndice',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ceco',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Sigmóide',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 16,
            enunciado: "Na figura abaixo, encontram-se indicadas estruturas presentes no intestino grosso, de modo que I corresponde à sua última porção, responsável pela eliminação das fezes pelo esfíncter anal, II indica a segunda porção do cólon e III se refere à última porção do cólon.  Baseado nas informações e em seus conhecimentos, determine a nomenclatura das estruturas indicadas, formando pares com as alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img16m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img16m1sd.png",
            feedBackTexto: "O intestino grosso é dividido anatômica e funcionalmente em três partes: ceco, cólon e reto. O reto (representado em I) corresponde à sua última porção do intestino grosso, responsável pela eliminação das fezes pelo esfíncter anal. O cólon é dividido anatomicamente em cólon ascendente, transverso, descendente e sigmóide, de modo que a estrutura II consiste no cólon transverso, que indica a segunda porção do cólon, e III se refere ao cólon descendente, que é a última porção do cólon.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Reto',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Transverso',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Sigmóide',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 17,
            enunciado: "A figura abaixo apresenta uma estrutura diretamente relacionada à bile, secreção produzida pelo fígado. Em I a secreção é recebida e direcionada à II, que então poderá seguir dois caminhos: a estrutura III onde será armazenada, ou diretamente ao duodeno para auxiliar a digestão de lipídios. Com base nas informações e em seus conhecimentos, determine as partes I, II e III da estrutura representada, formando pares com as alternativas propostas. ",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img17m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img17m1sd.png",
            feedBackTexto: "A estrutura representada na imagem refere-se à vesícula biliar e seus ductos. Nos ductos hepáticos (representados por I), a secreção (bile) é recebida e direcionada ao colédoco (representado por II), que então poderá seguir dois caminhos: a vesícula (representada por III) onde será armazenada, ou diretamente ao duodeno para auxiliar a digestão de lipídios.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Vesícula',
                    imagem: '',
                    idPar: 3
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ductos Hepáticos',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Colédoco',
                    imagem: '',
                    idPar: 2
                }
            ]
        }, {
            escolhida: "não",
            id: 18,
            enunciado: "O suco pancreático é uma substância de grande importância na digestão de proteínas, carboidratos, triglicerídeos e ácidos nucléicos e é produzido pela estrutura I indicada na figura. A estrutura II é conectada ao ducto colédoco da vesícula biliar e tem como função conduzir a secreção à estrutura III, onde ocorre, de fato, a digestão dos macronutrientes citados. Com base nas informações e em seus conhecimentos, determine as estruturas I, II e III através da formação de pares com as alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img18m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img18m1sd.png",
            feedBackTexto: "O suco pancreático é uma substância de grande importância na digestão de proteínas, carboidratos, triglicerídeos e ácidos nucléicos e é produzido pelo pâncreas (estrutura I). Os ductos pancreáticos (representados por II) se conectam ao ducto colédoco da vesícula biliar e tem como função conduzir a secreção ao duodeno (estrutura III), onde ocorre, de fato, a digestão dos macronutrientes citados.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Pâncreas',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ductos Pancreáticos',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Duodeno',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 19,
            enunciado: "O paladar permite-nos reconhecer o gosto dos alimentos, bem como a sua textura. As estruturas que desempenham essas funções, encontradas principalmente na língua, são as saliências representadas em I na figura. Nessas saliências, situam-se as estruturas representadas por II, constituídas principalmente por células sensoriais quimiorreceptoras, que partem da abertura representada por III. Com base no enunciado e em seus conhecimentos, determine quais são as estruturas I, II e III, formando pares com as alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img19m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img19m1sd.png",
            feedBackTexto: "O paladar permite-nos reconhecer o gosto dos alimentos, bem como a sua textura. As estruturas que desempenham essas funções, encontradas principalmente na língua, são as papilas gustativas (representadas em I). Nessas saliências, situam-se os botões gustativos (representados por II), constituídas principalmente por células sensoriais quimiorreceptoras, que partem de aberturas denominadas poros gustativos (representados por III).",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Papila gustativa',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Botão gustativo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Poro gustativo',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 20,
            enunciado: "Durante a digestão do quimo na primeira porção do intestino delgado, secreções são lançadas nesta região a fim de promover a digestão química. Na figura, encontram-se indicadas as estruturas que produzem estas substâncias. Assim, a secreção produzida em I tem como função a digestão de lipídeos, em II a digestão de proteínas, carboidratos, triglicerídeos e ácidos nucleicos e a secreção produzida em III completa a digestão de carboidratos, proteínas e lipídeos. Com base nas informações e em seus conhecimentos, determine as substâncias produzidas nas estruturas I, II e III por meio da seleção de pares nas alternativas propostas.",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img20m1sd.png',
            feedBackImagem: "assets/imagens/feedback/img20m1sd.png",
            feedBackTexto: "A secreção produzida no fígado (estrutura I) é denominada bile tem como função, sobretudo, a digestão de lipídeos. No pâncreas (estrutura II), o suco pancreático é produzido, sendo responsável pela digestão de proteínas, carboidratos, triglicerídeos e ácidos nucleicos. A secreção produzida pelo duodeno (estrutura III) trata-se do suco entérico, que completa a digestão de carboidratos, proteínas e lipídeos.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Bile',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Suco pancreático',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Suco entérico',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 21,
            enunciado: "Durante a alimentação, as três estruturas representadas e/ou destacadas por cores nas imagens abaixo realizam funções importantes no sistema digestório humano. Relacione-as com as alternativas propostas, através da formação de pares.",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/imgfeedback21.png",
            feedBackTexto: "As glândulas salivares são responsáveis pela produção e secreção de saliva, que desemboca na cavidade oral. Na boca, ocorre a trituração do alimento, início da digestão por amilase salivar e deglutição. A epiglote tem como função o fechamento da laringe permitindo a passagem do alimento para o esôfago (impedindo que o alimento entre no sistema respiratório).",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img21am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img21bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img21cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção e secreção de saliva, que desemboca na cavidade oral. ',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Trituração do alimento, início da digestão por amilase salivar e deglutição.',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fechamento da laringe permitindo a passagem do alimento para o esôfago.',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 22,
            enunciado: "Durante o processo de digestão, em condições normais, o alimento segue uma sequência anatômica definida: boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, reto e ânus. Nas imagens, estão indicadas a faringe, esôfago e estômago. Sob esse aspecto, com base em seus conhecimentos, relacione em pares as estruturas representadas nas figuras com as informações que condizem à função de cada uma delas.",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/imgfeedback22.png",
            feedBackTexto: "Na faringe, ocorre a passagem de ar e alimentos, se comunicando com boca, cavidade nasal, esôfago e laringe. No esôfago, ocorre peristaltismo e secreção de muco permitindo o transporte do alimento até o estômago. No estômago, ocorre produção de suco gástrico, digestão química e mecânica dos alimentos e conversão de bolo alimentar em quimo.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img22am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img22bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img22cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Peristaltismo e secreção de muco permitindo o transporte do alimento até o estômago',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção de suco gástrico, digestão química e mecânica dos alimentos e conversão de bolo alimentar em quimo.',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Passagem de ar e alimentos, se comunicando com boca, cavidade nasal, esôfago e laringe.',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 23,
            enunciado: "Durante o processo de digestão, em condições normais, o alimento segue uma sequência anatômica definida: boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, reto e ânus.  Nas imagens, estão indicados o intestino delgado, intestino grosso e ânus. Sob esse aspecto, com base em seus conhecimentos, relacione em pares as estruturas representadas nas figuras com as informações que condizem à função de cada uma delas.",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/imgfeedback23.png",
            feedBackTexto: "O intestino delgado é responsável pela produção e secreção de suco entérico, digestão do quimo e absorção de nutrientes. O intestino grosso realiza o armazenamento de resíduos não aproveitados, absorção de água e sais minerais. O ânus tem função de eliminação de fezes.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img23am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img23bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img23cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Eliminação de fezes',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção e secreção de suco entérico, digestão do quimo e absorção de nutrientes.',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Armazenamento de resíduos não aproveitados, absorção de água e sais minerais.',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 24,
            enunciado: "Assim como as glândulas salivares, a língua, os dentes, o fígado, o pâncreas e a vesícula biliar são considerados órgãos/estruturas acessórios ou anexos ao sistema digestório e desempenham importantes funções em nosso organismo. Nesse sentido, relacione em pares as figuras com as informações que julgar mais adequadas, em relação à função de cada uma delas.",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/imgfeedback24.png",
            feedBackTexto: "O fígado é responsável pelo armazenamento e liberação de glicose e produção de bile; O pâncreas é responsável pela produção de suco pancreático, insulina e glucagon; A vesícula biliar tem como função o armazenamento de bile.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img24am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img24bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img24cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Armazenamento e liberação de glicose e produção de bile.',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção de suco pancreático, insulina e glucagon.',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Armazenamento de bile.',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 25,
            enunciado: "Durante os processos digestivos, o alimento inicialmente digerido na boca e deglutido passa do esôfago ao estômago pelo esfíncter esofágico inferior. Após a de digestão química inicial no estômago (proteínas), o conteúdo estomacal é conduzido ao duodeno, através da abertura do esfíncter pilórico. No duodeno, ocorre a digestão química de proteínas, carboidratos e lipídios, por meio da secreção de bile, suco pancreático e suco entérico. Com base nas informações, relacione a imagem com a informação mais adequada, formando pares com as alternativas propostas.",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/imgfeedback25.png",
            feedBackTexto: "No esfíncter esofágico inferior, ocorre a passagem de bolo alimentar. No esfíncter pilórico, ocorre a passagem do quimo. No duodeno, ocorra a digestão química duodenal.",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img25am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img25bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img25cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Passagem de bolo alimentar',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Passagem do quimo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Digestão química',
                    imagem: '',
                    idPar: 3
                }
            ]
        }];

    }

}