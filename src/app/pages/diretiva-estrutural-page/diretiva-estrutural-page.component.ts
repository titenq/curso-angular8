import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-estrutural-page',
  templateUrl: './diretiva-estrutural-page.component.html',
  styleUrls: ['./diretiva-estrutural-page.component.css']
})
export class DiretivaEstruturalPageComponent implements OnInit {
  exibirDiv: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  OnExibirDiv() {
    this.exibirDiv = this.exibirDiv === false
  }
}
