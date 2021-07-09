import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router) {}

  chamardiGestorio(){
    this.router.navigate(['digestorio']);
  }
  chamarConf(){
    this.router.navigate(['configuracoes'])
  }
  chamarcirCulatorio(){
    this.router.navigate(['circulatorio'])
  }
  chamarRespiratorio(){
    this.router.navigate(['respiratorio'])
  }
  chamarUrinario(){
    this.router.navigate(['urinario'])
  }
  chamarReprodutor(){
    this.router.navigate(['reprodutor'])
  }

}