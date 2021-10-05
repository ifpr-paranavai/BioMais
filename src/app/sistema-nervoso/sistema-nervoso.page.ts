import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistema-nervoso',
  templateUrl: './sistema-nervoso.page.html',
  styleUrls: ['./sistema-nervoso.page.scss'],
})
export class SistemaNervosoPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  chamarTecido_nervoso(){
    this.router.navigate(['tecido-nervoso']);
  }

  chamarNer_central(){
    this.router.navigate(['nervoso-central'])
  }

  chamarNer_periferico(){
    this.router.navigate(['nervoso-periferico'])
  }

}
