import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circulatorio',
  templateUrl: './circulatorio.page.html',
  styleUrls: ['./circulatorio.page.scss'],
})
export class CirculatorioPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  chamarDis_sang(){
    this.router.navigate(['distrito-sanguineo']);
  }

  chamarDis_linf(){
    this.router.navigate(['distrito-linfatico'])
  }

  chamarDef_Corp(){
    this.router.navigate(['defesas-corpo'])
  }
}
