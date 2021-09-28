import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecido-nervoso',
  templateUrl: './tecido-nervoso.page.html',
  styleUrls: ['./tecido-nervoso.page.scss'],
})
export class TecidoNervosoPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false,titulo:"TECIDO NERVOSO",imagem:"",referenciaImagem:"",texto:"O tecido nervoso forma os diversos componentes do sistema nervoso e é composto por dois tipos de células: os <strong>neurônios</strong> e os <strong>gliócitos</strong>.<br><br>Os <strong>neurônios</strong> são células especializadas na condução de impulsos nervosos. Apresentam uma parte mais volumosa chamada <strong>corpo celular</strong>, de onde partem inúmeros prolongamentos citoplasmáticos finos, chamados <strong>fibras nervosas</strong> ou <strong>neurofibras</strong> [1].<br><br>Um desses prolongamentos é o <strong>axônio</strong> (mais longo que os demais), que conduz impulsos nervosos para fora do corpo celular. Os prolongamentos mais curtos, os <strong>dendritos</strong>, conduzem impulsos nervosos em direção ao corpo celular [1].",imagem2:"assets/imagensCorpo/teoria1ner-min.png",referenciaImagem2:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto2:"Os neurônios podem ser classificados quanto à sua função em: <strong>sensitivos</strong> (sensoriais), quando conduzem impulsos nervosos de órgãos dos sentidos e de células sensoriais para o SNC; <strong>motores</strong>, quando conduzem impulsos do SNC para órgãos que efetuam a resposta (músculos, por exemplo); <strong>associativos</strong> (interneurônios), quando fazem conexão entre diversos tipos de neurônios (localizados no SNC) [1].<br><br>A maioria dos corpos celulares dos neurônios localiza-se no encéfalo e na medula espinhal. Os demais corpos celulares presentes fora do SNC ficam agrupados em pontos específicos de certos nervos, formando os <strong>gânglios nervosos</strong> [1].<br><br>As fibras nervosas estão geralmente agrupadas em feixes e, quando estão no SNC, são chamados de tratos nervosos, enquanto quando estão fora do SNC, estão envoltos por tecido conjuntivo e são chamados de <strong>nervos</strong> [1].<br><br>Outro tipo de célula do sistema nervoso são os <strong>gliócitos</strong>, cuja função é envolver, proteger e nutrir os neurônios. Essas células dão sustentação física ao sistema nervoso, mantendo os neurônios unidos, permitindo que estabeleçam conexões uns com os outros [1].<br><br>Os gliócitos podem ser de dois tipos: <strong>macróglias</strong>, que se originam da placa neural do embrião, paralelamente aos neurônios, dentre eles os astrócitos e os oligodentrócitos; e micróglias, que são células menores e originam-se do tecido hematopoiético [1].",imagem3:"assets/imagensCorpo/teoria2ner-min.png",referenciaImagem3:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto3:"Os <strong>astrócitos</strong> são de maior tamanho e apresentam grande número de prolongamentos citoplasmáticos. Esse tipo de célula estabelece uma ponte nutritiva entre o sangue e os neurônios, dão sustentação física ao tecido nervoso e participam da recuperação de lesões [1].<br><br>Os <strong>oligodendrócitos</strongs> são menores que os astrócitos e dotados de menos prolongamentos. Alguns prolongamentos se enrolam sobre as fibras nervosas do SNC, envolvendo-as com camadas de membrana plasmática, formando a bainha de mielina, que protege o neurônio ajudando-o a desempenhar suas funções. No sistema nervoso periférico, ainda há células similares (que passam a ser chamadas células de Schwann), que envolvem as fibras nervosas que compõem os nervos [1].<br><br>As <strong>micróglias</strong> são células pequenas, cuja função é fagocitar detritos e restos celulares presentes no tecido nervoso. São consideradas um tipo especializado de macrófago [1].",imagem4:"assets/imagensCorpo/teoria3ner-min.png",referenciaImagem4:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>",texto4:"As <strong>fibras nervosas</strong> podem ou não apresentar <strong>revestimento mielínico</strong> (bainha de mielina), que é um conjunto de camadas concêntricas de membrana plasmática de gliócitos, que envolve grande parte das fibras nervosas. A <strong>vantagem</strong> das fibras mielinizadas é que o impulso se propaga de forma muito mais rápida, pois tem característica saltatória, ao contrário das fibras não mielinizadas, em que a propagação é contínua [1].<br><br>Ao atingir a extremidade de um axônio, o impulso nervoso é transmitido a outra célula, geralmente outro neurônio ou células musculares. A proximidade entre um neurônio e a célula vizinha, por onde se dá a transmissão do impulso nervoso, é chamada <strong>sinapse nervosa</strong>, que pode ser elétrica (por meio de potenciais de ação diretamente entre as células) ou química (por meio de neurotransmissores) [1].",imagem5:"assets/imagensCorpo/teoria4ner-min.png",referenciaImagem5:"Imagem: Adaptada de Servier Medical Art, <a href=https://creativecommons.org/licenses/by/3.0/>(Creative Commons 3.0).</a> Disponível <a href=https://smart.servier.com/image-set-download/>aqui.</a>"},
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