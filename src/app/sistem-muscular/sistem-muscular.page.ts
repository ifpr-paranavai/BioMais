import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistem-muscular',
  templateUrl: './sistem-muscular.page.html',
  styleUrls: ['./sistem-muscular.page.scss'],
})
export class SistemMuscularPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false,titulo:"RESUMO",imagem:"",referenciaImagem:"",texto:"O sistema muscular humano é composto por órgãos denominados músculos, constituídos basicamente por tecido muscular, cujas células são especializadas em se contrair. De modo geral, o sistema muscular contribui para a homeostase do organismo estabilizando a posição do corpo, produzindo movimentos, regulando o volume orgânico, movimentando substâncias dentro do corpo e gerando calor [2] [4]."},
      { expanded: false,titulo:"OS MÚSCULOS DO ",titulo2:"CORPO HUMANO",imagem:"",referenciaImagem:"",texto:"Os músculos constituem cerca de 40% da massa corporal do corpo humano, havendo cerca de 700 músculos que podem ser classificados em três tipos: <strong>músculo estriado esquelético, músculo estriado cardíaco e músculo não estriado (liso) [1] [4].</strong><br><br>O <strong>músculo estriado esquelético</strong> constitui a maior parte da musculatura do corpo e se caracteriza por estar associada aos ossos permitindo os movimentos e a postura corporal. O termo estriado deve-se ao fato de conter fibras que apresentam estrias transversais, dispostas ao longo de seu comprimento. Esse tipo de musculatura pode se contrair voluntariamente, ou seja, é possível contraí-los quando queremos [1] [2].<br><br>O <strong>músculo estriado cardíaco</strong> é encontrado apenas no coração, sendo responsável pelos batimentos cardíacos. As fibras musculares cardíacas assemelham-se às fibras esqueléticas por apresentarem estrias transversais, contudo, esse tipo de músculo se diferencia, sobretudo, por apresentar contração involuntária, ou seja, independentemente da nossa vontade [1].<br><br>O <strong>músculo liso</strong> é encontrado em órgãos viscerais, como estômago, intestino e o útero, por exemplo. Esse tipo de musculatura não apresenta estrias transversais e seus movimentos são involuntários, como, por exemplo, os movimentos peristálticos [1].<br><br>Considera-se como integrantes do <strong>sistema muscular humano</strong>, o conjunto de músculos que podem ser <strong>controlados voluntariamente</strong>. Esse tipo de musculatura (estriada esquelética) varia em formas e tamanhos, como, por exemplo, os músculos que movimentam os olhos são pequenos e delgados, enquanto os músculos da região glútea são grandes e vigorosos, adequando-se à sua função de suportar a massa corporal e participar da locomoção [2], [4].<br><br>A figura abaixo ilustra alguns dos principais músculos do corpo humano, que podem ser identificados superficialmente.",imagem2:"assets/imagensCorpo/teoria1mus.png",referenciaImagem2:"Imagem: Adaptada de OpenStax, Tomáš Kebert e umimeto.org, <a href=https://creativecommons.org/licenses/by-sa/4.0/deed.en>Creative Commons BY-SA 4.0</a>, via Wikimedia Commons. Disponível <a href=https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg>aqui</a>.",texto3:"Os músculos estriados esqueléticos geralmente são afilados nas extremidades e se prendem aos ossos ou a outros músculos por meio de <strong>tendões</strong>, que consistem em cordões fibrosos de tecido conjuntivo, sobre os quais os músculos exercem força, tracionando ossos e outras estruturas, como a pele [2] [4]."},
      { expanded: false,titulo:"ESTRUTURA DO MÚSCULO",titulo2:"ESTRIADO ESQUELÉTICO",imagem:"",referenciaImagem:"",texto:"O músculo estriado esquelético é constituído por feixes de fibras musculares. A <strong>fibra muscular</strong> ou <strong>miócito</strong> corresponde à célula muscular, que é alongada, possui numerosos núcleos e mitocôndrias, bem como grande quantidade de filamentos, as <strong>miofibrilas</strong>, que percorrem toda a fibra muscular longitudinalmente, onde estão arranjadas as proteínas responsáveis pela contração muscular: a <strong>actina</strong> e <strong>miosina</strong> [2], [3].<br><br>As miofibrilas apresentam um padrão de faixas (estrias) transversais, devido ao arranjo de filamentos das proteínas, que se repete constituindo as unidades contráteis básicas de um músculo estriado, denominadas <strong>sarcômeros</strong> [2] [3].",imagem2:"assets/imagensCorpo/teoria2mus.png",referenciaImagem2:"Imagem: Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0)</a>. ).  Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto3:"Três camadas de tecido conjuntivo se estendem para proteger o músculo estriado esquelético, são elas:<br><br><strong>- Epimísio:</strong> é a camada externa que envolve todo o músculo. Consiste em tecido conjuntivo denso não modelado [4].<br><br><strong>- Perimísio:</strong> camada de tecido conjuntivo denso não modelado quecircunda grupos de 10 a 100 (ou mais) fibras musculares, separando-as em feixes chamados de fascículos [4].<br><br><strong>- Endomísio:</strong> penetra no interior de cada fascículo e separa as fibras musculares individualmente. O endomísio consiste principalmente de fibras reticulares [4]."},
      { expanded: false,titulo:"REFERÊNCIAS",referenciaFim:""}
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
