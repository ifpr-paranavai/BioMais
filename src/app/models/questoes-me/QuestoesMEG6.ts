import { Component, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuestaoMultiplaEscolhaPage } from "../../questao-multipla-escolha/questao-multipla-escolha.page";
import { QuestaoParPage } from "../../questao-par/questao-par.page";
import { IonicModule } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class QuestoesMEG6 {
  public questoesMultiplaEscolha;

  getQuestoes() {
    return this.questoesMultiplaEscolha;
  }

  constructor() {
    this.questoesMultiplaEscolha = [
      {
        id: 182,
        escolhida: "não",
        grupo: "6",
        modelo: "2",
        enunciado:
          "Na anatomia, articulações são as junções ou superfícies de contato entre dois ossos, que podem permitir movimentos ou serem imóveis. O sistema articular esquelético pode ser classificado de acordo com a estrutura e com as funções que exercem. Sob este aspecto, com base em seus conhecimentos sobre as articulações, analise as alternativas e selecione todas as proposições que julgar como corretas.",
        alternativa1:
          "Nas articulações fibrosas, os ossos são unidos firmemente por tecido conjuntivo denso não modelado e rico em fibras de colágeno. Geralmente não permitem mobilidade, sendo do tipo sinartrose, como no caso dos ossos do crânio.",
        alternativa2:
          "Nas articulações fibrosas, os ossos são unidos firmemente por tecido conjuntivo denso não modelado e rico em fibras de colágeno. Geralmente as articulações fibrosas permitem mobilidade ampla, caracterizando-se como diartrose, como no caso das articulações dos membros inferiores e superiores.",
        alternativa3:
          "Nas articulações cartilaginosas, há cavidade articular e os ossos se comunicam por meio de cartilagem. Geralmente não permitem mobilidade, sendo do tipo sinartrose, como no caso dos ossos do crânio.",
        alternativa4:
          "Nas articulações cartilaginosas, há cavidade articular e os ossos se comunicam por meio de cartilagem. Geralmente, esse tipo de articulação possibilita mobilidade reduzida, caracterizando-se funcionalmente como anfiartrose, como no caso da coluna vertebral.",
        alternativa5:
          "Nas articulações sinoviais, há cavidade articular e os ossos são articulados pelo tecido conjuntivo denso não modelado de uma cápsula articular com líquido viscoso. Geralmente, esse tipo de articulação possibilita mobilidade reduzida, caracterizando-se funcionalmente como anfiartrose, como no caso da coluna vertebral.",
        alternativa6:
          "Nas articulações sinoviais, há cavidade articular e os ossos são articulados pelo tecido conjuntivo denso não modelado de uma cápsula articular com líquido viscoso. Todas as articulações sinoviais permitem mobilidade ampla, caracterizando-se como diartrose, como no caso das articulações dos membros inferiores e superiores.",
        alternativaCorreta: "1,4,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Nas articulações fibrosas, os ossos são unidos firmemente por tecido conjuntivo denso não modelado e rico em fibras de colágeno. Geralmente não permitem mobilidade, sendo do tipo sinartrose, como no caso dos ossos do crânio.<br/>Nas articulações cartilaginosas, há cavidade articular e os ossos se comunicam por meio de cartilagem. Geralmente, esse tipo de articulação possibilita mobilidade reduzida, caracterizando-se funcionalmente como anfiartrose, como no caso da coluna vertebral.<br/>Nas articulações sinoviais, há cavidade articular e os ossos são articulados pelo tecido conjuntivo denso não modelado de uma cápsula articular com líquido viscoso. Todas as articulações sinoviais permitem mobilidade ampla, caracterizando-se como diartrose, como no caso das articulações dos membros inferiores e superiores.",
      },
      {
        id: 183,
        escolhida: "não",
        grupo: "6",
        modelo: "2",
        enunciado:
          "O esqueleto humano é composto por 206 ossos, constituindo cerca de 14 por cento da massa corporal, tendo funções muito importantes para a vida e a homeostase do ser humano. Sobre as funções principais do sistema esquelético, analise as alternativas a seguir e selecione todas as que julgar como verdadeiras.",
        alternativa1:
          "Uma das funções do sistema esquelético consiste em garantir a comunicação nervosa entre o sistema nervoso central e os órgãos efetores de sensibilidade (músculos e glândulas).",
        alternativa2:
          "Uma das funções do sistema esquelético consiste na produção de células sanguíneas (hematopoiese), como hemácias, leucócitos e plaquetas, que ocorre no interior de alguns ossos, na medula óssea vermelha.",
        alternativa3:
          "Uma das funções do sistema esquelético consiste em fornecer suporte corporal, sustentando tecidos moles, e assistência ao movimento, sendo ponto de apoio para a ação da maioria dos tendões e músculos esqueléticos.",
        alternativa4:
          "Uma das funções do sistema esquelético consiste em produzir e secretar hormônios diretamente na corrente sanguínea, que atuam em órgãos algo controlando e coordenando as atividades em todo o corpo.",
        alternativa5:
          "Uma das funções do sistema esquelético consiste em proteger os órgãos internos contra possíveis lesões, como ossos do crânio e caixa torácica.",
        alternativa6:
          "Uma das funções do sistema esquelético consiste na manutenção da homeostasia mineral no organismo, uma vez os ossos armazenam minerais como cálcio e fósforo e, conforme a necessidade, liberam na corrente sanguínea, mantendo o equilíbrio mineral essencial.",
        alternativaCorreta: "2,3,5,6",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "- Produção de células sanguíneas (hematopoiese), como hemácias, leucócitos e plaquetas, que ocorre no interior de alguns ossos, na medula óssea vermelha.<br/>- Fornecer suporte corporal, sustentando tecidos moles, e assistência ao movimento, sendo ponto de apoio para a ação da maioria dos tendões e músculos esqueléticos.<br/>- Proteger os órgãos internos contra possíveis lesões, como ossos do crânio e caixa torácica.<br/>- Manutenção da homeostasia mineral no organismo, uma vez os ossos armazenam minerais como cálcio e fósforo e, conforme a necessidade, liberam na corrente sanguínea, mantendo o equilíbrio mineral essencial.",
      },
      {
        id: 184,
        escolhida: "não",
        grupo: "6",
        modelo: "2",
        enunciado:
          "O tecido ósseo se forma durante a vida embrionária, mas se renova durante a vida adulta, processo o qual chama-se remodelamento ósseo. Sobre o tecido ósseo, analise as alternativas abaixo e selecione todas as que julgar como verdadeiras.",
        alternativa1:
          "A formação do tecido ósseo é feita por células ósseas chamadas osteoblastos. Essas células produzem a matriz extracelular, que possui a proteína colágeno, conferindo certa flexibilidade ao osso.",
        alternativa2:
          "A formação do tecido ósseo é feita por células ósseas chamadas osteoclastos. Essas células produzem a matriz extracelular, que possui a proteína peptina, conferindo muita flexibilidade ao osso.",
        alternativa3:
          "Os osteoblastos se movem na superfície óssea e destroem áreas lesadas ou envelhecidas, digerindo e reabsorvendo partes do osso, abrindo caminho para a regeneração pelos osteócitos.",
        alternativa4:
          "Os osteoclastos se movem na superfície óssea e destroem áreas lesadas ou envelhecidas, digerindo e reabsorvendo partes do osso, abrindo caminho para a regeneração pelos osteoblastos.",
        alternativa5:
          "A osteoporose é uma doença que afeta os ossos, em decorrência de vários fatores, sendo mais comum em pessoas acima de 50 anos. Assim, as pessoas acometidas apresentam descalcificação dos ossos, tornando-os frágeis e quebradiços.",
        alternativa6:
          "A osteoporose é uma doença que afeta as articulações, em decorrência de vários fatores, sendo mais comum em pessoas acima de 50 anos. Assim, as pessoas acometidas apresentam dor e inflamação nas articulações, afetando também ligamentos, tendões e músculos.",
        alternativaCorreta: "1,4,5",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "A formação do tecido ósseo é feita por células ósseas chamadas osteoblastos. Essas células produzem a matriz extracelular, que possui a proteína colágeno, conferindo certa flexibilidade ao osso.<br/>Os osteoclastos se movem na superfície óssea e destroem áreas lesadas ou envelhecidas, digerindo e reabsorvendo partes do osso, abrindo caminho para a regeneração pelos osteoblastos.<br/>A osteoporose é uma doença que afeta os ossos, em decorrência de vários fatores, sendo mais comum em pessoas acima de 50 anos. Assim, as pessoas acometidas apresentam descalcificação dos ossos, tornando-os frágeis e quebradiços.",
      },
      {
        id: 191,
        escolhida: "não",
        grupo: "6",
        modelo: "5",
        enunciado:
          "O esqueleto humano pode ser agrupado em axial (crânio, coluna vertebral e caixa torácica) e apendicular (membros). O membro superior, é formado por três regiões: braços, antebraços e mãos. Com base nas informações e na figura abaixo, analise as alternativas e selecione a que julgar como correta acerca dos ossos pertencentes aos membros superiores.",
        imagem: "img8m5esq",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "O braço é composto pelo osso úmero, o antebraço pelo rádio e ulna, e as mãos por ossos do carpo, metacarpo e falanges.",
        alternativa2:
          "O braço é composto pelo osso úmero, o antebraço pelo rádio e ulna, e as mãos por ossos do tarso, metatarso e falanges.",
        alternativa3:
          "O braço é composto pelo osso fêmur, o antebraço pela tíbia e fíbula, e as mãos por ossos do carpo, metacarpo e falanges.",
        alternativa4:
          "O braço é composto pelo osso esterno, o antebraço pelo rádio e tíbia, e as mãos por ossos do tarso, metatarso e vértebras.",
        alternativaCorreta: "1",
        feedBackImagem: "img8feedbackm5esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O esqueleto humano pode ser agrupado em axial (crânio, coluna vertebral e caixa torácica) e apendicular (membros). O membro superior, é formado por três regiões: braços, antebraços e mãos. O braço é composto pelo osso úmero, o antebraço pelo rádio e ulna, e as mãos por ossos do carpo, metacarpo e falanges.",
      },
      {
        id: 192,
        escolhida: "não",
        grupo: "6",
        modelo: "5",
        enunciado:
          "A figura abaixo representa a estrutura interna de um osso longo, de modo que cada parte possibilita desempenha diversas funções como sustentação, proteção, movimentação, armazenamento de minerais e formação de células sanguíneas. Analise a figura e as alternativas e selecione a proposição que considerar verdadeira sobre a estrutura dos ossos.",
        imagem: "img9m5esq",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "Formado por tecido ósseo esponjoso (I), pelo osso compacto que contém medula óssea vermelha (II) e no interior dos ossos há uma matriz rígida onde se forma a medula óssea amarela (III). São revestidos por tecido conjuntivo denominado epiderme (IV) e em suas extremidades geralmente há colágeno (V).",
        alternativa2:
          "Formado por tecido ósseo compacto (I), por uma matriz rígida onde se forma a medula óssea amarela (II) e por um tecido esponjoso onde há a presença de cartilagem (III). São revestidos por tecido cartilaginoso denominado periósteo (IV) e em suas extremidades geralmente há queratina (V).",
        alternativa3:
          "Formado pelo osso esponjoso que contém medula óssea vermelha (I), tecido ósseo compacto (II) e no interior dos ossos há uma matriz rígida onde se forma a coluna vertebral (III). São revestidos por tecido rígido denominado tutano (IV) e em suas extremidades geralmente há células adiposas (V).",
        alternativa4:
          "Formado por tecido ósseo compacto (I), pelo osso esponjoso que contém medula óssea vermelha (II) e no interior dos ossos há uma matriz rígida onde se forma a medula óssea amarela (III). São revestidos por tecido conjuntivo denominado periósteo (IV) e em suas extremidades geralmente há cartilagem (V).",
        alternativaCorreta: "4",
        feedBackImagem: "img9feedbackm5esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A figura demonstra um osso longo, formado por tecido ósseo compacto (I), pelo osso esponjoso que contém medula óssea vermelha (II) e no interior dos ossos há uma matriz rígida onde se forma a medula óssea amarela (III). São revestidos por tecido conjuntivo denominado periósteo (IV) e em suas extremidades geralmente há cartilagem (V).<br/>Vale lembrar que não são todos os ossos que apresentam, por exemplo, a medula óssea vermelha, de modo que nos adultos, está geralmente presente apenas os ossos pélvicos, esterno, costelas, clavícula, escápula, ossos cranianos e nas extremidades do fêmur e úmero.",
      },
      {
        id: 193,
        escolhida: "não",
        grupo: "6",
        modelo: "5",
        enunciado:
          "A figura abaixo ilustra a coluna vertebral, que é constituída por 33 ossos denominados vértebras. Nos adultos, algumas vértebras se fundem, reduzindo seu número a 26. As vértebras formam um eixo ósseo firme e flexível e, em seu interior há um tubo interno onde se localiza a medula espinal. Analise a figura e as alternativas e selecione a alternativa que julgar como correta, acerca da coluna vertebral.",
        imagem: "img10m5esq",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "A coluna vertebral é formada pela porção escapular (12 vértebras), torácica (7 vértebras), lombar (4 vértebras) e pubiana (fusão de 4 vértebras que formam o osso ílio) e cocciana (fusão de 2 vértebras que formam o cóccix).",
        alternativa2:
          "A coluna vertebral é formada pela porção cervical (7 vértebras), torácica (12 vértebras), lombar (5 vértebras) e sacral (fusão de 5 vértebras que formam o osso sacro) e cocciana (fusão de 4 vértebras que formam o cóccix).",
        alternativa3:
          "A coluna vertebral é formada pela porção pulmonar (5 vértebras), falângea (12 vértebras), lombar (7 vértebras) e sacramental (fusão de 4 vértebras que formam o osso púbis) e cocciana (fusão de 5 vértebras que formam o sacro).",
        alternativa4:
          "A coluna vertebral é formada pela porção cervical (7 vértebras), pulmonar (5 vértebras), lombar (12 vértebras) e faríngea (fusão de 5 vértebras que formam o osso faríngeo) e cocciana (fusão de 4 vértebras que formam o cóccix).",
        alternativaCorreta: "2",
        feedBackImagem: "img10feedbackm5esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "A coluna vertebral é formada por 7 vértebras cervicais (primeiras vértebras que constituem o pescoço), 12 vértebras torácicas (ligadas às costelas, formando a caixa torácica), 5 vértebras lombares (maiores vértebras, suportam o peso da parte superior do corpo quando estamos em pé), 5 vértebras sacrais (que fundidas na fase adulta formam o osso sacro) e 4 vértebras coccianas (que fundidas na fase adulta formam o osso cóccix).",
      },
      {
        id: 194,
        escolhida: "não",
        grupo: "6",
        modelo: "5",
        enunciado:
          "O tecido ósseo se forma durante o desenvolvimento embrionário, mas se renova continuamente na vida adulta. Esse processo é chamado remodelamento ósseo e a figura abaixo demonstra as células envolvidas nesse processo. Analise a figura e as alternativas e, com base em seus conhecimentos, assinale a alternativa que julgar verdadeira.",
        imagem: "img11m5esq",
        legendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        alternativa1:
          "As células que destroem áreas lesadas ou envelhecidas são chamadas medula óssea vermelha, originadas a partir da fusão de osso esponjoso. As células que produzem o tecido ósseo são chamadas osteoclastos. As células que mantem a atividade do tecido ósseo (maduro) são chamadas macrófagos.",
        alternativa2:
          "As células que destroem áreas lesadas ou envelhecidas são chamadas osteoclastos, originadas a partir da fusão de monócitos. As células que produzem o tecido ósseo são chamadas osteoblastos. As células que mantem a atividade do tecido ósseo (maduro) são chamadas osteócitos.",
        alternativa3:
          "As células que destroem áreas lesadas ou envelhecidas são chamadas osteoblastos, originadas a partir da fusão de linfócitos. As células que produzem o tecido ósseo são chamadas osteócitos. As células que mantem a atividade do tecido ósseo (maduro) são chamadas osteoblastos.",
        alternativa4:
          "As células que destroem áreas lesadas ou envelhecidas são chamadas osteócitos, originadas a partir da fusão de hemácias. As células que produzem o tecido ósseo são chamadas hematopoieticas. As células que mantem a atividade do tecido ósseo (maduro) são chamadas osteoclastos.",
        alternativaCorreta: "2",
        feedBackImagem: "img11m5esq",
        feedBackLegendaImagem:
          "Imagem: Adaptada de Servier Medical Art, (<a href='https://creativecommons.org/licenses/by/3.0/br/' target='_blank'>Creative Commons 3.0</a>).  <a href='http://commons.wikimedia.org/wiki/File:Respiratory_system_complete_en.svg'>Disponível aqui</a>.",
        feedBackTexto:
          "O tecido ósseo se forma durante o desenvolvimento embrionário, mas se renova continuamente na vida adulta. Esse processo é chamado remodelamento ósseo. As células que produzem o tecido ósseo são chamadas osteoblastos. Elas produzem a matriz extracelular, que possui colágeno, e também iniciam o processo de calcificação do osso, que é a deposição de sais minerais na matriz, como o cálcio<br/>As células que mantem a atividade do tecido ósseo (maduro) são chamadas osteócitos. Além dessas células, o tecido ósseo também possui os osteoclastos, células importantes originadas pela fusão de monócitos, que se movem na superfície óssea e destroem áreas lesadas ou envelhecidas do osso, abrindo caminho para sua regeneração, pelos osteoblastos.",
      },
      {
        id: 195,
        escolhida: "não",
        grupo: "6",
        modelo: "6",
        enunciado:
          "Os membros superiores e inferiores se prendem ao esqueleto axial por meio de um conjunto de ossos denominado cíngulo (superior ou inferior). Analise as alternativas abaixo e determine a alternativa correta acerta dos cíngulos dos membros superiores e inferiores.",
        alternativa1:
          "O cíngulo dos membros superiores é denominado cintura pélvica e é formado pelos ossos escápula e clavícula. O cíngulo dos membros inferiores é denominado cintura escapular e é formado pela fusão dos ossos ílio, ísquio e púbis.",
        alternativa2:
          "O cíngulo dos membros superiores é denominado cintura superior e é formado pelos ossos esterno e costelas. O cíngulo dos membros inferiores é denominado bacia e é formado pela fusão dos ossos esterno, ílio, ísquio e púbis.",
        alternativa3:
          "O cíngulo dos membros superiores é denominado cintura escapular e é formado pelos ossos esterno, costelas e clavícula. O cíngulo dos membros inferiores é denominado cintura pélvica e é formado pela fusão dos ossos fêmur, pelve e sacro.",
        alternativa4:
          "O cíngulo dos membros superiores é denominado cintura escapular e é formado pelos ossos escápula e clavícula. O cíngulo dos membros inferiores é denominado cintura pélvica e é formado pela fusão dos ossos ílio, ísquio e púbis.",
        alternativaCorreta: "4",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "Os membros superiores e inferiores se prendem ao esqueleto axial por meio de um conjunto de ossos denominado cíngulo (superior ou inferior). O cíngulo dos membros superiores é denominado cintura escapular e é formado pelos ossos escápula e clavícula. O cíngulo dos membros inferiores é denominado cintura pélvica e é formado pela fusão dos ossos ílio, ísquio e púbis.",
      },
      {
        id: 196,
        escolhida: "não",
        grupo: "6",
        modelo: "6",
        enunciado:
          "Existem algumas doenças que afetam os ossos e as articulações, provocando dor, fragilidade dos ossos, deformidades entre outros. Analise as alternativas abaixo e, com base em seus conhecimentos, determine a proposição que julgar como correta.",
        alternativa1:
          "São exemplos de patologias do sistema esquelético: osteoporose, artrite reumatoide, artrose, cifose, escoliose e lordose.",
        alternativa2:
          "São exemplos de patologias do sistema esquelético: cálculo renal, faringite, artrose, candidíase, escoliose e meningite.",
        alternativa3:
          "São exemplos de patologias do sistema esquelético: meningite, artrite reumatoide, artrose, cálculo renal, escoliose e trombose.",
        alternativa4:
          "São exemplos de patologias do sistema esquelético: osteoporose, cálculos renais, artrose, AVC, doença de chagas e lordose.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "São exemplos de patologias do sistema esquelético: osteoporose, artrite reumatoide, artrose, cifose, escoliose e lordose.<br/>A osteoporose é uma doença que acarreta a perda da massa óssea, tornando os ossos mais fracos e com maior propensão à fraturas.<br/>A artrite reumatoide é uma doença inflamatória que acomete as articulações, acarretando inchaço e dor, que em casos contínuos pode acarretar na deformidade das regiões das articulações.<br/>A artrose consiste no desgaste dos tecidos de proteção das extremidades ósseas (cartilagem) que, apesar de ser um processo natural e não, de fato, uma doença, comete as articulações, causando dor e desconforto.<br/>A cifose consiste na curvatura excessiva da coluna vertebral torácica para frente, formando a curvatura conhecida como “corcunda”.<br/>A escoliose consiste em um desvio anormal da coluna vertebral, em forma de C ou S.<br/>A lordose consiste na curvatura anormal da região lombar, acima dos glúteos.",
      },
      {
        id: 197,
        escolhida: "não",
        grupo: "6",
        modelo: "6",
        enunciado:
          "É sabido que os ossos têm função na locomoção humana. Contudo, por si só, apesar de apresentar estruturas articulares, os ossos não realizam sozinhos o movimento corporal. Com base nessa afirmação, analise as alternativas abaixo e selecione a proposição que julgar como correta acerca do sistema esquelético e da locomoção.",
        alternativa1:
          "Músculos esqueléticos ligam-se aos ossos por tendões e, quando os músculos se contraem, puxam os ossos em que estão ligados. Assim, os ossos atuam como pontos de apoio para que, em conjunto com músculos e tendões, possibilitem a locomoção.",
        alternativa2:
          "Músculos lisos ligam-se aos tendões e, quando os músculos relaxam, empurram os ossos em que estão ligados. Assim, os ossos puxam a musculatura para que haja o movimento e possibilite a locomoção.",
        alternativa3:
          "Músculos cardíacos ligam-se aos ossos por tendões e, quando os músculos se contraem, empurram os ossos em que estão ligados. Assim, os músculos atuam como pontos de apoio para que os ossos realizem, em totalidade, o processo da locomoção.",
        alternativa4:
          "Músculos variados ligam-se aos ossos curtos por vasos sanguíneos e, quando os músculos se contraem, puxam os ossos em que estão ligados. Assim, os ossos atuam como pontos de apoio para que, a musculatura involuntária possibilite a locomoção.",
        alternativaCorreta: "1",
        feedBackImagem: "SEM",
        feedBackLegendaImagem: "SEM",
        feedBackTexto:
          "É sabido que os ossos têm função na locomoção humana. Contudo, por si só, apesar de apresentar estruturas articulares, os ossos não realizam sozinhos o movimento corporal. Músculos esqueléticos ligam-se aos ossos por tendões e, quando os músculos se contraem, puxam os ossos em que estão ligados. Assim, os ossos atuam como pontos de apoio para que, em conjunto com músculos e tendões, possibilitem a locomoção.",
      },
    ];
  }
}
