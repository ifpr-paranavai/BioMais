import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nervoso-central',
  templateUrl: './nervoso-central.page.html',
  styleUrls: ['./nervoso-central.page.scss'],
})
export class NervosoCentralPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false,titulo:"SISTEMA NERVOSO",titulo2:"CENTRAL",imagem:"assets/imagensCorpo/teoria5ner-min.png",referenciaImagem:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto:"O Sistema Nervoso Central (SNC) é composto pelo <strong>encéfalo</strong> (localizado no interior da caixa craniana) e <strong>medula espinhal</strong> (medula raquidiana, envolvida pelas vértebras da coluna), cujas funções gerais consistem no processamento e integração de informações [2]."},
      { expanded: false,titulo:"ENCÉFALO",imagem:"",referenciaImagem:"",texto:"O <strong>encéfalo</strong> pode ser dividido em: telencéfalo, diencéfalo, cerebelo e tronco encefálico.",imagem2:"assets/imagensCorpo/teoria6ner-min.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"O que chamamos de <strong>cérebro</strong>, é constituído pelo <strong>telencéfalo</strong> e <strong>diencéfalo</strong>. O telencéfalo consiste em 85% a 90% da massa encefálica do crânio, possui uma superfície marcada por sulcos e depressões e é dividido em <strong>dois hemisférios</strong> (direito e esquerdo). A conexão entre os dois hemisférios é feita principalmente pelo <strong>corpo caloso</strong>, formado por fibras nervosas [2], [3].<br><br>Em uma visão em corte do cérebro, é possível distinguir duas substâncias: uma mais clara, a <strong>substância branca</strong>, formada por neurofibras revestidas, e outra mais escura, a <strong>substância cinzenta</strong>, formada pelos corpos celulares dos neurônios. (Assim como no cérebro, a medula espinhal também é formada por substância cinzenta e branca) [1], [2], [3].",imagem3:"assets/imagensCorpo/teoria7ner-min.png",referenciaImagem3:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto3:"A <strong>substância cinzenta</strong>, mais externa, é formada por corpos celulares de neurônios, chamada <strong>córtex cerebral</strong>, especializada em diversas funções (pensamento, movimento, sentidos, equilíbrio, respiração, etc.). A <strong>substância branca</strong>, mais interna, é constituída por neurofibras e levam informações ao córtex e trazem dele instruções para o funcionamento corporal [2], [3].<br><br>O tálamo e hipotálamo fazem parte da região chamada <strong>diencéfalo</strong>. O tálamo atua retransmitindo informações sensoriais para o cérebro e o hipotálamo está envolvido em ações como o controle da temperatura corporal, balanço hídrico e produção e liberação de alguns hormônios [3].<br><br>O <strong>cerebelo</strong> é a parte do encéfalo responsável pela coordenação motora e percepção da localização do espaço e postura (equilíbrio) [3].<br><br>O <strong>tronco encefálico</strong> é a região de comunicação entre o cérebro e a medula, e é formado pela ponte e bulbo (medula oblonga). Na região da ponte <strong>ocorre</strong> o cruzamento das vias motoras (hemisfério direito controla lado esquerdo do corpo e vice-versa). O <strong>bulbo</strong> é responsável pelo controle de funções vitais, como os movimentos respiratórios e batimentos cardíacos [2] [3]."},
      { expanded: false,titulo:"MEDULA ESPINHAL",imagem:"",referenciaImagem:"",texto:"A <strong>medula espinhal</strong> é um cordão cilíndrico ligado ao bulbo (medula oblonga) e que se aloja na coluna vertebral, no canal formado pelas perfurações das vértebras. É formada por células nervosas que conduzem informações colhidas nas diversas partes do corpo ao encéfalo e vice-versa [2], [3].",imagem2:"assets/imagensCorpo/teoria8ner-min.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"Alguns movimentos como os <strong>atos reflexos</trong> são controlados pela medula. Por exemplo, é essa região que coordena a resposta de retirar rapidamente a mão ao tocar um objeto muito quente, evitando uma queimadura, antes mesmo que a informação chegue ao cérebro [2], [3].<br><br>Nesse caso, quando há a necessidade de uma resposta rápida (<strong>resposta reflexa medular</strong>), por meio das terminações nervosas, o <strong>neurônio sensitivo</strong> (pele) responde ao calor, transmitindo impulsos nervosos a um <strong>neurônio associativo</strong>, localizado na medula espinhal. O neurônio associativo retransmite a informação ao <strong>neurônio motor</strong> (músculo), que estimula a musculatura a reagir afastando a região do corpo do objeto quente, conforme pode ser visualizado na figura abaixo [1].",imagem3:"assets/imagensCorpo/teoria9ner-min.png",referenciaImagem3:"Imagem: Adaptada de Helixitta, <a href=https://creativecommons.org/licenses/by-sa/4.0/deed.en>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons, disponível <a href=https://commons.wikimedia.org/wiki/File:Afferent_and_efferent_neurons_en.svg>aqui.</a>",texto3:"Em seguida, o neurônio associativo também estimula neurônios a conduzirem impulsos ao encéfalo, permitindo a tomada de consciência sobre o ocorrido [1]."},
      { expanded: false,titulo:"REFERÊNCIAS",referenciaFim:"[1] AMABIS, J. M.; MARTHO, G. R. <strong>Biologia das células</strong>. Volume 1. 3. Ed. São Paulo: Moderna, 2010.<br><br>[2] AMABIS, J. M. MARTHO, G. R. <strong>Biologia dos organismos</strong>. Volume 2. 3. Ed. São Paulo: Moderna, 2010.<br><br>[3] MENDONÇA, V. L. <strong>Biologia</strong>: o ser humano, genética e evolução. Volume 3. 2. Ed. São Paulo: Editora AJS, 2013."}
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