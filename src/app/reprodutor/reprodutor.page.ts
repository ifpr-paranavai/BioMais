import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reprodutor',
  templateUrl: './reprodutor.page.html',
  styleUrls: ['./reprodutor.page.scss'],
})
export class ReprodutorPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  chamarRepro_feminino(){
    this.router.navigate(['sistema-reprodutor-feminino']);
  }
  chamarRepro_marculino(){
    this.router.navigate(['sistema-reprodutor-masculino']);
  }
  chamarFec_contr(){
    this.router.navigate(['fecundacao-contracepcao']);
  }
}
