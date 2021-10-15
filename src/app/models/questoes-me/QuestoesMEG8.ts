import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG8 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 221,
        escolhida: "não",
        grupo: "8",
        modelo: "2",
        enunciado:
          "As glândulas suprarrenais são constituídas por dois tipos de tecido distintos estruturalmente e funcionalmente: o córtex e a medula. No que concerne aos aspectos funcionais de cada uma das regiões desta glândula, analise as alternativas abaixo e selecione todas as que julgar como verdadeiras.",
        alternativa1:
          "O córtex da glândula suprarrenal produz hormônios do tipo esteroides, sendo os principais deles os glicocorticoides e os mineralocorticoides.",
        alternativa2:
          "A medula da glândula suprarrenal produz hormônios do tipo catecolaminas, sendo os principais deles a adrenalina e noradrenalina.",
        alternativa3:
          "Os mineralocorticoides são hormônios produzidos pelo córtex da glândula suprarrenal e atuam promovendo a reabsorção de sódio e a excreção de potássio pelos rins.",
        alternativa4:
          "Os glicocorticoides são hormônios produzidos pelo córtex da glândula suprarrenal e atuam na produção de glicose a partir de proteínas e gorduras, aumentando os níveis de glicose no sangue.",
        alternativa5:
          "A adrenalina é um hormônio produzido pela medula da glândula suprarrenal e promove ações no organismo em reações de alerta.",
        alternativa6:
          "A noradrenalina é um hormônio produzido pela medula da glândula suprarrenal e é liberada somente quando hormônios como a adrenalina e os esteroides estão em concentrações acima do normal.",
        alternativaCorreta: "1,2,3,4,5",
        feedBackImagem: "imgfeedbackm2",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "O córtex da glândula suprarrenal produz hormônios do tipo esteroides, sendo os principais deles os glicocorticoides e os mineralocorticoides.<br/>A medula da glândula suprarrenal produz hormônios do tipo catecolaminas, sendo os principais deles a adrenalina e noradrenalina.<br/>Os mineralocorticoides são hormônios produzidos pelo córtex da glândula suprarrenal e atuam promovendo a reabsorção de sódio e a excreção de potássio pelos rins.<br/>Os glicocorticoides são hormônios produzidos pelo córtex da glândula suprarrenal e atuam na produção de glicose a partir de proteínas e gorduras, aumentando os níveis de glicose no sangue.<br/>A adrenalina é um hormônio produzido pela medula da glândula suprarrenal e promove ações no organismo em reações de alerta.<br/>A noradrenalina é um hormônio produzido pela medula da glândula suprarrenal e é liberada em doses mais ou menos constantes pela medula da glândula suprarrenal, independentemente da liberação de adrenalina, tendo como função manter a pressão sanguínea em níveis adequados.",
      },
      {
        id: 222,
        escolhida: "não",
        grupo: "8",
        modelo: "2",
        enunciado:
          "O pâncreas consiste em uma glândula que apresenta importantes funções na homeostasia do organismo. Sobre essa glândula, analise as alternativas abaixo e selecione todas aquelas que julgar como verdadeiras.",
        alternativa1:
          "O pâncreas é considerado uma glândula mista, uma vez que desempenha tanto função endócrina, na liberação de hormônios, bem como função exócrina, na secreção de enzimas digestivas.",
        alternativa2:
          "Os hormônios produzidos pelo pâncreas são os glicocorticoides, que atuam no controle da glicemia, e os mineralocorticoides, que atuam na regulação de água e sais no organismo.",
        alternativa3:
          "Os hormônios produzidos pelo pâncreas são a insulina, que visa reduzir a quantidade de glicose do sangue, e o glucagon, que visa a quebra de glicogênio no fígado, aumentando a taxa de glicose no sangue.",
        alternativa4:
          "A diabetes é um distúrbio hormonal relacionada ao pâncreas, em que a pessoa acometida apresenta alta taxa de glicose no sangue, que pode ser do tipo I (juvenil) ou tipo II (tardio).",
        alternativa5:
          "O hipertiroidismo é uma doença relacionada ao funcionamento do pâncreas, em que há excesso de hormônios produzidos pela glândula, elevando a temperatura corporal, sudorese, irritabilidade, pressão sanguínea e perda de peso.",
        alternativa6:
          "A deficiência imunitária é consequência direta do excesso de produção de hormônios no pâncreas, principalmente do cortisol, causando a diminuição da permeabilidade dos capilares sanguíneos e suscetibilidade à infecções.",
        alternativaCorreta: "1,3,4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "O pâncreas é considerado uma glândula mista, uma vez que desempenha tanto função endócrina, na liberação de hormônios, bem como função exócrina, na secreção de enzimas digestivas.<br/>Os hormônios produzidos pelo pâncreas são a insulina, que visa reduzir a quantidade de glicose do sangue, e o glucagon, que visa a quebra de glicogênio no fígado, aumentando a taxa de glicose no sangue.<br/>A diabetes é um distúrbio hormonal relacionada ao pâncreas, em que a pessoa acometida apresenta alta taxa de glicose no sangue, que pode ser do tipo I (juvenil) ou tipo II (tardio).",
      },
      {
        id: 223,
        escolhida: "não",
        grupo: "8",
        modelo: "2",
        enunciado:
          "Os hormônios relacionados à reprodução são produzidos por diferentes glândulas do sistema endócrino, culminando em diferentes ações nos respectivos órgãos-alvo, sejam estruturais ou funcionais. No que se refere aos hormônios relacionados à reprodução humana, analise as alternativas abaixo e selecione todas as alternativas que julgar como corretas.",
        alternativa1:
          "O hormônio folículo-estimulante (FSH) é um hormônio relacionado à reprodução produzido pela adenoipófise e atua, nas mulheres, estimulando os folículos ovarianos e, nos homens, a espermatogênese.",
        alternativa2:
          "O hormônio luteinizante (LH) é um hormônio relacionado à reprodução produzido pela adenoipófise e atua, nas mulheres, estimulando a ovulação e o corpo lúteo e, nos homens, as células intersticiais.",
        alternativa3:
          "A prolactina é um hormônio masculino relacionado à reprodução produzido pela hipófise e atua estimulando a espermatogênese e o desenvolvimento de características sexuais secundárias.",
        alternativa4:
          "O estrógeno é um hormônio feminino relacionado à reprodução produzido pelo ovário e tem como função a maturação dos órgãos reprodutores, estimular o desenvolvimento das características sexuais secundárias e preparar o útero para a gravidez.",
        alternativa5:
          "A progesterona é um hormônio feminino relacionado à reprodução produzido no ovário e tem como função a preparação da mucosa uterina e sua manutenção para a gravidez, bem como o desenvolvimento das glândulas mamárias.",
        alternativa6:
          "A testosterona é um hormônio masculino relacionado à reprodução produzido pelos testículos e tem como função estimular a espermatogênese e desenvolver as características sexuais secundárias masculinas.",
        alternativaCorreta: "1,2,4,5,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "O hormônio folículo-estimulante (FSH) é um hormônio relacionado à reprodução produzido pela adenoipófise e atua, nas mulheres, estimulando os folículos ovarianos e, nos homens, a espermatogênese.<br/>O hormônio luteinizante (LH) é um hormônio relacionado à reprodução produzido pela adenoipófise e atua, nas mulheres, estimulando a ovulação e o corpo lúteo e, nos homens, as células intersticiais.<br/>O estrógeno é um hormônio feminino relacionado à reprodução produzido pelo ovário e tem como função a maturação dos órgãos reprodutores, estimular o desenvolvimento das características sexuais secundárias e preparar o útero para a gravidez.<br/>A progesterona é um hormônio feminino relacionado à reprodução produzido no ovário e tem como função a preparação da mucosa uterina e sua manutenção para a gravidez, bem como o desenvolvimento das glândulas mamárias.<br/>A testosterona é um hormônio masculino relacionado à reprodução produzido pelos testículos e tem como função estimular a espermatogênese e desenvolver as características sexuais secundárias masculinas.<br/>A prolactina é um hormônio relacionado à reprodução que estimula a produção de leite nas glândulas mamárias, após a estimulação prévia pelo estrógeno e progesterona.",
      },
      {
        id: 224,
        escolhida: "não",
        grupo: "8",
        modelo: "2",
        enunciado:
          "Na espécie humana há diversas glândulas endócrinas, sendo que algumas delas são responsáveis pela produção de mais de um tipo de hormônio. Analise as alternativas abaixo e, sobre as principais glândulas do sistema endócrino, selecione todas as alternativas que julgar como verdadeiras.",
        alternativa1:
          "As principais glândulas endócrinas humanas são: a hipófise, a tireoide, as paratireoides, o pâncreas, as suprarrenais e as gônadas.",
        alternativa2:
          "As principais glândulas endócrinas humanas são: o hipotálamo, a tireoide, as paratireoides, o fígado, a faringe e os rins.",
        alternativa3:
          "O tecido gorduroso também apresenta atividade endócrina, produzindo o hormônio leptina, que atua sobre o hipotálamo diminuindo o apetite.",
        alternativa4:
          "A glândula pineal (pequena região do encéfalo) sintetiza o hormônio melatonina, que envolve o controle das respostas corpóreas ligadas aos ciclos de claro-escuro.",
        alternativa5:
          "A adenoipófise é responsável por armazenar hormônios produzidos pelo hipotálamo, os quais podem ser citados o hormônio antidiurético, a aldosterona, os glicocorticoides e o glucagon.",
        alternativa6:
          "As gonadotrofinas (FSH e LH) são hormônios relacionados à reprodução, sendo ambos produzidos e secretados pelos ovários e testículos.",
        alternativaCorreta: "1,3,4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "As principais glândulas endócrinas humanas são: a hipófise, a tireoide, as paratireoides, o pâncreas, as suprarrenais e as gônadas.<br/>O tecido gorduroso também apresenta atividade endócrina, produzindo o hormônio leptina, que atua sobre o hipotálamo diminuindo o apetite.<br/>A glândula pineal (pequena região do encéfalo) sintetiza o hormônio melatonina, que envolve o controle das respostas corpóreas ligadas aos ciclos de claro-escuro.",
      },
      {
        id: 227,
        escolhida: "não",
        grupo: "8",
        modelo: "4",
        enunciado:
          "A animação abaixo ilustra uma importante função da glândula hipófise, localizada na base do encéfalo. Analise a animação e as alternativas e, com base em seus conhecimentos acerca desta importante glândula do sistema endócrino, selecione a alternativa que julgar como verdadeira.",
        imagem: "imggif1m4endo",
        legendaImagem: "Imagem: CrashCourse, via Makeagif. Disponível aqui.",
        alternativa1:
          "A animação representa a função da adenoipófise em armazenar e liberar hormônios produzidos pelo hipotálamo, tais como a prolactina, o paratormônio e a melatonina.",
        alternativa2:
          "A animação representa a função da neuroipófise em armazenar e liberar hormônios produzidos pelo hipotálamo, tais como as enzimas digestivas, andrógenos e esteroides.",
        alternativa3:
          "A animação representa a função da adenoipófise em produzir hormônios tróficos, isto é, que estimulam o funcionamento de outras glândulas endócrinas.",
        alternativa4:
          "A animação representa a função da neuroipófise em produzir hormônios sexuais, isto é, relacionados ao desenvolvimento das características sexuais secundárias em homens e mulheres.",
        alternativaCorreta: "3",
        feedBackImagem: "imggif1m4endo",
        feedBackLegendaImagem:
          "Imagem: CrashCourse, via Makeagif. Disponível aqui.",
        feedBackTexto:
          "A animação representa a função da adenoipófise em produzir hormônios tróficos, isto é, que estimulam o funcionamento de outras glândulas endócrinas. Dentre os principais hormônios tróficos, encontram-se o hormônio tireotrófico (TSH) que estimula a tireoide, o hormônio adrenocorticotrófico (ACTH) que regula o córtex da glândula suprarrenal, bem como os hormônios folículo-estimulante (FSH) e luteinizante (LH) que atuam sobre as gônadas masculinas e femininas.",
      },
      {
        id: 228,
        escolhida: "não",
        grupo: "8",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra a relação entre o controle hormonal do hipotálamo sobre a hipófise que, por sua vez, regula o funcionamento de órgãos-alvo, tais como as gônadas femininas, conforme ilustrado. Analise a imagem e as alternativas e selecione a proposição que julgar como verdadeira.",
        imagem: "imggif2m4endo",
        legendaImagem: "Imagem: Leshaeros, via Makeagif. Disponível aqui.",
        alternativa1:
          "O hipotálamo, ao secretar o hormônio liberador de gonadotrofina (GnRH), estimula a neuroipófise a secretar estrógeno e progesterona, que atuam preparando a mucosa uterina para uma possível gravidez.",
        alternativa2:
          "O hipotálamo, ao secretar FSH e LH, estimula a neurohipófise a secretar hormônio liberador de gonadotrofina (GnRH), que atua na regulação da atividade dos hormônios tróficos.",
        alternativa3:
          "O hipotálamo, ao secretar estrógeno e progesterona, estimula a adenohipófise a secretar hormônio liberador de gonadotrofina (GnRH), que atua sobre os ovários desenvolvendo os folículos ovarianos e promovendo a ovulação.",
        alternativa4:
          "O hipotálamo, ao secretar o hormônio liberador de gonadotrofina (GnRH), estimula a adenoipófise a secretar FSH, que atua sobre os ovários desenvolvendo os folículos ovarianos, e LH, responsável pela ovulação.",
        alternativaCorreta: "4",
        feedBackImagem: "imggif2m4endo",
        feedBackLegendaImagem: "",
        feedBackTexto:
          "O hipotálamo, ao secretar o hormônio liberador de gonadotrofina (GnRH), estimula a adenoipófise a secretar hormônio folículo-estimulante (FSH), que atua sobre os ovários desenvolvendo os folículos ovarianos, e hormônio luteinizante (LH), responsável pela ovulação. Além disso, os hormônios FSH e LH, por serem hormônios tróficos, influenciam na produção de outros hormônios, nas gônadas: os hormônios sexuais. No caso da mulher, os hormônios são o estrógeno e a progesterona."
      },
      {
        id: 229,
        escolhida: "não",
        grupo: "8",
        modelo: "4",
        enunciado:
          "A animação abaixo demonstra uma glândula muito importante para a homeostasia no organismo humano, cuja função principal é estimular e manter os processos metabólicos em diferentes órgãos, bem como regular a taxa de água, sódio e potássio no sangue. Com base nas informações, analise a imagem e as alternativas e selecione a proposição que julgar como verdadeira.",
        imagem: "imggif3m4endo",
        legendaImagem:
          "Imagem: BodyParts3D – DBCLS, Creative Commons BY-SA 2.1 JP, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "A glândula representada na imagem consiste na tireoide, responsável pela produção de hormônios tri-iodotironina (T3), tiroxina (T4) e calcitonina. Aderidas a tireoide estão as glândulas paratireoides, que produzem o paratormônio.",
        alternativa2:
          "A glândula representada na imagem consiste na tireoide, responsável pela produção de hormônios tireotrófico (TSH) e calcitonina. Aderidas a tireoide estão as glândulas paratireoides, que produzem os hormônios tri-iodotironina (T3), tiroxina (T4).",
        alternativa3:
          "A glândula representada na imagem consiste na suprarrenal, responsável pela produção de hormônios calcitonina e mineralocorticoides. Aderidas a suprarrenal estão as glândulas chamadas ilhotas de Langerhans, que secretam insulina e glucagon.",
        alternativa4:
          "A glândula representada na imagem consiste na suprarrenal, responsável pela produção de hormônios adrenalina e noradrenalina. Aderidas a suprarrenal estão as glândulas pararrenais, que produzem o paratormônio.",
        alternativaCorreta: "1",
        feedBackImagem: "imggif3m4endo",
        feedBackLegendaImagem:
          "Imagem: BodyParts3D – DBCLS, Creative Commons BY-SA 2.1 JP, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "A glândula representada na imagem consiste na tireoide, responsável pela produção de hormônios tri-iodotironina (T3), tiroxina (T4) e calcitonina. Aderidas a tireoide estão as glândulas paratireoides, que produzem o paratormônio.",
      },
      {
        id: 230,
        escolhida: "não",
        grupo: "8",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra um caso grave de uma doença da glândula tireoide, que acarreta seu crescimento anormal e consequente formação de um volume no pescoço, chamado bócio. No que se refere a esta doença da glândula tireoide, analise as alternativas e selecione a que julgar como verdadeira.",
        imagem: "img6m5endo",
        legendaImagem:
          "Imagem: Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "Hipertireoidismo: a glândula diminui e produz menos hormônios que o necessário, causando diminuição da temperatura corporal, ressecamento da pele, diminuição da pressão arterial e tendência a engordar.",
        alternativa2:
          "Hipotireoidismo: a glândula diminui e produz hormônios em excesso, causando aumento da temperatura corporal, sudorese intensa, perda de peso, irritabilidade, hipertensão e olhos arregalados.",
        alternativa3:
          "Hipertireoidismo: a glândula aumenta e produz hormônios em excesso, causando aumento da temperatura corporal, sudorese intensa, perda de peso, irritabilidade, hipertensão e olhos arregalados.",
        alternativa4:
          "Hipotireoidismo: a glândula aumenta e produz menos hormônios que o necessário, causando diminuição da temperatura corporal, ressecamento da pele, diminuição da pressão arterial e tendência a engordar.",
        alternativaCorreta: "3",
        feedBackImagem: "img6m5endo",
        feedBackLegendaImagem:
          "Imagem: Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A doença indicada pela imagem consiste no hipertireoidismo, em que a glândula aumenta e produz hormônios em excesso, causando aumento da temperatura corporal, sudorese intensa, perda de peso, irritabilidade, hipertensão e olhos arregalados.<br/>Ao contrário, também há outra disfunção da tireoide, conhecida como hipotireoidismo, em que a glândula produz menos hormônios que o necessário, causando diminuição da temperatura corporal, ressecamento da pele, diminuição da pressão arterial e tendência a engordar.",
      },
      {
        id: 231,
        escolhida: "não",
        grupo: "8",
        modelo: "5",
        enunciado:
          "A imagem abaixo ilustra duas glândulas humanas presentes no corpo da mulher, sendo uma de natureza endócrina e outra exócrina. Analise a figura e as alternativas e, com base nas informações e em seus conhecimentos, determine a alternativa que indique corretamente a relação entre as duas glândulas.",
        imagem: "img7m5endo",
        legendaImagem:
          "Imagem: Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        alternativa1:
          "A adenoipofise é responsável por produzir o hormônio prolactina, que estimula a secreção de leite pelas glândulas mamárias. A neuroipófise secreta o hormônio oxitocina, que promove a contração das glândulas mamárias para a expulsão do leite.",
        alternativa2:
          "A adenoipofise é responsável por produzir o hormônio estrógeno, que estimula o desenvolvimento das glândulas mamárias. A neuroipófise secreta o hormônio oxitocina, que promove a produção de leite pelas glândulas mamárias.",
        alternativa3:
          "A hipófise consiste em uma glândula exócrina, isto é, secreta hormônios em ductos ou na superfície externa do organismo, enquanto as glândulas mamárias são endócrinas, isto é, suas secreções fluem pelos líquidos corporais.",
        alternativa4:
          "A hipófise e as glândulas mamárias não possuem relação direta ou indireta na homeostasia do organismo, sobretudo no corpo da mulher, uma vez que a hipófise é uma glândula endócrina e as glândulas mamárias são exócrinas.",
        alternativaCorreta: "1",
        feedBackImagem: "img7m5endo",
        feedBackLegendaImagem:
          "Imagem: Servier Medical Art, (Creative Commons 3.0).  Disponível aqui.",
        feedBackTexto:
          "A adenoipofise é responsável por produzir o hormônio prolactina, que estimula a secreção de leite pelas glândulas mamárias (após a estimulação prévia das glândulas mamárias por estrógeno e progesterona). A neuroipófise secreta o hormônio oxitocina, que promove a contração das glândulas mamárias para a expulsão do leite durante a amamentação. A liberação da oxitocina é estimulada pela própria sucção do peito pelo bebê.",
      },
      {
        id: 232,
        escolhida: "não",
        grupo: "8",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra o processo de regulação da taxa de glicose no sangue, destacando a relação funcional entre o pâncreas (responsável pela produção de insulina e glucagon) e o fígado. Sob este aspecto, analise a figura e as alternativas e selecione a proposição que julgar como verdadeira sobre esse processo.",
        imagem: "img8m5endo",
        legendaImagem:
          "Imagem: Rhcastilhos, Domínio público, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "Em altas taxas de glicose no sangue, o glucagon estimula todas as células a absorver mais glicose e o excesso é armazenado no fígado. Com baixas taxas, a insulina estimula o fígado a converter glicogênio em glicose.",
        alternativa2:
          "Após uma refeição, a insulina estimula todas as células a absorver mais glicose e o excesso é armazenado no fígado. Em longo período sem alimento, o glucagon estimula o fígado a converter glicogênio em glicose.",
        alternativa3:
          "O fígado e o pâncreas não apresentam relação funcional no que se refere ao sistema endócrino. Ambos se relacionam apenas no que concerne às suas secreções exócrinas, responsáveis pela digestão no duodeno.",
        alternativa4:
          "As células-beta constituem cerca de 70 por cento de cada ilhota pancreática e são responsáveis pela produção de glucagon. As células-alfa são responsáveis pela produção de insulina pelo fígado.",
        alternativaCorreta: "2",
        feedBackImagem: "img8m5endo",
        feedBackLegendaImagem:
          "Imagem: Rhcastilhos, Domínio público, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "Após uma refeição, a insulina estimula todas as células a absorver mais glicose e o excesso é armazenado no fígado. Em longo período sem alimento, o glucagon estimula o fígado a converter glicogênio em glicose.",
      },
      {
        id: 233,
        escolhida: "não",
        grupo: "8",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra os níveis hormonais de hormônio folículo-estimulante, hormônio luteinizante, estrógeno, progesterona de uma mulher adulta, em idade férgil, durante o ciclo menstrual. Analise a imagem e as alternativas e selecione a proposição que julgar como verdadeira acerca dos hormônios relacionados à reprodução.",
        imagem: "img9m5endo",
        legendaImagem:
          "Imagem: Adaptada de MindZiper, Domínio público, via Wikimedia Commons. Disponível aqui.",
        alternativa1:
          "Por volta do dia 28 do ciclo, o nível de estrógeno e progesterona fica muito baixo, levando a mucosa uterina a se desprender e ser eliminada na menstruação, o que inicia um novo ciclo.",
        alternativa2:
          "Por volta do dia 14 do ciclo, o alto nível de FSH e LH faz com que a mucosa uterina se desprenda e seja eliminada na menstruação, o que inicia um novo ciclo.",
        alternativa3:
          "Entre os dias 1 e 5, o alto nível de estrógeno e progesterona estimulam o crescimento do folículo ovariano e da menstruação.",
        alternativa4:
          "Entre os dias 14 e 21, o alto nível de FSH e LH faz com que o corpo amarelo se desenvolva, promovendo a ovulação.",
        alternativaCorreta: "1",
        feedBackImagem: "img9m5endo",
        feedBackLegendaImagem:
          "Imagem: Adaptada de MindZiper, Domínio público, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "O início do ciclo menstrual é marcado pela menstruação. A fase folicular é marcada pelo desenvolvimento do folículo ovariano, sob estímulo do hormônio hipofisário FSH.<br/>Com o desenvolvimento dos folículos, estes passam a produzir estrógeno, o que promove o espessamento da parede uterina e induz a hipófise a liberar grande quantidade de FSH e LH.<br/>Por volta do 14º dia, o FSH e o LH, em altas taxas, induzem a ovulação.<br/>Altas taxas de LH após a ovulação, induzem o folículo rompido a se transformarem no corpo lúteo e produzirem estrógeno e grande quantidade de progesterona. O corpo lúteo atinge seu desenvolvimento máximo entre 8 a 10 dias após a ovulação, caracterizando a fase lútea.<br/>O estrógeno e a progesterona produzidos pelo corpo lúteo, agora inibem (por feedback negativo) a produção de FSH e LH, o que promove a regressão do corpo lúteo, que deixa de produzir estrógeno e progesterona.<br/>Por volta do dia 28 do ciclo, o nível de estrógeno e progesterona fica muito baixo, levando a mucosa uterina a se desprender e ser eliminada na menstruação, o que inicia um novo ciclo.<br/>A queda de estrógeno e progesterona faz com que a hipófise volte a produzir FSH.",
      },
      {
        id: 234,
        escolhida: "não",
        grupo: "8",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra as principais glândulas do sistema endócrino. Analise a figura e as alternativas e assinale a proposição que compreenda apenas as glândulas pertencente a este sistema do corpo humano.",
        imagem: "img10m5endo",
        legendaImagem:
          "Imagem: Adaptada de MrArifnajafov, Domínio Público, via Wikimedia Commons. Disponível aqui.",
        alternativa1: "Hipófise, tireoide, suprarrenal, pâncreas e gônadas.",
        alternativa2: "Hipófise, tireoide, fígado, rins, ovário e testículos.",
        alternativa3: "Hipotálamo, suprarrenal, fígado, ovário e gônadas.",
        alternativa4: "Hipotálamo, hipófise, fígado, pâncreas e gônadas",
        alternativaCorreta: "1",
        feedBackImagem: "imgfeed10m5endo",
        feedBackLegendaImagem:
          "Imagem: Adaptada de MrArifnajafov, Domínio Público, via Wikimedia Commons. Disponível aqui.",
        feedBackTexto:
          "As principais glândulas do sistema endócrino são: Hipófise, tireoide, suprarrenal, pâncreas e gônadas (ovários e testículos).",
      },
      {
        id: 235,
        escolhida: "não",
        grupo: "8",
        modelo: "6",
        enunciado:
          "O diabetes melito é um distúrbio hormonal relacionado ao controle da taxa de glicose no sangue. Há dois tipos de diabetes, o tipo I ou juvenil e o tipo II ou tardio. No que se refere o diabetes do tipo I, analise as alternativas abaixo e selecione a que julgar como verdadeira.",
        alternativa1:
          "No diabetes do tipo I a pessoa acometida é insulino-dependente, pois há redução acentuada de células-beta no pâncreas, causando deficiência na produção de insulina.",
        alternativa2:
          "No diabetes do tipo I a pessoa acometida apresenta níveis praticamente normais de insulina no sangue, mas sofre redução do número de receptores de insulina nas membranas de algumas células, diminuindo a capacidade absorver glicose do sangue.",
        alternativa3:
          "No diabetes do tipo I a pessoa acometida é dependente do hormônio glucagon, pois há redução acentuada de células-alfa no pâncreas, causando deficiência na produção de deste hormônio.",
        alternativa4:
          "No diabetes do tipo I a pessoa acometida apresenta níveis praticamente normais de glucagon no sangue, mas sofre redução do número de receptores de insulina nas membranas de algumas células, diminuindo a capacidade absorver cálcio do sangue.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "No diabetes do tipo I a pessoa acometida é insulino-dependente, pois há redução acentuada de células-beta no pâncreas, causando deficiência na produção de insulina. Esse tipo de diabetes desenvolve-se antes dos 40 anos de idade e afeta cerca de 10 por cento dos diabéticos, que necessitam receber injeções de insulina diariamente, a fim de manter normais os níveis de glicose no sangue.",
      },
      {
        id: 236,
        escolhida: "não",
        grupo: "8",
        modelo: "6",
        enunciado:
          "O diabetes melito é um distúrbio hormonal relacionado ao controle da taxa de glicose no sangue. Há dois tipos de diabetes, o tipo I ou juvenil e o tipo II ou tardio. No que se refere o diabetes do tipo II, analise as alternativas abaixo e selecione a que julgar como verdadeira.",
        alternativa1:
          "No diabetes do tipo II a pessoa acometida é insulino-dependente, pois há redução acentuada de células-beta no pâncreas, causando deficiência na produção de insulina.",
        alternativa2:
          "No diabetes do tipo II a pessoa acometida apresenta níveis praticamente normais de insulina no sangue, mas sofre redução do número de receptores de insulina nas membranas de algumas células, diminuindo a capacidade absorver glicose do sangue.",
        alternativa3:
          "No diabetes do tipo II a pessoa acometida é dependente do hormônio glucagon, pois há redução acentuada de células-alfa no pâncreas, causando deficiência na produção de deste hormônio.",
        alternativa4:
          "No diabetes do tipo II a pessoa acometida apresenta níveis praticamente normais de glucagon no sangue, mas sofre redução do número de receptores de insulina nas membranas de algumas células, diminuindo a capacidade absorver cálcio do sangue.",
        alternativaCorreta: "2",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "No diabetes do tipo II a pessoa acometida apresenta níveis praticamente normais de insulina no sangue, mas sofre redução do número de receptores de insulina nas membranas de células musculares e adiposas, diminuindo a capacidade absorver glicose do sangue. Esse tipo de diabetes geralmente acomete pessoas após os 30 anos de idade.<br/>O tratamento costuma ser realizado com medicamentos antidiabéticos, que agem podendo aumentar a produção de insulina, aumentando a sensibilidade à insulina, diminuindo a produção de glicose pelo organismo ou diminuindo a taxa de absorção de glicose durante a alimentação.",
      },
      {
        id: 237,
        escolhida: "não",
        grupo: "8",
        modelo: "6",
        enunciado:
          "O mecanismo de feedback ou retroalimentação é um conjunto de respostas do organismo frente a um desequilíbrio, visando manter sua homeostase. Esse mecanismo pode ser de dois tipos: feedback negativo e feedback positivo. Sobre esse processo, analise as alternativas abaixo e assinale a que julgar como verdadeira.",
        alternativa1:
          "O controle hormonal no sistema endócrino é realizado principalmente por feedback positivo, ou seja, quando a concentração de um hormônio limita sua própria produção.",
        alternativa2:
          "O controle hormonal no sistema endócrino é realizado principalmente por feedback negativo, ou seja, quando a concentração de um hormônio promove a sua degradação por linfócitos.",
        alternativa3:
          "O controle hormonal no sistema endócrino é realizado principalmente por feedback positivo, ou seja, quando a concentração de um hormônio desativa os receptores hormonais.",
        alternativa4:
          "O controle hormonal no sistema endócrino é realizado principalmente por feedback negativo, ou seja, quando a concentração de um hormônio limita sua própria produção.",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "O controle hormonal no sistema endócrino é realizado principalmente por feedback negativo, ou seja, quando a concentração de um hormônio limita sua própria produção.<br/>Exemplo: sob estimulo do hipotálamo, a adenoipofise secreta TSH (hormônio tireotrófico) em resposta a uma baixa concentração dos hormônios T3 e T4. Como consequência, o TSH promove liberação de T3 e T4 para o sangue. O aumento da concentração desses hormônios provoca a inibição do hipotálamo e da adenoipofise, diminuindo a secreção de TSH, pois não há mais necessidade de secreção de T3 e T4 pela tireoide.",
      },
    ];
  }
}
