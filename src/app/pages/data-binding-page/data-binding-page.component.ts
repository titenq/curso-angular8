import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-page',
  templateUrl: './data-binding-page.component.html',
  styleUrls: ['./data-binding-page.component.css']
})
export class DataBindingPageComponent implements OnInit {
  title = 'Hello World';
  nomeTabela: string = 'Meses'
  meses: string[] = ['Janeiro', 'Fevereiro', 'Março']
  nome: string = 'João'

  constructor() { }

  ngOnInit() {
  }

  soma(num1: number, num2: number): number {
    return num1 + num2
  }

}
