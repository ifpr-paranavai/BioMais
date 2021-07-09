import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrito-linfatico',
  templateUrl: './distrito-linfatico.page.html',
  styleUrls: ['./distrito-linfatico.page.scss'],
})
export class DistritoLinfaticoPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false,titulo:"DISTRITO LINFÁTICO",imagem:"assets/imagensCorpo/teoriasc10.png",referenciaImagem:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0)</a>.Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto:"O distrito linfático (anteriormente denominado sistema linfático) é composto por quatro componentes principais: a linfa, que é um fluido esbranquiçado de constituição semelhante ao sangue, diferindo deste por não conter hemácias; os vasos linfáticos, que transportam pelo corpo a linfa; os linfonodos, que são nódulos linfáticos presentes ao longo dos vasos e que atuam na filtragem da linfa; e os órgãos linfoides, que são locais de formação, amadurecimento e multiplicação de células de defesa (glóbulos brancos) [2].</p>"},
      { expanded: false,titulo:"LINFA E",titulo2:"VASOS LINFÁTICOS",imagem:"",referenciaImagem:"",texto:"A <strong>linfa</strong> consiste em um fluido esbranquiçado de constituição semelhante ao sangue, diferindo deste por não conter hemácias. Apresenta glóbulos brancos (leucócitos), dos quais 99% são linfócitos (no sangue, esse tipo de leucócito representa cerca de 50% do total de glóbulos brancos). Basicamente, a linfa é um líquido pobre em proteínas e rico em lipídios [2], [4]. </p>                                                                       Os <strong>vasos linfáticos</strong> estão presentes em praticamente todo o corpo. Os vasos mais finos têm calibre um pouco maior que os capilares sanguíneos, diferindo destes por terminar em fundo cego, ou seja, em uma extremidade fechada. Esses capilares linfáticos se situam entre as células dos tecidos, de onde retiram o excesso de líquido tissular (ou intersticial) que extravasou dos capilares sanguíneos para banhar as células nutrindo-as e oxigenando-as, reconduzindo este líquido à circulação. É válido dizer que a maior parte do líquido tissular é reabsorvido pelos próprios capilares sanguíneos [2]. </p>                                                                       Assim, o líquido tissular pode ter dois destinos: ser recolhido pelos capilares sanguíneos ou pelos capilares linfáticos. Quando o líquido intercelular é recolhido pelos capilares linfáticos, forma a linfa. Os capilares linfáticos confluem-se para vasos de calibre cada vez maior, desembocando nos ductos linfáticos, que possuem grande calibre e estão localizados na região torácica. Esses vasos confluem para veias de grande calibre do sistema sanguíneo, se juntando ao sangue, deixando de ser linfa e voltando a ser plasma [2], [4], [5]. A figura a seguir esquematiza essa relação entre o distrito linfático com o distrito sanguíneo. </p>",imagem2:"assets/imagensCorpo/teoriasc11.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0)</a>.Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>"},
      { expanded: false,titulo:"LINFONODOS",imagem:"assets/imagensCorpo/teoriasc12.png",referenciaImagem:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0)</a>.Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto:"Ao longo dos vasos linfáticos estão dispostos diversos linfonodos, ou nódulos linfáticos, que podem ser considerados um tipo de órgão linfóide secundário. Os linfonodos são estruturas de consistência esponjosa localizados em porções estratégicas do corpo, tais como: pescoço, axilas e virilha [2].</p>                                                                       A função dos linfonodos é de filtrar a linfa que vem das extremidades corporais, de modo que, ao passar pelos linfonodos, a linfa circula por canais onde há leucócitos, que identificam e destroem corpos estranhos e demais substâncias, possivelmente nocivos ao organismo. Ao identifica-los, os linfócitos se multiplicam na região afetada, que muitas vezes aumentam de tamanho, podendo ser palpáveis, constituindo o que chamamos de ínguas [2], [5].</p>"},
      { expanded: false,titulo:"ÓRGÃOS LINFÓIDES",imagem:"",referenciaImagem:"",texto:"Os órgãos linfoides são as principais estruturas do distrito linfático que participam da resposta imunitária no organismo. É nesses órgãos que ocorre a formação, a maturação e/ou a multiplicação dos leucócitos. Os principais “soldados” de defesa do organismo são os linfócitos, dos quais existem vários tipos, que podem ser classificados em linfócitos B ou linfócitos T [2] . </p>                                                                       Os órgãos imunitários podem ser divididos em dois grupos: órgãos linfoides primários e órgãos linfoides secundários. Os <strong>órgãos linfoides primários</strong> são os principais locais de formação e amadurecimento dos linfócitos, e são constituídos pela medula óssea e pelo timo. Os <strong>órgãos linfoides secundários</strong> são aqueles nos quais os linfócitos são capazes de se multiplicar, sendo constituídos pelos linfonodos, adenoides, tonsilas, placas de Peyer, apêndice vermiforme e baço [2] .</p>",imagem2:"assets/imagensCorpo/teoriasc13.png",referenciaImagem2:"Imagem: Adaptada de D. Ilyin , <a href=https://creativecommons.org/publicdomain/zero/1.0/deed.en>(Domínio público – CC0 1.0)</a>, via Wikimedia Commons. Disponível <a href=https://commons.wikimedia.org/wiki/File:Organs_of_the_Immune_System_by_AIDS.gov1-ru.svg>aqui.</a>"},
      { expanded: false,titulo:"REFERÊNCIAS ",referenciaFim:"[1] AMABIS, J. M.; MARTHO, G. R. Biologia: <strong>Biologia</strong> das células. 3ª ed. São Paulo: Moderna, 2010.<br><br>[2] AMABIS, J. M.; MARTHO, G. R. Biologia: Biologia dos organismos. 3ª ed. São Paulo: Moderna, 2010.<br><br>[3] LOURENÇO, R. <strong>Camadas do coração</strong>. 2021. Disponível <a href=https://www.kenhub.com/pt/library/anatomia/camadas-do-coracao>aqui</a>. Acesso em 6 abr. 2021.<br><br>[4] MAGALHÃES, L. Linfa. In: Toda Matéria. [s.d]. Disponível <a href=https://www.todamateria.com.br/linfa/>aqui</a>. Acesso em 6 abr. 2021.<br><br>[5] MENDONÇA, V. L. <strong>Biologia</strong>: o ser humano, genética, evolução. 2ª ed. São Paulo: Editora AJS, 2013.<br><br>[6] SANTOS, V. S. <strong>Tipos de circulação sanguínea</strong>. In: Brasil Escola. [s.d]. Disponível <a href=https://brasilescola.uol.com.br/biologia/tipos-circulacao-sanguinea.htm>aqui.</a> Acesso em: 06 abr. 2021.<br><br>[7] USP. <strong>Sistema de condução</strong>. Capacitação parada cardiorrespiratória adulto. [s.d]. Disponível <a href=http://www2.eerp.usp.br/Nepien/PCR/car_conducao.html>aqui</a>. Acesso em: 06 abr. 2021."}
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