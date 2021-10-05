import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nervoso-periferico',
  templateUrl: './nervoso-periferico.page.html',
  styleUrls: ['./nervoso-periferico.page.scss'],
})
export class NervosoPerifericoPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false,titulo:"SISTEMA NERVOSO",titulo2:"PERIFÉFICO",imagem:"assets/imagensCorpo/teoria10ner-min.png",referenciaImagem:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a>  Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto:"O sistema nervoso periférico é formado por nervos e gânglios nervosos. Os <strong>nervos</strong> são fios finos e esbranquiçados formados pela união de várias neurofibras que partem do encéfalo e da medula espinhal e se ramificam, atingindo todas as partes do corpo. Os <strong>gânglios</strong> são pequenas dilatações formadas por corpos celulares de neurônios, cujos prolongamentos formam os nervos [1] [2].<br><br>Os nervos podem ser considerados <strong>cranianos</strong> quando ligados ao encéfalo (12 pares), ou <strong>raquidianos</strong>, quando ligados à medula (31 pares). Os nervos estão geralmente agrupados em feixes de neorofibras, envolvidos por tecido conjuntivo fibroso, atingindo todas as partes do corpo [1].",imagem2:"assets/imagensCorpo/teoria11ner-min.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"Os nervos podem ser classificados de acordo com o tipo de neurônios que apresentam, podendo ser: <strong>sensoriais</strong>, <strong>motores</strong> ou <strong>mistos</strong> (ambos os tipos) [2]."},
      { expanded: false,titulo:"SNP SOMÁTICO",titulo2:"E AUTÔNOMO",imagem:"",referenciaImagem:"",texto:"O Sistema Nervoso Periférico (SNP) pode ser dividido funcionalmente em somático ou autônomo.<br><br>O <strong>SNP somático controla</strong> as ações voluntárias que resultam da contração de músculos estriados esqueléticos. Assim, sua função consiste em conduzir ao SNC estímulos vindos dos ambientes corpóreo e externo e levar aos músculos estriados esqueléticos impulsos nervosos vindos do SNC [2].<br><br>No SNP somático, os corpos celulares dos neurônios dos <strong>nervos motores</strong> localizam-se dentro do SNC (encéfalo ou medula espinhal) e os axônios vão diretamente até os músculos, sendo chamados de eferentes. Já nos <strong>nervos sensoriais</strong>, os corpos celulares situam-se em gânglios próximos à medula, e suas fibras levam impulsos do corpo até o SNC, sendo chamados de aferentes [2].<br><br>O SNP <strong>autônomo</strong> (SNPA) controla as ações involuntárias que resultam da contração de músculos lisos e cardíaco. Assim, sua função consiste em regular o ambiente interno do corpo, controlando a atividade do sistema digestório, cardiovascular, respiratório, urinário e endócrino [2].<br><br>No SNP autônomo, as vias nervosas podem ser de dois tipos: <strong>pré-ganglionar</strong> e <strong>pós-ganglionar</strong>. No primeiro, os corpos celulares dos neurônios estão localizados no SNC e seus axônios vão até um gânglio, onde o impulso é transmitido a outros neurônios (pós-ganglionar), em que os corpos celulares estão localizados no interior do gânglio e seus axônios levam o estímulo até um órgão (músculo liso/cardíaco ou glândula [2]. <br><br>O SNPA, ainda, é dividido em dois ramos: <strong>SNPA simpático</strong> e <strong>SNPA parassimpático</strong>.<br><br>O <strong>SNPA simpático</strong> é constituído por nervos raquidianos que partem da região torácica e lombar, com gânglios próximos da medula. De modo geral, estimula ações que mobilizam energia, geralmente liberando adrenalina, permitindo o organismo responder a situações de estresse, como por exemplo: acelerar os batimentos cardíacos, aumentar a pressão arterial, aumentar a concentração de açúcar no sangue e ativar o metabolismo geral do corpo [2].",imagem2:"assets/imagensCorpo/teoria12ner-min.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a>aqui.</a>",texto2:"O <strong>SNPA parassimpático</strong>, é constituído por nervos cranianos que partem do encéfalo e nervos raquidianos que partem da região sacral, sendo que os gânglios são mais próximos do órgão controlado. De modo geral, estimula principalmente atividades relaxantes e digestórias, geralmente liberando acetilcolina, como a redução do ritmo cardíaco e da pressão sanguínea, aumento das secreções estomacais e intestinais, etc. [2].",imagem3:"assets/imagensCorpo/teoria13ner-min.png",refernciaImagem3:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>"},
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