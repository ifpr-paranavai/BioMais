import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respiratorio',
  templateUrl: './respiratorio.page.html',
  styleUrls: ['./respiratorio.page.scss'],
})
export class RespiratorioPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false,titulo:"RESUMO",imagem:"", referenciaImagem:"",texto:"O Sistema Respiratório é responsável pelos processos de trocas gasosas entre o ar atmosférico e o sangue, fornecendo oxigênio proveniente da atmosfera e retirando gás carbônico produzido pelas células do corpo. É composto pelo nariz, cavidades nasais, boca, faringe, laringe, traqueia, brônquios, bronquíolos e alvéolos. Os brônquios, bronquíolos e alvéolos constituem os pulmões [1]."},
      { expanded: false,titulo:"NARIZ E",titulo2:"CAVIDADES NASAIS",imagem:"",referenciaImagem:"",texto:"O <strong>nariz</strong> é um órgão especializado do sistema respiratório, formado por ossos nasais e cartilagens, que apresenta uma parte externa visível e outra parte interna (intracraniana) chamada <strong>cavidade nasal.</strong> Na parte inferior do nariz encontram-se duas aberturas denominadas <strong>narinas</strong>, que estão divididas por uma estrutura cartilaginosa denominada <strong>septo nasal</strong>, dividindo a cavidade nasal nos lados direito e esquerdo. [1],[4].<br><br>Na porção anterior, as cavidades nasais (direita e esquerda) se comunicam com o nariz, e, posteriormente, se comunicam com a faringe. A parte anterior da cavidade nasal, no interior das narinas, é chamado <strong>vestíbulo nasal</strong>, região onde há pelos grossos que atuam como filtros, sendo o primeiro local por onde o ar passa quando é inspirado [4].<br><br>Adiante, as paredes laterais das cavidades nasais possuem projeções denominadas <strong>conchas</strong> nasais (superior, média e inferior), que produzem quatro passagens para o ar, chamadas <strong>meatos</strong> (superior, médio e inferior). Na respiração correta, o ar entre pelas narinas, circula pelas conchas e meatos das cavidades nasais e chega à faringe por meio de aberturas posteriores denominadas <strong>cóanos</strong> [2],[4].",imagem2:"assets/imagensCorpo/teoriares1.png",referenciaImagem2:"Imagem: Adaptada de Rage against, <a href=https://creativecommons.org/publicdomain/zero/1.0/deed.en>Creative Commons - CC0 1.0, Domínio Público</a>, via Wikimedia Commons. Disponível <a href=https://commons.wikimedia.org/wiki/File:Nas_i_cavitats_nasals.jpg>aqui</a>",texto2:"As cavidades nasais também se comunicam (por meio de ductos) com os chamados <strong>seios paranasais</strong>, que são divertículos (cavidades menores) que adentram os ossos do crânio, produzindo muco, oferecendo proteção térmica e mecânica às orbitas nasal e cranial, servindo como câmaras de ressonância para um som ao falar ou cantar e aumentando as áreas para inserção muscular [2],[4].",imagem3:"assets/imagensCorpo/teoriares2.png",referenciaImagem3:"Imagem: Adaptada de Patrick J. Lynch e M. Komorniczal, <a href=https://creativecommons.org/licenses/by-sa/3.0/deed.en>Creative Commons BY-SA 3.0</a>, via Wikimedia Commons. Disponível <a href=https://commons.wikimedia.org/wiki/File:Senos_paranasales.jpg>aqui.</a>",texto3:"O teto da cavidade nasal contém células sensoriais responsáveis pelo sentido do <strong>olfato.</strong> Além disso, as células que revestem e protegem as cavidades nasais produzem <strong>muco</strong>, que umedece as vias respiratórias e funcionam como um filtro, retendo partículas e microrganismos presentes no ar que inalamos. Os cílios movem o muco e as partículas retidas em direção à faringe, onde podem ser engolidas ou cuspidas, removendo assim as partículas do sistema respiratório. [1],[4]."},
      { expanded: false,titulo:"FARINGE",imagem:"",referenciaImagem:"",texto:"A faringe é um órgão tubular musculomembranoso que integra o sistema digestório e o sistema respiratório, pois atua como uma passagem para o ar e alimentos. Além disso, fornece uma câmara de ressonância para os sons da fala e abriga as tonsilas, que participam das reações imunológicas contra invasores [3],[4].<br><br>A faringe pode ser dividida em três partes anatômicas: nasal, oral e laríngea. A nasal é chamada de <strong>nasofaringe</strong>, encontra-se na parte posterior à cavidade nasal, na parte superior da garganta, tendo função exclusivamente respiratória. A porção oral, é chamada <strong>orofaringe</strong>, estende-se pela parte posterior à cavidade oral. A porção laríngea, é chamada <strong>hipofaringe</strong> ou <strong>laringofaringe</strong>, encontra-se na parte inferior da garganta e se comunica com o esôfago (tubo digestivo) e com a laringe. A orofaringe e a hipofaringe exercem tanto função respiratória como digestória, por compartilharem passagem comum para o ar e alimento [4].",imagem2:"assets/imagensCorpo/teoriasd5.png",referenciaImagem2:"Imagem: Adaptada de Patrick J. Lynch, ilustrador médico, <a href=https://creativecommons.org/licenses/by/2.5/>Creative Commons BY 2.5</a>, via Wikimedia Commons. Disponível <a href=https://commons.wikimedia.org/wiki/File:Head_lateral_mouth_anatomy.jpg>aqui.</a>"},
      { expanded: false,titulo:"LARINGE",imagem:"",referenciaImagem:"",texto:"A laringe é uma região dilatada de conexão entre a hipofaringe e a traqueia. É constituída por peças cartilaginosas que se movem por ação dos músculos e fecham a passagem de ar. Uma das cartilagens da laringe é a cartilagem tireóidea, popularmente conhecida como pomo de Adão, que forma uma saliência na parte frontal do pescoço, mais desenvolvida em homens do que em mulheres [1],[4].<br><br>Na entrada da laringe, chamada de <strong>glote</strong>, há uma estrutura de cartilagem denominada <strong>epiglote</strong>, que se mantem aberta durante a passagem de ar, que vem da faringe, passa pela laringe e é direcionado à traqueia. Quando engolimos, essa estrutura fecha a entrada da laringe, o que impede o alimento ou líquido ingerido de entrar nas vias respiratórias e causar engasgamento [1].",imagem2:"assets/imagensCorpo/teoriares3.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"A combinação da laringe, boca, língua e nariz, permite articularmos palavras e produzir diversos tipos de sons. Internamente à laringe, encontram-se as principais estruturas envolvidas na produção de voz: as <strong>pregas vocais</strong>, anteriormente chamadas cordas vocais [1].<br><br>A túnica mucosa da laringe forma dois pares de pregas: um par superior chamado de <strong>pregas vestibulares</strong> (pregas vocais falsas) e um par inferior chamado de <strong>pregas vocais</strong> (pregas vocais verdadeiras). O espaço que se abre e fecha entre as pregas vocais é conhecido como <strong>rima da glote.</strong> [4]",imagem3:"assets/imagensCorpo/teoriares4.png",referenciaImagem3:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto3:"Quando a musculatura do interior da laringe se contrai, move as cartilagens que tencionam os ligamentos elásticos, estreitando a rima da glote. Contrair e relaxar os músculos varia a <strong>tensão</strong> das pregas vocais. O ar que passa pela laringe vibra as pregas e produz som (<strong>fonação</strong>), de modo que a variação do som está relacionada com a tensão nas pregas vocais (quanto maior a tensão, mais alto o som) [4].<br><br>O som se origina da vibração das pregas vocais, mas outras estruturas são necessárias para a conversão do som em fala reconhecível. A faringe, a boca, a cavidade nasal e os seios paranasais atuam como câmaras de ressonância que dão à voz a sua qualidade humana e individual [4]."},
      { expanded: false,titulo:"TRAQUEIA,",titulo2:"BRÔNQUIOS E BRONQUÍOLOS",imagem:"",referenciaImagem:"",texto:"A <strong>traqueia<strong> é uma via tubular para a passagem de ar que vem do trato respiratório superior (nariz, cavidades nasais, faringe e laringe) direcionando-o para o trato respiratório inferior (parte inferior da traqueia, brônquios, bronquíolos, alvéolos e pulmões). A traqueia possui aproximadamente 12cm de comprimento e 2,5 cm de diâmetro, com paredes reforçadas por anéis cartilaginosos cuja função é mantê-la sempre aberta [1]<br><br>A traqueia se divide em dois tubos (que também são reforçados por anéis de cartilagem), denominados <strong>brônquios</strong>, que conduzem ar aos pulmões direito e esquerdo. Nos pulmões, os brônquios ramificam-se formando tubos cada vez mais finos, chamados <strong>bronquíolos</strong>. Os bronquíolos se subdividem em <strong>ductos alveolares</strong>, cujas extremidades contém pequenas bolsas denominadas <strong>alvéolos pulmonares</strong> [1]",imagem2:"assets/imagensCorpo/teoriares5.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"A traqueia, os brônquios e os bronquíolos são revestidos internamente por um epitélio ciliado, rico em células produtoras de <strong>muco</strong>. Partículas e microrganismos que geralmente encontram-se no ar inspirado, aderem-se ao muco e são “varridos” em direção à garganta pelo movimento dos <strong>cílios</strong>. Ao chegar à faringe, o muco com partículas e microrganismos aderidos é engolido e direcionado ao tubo digestório, onde é digerido e eliminado do organismo [1]."},
      { expanded: false,titulo:"ALVEOLOS PULMONARES",imagem:"",refernciaImagem:"",texto:"Um <strong>alvéolo pulmonar</strong> é uma pequena evaginação em formato circular e de paredes finas, constituído por células achatadas. Estão localizados em torno dos <strong>ductos alveolares</strong>, que consistem em ramificações dos <strong>bronquíolos terminais</strong>. O conjunto de dois ou mais alvéolos que compartilham uma abertura comum é denominado <strong>saco alveolar</strong> [1],[4].<br><br>Cada pulmão é constituído por cerca de 150 milhões de alvéolos pulmonares. Os alvéolos são recobertos por <strong>capilares sanguíneos</strong>, nos quais o sangue circula muito perto do ar que penetra nos alvéolos. Essa proximidade entre os capilares pulmonares e as paredes dos alvéolos permite a difusão de gases entre o sangue e o ar [1].",imagem2:"assets/imagensCorpo/teoriares6.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"Ao chegar nos capilares sanguíneos alveolares, o sangue é rico em CO2 e pobre em O2 e, depois de passar pelos alvéolos, o sangue torna-se rico em O2 e pobre em CO2. Esse processo é denominado <strong>hematose</strong> e ocorre por difusão através das paredes alveolares e capilares, que juntos formam a <strong>membrana respiratória</strong> [1],[4]."},
      { expamded: false,titulo:"PULMÕES",imagem:"",referenciaImagem:"",texto:"Os <strong>pulmões</strong> humanos são dois órgãos esponjosos localizados no interior da caixa torácica. O pulmão direito é ligeiramente maior que o esquerdo e está dividido em duas partes (lóbulos), enquanto o esquerdo possui apenas dois lóbulos [1].<br><br>Cada pulmão recebe um brônquio principal e cada lóbulo recebe um brônquio lobar. Os brônquios lobares se ramificam em dez <storng>brônquios segmentares</strong> para cada pulmão, os quais se ramificam continuamente em tubos menores até transformarem-se em <strong>bronquíolos</strong>. Os bronquíolos também se ramificam e o menor dos tubos ramifica-se em tubos ainda menores denominados bronquíolos terminais, formando uma <strong>árvore bronquial</strong> nos pulmões, onde em suas extremidades encontram-se os alvéolos <strong>pulmonares</strong> [4].",imagem2:"assets/imagensCorpo/teoriares7.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"Cada pulmão é revestido por uma túnica serosa de camada dupla denominada <strong>pleura</strong>. A pleura interna está aderida à superfície pulmonar e é denominada <strong>pleura visceral</strong>. A pleura externa está aderida à parede da caixa torácica e é denominada <strong>pleura parietal</strong> [1],[4].<br><br>Entre a pleura visceral e parietal há um pequeno espaço, a <strong>cavidade pleural</strong>, que contém um pequeno volume de líquido lubrificante que é secretado pelas membranas, denominado <strong>líquido interpleural</strong>.A tensão superficial do líquido mantém as duas pleuras unidas, mas reduz o atrito, permitindo que elas deslizem uma sobre a outra durante os movimentos respiratórios [1],[4].",imagem3:"assets/imagensCorpo/teoriares8.png",referenciaImagem3:"Imagem: Adaptada de Gtaf, <a href=https://creativecommons.org/licenses/by-sa/4.0/deed.en>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. Disponível <a href=https://commons.wikimedia.org/wiki/File:2313_The_Lung_Pleurea-fr.jpg>aqui.</a>"},
      { expanded: false,titulo:"RESPIRAÇÃO",imagem:"",referenciaImagem:"",texto:"O processo de trocas gasosas no corpo é chamado <strong>respiração</strong> e tem três passos básicos:<br><br>- A <strong>ventilação pulmonar</strong>, que consiste na inspiração (inalação do ar) e expiração (exalação do ar) e envolve a troca de ar entre a atmosfera e os alvéolos pulmonares.<br><br>- A <strong>respiração externa</strong> (pulmonar), é a troca de gases entre os alvéolos pulmonares e o sangue nos capilares pulmonares através da membrana respiratória. O sangue dos capilares ganha oxigênio (O2) e perde gás carbônico (CO2).<br><br>- A <strong>respiração interna</strong> (tecidual), é a troca de gases entre o sangue nos capilares sistêmicos com as células teciduais. O sangue dos capilares perde oxigênio (O2) e ganha gás carbônico (CO2) [4].<br><br>Na espécie humana e outros mamíferos, a ventilação pulmonar depende principalmente da ação do <strong>diafragma</strong> e dos <strong>músculos intercostais</strong>.<br><br>Na <strong>inspiração</strong> (entrada de ar nos pulmões), o diafragma se contrai e desce, aumentando o diâmetro vertical da cavidade torácica. Da mesma forma, os músculos intercostais externos se contraem, elevando as costelas, o que proporciona um aumento no diâmetro anteroposterior e lateral da cavidade torácica. A contração do diafragma é responsável por 75% do ar que entra nos pulmões, enquanto a contração dos músculos intercostais externos é responsável por 25% [1],[4].<br><br>Na <strong>expiração</strong> (saída de ar dos pulmões), o processo é o oposto: diafragma relaxa e sobe, os músculos intercostais externos relaxam e abaixam as costelas, proporcionando uma diminuição do volume da caixa torácica e forçando o ar a sair dos pulmões.<br><br>Na expiração forçada, há participação dos músculos abdominais e dos músculos intercostais internos. A contração dos músculos abdominais move as costelas para baixo, comprime as vísceras abdominais e força o diafragma superiormente. A contração dos músculos intercostais internos puxa as costelas inferiormente [4].",imagem2:"assets/imagensCorpo/teoriares9.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"O número de movimentos respiratórios (inspiração e expiração) executados por minuto consistem na <strong>frequência respiratória</strong>. Em repouso, a frequência situa-se entre 12 a 15 vezes por minuto. Durante atividade física intensa, a frequência respiratória aumenta, pois as células demandam uma maior quantidade de gás oxigênio ao gastarem mais energia [1].<br><br>Na <strong>respiração externa</strong> (pulmonar), durante o processo de trocas gasosas entre os alvéolos e o sangue dos capilares pulmonares, o gás oxigênio difunde-se dos alvéolos para os capilares e penetra nas hemácias, onde se combina com a hemoglobina. Dessa forma combinada, o gás oxigênio viaja pelo corpo, chegando aos capilares de todos os tecidos. Ao mesmo tempo, o gás carbônico presente no sangue dos capilares pulmonares difunde-se para o ar alveolar e é eliminado na expiração [1].<br><br>Na <strong>respiração interna</strong> (tecidual), quando o sangue oxigenado chega aos tecidos por meio dos capilares sanguíneos sistêmicos, o gás oxigênio dissocia-se da hemoglobina e difunde-se para o liquido intersticial, fluido que banha as células. As células o absorvem e o utilizam no processo de respiração celular, que ocorre no interior das mitocôndrias. Ao mesmo tempo, as moléculas de gás carbônico originadas na respiração celular difundem-se para o líquido intersticial e são absorvidas pelos capilares. A maior parte do gás carbônico é transportado até os pulmões dissolvido no plasma na forma de íons bicarbonato (HCO3-), enquanto uma pequena parcela é transportada pelas hemácias [1].",imagem3:"assets/imagensCorpo/teoriares10.png",referenciaImagem3:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>"},
      { expanded: false,titulo:"REFERÊNCIAS",referenciaFim:"[1] AMABIS, J. M.; MARTHO, G. R. <strong>Biologia</strong>: Biologia dos organismos. 3ª ed. São Paulo: Moderna, 2010.<br><br>[2] SANTOS, G. P. <strong>Sistema Respiratório</strong>. Universidade Federal de Goiás. 2014. Disponível <a href=https://laan.jatai.ufg.br/n/72162-sistema-respiratorio>aqui</a>. Acesso em 02 jul. 2021.<br><br>[3] SANTOS, V. S. <strong>Faringe</strong>. In: Mundo Educação. [s.d.]. Disponível <a href=https://mundoeducacao.uol.com.br/biologia/faringe.htm>aqui</a>. Acesso em 22 mar. 2021.<br><br>[4] TORTORA, G. J.; DERRICKSON, B. <strong>Princípios de Anatomia e Fisiologia</strong>. Tradução Ana Cavalcanti C. Botelho... [et al.]. 14. ed. – Rio de Janeiro: Guanabara Koogan, 2016."}
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  visible = false;
  toggle() {
   this.visible = !this.visible;
  }
}
